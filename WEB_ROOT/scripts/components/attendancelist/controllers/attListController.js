'use strict';
define(function(require) {
    var module = require('components/attendancelist/module');
    
    module.controller('attListController', ['$scope', '$q', '$http', '$attrs', 'attPQService', function($scope, $q, $http, $attrs, attPQService) { // Begin controller
        $scope.curStud = $attrs.ngCurStudent;
        
        loadingDialog();
        
        // request object
        var datasource = {
            "method": "POST",
            "url": "/ws/schema/query/us.pcps.individual.att.flattened",
            "headers": {
             "Content-Type": "application/json",
             "Accept": "application/json"
           },
            "params": {"pagesize": 0},
            "data":{"id": $scope.curStud},
            "dataType": "json"
        };
        
        let getAttList = attPQService.getAttData(datasource).then(function(retData) {
            if(!retData.record) {
                console.log("attPQService returned no data.");
            }
            else {
                $scope.absList = retData.record;
            }
                closeLoading();
        });
        
        /*
        $q.all([getAttList]).then(function (res) {
            console.log($scope.absList);

            
        });
        
        */
    }]); // End Controller
});