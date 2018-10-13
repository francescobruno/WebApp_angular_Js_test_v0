class HomeController implements ng.IController {

    //static $inject = ['$scope'];
    message: string = null;

    constructor(private $scope: ng.IScope) {

        this.init();
    }

    init = () => {

        this.message = " i'm HomeController!";
    }

    $onInit() { }
}

app.controller('homeController', HomeController)





