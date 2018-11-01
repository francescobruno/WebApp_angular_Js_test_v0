

class demoController implements ng.IController {

    //static $inject = ['$scope'];
    message: string = null;

    constructor(private $scope: ng.IScope) {
         


        this.init();
    }

    init = () => {

        this.message = 'Hello !'
    }

    $onInit() { }
}

app.controller('demoController', demoController)





