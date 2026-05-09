/*global QUnit*/

sap.ui.define([
	"curdoperation/tuhincurd/controller/Tuhin_curd.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Tuhin_curd Controller");

	QUnit.test("I should test the Tuhin_curd controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
