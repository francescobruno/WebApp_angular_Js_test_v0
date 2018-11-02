var CustomCarousel = /** @class */ (function () {
    function CustomCarousel($location) {
        var _this = this;
        this.$location = $location;
        this.restrict = 'E';
        //require = 'ngModel';
        this.replace = true;
        //isolated scope
        this.scope = {
            list: '=',
            check: '&',
        };
        this.controller = function ($scope) {
            var self = $scope;
            self.addItem = function () {
                var temp = _this.listaTest;
                _this.listaTest.push('item added by directive');
            };
            self.clearList = function () {
                _this.listaTest = null;
            };
        };
        this.templateUrl = 'app/views/templates/custom-carousel.html';
        this.listaTest = null;
        this.link = function (scope, element, attrs, ctrl) {
            var internalItems = new Array();
            internalItems = scope.list;
            internalItems.push('fourth');
            _this.listaTest = scope.list;
        };
    }
    //check = () => {
    //    let t = this.scope.list;
    //}
    CustomCarousel.factory = function () {
        var directive = function ($location) { return new CustomCarousel($location); };
        directive.$inject = ['$location'];
        return directive;
    };
    return CustomCarousel;
}());
app.directive('customCarousel', CustomCarousel.factory());
//# sourceMappingURL=custom-frabru-carousel.js.map