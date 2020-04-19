


import axios from 'axios';


angular.module('starter.controllers', [])



.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope, $stateParams, $rootScope) {
  $rootScope.categories = [
    { title: 'Multiplayer1', id: 0 },
    { title: 'Multiplayer2', id: 1 },
    { title: 'Multiplayer3', id: 2 },
    { title: 'Multiplayer4', id: 3 },
    { title: 'Multiplayer5', id: 4 },
    { title: 'Multiplayer6', id: 5 },
  ];

  console.log("gelen id:"+$stateParams.gameId)
  console.log("gelen id:"+$rootScope.categories[1].id);




})

.controller('PlaylistCtrl', function($scope, $stateParams,$rootScope) {




  $scope.games = [
    { title: 'Games1', id: 0 ,categoryId: 1},
    { title: 'Games2', id: 1 ,categoryId: 1},
    { title: 'Games3', id: 2 ,categoryId: 1},
    { title: 'Games4', id: 3 ,categoryId: 2},
    { title: 'Games5', id: 4 ,categoryId: 2},
    { title: 'Games6', id: 5 ,categoryId: 3},
    { title: 'Games7', id: 6 ,categoryId: 3},
    { title: 'Games8', id: 7 ,categoryId: 4},
    { title: 'Games9', id: 8 ,categoryId: 3}
  ];

  console.log("gelen id:"+$stateParams.gameId);
  console.log("gelen id:"+$stateParams.gameId);
  console.log("gelen id:"+$scope.games[$stateParams.gameId].categoryId);
  $scope.gameID = $stateParams.gameId


});
