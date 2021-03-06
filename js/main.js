/* main.js
 * Eli Shayer
 * ----------
 * The main javascript file for my personal website.
 * Uses the Handlebars templating library to generate html
 */

(function(window, document, undefined) {
	// ------------------------------------------ DATA AND TEMPLATES
	sections = {
		intro:  {
			template: [
				'<div class="col-sm-4 col-xs-6 col-sm-offset-0 col-xs-offset-3">',
					'<img src="{{ image.src }}" alt="{{ image.alt }}" id="{{ image.id }}"/>',
				'</div>',
				'<div class="col-sm-8 col-xs-12">',
					'<h1>{{ content.title }}</h1>',
					'<h3>{{ content.subtitle }}</h3>',
					'{{#each content.text}}',
					'<p>{{ this }}</p>',
					'{{/each}}',
					'<ul id="intro-buttons">',
						'{{#each content.buttons}}',
						'<li><a class="btn btn-{{ btn }}" href="{{ href }}" target="_new">{{ text }} <i class="fa fa-{{ icon }}"></i></a></li>',
						'{{/each}}',
					'</ul>',
				'</div>',
			].join(''),
			data    : {
				image: { src: './images/eli-shayer-square.jpg', alt: 'Eli Shayer', id : 'portrait' },
				content: {
					title   : 'Eli Shayer',
					subtitle: 'Stanford University Class of 2018',
					text    : [
						'Hi! I am a junior at Stanford University from Anchorage, Alaska studying statistics and computer science in the Mathematical and Computational Science program. I am also pursuing a minor in history.',
						'My interests are most prominently machine learning and web development. I have primarily applied these skills in the realm of sports analytics. You can learn more about me, projects I have worked on, and skills I possess in the tabs below.',
					],
					buttons : [
						{ text: 'Download my resume', icon: 'download', btn: 'primary', href: './docs/EliShayer.Resume.pdf' },
						{ text: 'Email me', icon: 'envelope', btn: 'success', href: 'mailto:contact@elishayer.com' },
					]
				}
			}
		},
		tabs: {
			template: [
				'<div class="col-xs-12">',
					'<ul class="nav nav-tabs nav-justified">',
						'{{#each this}}',
						'<li role="presentation" id="{{ name }}-tab">',
							'<a href="#" tab="{{ name }}">{{ name }} <i class="fa fa-{{icon}}"></i></a>',
						'</li>',
						'{{/each}}',
					'<ul>',
				'</div>'
			].join(''),
			data    : [
				{ name: 'about', icon: 'info-circle' },
				{ name: 'jobs', icon: 'briefcase' },
				{ name: 'projects', icon: 'tasks' },
				{ name: 'skills', icon: 'laptop' },
			]
		},
		about: {
			// data and template to be appended with the data from subtabs
			data: {
				overview: 'Please see the tabs below to learn more about me.',
				subtabs: []
			},
			template: [
				'<hr class="tab-hr"/>',
				'<p class="about-overview">{{ overview }}</p>',
				'<div class="col-xs-12">',
					'<ul class="nav nav-tabs nav-justified">',
						'{{#each subtabs}}',
						'<li role="presentation" id="{{ name }}-subtab">',
							'<a href="#" subtab="{{ name }}">{{ name }} <i class="fa fa-{{ icon }}"></i></a>',
						'</li>',
						'{{/each}}',
					'<ul>',
				'</div>',
			].join(''),
			subtabs: [
				{
					name: 'schools',
					icon: 'graduation-cap',
					template: [
						'<div id="schools">',
							'{{#each this}}',
							'<div class="col-xs-12 col-md-6">',
								'<h3>{{ name }}</h3>',
								'<h4>Class of {{ grad }}{{#if note}} &ndash; {{note}}{{/if}}</h4>',
								'<div class="row">',
									'<div class="col-xs-6 col-sm-5 classes">',
										'<p class="header">Classes</p>',
										'<ul class="no-pad-ul">',
											'{{#each classes}}',
											'<li><a href="#" data-toggle="tooltip" c-title="{{ title }}" c-time="{{ time }}">{{ name }} <i class="fa fa-caret-right"></i></a></li>',
											'{{/each}}',
										'</ul>',
									'</div>',
									'<div class="col-xs-6 col-sm-7 activities">',
										'<p class="header">Activities</p>',
										'<ul class="no-pad-ul">',
											'{{#each activities}}',
											'<li>',
												'{{#if details.length}}',
													'<a href="#" data-toggle="tooltip" details="{{ details }}"><i class="fa fa-caret-left"></i> {{ name }}</a>',
												'{{else}}',
													'<i class="fa fa-caret-left spacer"></i> {{ name }}',
												'{{/if}}',
											'</li>',
											'{{/each}}',
										'</ul>',
									'</div>',
								'</div>',
							'</div>',
							'{{/each}}',
						'</div>',
					].join(''),
					data: [
						{
							name: 'Stanford University',
							grad: '2018',
							classes: [
								{ name: 'STATS 50', title: 'Mathematics of Sports', time: 'Sophomore Spring' },
								{ name: 'STATS 116', title: 'Theory of Probability', time: 'Sophomore Autumn' },
								{ name: 'STATS 200', title: 'Introduction to Statistical Inference ', time: 'Junior Autumn' },
								{ name: 'STATS 202', title: 'Data Mining and Analysis ', time: 'Junior Autumn' },
								{ name: 'STATS 217', title: 'Introduction to Stochastic Processes ', time: 'Sophomore Winter' },
								{ name: 'CS 42', title: 'Callback Me Maybe: Contemporary JavaScript', time: 'Freshman Spring' },
								{ name: 'CS 106A', title: 'Programming Methodology', time: 'Freshman Autumn' },
								{ name: 'CS 106X', title: 'Programming Abstractions (Accelerated)', time: 'Freshman Winter' },
								{ name: 'CS 107', title: 'Computer Organization and Systems', time: 'Freshman Spring' },
								{ name: 'CS 103', title: 'Mathematical Foundations of Computing', time: 'Sophomore Autumn' },
								{ name: 'CS 110', title: 'Principles of Computer Systems', time: 'Sophomore Spring' },
								{ name: 'CS 145', title: 'Introduction to Databases', time: 'Junior Autumn' },
								{ name: 'CS 161', title: 'Design and Analysis of Algorithms', time: 'Sophomore Winter' },
								{ name: 'CS 227B', title: 'General Game Playing', time: 'Sophomore Winter' },
								{ name: 'CS 229', title: 'Machine Learning', time: 'Sophomore Spring' },
								{ name: 'MATH 51', title: 'Linear Algebra and Differential Calculus of Several Variables', time: 'Freshman Autumn' },
								{ name: 'MATH 52', title: 'Integral Calculus of Several Variables', time: 'Freshman Winter' },
								{ name: 'MATH 53', title: 'Ordinary Differential Equations with Linear Algebra', time: 'Freshman Spring' },
								{ name: 'MATH 113', title: 'Linear Algebra', time: 'Sophomore Spring' },
								{ name: 'MS&E 211', title: 'Linear and Nonlinear Optimization', time: 'Junior Autumn' },
								{ name: 'PHYSICS 41', title: 'Mechanics', time: 'Freshman Winter' },
								{ name: 'THINK 11', title: 'Bioethical Challenges of New Technology', time: 'Freshman Winter' },
								{ name: 'PWR 1CK', title: 'Investigation the News: Journalism, Technology, & the Future', time: 'Freshman Autumn' },
								{ name: 'PWR 2AH', title: 'Ethnic Narratives and the Rhetoric of American Identity', time: 'Sophomore Autumn' },
								{ name: 'FRENLANG 3', title: 'First-Year French, Third time', time: 'Freshman Spring' },
								{ name: 'HISTORY 50A', title: 'Colonial and Revolutionary America', time: 'Sophomore Autumn' },
								{ name: 'HISTORY 50B', title: '19th Century America', time: 'Sophomore Winter' },
								{ name: 'HISTORY 50C', title: 'The United States in the Twentieth Century', time: 'Freshman Spring' },
								{ name: 'HISTORY 55Q', title: 'The Origins of the Modern American City', time: 'Sophomore Winter' },
								{ name: 'HISTORY 147', title: 'History of South Africa', time: 'Junior Autumn' },
							],
							activities: [
								{ name: 'Stanford Sports Analytics Club', details: [ 'President, 2016-2017', 'Tech Officer, 2015-2016' ] },
								{ name: 'Code the Change', details: [] },
								{ name: 'Stanford Democrats', details: [ 'Newsletter Editor, 2016-2017', 'Newsletter Associate, 2015-2016' ] },
								{ name: 'Stanford Club Ultimate Frisbee', details: [ 'Captain, 2016-2017' ] },
								{ name: 'Stanford Students for Bernie', details: [ 'Events Team, 2015-2016' ] },
								{ name: 'Challah for Hunger', details: [ 'Dorm Distributor, 2015-2016' ] },
								{ name: 'Intramural Sports', details: [ 'Basketball, Freshman Winter (Champions)', 'Basketball, Freshman Spring', 'Dodgeball, Freshman Spring', 'Volleyball, Sophomore Winter', 'Basketball, Sophomore Winter' ] },
								{ name: 'CS + Mental Health', details: [] },
								{ name: 'Kids with Dreams', details: [] },
							]
						},
						{
							name: 'West Anchorage High School',
							grad: '2014',
							note: 'Salutatorian',
							classes: [
								{ name: 'AP Chemistry', time: 'Junior' },
								{ name: 'AP Biology', time: 'Senior' },
								{ name: 'AP Physics B', time: 'Junior' },
								{ name: 'AP Calculus AB', time: 'Sophomore' },
								{ name: 'AP Calculus BC', time: 'Senior' },
								{ name: 'AP Statistics', time: 'Junior' },
								{ name: 'AP US History', time: 'Sophomore' },
								{ name: 'AP Microeconomics', time: 'Junior' },
								{ name: 'AP Macroeconomics', time: 'Senior' },
								{ name: 'AP Government', time: 'Junior' },
								{ name: 'AP Psychology', time: 'Senior' },
								{ name: 'IB English', time: 'Junior' },
								{ name: 'AP Literature', time: 'Senior' },
							],
							activities: [
								{ name: 'Cross Country Running', details: [ 'Captain, 2011-2013', 'Varsity Letter 2010-2013', 'State Qualifier 2011-2012', 'Good Sport Award, 2011', 'Steve Prefontaine Award, 2011-2012' ] },
								{ name: 'Cross Country Skiing', details: [ 'Captain, 2014', 'Varsity Letter 2011-2014', 'State Qualifier 2011-2013', 'Good Sport Award, 2011-2012', 'Most Inspirational Boy, 2014' ] },
								{ name: 'Track and Field', details: [ 'Captain, 2014', 'Varsity Letter, 2011-2014', 'State Qualifier, 2011-2014' ] },
								{ name: 'Parent-Teacher-Student Association', details: [ 'Secretary, 2012-2014', 'Student Representative, 2011-2012' ] },
								{ name: 'National Honor Society', details: [ 'Treasurer, 2013' ] },
								{ name: 'Chess Club', details: [] },
								{ name: 'Laughter Club', details: [] },
								{ name: 'Amnesty International', details: [ 'Treasurer, 2014' ] },
							]
						}
					]
				},
				{
					name: 'awards',
					icon: 'trophy',
					template: [
						'<div class="col-xs-12" id="awards">',
							'{{#each this}}',
								'<h3>{{ name }}</h3>',
								'<h4>{{ date }}</h4>',
								'<p>{{ description }}</p>',
								'{{#if download}}<a href="./documents/{{ download }}">Download {{ download }}</a>{{/if}}',
							'{{/each}}',
						'</div>',
					].join(''),
					data: [
						{ name: 'Boothe Prize', description: 'The Boothe Prize is awarded to six students in each freshman class at Stanford University based upon essays written in the Thinking Matters and Program in Writing and Rhetoric classes. I won the Boothe Prize for winter quarter Thinking Matters classes for my essay entitled "On the Ethics of Negotiating Drug Prices through Medicare Part D." The class for which I wrote this essay, "Bioethical Challenges of New Technology," discussed ethical frameworks and applied them to emerging medical technologies and practices.', date: 'May 2015', download: 'EliShayer.BoothePrize.pdf' },
						{ name: 'National AP Scholar', description: 'This award was given on the basis of my AP scores that I received throughout high school.', date: 'August 2014' },
						{ name: 'National Merit Scholar', description: 'This award was given on the basis of my PSAT score and subsequent application to advance from a National Merit Semifinalist to a National Merit Scholar.', date: 'May 2014' },
						{ name: 'Presidential Scholar Semifinalist', description: 'This award was given on the basis of my SAT score and subsequent application to advance from a Presidential Scholar Candidate to a Presidential Scholar Semifinalist, one of three male Semifinalists in the state.', date: 'April 2014' },
						{ name: 'American Invitational Mathematics Examination', description: 'I qualified to compete in the American Invitational Mathematics Examination in my sophomore, junior, and senior years of high school based on my performance in the American Mathematics Competition.', date: '2012, 2013, and 2014' },
						{ name: 'American Mathematics Competition', description: 'There are three levels of the American Mathematics Competition (AMC): the AMC 8 for those in 8th grade and below, the AMC 10 for those in 10th grade and below, and the AMC 12 for those in 12th grade and below. I was the state champion in the AMC 8 in 8th grade, in the AMC 10 in 8th, 9th, and 10th grade, and in the AMC 12 in 12th grade.', date: '2010, 2011, 2012, and 2014' },
						{ name: 'MathCounts Nationals', description: 'Based on my third place state performance in 8th grade I qualified to represent Alaska at the MathCounts National competition in Orlando, Florida. I placed fifth in 7th grade, which made me the alternate for Nationals that year.', date: '2008 and 2009' },
						{ name: 'Bartlett Invitational Mathematics Competition', description: 'At the Barlett Invitational Mathematics Competition, hosted by the local school district, I placed 1st my sophomore year.', date: '2012'},
					]
				},
				{
					name: 'other',
					icon: 'bar-chart',
					template: [
						'<div class="col-xs-12" id="other">',
							'{{#each this}}',
								'<h3>{{ name }}</h3>',
								'<h4>{{ date }}</h4>',
								'<p>{{{ description }}}</p>',
							'{{/each}}',
						'</div>',
					].join(''),
					data: [
						{ name: 'Research Science Institute', description: 'I was one of 50 domestic students selected to participate in the prestigious Research Science Institute (RSI). At RSI, a six-week summer camp for rising high school seniors hosted by the Masachusetts Institute for Technology, each student is matched with a mentor to scientific research. I was matched with a mentor at the Harvard Vision Lab where I performed research in the field of cognitive sciene. The work culminated in a scientific paper and a presentation at the RSI Symposium.', date: '2013' },
						{ name: 'Anchorage Youth Symphony', description: 'I played french horn in the Anchorage Youth Symphony my freshman, sophomore, and junior years of high school. My favorite peices we performed were Dvo&#345;&#225;k&#39;s New World Symphony and Tchaikovsky&#39;s Fifth Symphony.', date: '2010-2014' },
						{ name: 'Boy Scouts of America', description: 'As a Boy Scout I served as Senior Patrol Leader and Assistant Senior Patrol Leader for my troop in 2010. I earned the Eagle Scout badge in November 2011.', date: '2006-2013' },
						{ name: 'National Youth Leadership Training', description: 'After completing the course as a learner in 2009, I served on the youth staff of National Youth Leadership Training (NYLT) as an Instructor (2010), Assistant Course Leader (2012), and Course Leader (2013). The camp is a week-long, youth-led summer conference to advance the leadership abilities of 48 learners. As Course Leader I prepared the 12-member youth staff with monthly meetings and presented several hour-long lectures to the fully assembled conference.', date: '2010, 2012, and 2013' },
						{ name: 'Conference of Young Alaskans', description: 'I was selected as a delegate to the Conference of Young Alaskans, an event in which youth delegates from throughout the state discuss the issues relevant to the state and put forward suggestions as to how to address the issues.', date: '2012' }
					]
				}
			]
		},
		jobs: {
			template: [
				'{{#each this}}',
					'<div class="col-xs-12">',
						'{{#if company}}<h3>{{ company }} &ndash; {{ position }}</h3>{{/if}}',
						'<h4>{{ location }}</h4>',
						'<h4><i>{{ start }}</i> to <i>{{ end }}</i></h4>',
						'<p>{{{ description }}}</p>',
						'{{#each links}}',
						'<a href="{{ href }}" target="_new"><i class="fa fa-link"></i> {{ title }}</a>',
						'{{/each}}',
					'</div>',
				'{{/each}}',
			].join(''),
			data    : [
				{
					company    : 'Chicago Cubs',
					position   : 'Research & Development Intern',
					start      : '6/2016',
					end        : 'Present',
					description: 'The summer between my sophomore and junior years at Stanford I worked in Chicago for the Cubs. For the Cubs I worked primarily as a developer, contributing to the data processing and warehousing as well as the internal web application. I am continuing to remotely work for the club during the school year in a part-time role.',
					links      : [
						{ href: 'http://www.espn.com/espn/feature/story/_/id/17588399/theo-epstein-mastermind-cubs-season', title: 'ESPN article about Theo Epstein with a cameo by me. As Theo says in the article, "Eli is a live, in-the-flesh intern."'}
					]
				},
				{
					company    : 'AZ Alkmaar',
					position   : 'Data-Analyst',
					start      : '1/2016',
					end        : 'Present',
					description: 'Since the beginning of 2016 I have worked for AZ Alkmaar, a soccer club in the Dutch Eredivisie. My role with the club involves importing and warehousing data, data analysis, and presentation via a web application.',
					links      : []
				},
				{
					company    : 'Northern Economics, Inc.',
					location   : 'Anchorage, Alaska',
					position   : 'Temp Staff Analyst II',
					start      : '6/2015',
					end        : '9/2015',
					description: 'Between my freshman and sophomore years of college I worked at Northern Economics for a second consecutive summer. I again co-authored several projects. I performed the modeling for the Palmer airport master plan financial report, projected migration using a radiation model, worked on a halibut regulation proejct, modeled energy and power usage, and worked on a transportation expansion project.',
					links      : [
						{ href: 'http://northerneconomics.com/elis-internship-experience-at-northern-economics/', title: 'Blog post about my internship experience' }
					]
				},
				{
					company    : 'Northern Economics, Inc.',
					location   : 'Anchorage, Alaska',
					position   : 'Temp Staff Analyst II',
					start      : '5/2014',
					end        : '9/2014',
					description: 'In the summer following high school graduation, I worked at Northern Economics, a local economic consulting firm. I worked on projects as varied as a business plan for Suquamish Seafoods, projecting usage rages of a local utility entity, and a report on halibut bycatch. My work on these projects led to several reports I co-authored. I also worked on a project in which I investigated the impacts of demographics on economic confidence among Alaskans.',
					links      : []
				},
			]
		},
		projects: {
			template: [
				'{{#each this}}',
					'<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 tile-wrapper">',
						'<div>',
							'{{#if link}}<a href="{{ link }}" target="_new">{{/if}}',
								'<h3>{{ name }}</h3>',
							'{{#if link}}</a>{{/if}}',
							'{{#if tools}}<p>{{{ tools }}}</p>{{/if}}',
							'<p>{{{ description }}}</p>',
							'{{#if link}}<a href="{{ link }}" target="_new"><i class="fa fa-link top-right"></i></a>{{/if}}',
							'{{#if award}}<i class="fa fa-trophy {{ award }} top-left"></i>{{/if}}',
							'{{#if video}}<a href="{{ video }}" target="_new"><i class="fa fa-video-camera bottom-right"></i></a>{{/if}}',
						'</div>',
					'</div>',
				'{{/each}}',
			].join(''),
			data    : [
				{
					name       : 'TruMedia Hackathon: The Next Pitch',
					id         : 'graphicacy',
					award      : 'gold',
					link       : 'http://elishayer.com/TruMedia-MLB-Hackathon/',
					tools      : [ 'd3.js', 'AngularJS', 'Bootstrap' ],
					description: 'A visualization of pitch selection tendencies, for which I placed in first in the Engineer division, after assembling the submission in just several days.'
				},
				{
					name       : 'Graphicacy Major League Data Challenege',
					id         : 'graphicacy',
					award      : 'silver',
					link       : 'http://cardinalanalytics.github.io/mlb-challenge/',
					video      : 'https://youtu.be/Z1eSpB_aJjg',
					tools      : [ 'd3.js', 'Bootstrap', 'jQuery' ],
					description: 'A group project visualization of baseball careers for which I wrote all the code. The submission won 2nd place, as announced <a href="http://www.majorleaguedatachallenge.com/award-winners-announcement" target="_new">here</a>.'
				},
				{
					name       : 'Stanford Sports Analytics Club Website',
					id         : 'ssac-web',
					link       : 'http://cardinalanalytics.github.io/',
					tools      : [ 'Bootstrap', 'jQuery', 'Handlebars' ],
					description: 'Development of the club website from a single index page to many pages. Serves to inform both members and the public about the club.'
				},
				{
					name       : '"A Fresh Take on Batting the Pitcher Eighth"',
					id         : 'bat-eighth',
					link       : 'https://stanfordsportsanalytics.wordpress.com/2015/05/06/a-fresh-take-on-batting-the-pitcher-eighth/',
					tools      : [ 'C++' ],
					description: 'Sports analytics research in which I developed a C++ baseball simulator to assess the run production value of batting the pitcher eighth.'
				},
				{
					name       : 'Diamond Dollars Case Competition',
					id         : 'diamond-dollars',
					tools      : [ 'R' ],
					description: 'A project and presentation at the SABR Analytics Conference. Tasked to find the trade for Cole Hamels to maximize value for both sides. Developed models for playoff probability and revenue.'
				},
				{
					name       : '"The Frictional Cost of a Call to the Bullpen"',
					id         : 'frictional-cost',
					link       : 'https://stanfordsportsanalytics.wordpress.com/2015/03/24/the-frictional-cost-of-a-call-to-the-bullpen/',
					tools      : [ 'Excel' ],
					description: 'Sports analytics research on the performance of baseball relievers by the number of batters faced in an appearance, with an interesting negative first batter effect found.'
				},
				{
					name       : 'Baseball Pitch Tracker',
					id         : 'pitch-tracker',
					tools      : [ 'Node.js', 'Express', 'AngularJS', 'MongoDB', 'Mongoose', 'd3.js', 'Bootstrap', 'Jade', 'R' ],
					description: 'An ongoing project to develop pitch tracker application to record and analyze baseball pitchers and hitters using a full JavaScript stack.'
				}
			]
		},
		skills: {
			template: [
				'<div class="col-xs-6">',
					'<div class="row" id="skill-names">',
						'{{#each this}}',
						'<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 tile-wrapper" id="{{ id }}">',
							'<div>{{ tool }}</div>',
						'</div>',
						'{{/each}}',
					'</div>',
				'</div>',
				'<div class="col-xs-6" id="skills-details">',
					'{{#each this}}',
					'<div id="{{ id }}-details">{{skillsDetail this}}</div>',
					'{{/each}}',
					'<div id="skill-details-intro">',
						'<span>Hover over or click on any of the skills on the left to see the ways in which I have utilized these skills!</span>',
					'</div>',
				'</div>',
			].join(''),
			data    : [
				{ tool: 'JavaScript', id: 'js', classes: [ 'CS42' ], projects: [ 'graphicacy', 'ssac-web', 'pitch-tracker' ], jobs: [ 'Chicago Cubs', 'AZ Alkmaar'] },
				{ tool: 'R', id: 'r', classes: [ 'STATS50', 'STATS200', 'STATS202' ], projects: [ 'diamond-dollars', 'pitch-tracker' ], jobs: [ 'Chicago Cubs', 'AZ Alkmaar'] },
				{ tool: 'Python', id: 'python', classes: [], projects: [ 'Code the Change' ], jobs: [ 'Chicago Cubs', 'AZ Alkmaar'] },
				{ tool: 'SQL', id: 'sql', classes: [ 'CS142' ], projects: [], jobs: ['Chicago Cubs'] },
				{ tool: 'C++', id: 'cpp', classes: [ 'CS106X', 'CS110' ], projects: [ 'bat-eighth' ], jobs: [] },
				{ tool: 'C', id: 'c', classes: [ 'CS107', 'CS110' ], projects: [], jobs: [] },
				{ tool: 'Java', id: 'java', classes: [ 'CS106A', 'CS227B' ], projects: [], jobs: [] },
				{ tool: 'MATLAB', id: 'matlab', classes: [ 'CS229' ], projects: [], jobs: [] },
				{ tool: 'jQuery', id: 'jquery', classes: [ 'CS42' ], projects: [ 'graphicacy', 'ssac-web' ], jobs: [] },
				{ tool: 'Node.js', id: 'node', classes: [ 'CS42' ], projects: [ 'pitch-tracker' ], jobs: [] },
				{ tool: 'Express', id: 'express', classes: [ 'CS42' ], projects: [ 'pitch-tracker' ], jobs: [] },
				{ tool: 'AngularJS', id: 'angular', classes: [], projects: [ 'pitch-tracker' ], jobs: [] },
				{ tool: 'MongoDB', id: 'mongo', classes: [ 'CS42' ], projects: [ 'pitch-tracker' ], jobs: [] },
				{ tool: 'd3.js', id: 'd3', classes: [], projects: [ 'graphicacy', 'pitch-tracker' ], jobs: [] },
				{ tool: 'Bootstrap', id: 'bs', classes: [], projects: [ 'ssac-web', 'graphicacy', 'pitch-tracker' ], jobs: [] },
				{ tool: 'Excel', id: 'excel', classes: [], projects: [ 'frictional-cost' ], jobs: [ 'Northern Economics' ] },
				{ tool: 'VBA', id: 'vba', classes: [], projects: [], jobs: [ 'Northern Economics' ] },
				{ tool: 'STATA', id: 'stata', classes: [], projects: [], jobs: [ 'Northern Economics' ] },
			]
		},
		'social-links': {
			template: [
				'<div class="col-xs-12">',
					'<table>',
						'<tbody>',
							'<tr>',
								'{{#each this}}',
								'<td>',
									'<a href={{ this.link }} target="_new">',
										'<i class="fa {{ this.fa }} fa-3x"></i>',
									'</a>',
								'</td>',
								'{{/each}}',
							'</tr>',
						'</tbody>',
					'</table>',
				'</div>',
			].join(''),
			data    : [
				{ name: "Email", link: "mailto:contact@elishayer.com", fa: "fa-envelope" },
				{ name: "LinkedIn", link: "https://www.linkedin.com/in/elishayer", fa: "fa-linkedin" },
				{ name: "GitHub", link: "https://github.com/elishayer", fa: "fa-github" },
				{ name: "Twitter", link: "https://twitter.com/elishayer", fa: "fa-twitter" }
			]
		},
	}

	// ------------------------------------------ DATA AND TEMPLATE ADJUSTMENTS
	// append the about subtabs data to the about template and data
	$.each(sections.about.subtabs, function() {
		// concatenate sub-tab templates to the about tab template in Handlebars #with wrappers
		sections.about.template += '{{#with ' + this.name + '}}' + this.template + '{{/with}}';

		// add the subtab data to the about data and the name/icon to the subtabs data
		sections.about.data[this.name] = this.data;
		sections.about.data.subtabs.push({
			name: this.name,
			icon: this.icon
		});
	});

	// a map from project id to name
	var projectIdMap = {};

	// for each project
	$.each(sections.projects.data, function() {
		// populate the project id map
		projectIdMap[this.id] = this.name;

		// join the tools lists with ndashes
		this.tools = this.tools.join(' &ndash; ');
	});

	// for each activity in each school
	$.each(sections.about.data.schools, function() {
		$.each(this.activities, function() {
			// join into a string delimited by a pipe character
			this.details = this.details.join('|');
		});
	});

	// ------------------------------------------ HANDLEBARS HELPERS
	// helper to concatenate a list with proper syntax,
	// with an optional mapping from the list contents to other strings
	function concatenateList(list, map) {
		// if a map is provided and key exists
		// transform each string using the map
		if (map) {
			for (var i = 0; i < list.length; i++) {
				if (map.hasOwnProperty(list[i])) {
					list[i] = map[list[i]];
				}
			}
		}
		if (list.length === 0) {
			return '';
		} else if (list.length === 1) {
			return list[0];
		} else if (list.length === 2) {
			return list[0] + ' and ' + list[1];
		} else {
			var result = '';
			for (var i = 0; i < list.length; i++) {
				result += i < list.length - 1 ? list[i] + ', ' : 'and ' + list[i];
			}
			return result;
		}
	}

	// functions to convert lists to English phrases, all lists are length >=1
	var categoryData = [
		{
			key: 'classes',
			textualize: function(list, skill) {
				return 'in the ' + (list.length === 1 ? 'class' : 'classes') +
					' ' + concatenateList(list);
			}
		},
		{
			key: 'projects',
			textualize: function(list, skill) {
				return 'while working on the ' + concatenateList(list, projectIdMap) +
					' ' + (list.length === 1 ? 'project' : 'projects');						
			}
		},
		{
			key: 'jobs',
			textualize: function(list, skill) {
				return 'while working at ' + concatenateList(list);
			}
		}
	];

	// Handlebars helpers
	Handlebars.registerHelper('skillsDetail', function(data) {
		var textualSkills = [];
		$.each(categoryData, function() {
			if (data[this.key].length) {
				textualSkills.push(this.textualize(data[this.key], data.tool));
			}
		});
		return new Handlebars.SafeString('I used <b>' + data.tool + '</b> ' +
			concatenateList(textualSkills) + '.');
	});

	// ------------------------------------------ HANDLEBARS COMPILATION AND RENDERING
	// For each section, compile the Handlebars template and render it with the
	// associated data. Then place the resulting html in the DOM
	for (section in sections) {
		// get the template and data
		var template = sections[section].template;
		var data = sections[section].data;

		// compile the template, pass in the data, and render to the DOM
		$('<div>').addClass('row')
				  .attr('id', section)
				  .html(Handlebars.compile(template)(data))
				  .appendTo($('.container'));
	}

	// ------------------------------------------ TAB LISTENERS
	// general function to set tab listeners for any set of tabs
	function setTabListener(tabs, getName, type, selector, initial) {
		// toggle a single tab to active and all others to hidden
		function setActive() {
			$.each(tabs, function() {
				// get the name and determine whether it is active
				var name = getName(this);
				var isActive = name === currTabs[type];

				// set the active tab and display only the active content
				$('#' + name + '-' + type).toggleClass('active', isActive);
				$('#' + name).toggle(isActive);
			});
		}

		// initialize the active tab
		setActive(initial);

		// event listener for user seletion of active tab
		$(selector).click(function() {
			var selection = $(this).attr(type);
			if (selection) {
				currTabs[type] = selection;
				setActive();
				// if selecting the project tab, re-smooth in case of resizing previously occuring
				if (type === 'tab' && selection === 'projects') {
					smoothProjectTileHeight();
				}
			}
		})
	}

	// keep track of the current tabs
	var currTabs = {
		tab: 'about',
		subtab: 'schools'
	}

	// set the tab listener for the main set of tabs
	setTabListener(sections.tabs.data, function(tab) { return tab.name; },
		'tab', '#tabs>div>ul>li>a', currTabs['tab']);

	// set the tab listener for the subtabs in the about tab
	setTabListener(Object.keys(sections.about.data), function(tab) { return tab.toString(); },
		'subtab', '#about>div>ul>li>a', currTabs['subtab']);	

	// ------------------------------------------ ACTIVE SKILL SELECTION
	// set the active skills content area and skill name
	function setActiveSkillDetail(activeDetail, isClick) {
		// keep track of whether any skill is to be displayed
		var skillIsDisplayed = false;
		$.each(sections.skills.data, function() {
			var isDisplayed = this.id === activeDetail;
			// true if any skill has been set as displayed
			skillIsDisplayed = skillIsDisplayed || isDisplayed;

			// display only the displayed detail
			$('#' + this.id + '-details').toggle(isDisplayed);
		});

		// set the instructions to visible if no details selected
		$('#skill-details-intro').toggle(!skillIsDisplayed);

		// if a click or a clear, set the active skill name
		if (isClick || !activeDetail) {
			// keep track of whether any skill name is set as active
			var nameIsActive = false;
			$('#skill-names>div').each(function(index, nameDiv) {
				// cache the jQuery object and get active status
				$nameDiv = $(nameDiv);
				var isActive = $nameDiv.attr('id') === activeDetail;

				// true if any skill name has been set as active
				nameIsActive = nameIsActive || isActive;

				// set the active skill name if applicable
				activeSkillName = isActive ? activeDetail : activeSkillName;

				// set .active class
				$nameDiv.toggleClass('active', isActive);
			});

			// clear the active name variable if needed
			if (!nameIsActive) {
				activeSkillName = null;
			}
		}

		// set the details height
		setSkillDetailsLocation();
	}

	// initialize to no selected skill
	setActiveSkillDetail();

	// keeps track of whether the last skill detail selection was a click
	var skillClick = false;

	// keep track of the current active name
	var activeSkillName = null;

	// event listener for the skill details
	$('#skill-names>.tile-wrapper>div').on({
		click: function() {
			skillClick = true;
			setActiveSkillDetail($(this).parent().attr('id'), skillClick);
		},
		mouseenter: function() {
			skillClick = false;
			setActiveSkillDetail($(this).parent().attr('id'), skillClick);
		},
		mouseleave: function() {
			if (activeSkillName) {
				setActiveSkillDetail(activeSkillName, true);
			} else if (!skillClick) {
				setActiveSkillDetail();
			}
		}
	});

	// any click on the window that is not on a skill name clears the
	// active skill name selection, if there is such a name
	$(window).click(function(event) {
		if (activeSkillName && !$(event.target).is($('#skill-names>.tile-wrapper>div'))) {
			setActiveSkillDetail();
		}
	});

	// set the .skill-details location based on the scroll location
	$(window).scroll(function() {
		if (currTabs.tab === "skills") {
			// setSkillDetailsLocation();
		}
	});

	// set the skills details such that it is visible at all times
	function setSkillDetailsLocation() {
		// cache jQuery objects: the skills div and the active details div
		var $skills = $('#skills');
		var $detailWrapper = $skills.children('#skills-details');
		var $detail = $detailWrapper.children('div:visible');

		var buffer = 10;

		// if the skills div is above the visible window
		if ($(window).scrollTop() > $skills.offset().top) {
			// if the active detail bottom is above the skills wrapper bottom 
			if ($detail.offset().top + $detail.height() + buffer <= $skills.offset().top + $skills.height()) {
				$detailWrapper.css({
					position: 'absolute',
					top: buffer,
					left: 0
				});
			} else {
				$detailWrapper.css({
					position: 'fixed',
					top: buffer
				});
			}
		} else {
			$detailWrapper.css({
				position: 'relative',
				top: ''
			});
		}
	}

	// ------------------------------------------ TOOLTIPS
	// activates all tooltips that are children of parent, sets title with titleFn
	function activateTooltips(parent, placement, titleFn) {
		$(parent + ' [data-toggle="tooltip"]').tooltip({
			container: 'body', placement: placement, html: true, title: titleFn
		});
	}

	// activate activities tooltips, with details separated by minified hr tags
	activateTooltips('.activities', 'left', function() {
		return $(this).attr('details').split('|').join('<hr class="min">');
	});

	// activate classes tooltips, title and time separated by a minified hr tag
	activateTooltips('.classes', 'right', function() {
		// cache jQuery object and get attributes
		var $this = $(this);
		var title = $this.attr('c-title');
		var time = $this.attr('c-time');

		// include a line if both title and time are not empty
		return title + (title.length && time.length ? '<hr class="min"/>' : '') + time;
	});

	// ------------------------------------------ GENERAL LISTENERS
	// stop scrolling from occuring for empty links
	$('a').click(function(event) {
		if ($(this).attr('href') === '#') {
			event.preventDefault();
		}
	});

	// resize listener, make project tile heights consistent
	$(window).resize(function() {
		smoothProjectTileHeight();
	});

	// make it so the heights of project tiles in each row have matching heights
	function smoothProjectTileHeight() {
		// clear the height styles
		styleContents({}, 'project-style');

		// remove .project-tile-group-# classes (up to 4 groups)
		for (var i = 0; i < 4; i++) {
			var className = 'project-tile-group-' + i;
			$('.' + className).removeClass(className);
		}

		// define selector and cache jQuery object for the tiles
		var selector = '#projects>.tile-wrapper';
		var $tiles = $(selector);

		// only if the projects tab is visible
		if (currTabs.tab === 'projects') {
			// get the number of tiles per column, given 30 pixels of padding per tile
			var tilesPerCol = Math.round($('#projects').width() / ($(selector).width() + 30));

			// for each tile group (defined by the number of tiles per column)
			for (var g = 0; g * tilesPerCol < $tiles.length; g++) {
				var className = 'project-tile-group-' + g;

				// keep track of the maximum group height
				var maxHeight = 0;

				// for each tile in the group
				for (var i = 0; i < tilesPerCol && g * tilesPerCol + i < $tiles.length; i++) {
					$tile = $($tiles[g * tilesPerCol + i]);
					// update the maxHeight with the height of the current tile
					maxHeight = Math.max(maxHeight, $tile.height());

					// set the group class of the tile
					$tile.addClass(className);
				}

				// set the height
				styleContents({
					selector: '.' + className,
					contents: {
						height: maxHeight + 'px'
					}
				}, 'project-style');
			}
		}
	}

	// initialize the style elements, then set them equal to start
	$('<style>').attr('id', 'project-style').appendTo($('head'));
	$('<style>').text(styleContents({
		selector: '#projects>.tile-wrapper>div',
		contents: {
			height: '100%'
		}
	})).appendTo($('head'));
	smoothProjectTileHeight();

	// helper function to write the style tag contents, for one object or array of objects
	// if an id is given, overwrites the contents in that style element
	// if an empty object is passed, the contents of the style element is emptied
	function styleContents(styles, styleId, flag) {
		// if an empty object, clear the style element and return
		if (!Object.keys(styles).length) {
			$('#' + styleId).text('');
			return;
		}

		// if not an array, make it a singleton array for future consistency
		if (Object.prototype.toString.call(styles) !== '[object Array]') {
			styles = [styles];
		}

		// initialize empty string
		var result = '';

		// for each entry in styles
		for (var i = 0; i < styles.length; i++) {
			// keeps track of whether the first key for proper comma syntax
			var isFirstKey = true;

			// add each key val pair to the style tag
			result += styles[i].selector + '{';
			for (key in styles[i].contents) {
				result += (isFirstKey ? '' : ',') + key + ':' + styles[i].contents[key];
				isFirstKey = isFirstKey && false;
			}

			result += '}';
		}
		if (styleId) {
			var $styleElem = $('#' + styleId);
			$styleElem.text($styleElem.text() + result);
		}
		return result;
	}

})(window, document);
