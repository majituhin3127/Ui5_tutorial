sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/m/MessageBox"
], function (Controller, MessageToast, MessageBox) {
    "use strict";

    return Controller.extend("purchasereq.controller.View1", {

        onInit: function () {
            // nothing needed if model is in manifest
        },

        // 🔥 ADD ITEM (Auto item number 10,20,30...)
        onAddItem: function () {
            var oModel = this.getView().getModel();
            var aItems = oModel.getProperty("/items/results");

            var iNextItemNo = (aItems.length + 1) * 10;

            var oNewItem = {
                itemNo: iNextItemNo.toString(),
                material: "",
                description: "",
                quantity: 1,
                price: 0,
                plant: oModel.getProperty("/header/plant"),
                deliveryDate: new Date().toISOString().split("T")[0]
            };

            aItems.push(oNewItem);

            oModel.setProperty("/items/results", aItems);

            MessageToast.show("Item Added");
        },

        // 🔥 DELETE SELECTED ITEM
        onRemoveItem: function () {
            var oTable = this.byId("itemTable");
            var oSelectedItem = oTable.getSelectedItem();

            if (!oSelectedItem) {
                MessageBox.warning("Please select an item to delete");
                return;
            }

            var oModel = this.getView().getModel();
            var aItems = oModel.getProperty("/items/results");

            var iIndex = oTable.indexOfItem(oSelectedItem);

            aItems.splice(iIndex, 1);

            // 🔥 Recalculate item numbers (10,20,30...)
            aItems.forEach(function (item, index) {
                item.itemNo = ((index + 1) * 10).toString();
            });

            oModel.setProperty("/items/results", aItems);

            MessageToast.show("Item Removed");
        },

        // 🔥 SUBMIT PR (basic validation)
        onSubmit: function () {
            var oModel = this.getView().getModel();
            var aItems = oModel.getProperty("/items/results");

            if (!aItems.length) {
                MessageBox.error("Add at least one item");
                return;
            }

            MessageBox.success("PR Submitted Successfully");

            // Update approval status
            oModel.setProperty("/approval/status", "Submitted");
        },

        // 🔥 APPROVE
        onApprove: function () {
            var oModel = this.getView().getModel();

            oModel.setProperty("/approval/status", "Approved");

            var aHistory = oModel.getProperty("/approval/history");

            aHistory.unshift({
                approver: "You",
                comment: "Approved",
                date: new Date().toLocaleDateString()
            });

            oModel.setProperty("/approval/history", aHistory);

            MessageToast.show("Approved");
        },

        // 🔥 REJECT
        onReject: function () {
            var oModel = this.getView().getModel();

            oModel.setProperty("/approval/status", "Rejected");

            var aHistory = oModel.getProperty("/approval/history");

            aHistory.unshift({
                approver: "You",
                comment: "Rejected",
                date: new Date().toLocaleDateString()
            });

            oModel.setProperty("/approval/history", aHistory);

            MessageToast.show("Rejected");
        }

    });
});