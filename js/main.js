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
							'<a href="#{{ name }}">{{ name }} <i class="fa fa-{{icon}}"></i></a>',
						'</li>',
						'{{/each}}',
					'<ul>',
				'</div>'
			].join('\n'),
			data    : [
				{
					name: 'about',
					icon: 'info-circle'
				},
				{
					name: 'projects',
					icon: 'tasks'
				},
				{
					name: 'skills',
					icon: 'laptop'
				}
			]
		},
		// TODO
		about: {
			template: [''
			].join('\n'),
			data    : [

			]
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
	$('#tabs a').click(function(event) {
		var href = $(event.target).attr('href');
		if (href) {
			// set the active tab
			setActiveTab(href.substring(1));
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

})(window, document);
