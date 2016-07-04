(function(){
    angular.module('ngLoadingSpinner', ['angularSpinner'])
    .directive('usSpinner',   ['$http', '$rootScope' ,function ($http, $rootScope){
        return {
            link: function (scope, elm, attrs)
            {
                $rootScope.spinnerActive = false;
                scope.isLoading = function () {					
                    return $http.pendingRequests.length > 0;
                };

                scope.$watch(scope.isLoading, function (loading)
                {
                    $rootScope.spinnerActive = loading;
                    if(loading){
						//$scope.isLoading_back = false;
                        elm.removeClass('ng-hide');
						//elm.removeClass('veil');
                    }else{
						//$scope.isLoading_back = true;
                        elm.addClass('ng-hide');
						//elm.addClass('veil');
                    }
                });
            }
        };

    }]);
}).call(this);