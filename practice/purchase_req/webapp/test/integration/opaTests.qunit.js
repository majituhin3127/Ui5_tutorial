/* global QUnit */
QUnit.config.autostart = false;

sap.ui.require(["purchasereq/test/integration/AllJourneys"
], function () {
	QUnit.start();
});
