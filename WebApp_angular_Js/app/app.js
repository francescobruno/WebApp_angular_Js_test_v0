var app = angular.module('mainModule', ['ngRoute']);
var Config = /** @class */ (function () {
    function Config($routeProvider) {
        $routeProvider.when("/Home", {
            templateUrl: "app/views/templates/home.html",
            controller: "homeController as sub"
        })
            .when("/list/:id", {
            templateUrl: "App/views/templates/VideoList.html",
            controller: "TechVidsListCtrl"
        })
            //.when("/add", {
            //    templateUrl: "App/Templates/AddVideo.html",
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
    return Config;
}());
Config.$inject = ['$routeProvider'];
app.config(Config);
//# sourceMappingURL=app.js.map