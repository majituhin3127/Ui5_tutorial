sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/viz/ui5/data/FlattenedDataset",
    "sap/viz/ui5/controls/common/feeds/FeedItem"
], (Controller, FlattenedDataset, FeedItem) => {
    "use strict";

    return Controller.extend("charts.controller.View1", {
        onInit() {
             this.oVizFrame = this.byId("oVizFrame");
             this.oVizFrame.setVizProperties({

                plotArea: {
                    dataLabel: {
                        visible: true,
                        type: "value"
                    }
                },

                title: {
                    visible: true,
                    text: "Employee Vs Salary"
                },

                valueAxis: {
                    title: {
                        visible: true,
                        text: "Employee Salary"
                    }
                },
                categoryAxis: {
                    title: {
                        visible: true,
                        text: "Employee Name and ID"
                    }
                }

            });
             var dataSet = new FlattenedDataset({

                data: {
                    path: "/EmployeeSet"
                },

                dimensions: [{
                    name: "Name",
                    value: "{Name}"
                }, {
                    name: "Empid",
                    value: "{Empid}"
                }],

                measures: [{
                    name: "Salary",
                    value: "{Salary}"
                }, {
                    name: "Fixedsalary",
                    value: "{Fixedsalary}"
                }]

            });
             this.oVizFrame.destroyDataset();

            this.oVizFrame.setDataset(dataSet);
             // add the feeds here

            this.oVizFrame.addFeed(new FeedItem({
                uid: "categoryAxis",
                type: "Dimension",
                values: ["Name", "Empid"]
            }));

            this.oVizFrame.addFeed(new FeedItem({
                uid: "valueAxis",
                type: "Measure",
                values: ["Salary", "Fixedsalary"]
            }));
        }
    });
});