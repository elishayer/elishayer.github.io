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
						'Please feel free to <a href="mailto:contact@elishayer.com" target="_new">email me.'
					]
				}
			}
		},
		tabs: {
			template: [
				'<div class="col-xs-12">',
					'<ul class="nav nav-tabs nav-justified">',
						'{{#each this}}',
						'<li role="presentation">',
							'<a href="#content">{{ name }} <i class="fa fa-{{icon}}"></i></a>',
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
				}
			}
		}

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

	// function to set the active tab
	function setActiveTab(tab) {
		for (tab in sections.tabs.data) {

		}
	}

})(window, document);
