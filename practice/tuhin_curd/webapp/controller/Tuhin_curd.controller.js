sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("curdoperation.tuhincurd.controller.Tuhin_curd", {
        onInit() {
        },
        // onPress:function(){
        //     var oRouter = this.getOwnerComponent().getRouter();
        //     oRouter.navTo("Formatter");
        // }
        onHelpF4: function () {
            if (this.dialog === undefined) {
                //xmlfragmaint takes 3 values 
                //1.the unic id
                //2.the path of the fragmentswith the webapp path
                //3. this(its very imp)
                this.dialog = sap.ui.xmlfragment(
                    this.getView().getId(),
                    "curdoperation.tuhincurd.fragments.F4Help",
                    this
                );
                this.getView().addDependent(this.dialog);
            }

            this.dialog.open();
        },
        onCloseDialog: function () {
            this.dialog.close();
        },
        onPressRowFromF4Help: function (oEvent) {
            var empId = oEvent.getSource().getBindingContext("oModel").getObject().Empid;

            this.byId("oIpEmpId").setValue(empId);

            this.dialog.close();
        }
    });
});