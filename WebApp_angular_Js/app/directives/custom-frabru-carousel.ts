class CustomCarousel implements ng.IDirective {
    restrict = 'E';
    //require = 'ngModel';

    replace = true;

    //isolated scope
    scope = {
        list: '=',
        check: '&',
    };

    controller = ($scope: ng.IScope) => {

        let self = $scope;

        self.addItem = () => {
            let temp = this.listaTest;
            this.listaTest.push('item added by directive');
        };

        self.clearList = () => {
            this.listaTest = null;
        };

    };

    templateUrl = 'app/views/templates/custom-carousel.html';

    listaTest: Array<string> = null;

    constructor(private $location: ng.ILocationService) { }


    link = (scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes, ctrl: any) => {
        let internalItems = new Array<string>();

        internalItems = scope.list;

        internalItems.push('fourth');

        this.listaTest = scope.list;

        
    }

    //check = () => {

    //    let t = this.scope.list;

    //}


    static factory(): ng.IDirectiveFactory {
        const directive = ($location: ng.ILocationService) => new CustomCarousel($location);
        directive.$inject = ['$location'];
        return directive;
    }
}

app.directive('customCarousel', CustomCarousel.factory());