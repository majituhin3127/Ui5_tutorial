sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
], function (Controller, MessageBox) {
    "use strict";

    return Controller.extend("basicuipractice.controller.simpleForm", {

        onInit: function () {
        },

        onPress: function () {
            var oInput = this.getView().byId("_IDGenInput");
            var name = oInput.getValue();

            if (name === "") {
                oInput.setValueState("Error");
                oInput.setValueStateText("Fill the name");

                // Optional MessageBox
                MessageBox.warning("Please enter your name");

            } else {
                oInput.setValueState("None");

                MessageBox.success("Form submitted successfully");
            }
        }

    });
});