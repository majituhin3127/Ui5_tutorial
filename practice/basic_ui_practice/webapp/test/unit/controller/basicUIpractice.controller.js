/*global QUnit*/

sap.ui.define([
	"basicuipractice/controller/basicUIpractice.controller"
], function (Controller) {
	"use strict";

	QUnit.module("basicUIpractice Controller");

	QUnit.test("I should test the basicUIpractice controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
