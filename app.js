'use strict';

var app = angular.module('app', ['ngDropdowns']);

app.controller('AppCtrl', function($scope) {
  $scope.ddSelectOptions = [
     {
      text: 'Lamborghini  Aventador',
      value: 'SGD1234F',
      iconCls: 'Id - 1'
    }, {
      text: 'Skoda Aventador',
      value: 'SGD1234g',
      iconCls: 'Id - 2'
    }, 
    
  ];
  

  $scope.ddSelectSelected = {
    text: "Select Vehicles"
  };

  $scope.ddMenuOptions = [
     {
      text: 'Li Nanxing',
      iconCls: 'Id - 1'
    }, {
      text: 'Li Yinjihu',
       iconCls: 'Id - 2'
    }, {
      divider: true
    },
  ];
});
