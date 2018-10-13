
var app = angular.module('mainModule', ['ngRoute']);


class Config {
    constructor($routeProvider: ng.route.IRouteProvider) {
        $routeProvider.when("/Home", {
            templateUrl: "app/views/templates/home.html",
            controller: "homeController as sub"
        })
            .when("/list/:id", {
                templateUrl: "App/views/templates/VideoList.html",
                controller: "TechVidsListCtrl"
            })
            //.when("/add", {
            //    templateUrl: "App/Templates/AddVideo.html",kkkk
            //    controller: "AddTechVideoCtrl"
            //})
            //.when("/edit/:id", {
            //    templateUrl: "App/Templates/EditVideo.html",
            //    controller: "EditTechVideoCtrl"
            //})
            .otherwise({
                redirectTo: '/Home'
            });
        //}
    }
}

Config.$inject = ['$routeProvider'];

app.config(Config);