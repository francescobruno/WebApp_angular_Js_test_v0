class HomeController implements ng.IController {

    //static $inject = ['$scope'];
    message: string = null;
    items: Array<string> = null;

    constructor(private $scope: ng.IScope) {

        this.init();
    }

    init = () => {

        this.message = " i'm HomeController!";
        this.items = new Array<string>();
        this.items.push('first');
        this.items.push('second');
        this.items.push('third');
    }

    addItem = () => {
        this.items.push('added by ctrl');

    }

    clear = () => {
        this.items = null;
    }

    $onInit() { }
}

app.controller('homeController', HomeController)





