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
                    text: "Products vs Price and Stock"
                },

                valueAxis: {
                    title: {
                        visible: true,
                        text: "Product Price"
                    }
                },
                categoryAxis: {
                    title: {
                        visible: true,
                        text: "Product Name and ID"
                    }
                }

            });
             var dataSet = new FlattenedDataset({

                data: {
                    path: "/Products"
                },

                dimensions: [{
                    name: "ProductName",
                    value: "{ProductName}"
                }, {
                    name: "ProductID",
                    value: "{ProductID}"
                }],

                measures: [{
                    name: "UnitPrice",
                    value: "{UnitPrice}"
                }, {
                    name: "UnitsInStock",
                    value: "{UnitsInStock}"
                }]

            });
             this.oVizFrame.destroyDataset();

            this.oVizFrame.setDataset(dataSet);
             // add the feeds here

            this.oVizFrame.addFeed(new FeedItem({
                uid: "categoryAxis",
                type: "Dimension",
                values: ["ProductName", "ProductID"]
            }));

            this.oVizFrame.addFeed(new FeedItem({
                uid: "valueAxis",
                type: "Measure",
                values: ["UnitPrice", "UnitsInStock"]
            }));
        }
    });
});