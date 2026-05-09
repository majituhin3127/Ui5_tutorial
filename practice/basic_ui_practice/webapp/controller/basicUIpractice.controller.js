sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("basicuipractice.controller.basicUIpractice", {
        onInit() {
        },
        onClick: function () {
            let name = this.getView().byId("input1").getValue();
            let newHeading = "welcome " + name + " to the world of SAP UI5";
            this.getView().byId("text1").setText(newHeading);
            this.getView().byId("button1").setText("updated");

        },

        onClick_simpleform: function () {
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("simpleform");
        }

    });
});