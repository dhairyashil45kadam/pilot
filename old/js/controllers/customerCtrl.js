function customerCtrl ($scope, $location, $stateParams, $rootScope, $timeout, $window, Customer) {
	//$scope.currentPage = 1;
  //$scope.totalItems = 0;
  $scope.pageSize = 5;
  //$scope.items = 5;
  $scope.searchText = '';
  $scope.sortby_column = '';
  $scope.sort_type = '';
  $scope.basepgHref = "/test";
  $scope.currentPage = $stateParams.pgno;
  $scope.dots = "...";
  $scope.adjacent = 2;
  //$scope.total = 13;
  getData();

    function getData() {
      
		Customer.query({page: $scope.currentPage,size:$scope.pageSize,search:$scope.searchText,sortby_column:$scope.sortby_column,sort_type:$scope.sort_type}, function(data) {
            $scope.currentPage = $stateParams.pgno;
            $scope.activity = [];
            $scope.total = data.totalCount;
            $scope.startItem = ($scope.currentPage - 1) * $scope.pageSize + 1;
            $scope.endItem = $scope.currentPage * $scope.pageSize;
            if ($scope.endItem > $scope.total) {$scope.endItem = $scope.total;}
              angular.forEach(data.PortalActivity, function(temp){
                  $scope.activity.push(temp);
              });            
        });
    }

    $scope.pageChanged = function() {
        getData();
    }
    $scope.pageSizeChanged = function(pageSize) {
      //alert(pageSize);
        $scope.pageSize = pageSize;
        $scope.currentPage = 1;
        getData();
    }
    $scope.setPage = function(pageNo) {
        $scope.currentPage = pageNo;
        getData();
    };
    $scope.searchTextChanged = function(searchText) {
        $scope.currentPage = 1;
        $scope.searchText = searchText;
        getData();
    }
    $scope.sort_by = function(predicate) {
      $scope.sortby_column = predicate;
      $scope.sort_type = !$scope.reverse;
      getData();
      $scope.predicate = predicate;
      $scope.reverse = !$scope.reverse;
    };
}



angular.module('customerApi', ['ngResource']).
factory('Customer', function($resource) {
  var Customer = $resource('http://localhost/hyperapp/api/customer/:method/:id', {}, {
    query: {method:'GET', params: {method:'index'} }
  });

  return Customer;
});