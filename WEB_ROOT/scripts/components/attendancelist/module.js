'use strict';
define(function(require) {
    var angular = require('angular');
    require('components/customization/customizationModule')
    return angular.module('attListApp', ['customizationModule']);
});