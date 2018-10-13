var HomeController = /** @class */ (function () {
    function HomeController($scope) {
        var _this = this;
        this.$scope = $scope;
        //static $inject = ['$scope'];
        this.message = null;
        this.init = function () {
            _this.message = " i'm HomeController!";
        };
        this.init();
    }
    HomeController.prototype.$onInit = function () { };
    return HomeController;
}());
app.controller('homeController', HomeController);
//# sourceMappingURL=homeController.js.map