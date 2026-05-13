sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "curdoperation/tuhincurd/model/formatter"
], (Controller, formatter) => {
    "use strict";

    return Controller.extend("curdoperation.tuhincurd.controller.Formatter", {
        f: formatter,
        onInit() {
            this.getOwnerComponent().getRouter().getRoute("Formatter").attachPatternMatched(this.onPatternMatched, this);
        },
        onPatternMatched: function (oEvent) {
            var empId = oEvent.getParameter("arguments").key;
            this.empId =empId;
            this.getView().bindElement("oModel>/EmployeeSet('" + empId + "')");
        },

        // onSubmit: function () {
        //     var valueFromSel = this.byId("oSEName").getSelectedKey();
        //     var valueFromCB = this.byId("oCBName").getSelectedKey();
        //     var valueFromMCB = this.byId("oMCBName").getSelectedKeys();
        //     var valueFromRBG = this.byId("oRBGName").getSelectedIndex();
        // }


        // onClick_simpleform: function () {
        //     var oRouter = this.getOwnerComponent().getRouter();
        //     oRouter.navTo("simpleform");
        // }

        getEmpId:function(oEvent){
            var empId = oEvent.getSource().getBindingContext("oModel").getObject().Empid; 
        }

    });
});