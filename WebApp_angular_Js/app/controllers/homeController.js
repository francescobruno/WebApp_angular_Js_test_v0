var HomeController = /** @class */ (function () {
    function HomeController($scope) {
        var _this = this;
        this.$scope = $scope;
        //static $inject = ['$scope'];
        this.message = null;
        this.items = null;
        this.init = function () {
            _this.message = " i'm HomeController!";
            _this.items = new Array();
            _this.items.push('first');
            _this.items.push('second');
            _this.items.push('third');
        };
        this.addItem = function () {
            _this.items.push('added by ctrl');
        };
        this.clear = function () {
            _this.items = null;
        };
        this.init();
    }
    HomeController.prototype.$onInit = function () { };
    return HomeController;
}());
app.controller('homeController', HomeController);
//# sourceMappingURL=homeController.js.map