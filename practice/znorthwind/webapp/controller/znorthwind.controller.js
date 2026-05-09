sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("znorthwind.controller.znorthwind", {
        onInit() {
        },
        onClick:function(oEvent){
            var source = oEvent.getSource();
            var path = source.getBindingContext().getPath();
            var oModel= source.getModel();
            var oCategoryId = oModel.getProperty(path).CategoryID;
            this.getOwnerComponent().getRouter().navTo("Products",
                {CategoryId:oCategoryId}
            );


        }
        // onClick: function (oEvent) {
        //     debugger
        //     var oItem = oEvent.getSource();
        //     var oContext = oItem.getBindingContext();

        //     // var oCategoryId = oContext.getProperty("CategoryID"); // correct name

        //     // this.getOwnerComponent().getRouter().navTo("Products", {
        //     //     CategoryId: oCategoryId
        //     // });
        // }
    });
});