'use strict';

App.controller("TopMenuCtrl",function ($scope,$rootScope, $route, $routeParams, $location) {

    $scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;


    $scope.opts = [
        {value: 1, text: "Home" ,id: "topmenu_li_home", href: "#/home"},
        {value: 2, text: "Products", id: "topmenu_li_product", href: "#/products"},
        {value: 3, text: "Co-Op", id: "topmenu_li_coop", href: "#/coop"},
        {value: 4, text: "Contact",id: "topmenu_li_contact", href: "#/contact"}
    ];

    $rootScope.idSelectedMenuItem = $scope.opts[0].id;

    $scope.setItemSelected = function(optId) {
        console.log("selected:" + optId);
        $rootScope.idSelectedMenuItem = optId;
    }
});