/*global QUnit*/

sap.ui.define([
	"modelbinding/controller/Modelbinding.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Modelbinding Controller");

	QUnit.test("I should test the Modelbinding controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
