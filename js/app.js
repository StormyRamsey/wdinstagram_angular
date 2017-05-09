"use strict";

(function(){
  angular.module("wdinstagram", ["ui.router"])
})

.config([
  "stateProvider",
  RouterFunction
])

.controller("WdinstagramIndexController", [
  WdinstagramIndexControllerFunction
])

function RouterFunction($stateProvider)
  $stateProvider
  .state("wdinstagramIndex", {
    url:"/wdinstagrams",
    templateUrl: "js/ng-views/index.html",
    controller: "WdinstagramIndexController",
    controllerAs: "vm"
  })

  .state("wdinstagramShow",{
    url: "/wdinstagrams/:id",
    templateUrl: "js/ng-views/show.html"
  })

function WdinstagramIndexControllerFunction() {
  this.wdinstagrams = [

  ]
}

// reference lesson: https://github.com/ga-wdi-lessons/angular-resources
