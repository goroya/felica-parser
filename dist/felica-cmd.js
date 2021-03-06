"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FELICA_COMMAND;
(function (FELICA_COMMAND) {
    FELICA_COMMAND[FELICA_COMMAND["CC_POLLING"] = 0] = "CC_POLLING";
    FELICA_COMMAND[FELICA_COMMAND["RC_POLLING"] = 1] = "RC_POLLING";
    FELICA_COMMAND[FELICA_COMMAND["CC_REQUEST_SERVICE"] = 2] = "CC_REQUEST_SERVICE";
    FELICA_COMMAND[FELICA_COMMAND["RC_REQUEST_SERVICE"] = 3] = "RC_REQUEST_SERVICE";
    FELICA_COMMAND[FELICA_COMMAND["CC_REQUEST_RESPONCE"] = 4] = "CC_REQUEST_RESPONCE";
    FELICA_COMMAND[FELICA_COMMAND["RC_REQUEST_RESPONCE"] = 5] = "RC_REQUEST_RESPONCE";
    FELICA_COMMAND[FELICA_COMMAND["CC_READ_WITHOUT_ENCRYPTION"] = 6] = "CC_READ_WITHOUT_ENCRYPTION";
    FELICA_COMMAND[FELICA_COMMAND["RC_READ_WITHOUT_ENCRYPTION"] = 7] = "RC_READ_WITHOUT_ENCRYPTION";
    FELICA_COMMAND[FELICA_COMMAND["CC_WRITE_WITHOUT_ENCRYPTION"] = 8] = "CC_WRITE_WITHOUT_ENCRYPTION";
    FELICA_COMMAND[FELICA_COMMAND["RC_WRITE_WITHOUT_ENCRYPTION"] = 9] = "RC_WRITE_WITHOUT_ENCRYPTION";
    FELICA_COMMAND[FELICA_COMMAND["CC_SEARCH_SERVICE_CODE"] = 10] = "CC_SEARCH_SERVICE_CODE";
    FELICA_COMMAND[FELICA_COMMAND["RC_SEARCH_SERVICE_CODE"] = 11] = "RC_SEARCH_SERVICE_CODE";
    FELICA_COMMAND[FELICA_COMMAND["CC_REQUEST_SYSTEM_CODE"] = 12] = "CC_REQUEST_SYSTEM_CODE";
    FELICA_COMMAND[FELICA_COMMAND["RC_REQUEST_SYSTEM_CODE"] = 13] = "RC_REQUEST_SYSTEM_CODE";
    FELICA_COMMAND[FELICA_COMMAND["CC_AUTHENTICATION1"] = 16] = "CC_AUTHENTICATION1";
    FELICA_COMMAND[FELICA_COMMAND["RC_AUTHENTICATION1"] = 17] = "RC_AUTHENTICATION1";
    FELICA_COMMAND[FELICA_COMMAND["CC_AUTHENTICATION2"] = 18] = "CC_AUTHENTICATION2";
    FELICA_COMMAND[FELICA_COMMAND["RC_AUTHENTICATION2"] = 19] = "RC_AUTHENTICATION2";
    FELICA_COMMAND[FELICA_COMMAND["CC_READ"] = 20] = "CC_READ";
    FELICA_COMMAND[FELICA_COMMAND["RC_READ"] = 21] = "RC_READ";
    FELICA_COMMAND[FELICA_COMMAND["CC_Write"] = 22] = "CC_Write";
    FELICA_COMMAND[FELICA_COMMAND["RC_Write"] = 23] = "RC_Write";
    FELICA_COMMAND[FELICA_COMMAND["CC_REQUEST_SERVICE_V2"] = 50] = "CC_REQUEST_SERVICE_V2";
    FELICA_COMMAND[FELICA_COMMAND["RC_REQUEST_SERVICE_V2"] = 51] = "RC_REQUEST_SERVICE_V2";
    FELICA_COMMAND[FELICA_COMMAND["CC_GET_SYSTEM_STATUS"] = 56] = "CC_GET_SYSTEM_STATUS";
    FELICA_COMMAND[FELICA_COMMAND["RC_GET_SYSTEM_STATUS"] = 57] = "RC_GET_SYSTEM_STATUS";
    FELICA_COMMAND[FELICA_COMMAND["CC_REQUEST_SPECIFICATION_VERSION"] = 60] = "CC_REQUEST_SPECIFICATION_VERSION";
    FELICA_COMMAND[FELICA_COMMAND["RC_REQUEST_SPECIFICATION_VERSION"] = 60] = "RC_REQUEST_SPECIFICATION_VERSION";
    FELICA_COMMAND[FELICA_COMMAND["CC_RESET_MODE"] = 62] = "CC_RESET_MODE";
    FELICA_COMMAND[FELICA_COMMAND["RC_RESET_MODE"] = 62] = "RC_RESET_MODE";
    FELICA_COMMAND[FELICA_COMMAND["CC_AUTHENTICATION1V2"] = 64] = "CC_AUTHENTICATION1V2";
    FELICA_COMMAND[FELICA_COMMAND["RC_AUTHENTICATION1V2"] = 65] = "RC_AUTHENTICATION1V2";
    FELICA_COMMAND[FELICA_COMMAND["CC_AUTHENTICATION2V2"] = 66] = "CC_AUTHENTICATION2V2";
    FELICA_COMMAND[FELICA_COMMAND["RC_AUTHENTICATION2V2"] = 67] = "RC_AUTHENTICATION2V2";
    FELICA_COMMAND[FELICA_COMMAND["CC_ReadV2"] = 68] = "CC_ReadV2";
    FELICA_COMMAND[FELICA_COMMAND["RC_ReadV2"] = 69] = "RC_ReadV2";
    FELICA_COMMAND[FELICA_COMMAND["CC_WriteV2"] = 70] = "CC_WriteV2";
    FELICA_COMMAND[FELICA_COMMAND["RC_WriteV2"] = 71] = "RC_WriteV2";
    FELICA_COMMAND[FELICA_COMMAND["CC_UPDATE_RANDOM_ID"] = 76] = "CC_UPDATE_RANDOM_ID";
    FELICA_COMMAND[FELICA_COMMAND["RC_UPDATE_RANDOM_ID"] = 76] = "RC_UPDATE_RANDOM_ID";
})(FELICA_COMMAND = exports.FELICA_COMMAND || (exports.FELICA_COMMAND = {}));
var ServiceAttribute;
(function (ServiceAttribute) {
    ServiceAttribute[ServiceAttribute["RANDOM_SERVICE_READ_WRITE_ACCESS_AUTHENTICATION_REQUIRED"] = 8] = "RANDOM_SERVICE_READ_WRITE_ACCESS_AUTHENTICATION_REQUIRED";
    ServiceAttribute[ServiceAttribute["RANDOM_SERVICE_READ_WRITE_ACCESS_AUTHENTICATION_NOT_REQUIRED"] = 9] = "RANDOM_SERVICE_READ_WRITE_ACCESS_AUTHENTICATION_NOT_REQUIRED";
    ServiceAttribute[ServiceAttribute["RANDOM_SERVICE_READ_ONLY_ACCESS_AUTHENTICATION_REQUIRED"] = 10] = "RANDOM_SERVICE_READ_ONLY_ACCESS_AUTHENTICATION_REQUIRED";
    ServiceAttribute[ServiceAttribute["RANDOM_SERVICE_READ_ONLY_ACCESS_AUTHENTICATION_NOT_REQUIRED"] = 11] = "RANDOM_SERVICE_READ_ONLY_ACCESS_AUTHENTICATION_NOT_REQUIRED";
    ServiceAttribute[ServiceAttribute["CYCLE_SERVICE_READ_WRITE_ACCESS_AUTHENTICATION_REQUIRED"] = 12] = "CYCLE_SERVICE_READ_WRITE_ACCESS_AUTHENTICATION_REQUIRED";
    ServiceAttribute[ServiceAttribute["CYCLE_SERVICE_READ_WRITE_ACCESS_AUTHENTICATION_NOT_REQUIRED"] = 13] = "CYCLE_SERVICE_READ_WRITE_ACCESS_AUTHENTICATION_NOT_REQUIRED";
    ServiceAttribute[ServiceAttribute["CYCLE_SERVICE_READ_ONLY_ACCESS_AUTHENTICATION_REQUIRED"] = 14] = "CYCLE_SERVICE_READ_ONLY_ACCESS_AUTHENTICATION_REQUIRED";
    ServiceAttribute[ServiceAttribute["CYCLE_SERVICE_READ_ONLY_ACCESS_AUTHENTICATION_NOT_REQUIRED"] = 15] = "CYCLE_SERVICE_READ_ONLY_ACCESS_AUTHENTICATION_NOT_REQUIRED";
    ServiceAttribute[ServiceAttribute["PURSE_SERVICE_DIRECT_ACCESS_AUTHENTICATION_REQUIRED"] = 16] = "PURSE_SERVICE_DIRECT_ACCESS_AUTHENTICATION_REQUIRED";
    ServiceAttribute[ServiceAttribute["PURSE_SERVICE_DIRECT_ACCESS_AUTHENTICATION_NOT_REQUIRED"] = 17] = "PURSE_SERVICE_DIRECT_ACCESS_AUTHENTICATION_NOT_REQUIRED";
    ServiceAttribute[ServiceAttribute["PURSE_SERVICE_CALLBACK_ACCESS_DECREMENT_ACCESS_AUTHENTICATION_REQUIRED"] = 18] = "PURSE_SERVICE_CALLBACK_ACCESS_DECREMENT_ACCESS_AUTHENTICATION_REQUIRED";
    ServiceAttribute[ServiceAttribute["PURSE_SERVICE_CALLBACK_ACCESS_DECREMENT_ACCESS_AUTHENTICATION_NOT_REQUIRED"] = 19] = "PURSE_SERVICE_CALLBACK_ACCESS_DECREMENT_ACCESS_AUTHENTICATION_NOT_REQUIRED";
    ServiceAttribute[ServiceAttribute["PURSE_SERVICE_DECREMENT_ACCESS_AUTHENTICATION_REQUIRED"] = 20] = "PURSE_SERVICE_DECREMENT_ACCESS_AUTHENTICATION_REQUIRED";
    ServiceAttribute[ServiceAttribute["PURSE_SERVICE_DECREMENT_ACCESS_AUTHENTICATION_NOT_REQUIRED"] = 21] = "PURSE_SERVICE_DECREMENT_ACCESS_AUTHENTICATION_NOT_REQUIRED";
    ServiceAttribute[ServiceAttribute["PURSE_SERVICE_READ_ONLY_ACCESS_AUTHENTICATION_REQUIRED"] = 22] = "PURSE_SERVICE_READ_ONLY_ACCESS_AUTHENTICATION_REQUIRED";
    ServiceAttribute[ServiceAttribute["PURSE_SERVICE_READ_ONLY_ACCESS_AUTHENTICATION_NOT_REQUIRED"] = 23] = "PURSE_SERVICE_READ_ONLY_ACCESS_AUTHENTICATION_NOT_REQUIRED";
})(ServiceAttribute = exports.ServiceAttribute || (exports.ServiceAttribute = {}));
var BlockElementAccessMode;
(function (BlockElementAccessMode) {
    BlockElementAccessMode[BlockElementAccessMode["NOT_CASHBACK_ACCESS_TO_PURSE_SERVICE"] = 0] = "NOT_CASHBACK_ACCESS_TO_PURSE_SERVICE";
    BlockElementAccessMode[BlockElementAccessMode["CASHBACK_ACCESS_TO_PURSE_SERVICE"] = 1] = "CASHBACK_ACCESS_TO_PURSE_SERVICE";
})(BlockElementAccessMode = exports.BlockElementAccessMode || (exports.BlockElementAccessMode = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVsaWNhLWNtZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9mZWxpY2EtY21kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBWSxjQXlDWDtBQXpDRCxXQUFZLGNBQWM7SUFDeEIsK0RBQWlCLENBQUE7SUFDakIsK0RBQWlCLENBQUE7SUFDakIsK0VBQXlCLENBQUE7SUFDekIsK0VBQXlCLENBQUE7SUFDekIsaUZBQTBCLENBQUE7SUFDMUIsaUZBQTBCLENBQUE7SUFDMUIsK0ZBQWlDLENBQUE7SUFDakMsK0ZBQWlDLENBQUE7SUFDakMsaUdBQWtDLENBQUE7SUFDbEMsaUdBQWtDLENBQUE7SUFDbEMsd0ZBQTZCLENBQUE7SUFDN0Isd0ZBQTZCLENBQUE7SUFDN0Isd0ZBQTZCLENBQUE7SUFDN0Isd0ZBQTZCLENBQUE7SUFDN0IsZ0ZBQXlCLENBQUE7SUFDekIsZ0ZBQXlCLENBQUE7SUFDekIsZ0ZBQXlCLENBQUE7SUFDekIsZ0ZBQXlCLENBQUE7SUFDekIsMERBQWMsQ0FBQTtJQUNkLDBEQUFjLENBQUE7SUFDZCw0REFBZSxDQUFBO0lBQ2YsNERBQWUsQ0FBQTtJQUNmLHNGQUE0QixDQUFBO0lBQzVCLHNGQUE0QixDQUFBO0lBQzVCLG9GQUEyQixDQUFBO0lBQzNCLG9GQUEyQixDQUFBO0lBQzNCLDRHQUF1QyxDQUFBO0lBQ3ZDLDRHQUF1QyxDQUFBO0lBQ3ZDLHNFQUFvQixDQUFBO0lBQ3BCLHNFQUFvQixDQUFBO0lBQ3BCLG9GQUEyQixDQUFBO0lBQzNCLG9GQUEyQixDQUFBO0lBQzNCLG9GQUEyQixDQUFBO0lBQzNCLG9GQUEyQixDQUFBO0lBQzNCLDhEQUFnQixDQUFBO0lBQ2hCLDhEQUFnQixDQUFBO0lBQ2hCLGdFQUFpQixDQUFBO0lBQ2pCLGdFQUFpQixDQUFBO0lBQ2pCLGtGQUEwQixDQUFBO0lBQzFCLGtGQUEwQixDQUFBO0FBQzVCLENBQUMsRUF6Q1csY0FBYyxHQUFkLHNCQUFjLEtBQWQsc0JBQWMsUUF5Q3pCO0FBQ0QsSUFBWSxnQkFtQlg7QUFuQkQsV0FBWSxnQkFBZ0I7SUFDMUIsK0pBQXFGLENBQUE7SUFDckYsdUtBQXFGLENBQUE7SUFDckYsOEpBQXFGLENBQUE7SUFDckYsc0tBQXFGLENBQUE7SUFFckYsOEpBQXFGLENBQUE7SUFDckYsc0tBQXFGLENBQUE7SUFDckYsNEpBQXFGLENBQUE7SUFDckYsb0tBQXFGLENBQUE7SUFFckYsc0pBQXFGLENBQUE7SUFDckYsOEpBQXFGLENBQUE7SUFDckYsNExBQXFGLENBQUE7SUFDckYsb01BQXFGLENBQUE7SUFDckYsNEpBQXFGLENBQUE7SUFDckYsb0tBQXFGLENBQUE7SUFDckYsNEpBQXFGLENBQUE7SUFDckYsb0tBQXFGLENBQUE7QUFDdkYsQ0FBQyxFQW5CVyxnQkFBZ0IsR0FBaEIsd0JBQWdCLEtBQWhCLHdCQUFnQixRQW1CM0I7QUFDRCxJQUFZLHNCQUdYO0FBSEQsV0FBWSxzQkFBc0I7SUFDaEMsbUlBQTRDLENBQUE7SUFDNUMsMkhBQTRDLENBQUE7QUFDOUMsQ0FBQyxFQUhXLHNCQUFzQixHQUF0Qiw4QkFBc0IsS0FBdEIsOEJBQXNCLFFBR2pDIn0=