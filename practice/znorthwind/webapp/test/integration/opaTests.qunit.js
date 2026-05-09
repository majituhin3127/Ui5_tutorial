/* global QUnit */
QUnit.config.autostart = false;

sap.ui.require(["znorthwind/test/integration/AllJourneys"
], function () {
	QUnit.start();
});
