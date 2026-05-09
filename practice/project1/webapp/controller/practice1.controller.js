sap.ui.define([
    "sap/ui/core/mvc/Controller",
     "sap/m/MessageToast",
     "sap/m/MessageBox"
], (Controller,MassageToast) => {
    "use strict";

    return Controller.extend("project1.controller.practice1", {
        onInit() {
            
        },
         click_me:function(){
            MassageToast.show("You clicked: " + evt.getSource().getId());
            
        }
    });
});