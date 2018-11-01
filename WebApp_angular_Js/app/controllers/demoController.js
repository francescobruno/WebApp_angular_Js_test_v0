var demoController = /** @class */ (function () {
    function demoController($scope) {
        var _this = this;
        this.$scope = $scope;
        //static $inject = ['$scope'];
        this.message = null;
        this.init = function () {
            _this.message = 'Hello!';
        };
        this.init();
    }
    demoController.prototype.$onInit = function () { };
    return demoController;
}());
app.controller('demoController', demoController);
//# sourceMappingURL=demoController.js.map