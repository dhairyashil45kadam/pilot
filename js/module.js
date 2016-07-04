var app = angular.module('PilotApp', ['ui.bootstrap', 'ngLoadingSpinner', 'ui.router', 'bw.paging', 'ngCookies', 'driverApi','localytics.directives'])
.run(function($rootScope, $location, $http) {
    $rootScope.location = $location; 
});

app.run([
            '$rootScope',
            '$state',
            'driverInfoSteps',
            '$location',
            function($rootScope, $state, driverInfoSteps, $location) {
                // Register listener to watch route changes
                $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
                      var str = $location.path();
                      if (str.indexOf('/driver_info/')==0) {
                        var canGoToStep = false;
                        // only go to next if previous is valid
                        var toStateIndex = _.findIndex(driverInfoSteps, function(formStep) {
                          return formStep.uiSref === toState.name;
                          
                        });
                        
                        console.log('toStateIndex',toStateIndex)
                        if(toStateIndex === 0) {
                          canGoToStep = true;
                        } else {
                          canGoToStep = driverInfoSteps[toStateIndex - 1].valid;
                        }
                        console.log('canGoToStep', toState.name, canGoToStep);
                        
                        // Stop state changing if the previous state is invalid
                        if(!canGoToStep) {
                            // Abort going to step
                            event.preventDefault();
                        }
                      };
                });
              
              

            }


        ]);