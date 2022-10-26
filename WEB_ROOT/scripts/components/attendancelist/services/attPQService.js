'use strict';
define(function(require) {
    var module = require('components/attendancelist/module');
    
    module.factory('attPQService', function($http) {
        return {
            getAttData: function(datasource) {
                return $http(datasource).then(function successCallback(response) {
                    console.log("success");
                    return response.data;
                },
                function errorCallback(response) {
                    console.log(response);
                });
                
            }
        }
    });
});