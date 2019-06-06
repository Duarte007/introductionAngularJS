var app = angular.module('tutorialAngular', ["ngRoute", "tutorialController"]);

app.config(function ($routeProvider) {
    $routeProvider

        .when("/", {
            templateUrl: "../views/home.html"
        })
        .when("/tutorial", {
            templateUrl: "views/tutorial.html",
            controller: "TutorialController"
        })

})