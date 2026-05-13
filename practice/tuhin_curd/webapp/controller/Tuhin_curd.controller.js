sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/model/Sorter"
], function (Controller, Filter, FilterOperator, Sorter) {
    "use strict";

    return Controller.extend("curdoperation.tuhincurd.controller.Tuhin_curd", {

        onInit: function () {
        },

        // F4 Help
        onHelpF4: function () {

            if (this.dialog === undefined) {

                this.dialog = sap.ui.xmlfragment(
                    this.getView().getId(),
                    "curdoperation.tuhincurd.fragments.F4Help",
                    this
                );

                this.getView().addDependent(this.dialog);
            }

            this.dialog.open();
        },

        // Close Dialog
        onCloseDialog: function () {
            this.dialog.close();
        },

        // Select Row From F4
        onPressRowFromF4Help: function (oEvent) {

            var empId = oEvent.getSource()
                .getBindingContext("oModel")
                .getObject().Empid;

            this.byId("oIpEmpId").setValue(empId);

            this.dialog.close();
        },
        onPressRow:function(oEvent){
            var empId = oEvent.getSource().getBindingContext("oModel").getObject().Empid;
            this.getOwnerComponent().getRouter().navTo("Formatter", {
                key: empId
            });

        },

        // GO Button
        onPressGo: function () {

            var aFilters = [];
            var aSorters = [];

            var name = this.byId("oIpName").getValue();
            var empId = this.byId("oIpEmpId").getValue();

            // Filter Logic
            if (empId !== "") {

                aFilters.push(
                    new Filter("Empid", FilterOperator.EQ, empId)
                );
            }

            if (name !== "") {

                aFilters.push(
                    new Filter("Name", FilterOperator.Contains, name)
                );
            }

            this.byId("oTabEmp")
                .getBinding("items")
                .filter(aFilters);

            // Grouping Logic
            var groupField = this.byId("oCBGroupField").getSelectedKey();
            var groupOrder = this.byId("oRBGGroupOrder").getSelectedIndex();

            if (groupField !== "" && groupOrder !== -1) {

                aSorters.push(

                    new Sorter(
                        groupField,
                        (groupOrder === 0) ? false : true,

                        function (oBindingContext) {

                            if (groupField === "Skill") {

                                var skill = oBindingContext.getObject().Skill;

                                return {
                                    key: skill,
                                    text: skill
                                };
                            }

                            else if (groupField === "Desig") {

                                var desig = oBindingContext.getObject().Desig;

                                return {
                                    key: desig,
                                    text: desig
                                };
                            }
                        }
                    )
                );
            }

            // Sorting Logic
            var sortField = this.byId("oCBSortField").getSelectedKey();
            var sortOrder = this.byId("oRBGSortOrder").getSelectedIndex();

            if (sortField !== "" && sortOrder !== -1) {

                aSorters.push(
                    new Sorter(
                        sortField,
                        (sortOrder === 0) ? false : true
                    )
                );
            }

            this.byId("oTabEmp")
                .getBinding("items")
                .sort(aSorters);
        },

        // Reset Button
        onPressReset: function () {

            this.byId("oIpEmpId").setValue("");
            this.byId("oIpName").setValue("");

            this.byId("oCBSortField").setSelectedKey("");
            this.byId("oRBGSortOrder").setSelectedIndex(-1);

            this.byId("oCBGroupField").setSelectedKey("");
            this.byId("oRBGGroupOrder").setSelectedIndex(-1);

            this.byId("oTabEmp")
                .getBinding("items")
                .filter([]);

            this.byId("oTabEmp")
                .getBinding("items")
                .sort([]);
        }

    });
});