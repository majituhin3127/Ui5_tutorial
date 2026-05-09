sap.ui.define([], function () {
    "use strict";

    return {
        formatStatus:function(Status){
            var statusDesc = "";
            if(Status === "ACTIVE"){
                return "Success";
            }else{
                return "Error";
            }

        },
        formatrating: function (Rating) {
            var ratingDesc = "";

            if (Rating === 5) {
                ratingDesc = " (Outstanding)";
            } else if (Rating === 4) {
                ratingDesc = " (Commendable)";
            } else if (Rating === 3) {
                ratingDesc = " (Met Expectation)";
            } else if (Rating === 2) {
                ratingDesc = " (Needs Improvement)";
            } else if (Rating === 1) {
                ratingDesc = " (PIP)";
            }

            return Rating + ratingDesc;
        }
    };
});