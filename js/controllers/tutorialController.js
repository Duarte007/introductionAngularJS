angular.module('tutorialController', [])
    .controller("TutorialController", ["$scope", "tutorialService", function ($scope, tutorialService) {
        $scope.tutorialObject = {};
        $scope.tutorialObject.title = "Main Page";
        $scope.tutorialObject.name = "Matheus Duarte";
        $scope.tutorialObject.subTitle = "Sub title";
        $scope.tutorialObject.bindOutput = 2;

        $scope.timesTwo = function () {
            let num = $scope.tutorialObject.bindOutput;
            $scope.tutorialObject.bindOutput = tutorialService.timesTwo(num);
        }
    }])
    .directive("mdElementTest", function () {
        return {
            restrict: "E",
            template: "<div> Template para teste </div>"
        }
    })
    .directive("mdAttributeTest", function () {
        return {
            restrict: "A",
            template: "<div> Atributo para teste </div>"
        }
    })
    .factory("tutorialService", function () {
        var tutorialService = {};

        tutorialService.timesTwo = function (num) {
            return num * 2;
        };

        return tutorialService;
    });