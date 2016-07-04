    // our controller for the form
// =============================================================================
app.controller('transporterMasterController',[
    '$scope', '$q', '$timeout', function($scope,$q,$timeout) {

      $scope.formData = {};
      $scope.truckTypeList = [
       { id: 1, Name: 'Inbound ' },
       { id: 2, Name: 'Outbound' }
      ];
      
      $scope.submitForm = function () {
          $scope.submitted = true;

        };
    	$scope.operatingCompanyCodeList =[
     	 { id: 1, Name: 'A1234' },
    	 { id: 2, Name: 'Bs1234' },
    	 { id: 3, Name: 'Csdf12' },
    	 { id: 4, Name: 'D12344' },
    	 { id: 5, Name: 'E78999' }
      ];

      $scope.plantList = [
     	 { id: 1, Name: 'Pune' },
    	 { id: 2, Name: 'Mumbai' },
       { id: 3, Name: 'Nashik' }
      ];

      $scope.vehicleTypeList = [
     	 { id: 1, Name: 'Vehicles' },
    	 { id: 2, Name: 'Bulkers' },
       { id: 3, Name: 'Other' }
      ];
      
      $scope.vehicleOhRatingList = [
       { id: 1, Name: 'R' },
       { id: 2, Name: 'Y' },
       { id: 3, Name: 'G' }
      ];

      $scope.gpsFittedList = [
     	 { Name: 'Yes' },
    	 { Name: 'No' }
      ];

      $scope.statusList = [
       { id: 1, Name: 'Active' },
       { id: 2, Name: 'Deactive' }
      ];

       $scope.transporteNames = [
     	 { id: 1, Name: 'Sachin' },
    	 { id: 2, Name: 'Swapnil' },
    	 { id: 3, Name: 'Atul' },
    	 { id: 4, Name: 'Dhairya' },
    	 { id: 5, Name: 'Bhagvan' }
      ];
      $scope.transporterCodeList= [
     	 { id: 1, Name: 'AB12213' },
    	 { id: 2, Name: 'CD12323' },
    	 { id: 3, Name: 'EF23333' },
    	 { id: 4, Name: 'GH24334' },
    	 { id: 5, Name: 'IK23423' }
      ];
      
      $scope.reasonForBlacklist= [
       { id: 1, Name: 'Truck not good' },
       { id: 2, Name: 'Insurence expired' },
       { id: 3, Name: 'Road tax renewal date is expired' }
      ];


	var simulateAjax;
	var simulateAjax2;
      simulateAjax = function(result) {
        var deferred, fn;

        deferred = $q.defer();
        fn = function() {
          return deferred.resolve(result);
        };
        $timeout(fn, 3000);
        return deferred.promise;
      };

      simulateAjax2 = function(result) {
        var deferred2, fn2;

        deferred2 = $q.defer();
        fn2 = function() {
          return deferred2.resolve(result);
        };
        $timeout(fn2, 3000);
        return deferred2.promise;
      };

      simulateAjax(['1', '2', '3', '4', '5']).then(function(result) {
        return $scope.optionsFromQuery = result;
      });

      simulateAjax2(['1', '2', '3', '4', '5']).then(function(result) {
        return $scope.optionsFromQuery1 = result;
      });

      $scope.optionsFromQueryAsHash = (function() {
        var result;

        result = {
          win: "Brilliant Escape",
          fail: "Untimely Demise"
        };
        return simulateAjax(result);
      })();
      $scope.$watch('emptyCollection', function(empty) {
        return $scope.emptyOptions = simulateAjax(empty ? [] : ['look', 'i', 'have', 'data']);
      });
      $scope.directiveOptions = {
        no_results_text: "SO SORRY"
      };
      $scope.ngIfInherit = true;
      $scope.myPets = ['cat'];
      $scope.pets = {
        cat: 'Cat',
        dog: 'Dog',
        hamster: 'Hamster'
      };
      $timeout(function() {
        return $scope.$apply(function() {
          return $scope.myPets.push('hamster');
        });
      }, 1000);
      return $scope.disabled = true;
    
}
]); 