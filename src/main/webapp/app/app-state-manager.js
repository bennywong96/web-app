"use strict";

(function () {

    angular.module('accountApp').config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/dashboard");

        $stateProvider.state("dashboard", {
            url: "/dashboard",
            templateUrl: "app/feature/dashboard/dashboard.html"
        }).state("account", {
                url: "/account",
                templateUrl: "app/feature/account/account.html"
        }).state("trainee", {
            url: "/trainee",
            templateUrl: "app/feature/trainee/trainee.html"
        }).state("book", {
            url: "/book",
            templateUrl: "app/feature/book/book.html"
        })

    });
}());