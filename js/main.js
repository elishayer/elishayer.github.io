/* main.js
 * Eli Shayer
 * ----------
 * The main javascript file for my personal website.
 */

// declare an angular module
angular.module('es-app', [])
	// declare an angular controller
	.controller('es-control', function($scope, $sce) {
		// initalize the active tab to about
		$scope.activeTab = 'about';

		// a general generateHtml function for all tabs
		// takes care of Angular security concerns
		$scope.generateHtml = function(tab) {
			return $sce.trustAsHtml($scope.tabs[tab].generateHtml(tab));
		}

		// data on the tabs and a generating function for each tab
		$scope.tabs = {
			about : {
				generateHtml : function(tab) {
					return '<h3>' + tab + '</h3>';
				}
			},
			projects : {
				generateHtml : function(tab) {
					return '<h3>' + tab + '</h3>';
				}
			},
			skills : {
				generateHtml : function(tab) {
					return '<h3>' + tab + '</h3>';
				}
			}
		}

		$scope.socialLinks = [
			{
				name : "LinkedIn",
				link : "https://www.linkedin.com/in/eli-shayer-62476b9b",
				fa   : "fa-linkedin"
			},
			{
				name : "GitHub",
				link : "https://github.com/elishayer",
				fa   : "fa-github"
			},
			{
				name : "Twitter",
				link : "https://twitter.com/elishayer",
				fa   : "fa-twitter"
			}
		]

		// set the active tab based on the tab that was clicked
		$scope.setActiveTab = function(tab) {
			$scope.activeTab = tab;
		}
	});