var demoController = /** @class */ (function () {
    function demoController($scope) {
        //this.dataSvc = techVidsDataSvc;
        var _this = this;
        this.$scope = $scope;
        //static $inject = ['$scope'];
        this.message = null;
        this.init = function () {
            _this.message = 'Hello FraCu !';
        };
        this.init();
    }
    demoController.prototype.$onInit = function () { };
    return demoController;
}());
app.controller('demoController', demoController);
//# sourceMappingURL=demoController.js.map