// (c) 2014 Don Coleman
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

var api_url = "http://10.45.18.223:3000/api/v1";

app = angular.module('viagram', ['ionic', 'ui.router', 'nfcFilters'])

    .config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

        $stateProvider

            .state('addDoctor', {
                url: '/doctor/add',
                    templateUrl: 'addDoctor.html',
                controller: 'DoctorCtrl'
            })

            .state('home', {
                url: '/',
                    templateUrl: 'home.html',
                controller: 'MainController'
            })
        $urlRouterProvider.otherwise("/");
    })
    .controller('MainController', function(){})
  /*  .controller('MainController', function ($scope, nfcService) {

        $scope.tag = nfcService.tag;
        $scope.clear = function () {
            nfcService.clearTag();
        };

    })

    .factory('nfcService', function ($rootScope, $ionicPlatform, $http, $state) {

        var tag = {};

        $ionicPlatform.ready(function () {

            nfc.addNdefListener(function (nfcEvent) {
                alert(JSON.stringify(nfcEvent.tag, null, 4));
                $rootScope.$apply(function () {
                    angular.copy(nfcEvent.tag, tag);
                    // if necessary $state.go('some-route')
                });
            }, function () {
                alert("Listening for NDEF Tags.");
            }, function (reason) {
                alert("Error adding NFC Listener " + reason);
            });

            nfc.addTagDiscoveredListener(function (nfcEvent) {
                var id = nfcEvent.tag.id;

                $http.get(api_url + '/checkCard/' + id).then(function (response) {
                    alert(JSON.stringify(response.data));

                    if (response.data['users'].length == 0 && response.data['users'].length == 0) {
                      $state.go("test");
                    } else {
                        alert("i have datas");
                    }

                }, function (response) {
                    alert(JSON.stringify(response));
                });
            });
        });


        return {
            tag: tag,

            clearTag: function () {
                angular.copy({}, this.tag);
            }
        };
    })*/


    .controller("DoctorCtrl", function () {
    });