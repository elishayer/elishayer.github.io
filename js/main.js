/* main.js
 * Eli Shayer
 * ----------
 * The main javascript file for my personal website.
 * Uses the Handlebars templating library to generate html
 */

(function(window, document, undefined) {
	// data for the tabs and corresponding data and templates
	sections = {
		intro:  {
			template: [
				'<div class="col-sm-4 col-xs-12">',
					'<img src="{{ image.src }}" alt="{{ image.alt }}" id="{{ image.id }}"/>',
				'</div>',
				'<div class="col-sm-8 col-xs-12">',
					'<h1>{{ content.title }}</h1>',
					'<h3>{{ content.subtitle }}</h3>',
					'{{#each content.text}}',
					'<p>{{{ this }}}</p>',
					'{{/each}}',
				'</div>',
			].join('\n'),
			data    : {
				image: { src: './images/eli-shayer-square.jpg', alt: 'Eli Shayer', id : 'portrait' },
				content: {
					title   : 'Eli Shayer',
					subtitle: 'Stanford University class of 2018',
					text    : [
						'Hi! I am a sophomore at Stanford University from Anchorage, Alaska studying computer science and statistics. I am declared in Mathematical and Computational Science for my major, and am additionaly pursuing a minor in history.',
						'I am particularly interested in web development and sports analytics. You can check out my personal history, projects I have worked on, and skills I possess in the tabs below.',
						'Please feel free to <a href="mailto:contact@elishayer.com" target="_new">email me</a>.'
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
			].join('\n'),
			data    : [
				{ name: 'about', icon: 'info-circle' },
				{ name: 'projects', icon: 'tasks' },
				{ name: 'skills', icon: 'laptop' }
			]
		},
		about: {
			template: [
				'{{#with subtabs}}',
				'<div class="col-xs-12">',
					'<ul class="nav nav-tabs nav-justified">',
						'{{#each this}}',
						'<li role="presentation" id="{{ name }}-subtab">',
							'<a href="#" subtab="{{ name }}">{{ name }} <i class="fa fa-{{icon}}"></i></a>',
						'</li>',
						'{{/each}}',
					'<ul>',
				'</div>',
				'{{/with}}',
				'<div class="col-xs-12" id="history">TODO</div>',
				'{{#with history}}',
				'{{/with}}',
				'{{#with school}}',
				'<div id="school">',
					'{{#each schools}}',
					'<div class="col-xs-12 col-sm-6">',
						'<h3>{{ name }}</h3>',
						'<h4>Class of {{ grad }}{{#if note}} &ndash; {{note}}{{/if}}</h4>',
						'<div class="row">',
							'<div class="col-xs-{{ size.classes }}">',
								'<p class="header">Classes</p>',
								'<ul class="no-pad-ul">',
									'{{#each classes}}',
									'<li>',
									'{{#if time}}',
										'<a href="#" data-container="body" data-toggle="tooltip" data-placement="right" ',
										'title="{{#if title}}{{ title }} | {{/if}}{{ time }}">{{ name }}</a>',
									'{{else}}',
										'{{ name }}',
									'{{/if}}',
									'</li>',
									'{{/each}}',
								'</ul>',
							'</div>',
							'<div class="col-xs-{{ size.activities }}">',
								'<p class="header">Activities</p>',
								'<ul class="no-pad-ul">',
									'{{#each activities}}',
									'<li>',
									'{{#if details.length}}',
										'<a href="#" data-container="body" data-toggle="popover" data-placement="right" ',
										'data-trigger="focus" data-html="true" data-title="Positions and Accomplishments" data-content="',
											'<ul class=&quot;no-pad-ul&quot;>',
												'{{#each details}}',
													'<li>{{ this }}</li>',
												'{{/each}}',
											'</ul>',
										'">{{ name }} &#x25b6;</a>',
									'{{else}}',
										'{{ name }}',
									'{{/if}}',
									'</li>',
									'{{/each}}',
								'</ul>',
							'</div>',
						'</div>',
					'</div>',
					'{{/each}}',
				'</div>',
				'{{/with}}',
				'{{#with awards}}',
				'<div class="col-xs-12" id="awards">',
					'{{#each this}}',
						'<h3>{{ award }}{{#if date}}, {{ date }}{{/if}}</h3>',
						'<p>{{ description }}</p>',
					'{{/each}}',
				'</div>',
				'{{/with}}',
				'{{#with other}}',
				'<div class="col-xs-12" id="other">',
					'{{#each this}}',
						'<h3>{{ name }}</h3>',
						'<p>{{ description }}</p>',
					'{{/each}}',
				'</div>',
				'{{/with}}',
			].join('\n'),
			data    : {
				subtabs: [
					{ name: 'history', icon: 'history' },
					{ name: 'school', icon: 'graduation-cap' },
					{ name: 'awards', icon: 'trophy' },
					{ name: 'other', icon: 'plus' }
				],
				history: [
					{}
				],
				school: {
					schools: [
						{
							name: 'Stanford University',
							size: { classes: '4', activities: '8' },
							grad: '2018',
							classes: [
								{ name: 'CS 106A', title: 'Programming Methodology', time: 'Freshman Autumn' },
								{ name: 'CS 106X', title: 'Programming Abstractions (Accelerated)', time: 'Freshman Winter' },
								{ name: 'CS 107', title: 'Computer Organization and Systems', time: 'Freshman Spring' },
								{ name: 'CS 42', title: 'Callback Me Maybe: Contemporary JavaScript', time: 'Freshman Spring' },
								{ name: 'CS 103', title: 'Mathematical Foundations of Computing', time: 'Sophomore Autumn' },
								{ name: 'MATH 51', title: 'Linear Algebra and Differential Calculus of Several Variables', time: 'Freshman Autumn' },
								{ name: 'MATH 52', title: 'Integral Calculus of Several Variables', time: 'Freshman Winter' },
								{ name: 'MATH 53', title: 'Ordinary Differential Equations with Linear Algebra', time: 'Freshman Spring' },
								{ name: 'STATS 116', title: 'Theory of Probability', time: 'Sophomore Autumn' },
								{ name: 'PHYSICS 41', title: 'Mechanics', time: 'Freshman Winter' },
								{ name: 'THINK 11', title: 'Bioethical Challenges of New Technology', time: 'Freshman Winter' },
								{ name: 'PWR 1CK', title: 'Investigation the News: Journalism, Technology, & the Future', time: 'Freshman Autumn' },
								{ name: 'PWR 2AH', title: 'Ethnic Narratives and the Rhetoric of American Identity', time: 'Sophomore Autumn' },
								{ name: 'FRENLANG 3', title: 'First-Year French, Third time', time: 'Freshman Spring' },
								{ name: 'HISTORY 50A', title: 'Colonial and Revolutionary America', time: 'Freshman Spring' },
								{ name: 'HISTORY 50C', title: 'The United States in the Twentieth Century', time: 'Sophomore Autumn' },
							],
							activities: [
								{ name: 'Stanford Sports Analytics Club', details: [ 'Tech Officer, 2015-2016' ] },
								{ name: 'Stanford Club Ultimate Frisbee', details: [] },
								{ name: 'Stanford Democrats', details: [ 'Associate, 2015-2016' ] },
								{ name: 'Stanford for Bernie', details: [ 'Events Team, 2015-2016' ] },
								{ name: 'Challah for Hunger', details: [ 'Dorm Distributor, 2015-2015' ] },
								{ name: 'Intramural Sports', details: [] }
							]
						},
						{
							name: 'West Anchorage High School',
							size: { classes: '4', activities: '8' },
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
								{ name: 'AP Microecon', time: 'Junior' },
								{ name: 'AP Macroecon', time: 'Senior' },
								{ name: 'AP Government', time: 'Junior' },
								{ name: 'AP Psychology', time: 'Senior' },
								{ name: 'IB English', time: 'Junior' },
								{ name: 'AP Literature', time: 'Senior' },
							],
							activities: [
								{ name: 'Cross Country Running', details: [ 'Captain, 2011-2013', 'Varsity Letter 2010-2013', 'State Qualifier 2011-2012', 'Good Sport Award, 2011', 'Steve Prefontaine Award, 2011-2012' ] },
								{ name: 'Cross Country Skiing', details: [ 'Captain, 2014', 'Varsity Letter 2011-2014', 'State Qualifier 2011-2013', 'Good Sport Award, 2011-2012', 'Most Inspirational Boy, 2014' ] },
								{ name: 'Track and Field', details: [ 'Captain, 2014', 'Varsity Letter, 2011-2014', 'State Qualifier, 2011-2014' ] },
								{ name: 'Parent-Teacher-Student Association', details: [ 'Secretary, 2012-2014', 'Student Rep, 2011-2012' ] },
								{ name: 'National Honor Society', details: [ 'Treasurer, 2013' ] },
								{ name: 'Chess Club', details: [] },
								{ name: 'Laughter Club', details: [] },
							]
						}
					]
				},
				awards: [
					{ award: 'Graphicacy Major League Data Challenge', date: 'November 2015', description: 'TODO' },
					{ award: 'Boothe Prize', date: 'May 2015', description: 'TODO' },
					{ award: 'National AP Scholar', date: 'August 2014', description: 'TODO' },
					{ award: 'National Merit Scholar', date: 'May 2014', description: 'TODO' },
					{ award: 'Presidential Scholar Semifinalist', date: 'April 2014', description: 'TODO' },
				],
				other: [
					{ name: 'Research Science Institute', description: 'TODO' },
					{ name: 'American Invitational Mathematics Examination', description: 'TODO' },
					{ name: 'American Mathematics Competition', description: 'TODO' },
					{ name: 'MathCounts Nationals', description: 'TODO' },
					{ name: 'Bartlett Invitational Mathematics Competition', description: 'TODO' },
					{ name: 'Anchorage Youth Symphony', description: 'TODO' },
					{ name: 'Boy Scouts of America', description: 'TODO' },
					{ name: 'National Youth Leadership Training', description: 'TODO' },
					{ name: 'Conference of Young Alaskans', description: 'TODO' },
					{ name: 'Gifted Mentorship', description: 'TODO' },
				]
			}
		},
		projects: {
			template: [
				'{{#each this}}',
					'<div class="col-xs-4">',
						'{{#if link}}',
							'<a href="{{ link }}" target="_new">',
								'<h3>{{ name }}{{#if awardClass}} <i class="fa fa-trophy {{ awardClass }}"></i>{{/if}}</h3>',
							'</a>',
						'{{else}}',
							'<h3>{{ name }}{{#if awardClass}} <i class="fa fa-trophy {{ awardClass }}"></i>{{/if}}</h3>',
						'{{/if}}',
						'{{#if tools}}<p>{{{ tools }}}</p>{{/if}}',
						'<p>{{{ description }}}</p>',
					'</div>',
				'{{/each}}',
			].join('\n'),
			data    : [
				{
					name       : 'Graphicacy Major League Data Challenege',
					id         : 'graphicacy',
					awardClass : 'silver',
					link       : 'http://cardinalanalytics.github.io/mlb-challenge/',
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
						'<div class="col-xs-6" id="{{ id }}">',
							'{{ tool }}',
						'</div>',
						'{{/each}}',
					'</div>',
				'</div>',
				'<div class="col-xs-6" id="skills-details">',
					'{{#each this}}',
					'<div id="{{ id }}-details">{{skillsDetail this}}</div>',
					'{{/each}}',
					'<div id="skill-details-intro">',
						'Hover or click on any of the skills on the left to see the ways in which I have utilized these skills!',
					'</div>',
				'</div>',
			].join('\n'),
			data    : [
				{ tool: 'C++', id: 'cpp', classes: [ 'CS106X' ], projects: [ 'bat-eighth' ], jobs: [] },
				{ tool: 'Java', id: 'java', classes: [ 'CS106A' ], projects: [], jobs: [] },
				{ tool: 'C', id: 'c', classes: [ 'CS107' ], projects: [], jobs: [] },
				{ tool: 'JavaScript', id: 'js', classes: [ 'CS42' ], projects: [ 'graphicacy', 'ssac-web', 'pitch-tracker' ], jobs: [] },
				{ tool: 'Node.js', id: 'node', classes: [ 'CS42' ], projects: [ 'pitch-tracker' ], jobs: [] },
				{ tool: 'Express', id: 'express', classes: [ 'CS42' ], projects: [ 'pitch-tracker' ], jobs: [] },
				{ tool: 'AngularJS', id: 'angular', classes: [], projects: [ 'pitch-tracker' ], jobs: [] },
				{ tool: 'MongoDB', id: 'mongo', classes: [ 'CS42' ], projects: [ 'pitch-tracker' ], jobs: [] },
				{ tool: 'd3.js', id: 'd3', classes: [], projects: [ 'graphicacy', 'pitch-tracker' ], jobs: [] },
				{ tool: 'Bootstrap', id: 'bs', classes: [], projects: [ 'ssac-web', 'graphicacy', 'pitch-tracker' ], jobs: [] },
				{ tool: 'R', id: 'r', classes: [], projects: [ 'diamond-dollars', 'pitch-tracker' ], jobs: [] },
				{ tool: 'Excel', id: 'excel', classes: [], projects: [ 'frictional-cost' ], jobs: [ 'Northern Economics' ] }
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
			].join('\n'),
			data    : [
				{ name: "Email", link: "mailto:contact@elishayer.com", fa: "fa-envelope" },
				{ name: "LinkedIn", link: "https://www.linkedin.com/in/eli-shayer-62476b9b", fa: "fa-linkedin" },
				{ name: "GitHub", link: "https://github.com/elishayer", fa: "fa-github" },
				{ name: "Twitter", link: "https://twitter.com/elishayer", fa: "fa-twitter" }
			]
		},
	}

	// helper to concatenate a list with proper syntax,
	// with an optional mapping from the list contents to other strings
	function concatenateList(list, map) {
		// if a map is provided, transform each string using the map
		if (map) {
			for (var i = 0; i < list.length; i++) {
				list[i] = map[list[i]];
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
				if (i < list.length - 1) {
					result += list[i] + ', ';
				} else {
					result += 'and ' + list[i];
				}
			}
			return result;
		}
	}

	var categoryData = [
		{
			key: 'classes',
			textualize: function(list, skill) {
				if (list.length) {
					return 'in the ' + (list.length === 1 ? 'class' : 'classes') +
						' ' + concatenateList(list);
				} else {
					return '';
				}
			}
		},
		{
			key: 'projects',
			textualize: function(list, skill) {
				if (list.length) {
					return 'while working on the ' +
						concatenateList(list, projectIdMap) + ' ' +
						(list.length === 1 ? 'project' : 'projects');						
				} else {
					return '';
				}
			}
		},
		{
			key: 'jobs',
			textualize: function(list, skill) {
				if (list.length) {
					return 'while working at ' + concatenateList(list);
				} else {
					return '';
				}
			}
		}
	];

	// Handlebars helpers
	Handlebars.registerHelper('skillsDetail', function(data) {
		var textualSkills = [];
		$.each(categoryData, function(index, category) {
			if (data[category.key].length) {
				textualSkills.push(category.textualize(data[category.key], data.tool));
			}
		});
		return new Handlebars.SafeString('I used <b>' + data.tool + '</b> ' +
			concatenateList(textualSkills) + '.');
	});

	// a map from project id to name
	var projectIdMap = {};

	// for each project
	$.each(sections.projects.data, function(index, datum) {
		// populate the project id map
		projectIdMap[datum.id] = datum.name;

		// join the tools lists with ndashes
		datum.tools = datum.tools.join(' &ndash; ');
	});

	// For each section, compile the Handlebars template and render it with the
	// associated data. Then place the resulting html in the DOM
	for (section in sections) {
		// get the template and data
		var template = sections[section].template;
		var data = sections[section].data;

		// compile the template and pass in the data
		var html = Handlebars.compile(template)(data);

		$('#' + section).html(html);
	}

	// set the active tab and determine which content to display
	function setActiveTab(activeTab) {
		$.each(sections.tabs.data, function(index, tab) {
			var isActive = tab.name === activeTab;

			// set the active tab
			$('#' + tab.name + '-tab').toggleClass('active', isActive);

			// display only the active content
			$('#' + tab.name).toggle(isActive);
		});
	}

	// initialize the active tab to be the About tab
	setActiveTab('about');

	// event listener for the tabs to set the active tab and visible content
	$('#tabs>div>ul>li>a').click(function(event) {
		var tab = $(event.target).attr('tab');
		if (tab) {
			// set the active tab
			setActiveTab(tab);
		}
	});

	// set the active skills content area and skill name
	function setActiveSkillDetail(activeDetail, isClick) {
		// keep track of whether any skill is set as active
		var skillIsActive = false;
		$.each(sections.skills.data, function(index, skill) {
			var isActive = skill.id === activeDetail;

			// true if any skill has been set as active
			skillIsActive = skillIsActive || isActive;

			// display only the active detail
			$('#' + skill.id + '-details').toggle(isActive);
		});

		// set the instructions to visible if no details selected
		$('#skill-details-intro').toggle(!skillIsActive);

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
	}

	// initialize to no selected skill
	setActiveSkillDetail();

	// keeps track of whether the last skill detail selection was a click
	var skillClick = false;

	// keep track of the current active name
	var activeSkillName = null;

	// event listener for the skill details
	$('#skill-names>div').on({
		click: function(event) {
			skillClick = true;
			setActiveSkillDetail($(event.target).attr('id'), skillClick);
		},
		mouseenter: function(event) {
			skillClick = false;
			setActiveSkillDetail($(event.target).attr('id'), skillClick);
		},
		mouseleave: function(event) {
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
		if (activeSkillName && !$(event.target).is($('#skill-names>div'))) {
			setActiveSkillDetail();
		}
	});

	// set the active about subtab and show only the relevant content
	function setActiveAboutSubtab(activeSubtab) {
		$.each(sections.about.data.subtabs, function(index, subtab) {
			var isActive = subtab.name === activeSubtab;

			// set the active tab
			$('#' + subtab.name + '-subtab').toggleClass('active', isActive);

			// display only the active content
			$('#' + subtab.name).toggle(isActive);
		});
	}

	// initialize the about subtabs to history
	setActiveAboutSubtab('history');

	// event listener for the subtabs to set the active subtab and visible content
	$('#about>div>ul>li>a').click(function(event) {
		var subtab = $(event.target).attr('subtab');
		if (subtab) {
			// set the active subtab
			setActiveAboutSubtab(subtab);
		}
	});

	// stop scrolling from occuring for empty links
	$('a').click(function(event) {
		if($(event.target).attr('href') === '#') {
			event.preventDefault();
		}
	});

	// enable all popovers
	$('[data-toggle="popover"]').popover();

	// enable all tooltips
	$('[data-toggle="tooltip"]').tooltip();

})(window, document);
