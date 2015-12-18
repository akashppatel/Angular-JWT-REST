angular.module('app', [])
.controller("mainCtrl", function() {
	
	var self = this;
	
	self.welcomeMsg = "Unknown";
	
	/*
	 * Empty user modal 
	 */
	self.user = {};
	
	/*
	 * Function: to get user login.
	 */
	self.login = function() {
		console.log("login clicked")
		self.welcomeMsg = self.user.username;
	}
	
})