/*global QUnit*/

sap.ui.define([
	"project1/controller/practice1.controller"
], function (Controller) {
	"use strict";

	QUnit.module("practice1 Controller");

	QUnit.test("I should test the practice1 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
