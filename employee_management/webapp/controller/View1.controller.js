sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
], (Controller, MessageBox) => {
    "use strict";

    return Controller.extend("employeemanagement.controller.View1", {

        onInit() {

        },

        onSavePress: function () {

            // Reset Value States

            this.getView().byId("oIDInput").setValueState("None");
            this.getView().byId("oEmailInput").setValueState("None");

            // Regular Expressions

            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

            const empIdRegex = /^\d{4}$/;

            // Get Values

            var id = this.getView().byId("oIDInput").getValue();

            var email = this.getView().byId("oEmailInput").getValue();

            var flag = false;

            // Empty Validation for Employee ID

            if (id === "") {

                this.getView().byId("oIDInput").setValueState("Error");

                this.getView().byId("oIDInput").setValueStateText(
                    "ID cannot be empty"
                );

                flag = true;

            }

            // Regex Validation for Employee ID

            else if (!empIdRegex.test(id)) {

                this.getView().byId("oIDInput").setValueState("Error");

                this.getView().byId("oIDInput").setValueStateText(
                    "Employee ID must contain exactly 4 digits"
                );

                flag = true;

            }

            // Empty Validation for Email

            if (email === "") {

                this.getView().byId("oEmailInput").setValueState("Error");

                this.getView().byId("oEmailInput").setValueStateText(
                    "Email cannot be empty"
                );

                flag = true;

            }

            // Regex Validation for Email

            else if (!emailRegex.test(email)) {

                this.getView().byId("oEmailInput").setValueState("Error");

                this.getView().byId("oEmailInput").setValueStateText(
                    "Please enter a valid email address"
                );

                flag = true;

            }

            // Final Message

            if (flag) {

                MessageBox.error(
                    "Please correct the highlighted fields."
                );

            } else {

                MessageBox.success(
                    "Employee details saved successfully."
                );

            }

        }

    });

});