/*global QUnit*/

sap.ui.define([
	"znorthwind/controller/znorthwind.controller"
], function (Controller) {
	"use strict";

	QUnit.module("znorthwind Controller");

	QUnit.test("I should test the znorthwind controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
