﻿

class demoController implements ng.IController {

    //static $inject = ['$scope'];
    message: string = null;

    constructor(private $scope: ng.IScope) {
         

        //this.dataSvc = techVidsDataSvc;

        this.init();
    }

    init = () => {

        this.message = 'Hello FraCu !'
    }

    $onInit() { }
}

app.controller('demoController', demoController)




