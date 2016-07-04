    // our controller for the form
// =============================================================================
app.controller('driverformController',[
    '$scope', '$q', '$timeout', '$state', 'driverInfoSteps', function($scope,$q,$timeout, $state,driverInfoSteps) {

    $scope.formData = {};
    $scope.formStepSubmitted=false;
    
    var nextState=function(currentState) {
      switch (currentState) {
          case 'driver_info.driver_personal':
              return 'driver_info.driver_medical'
              break;
          case 'driver_info.driver_medical':
              return 'driver_info.driver_training'
              break;
          case 'driver_info.driver_training':
              return 'driver_info.driver_rewards'
              break;
          case 'driver_info.driver_rewards':
              return 'driver_info.driver_consequence'
              break;        
          default:
              alert('Did not match any switch');
  
      }
      
    };
    
    var updateValidityOfCurrentStep=function(updatedValidity) {
      var currentStateIndex = _.findIndex(driverInfoSteps, function(formStep) {
          return formStep.uiSref === $state.current.name;
        });
        
        driverInfoSteps[currentStateIndex].valid = updatedValidity;
    };
    
    $scope.goToNextSection=function(isFormValid) {
      //$scope.submitted = true;
      //console.log($scope.submitted);
      console.log('isFormValid ', isFormValid)
      // set to true to show all error messages (if there are any)
      $scope.formStepSubmitted = true;
      if(isFormValid) {
        // reset this for next form
        $scope.formStepSubmitted = false;
        
        // mark the step as valid so we can navigate to it via the links
        updateValidityOfCurrentStep(true /*valid */);
        
        $state.go(nextState($state.current.name));
      } else {
        // mark the step as valid so we can navigate to it via the links
        updateValidityOfCurrentStep(false /*not valid */);
      }
    };
    
    // function to process the form
    $scope.processForm = function() {
        alert('awesome!');  
    };

 //$scope.formStepSubmitted = true;

      /*$scope.typeOptions = [
      { name: 'Feature', value: 'feature' }, 
      { name: 'Bug', value: 'bug' }, 
      { name: 'Enhancement', value: 'enhancement' }
      ];
      
      $scope.form = {type : $scope.typeOptions[0].value};
*/
    	$scope.driver_type =[
        { name: 'Actual', value: 'Actual' }, 
        { name: 'Substitute', value: 'Substitute' }
      ];


      $scope.issue_type =[
        { name: 'Issue', value: 'Issue' }, 
        { name: 'Re issue', value: 'Re issue' }
      ];


      //$scope.formData = {driver_type : $scope.driver_type[0].value};

      $scope.List =[
     	 { id: 1, Name: 'A' },
    	 { id: 2, Name: 'B' },
    	 { id: 3, Name: 'C' },
    	 { id: 4, Name: 'D' },
    	 { id: 5, Name: 'E' }
      ];
      $scope.genderList = [
        { name: 'Male', value: 'Male' }, 
        { name: 'Female', value: 'Female' }
      ];
      $scope.maritalList = [
        { name: 'Single', value: 'Single' }, 
        { name: 'Married', value: 'Married' },
        { name: 'Divorced', value: 'Divorced' }
      ];
      $scope.bloodGroupList = [
       	 { name: 'O+', value: 'O+' },
      	 { name: 'O-', value: 'O-' },
      	 { name: 'A+', value: 'A+' },
      	 { name: 'A-', value: 'A-' },
      	 { name: 'B+', value: 'B+' },
      	 { name: 'B-', value: 'B-' },
      	 { name: 'AB+', value: 'AB+' },
      	 { name: 'AB-', value: 'AB-' }
      ];

      $scope.stateList = [
        { name: 'Andaman and Nicobar', value: 'Andaman and Nicobar' },
        { name: 'Andhra Pradesh', value: 'Andhra Pradesh' },
        { name: 'Arunachal Pradesh', value: 'Arunachal Pradesh' },
        { name: 'Assam', value: 'Assam' },
        { name: 'Bihar', value: 'Bihar' },
        { name: 'Chandigarh', value: 'Chandigarh' },
        { name: 'Dadra and Nagar Haveli', value: 'Dadra and Nagar Haveli' },
        { name: 'Daman and Diu', value: 'Daman and Diu' },
        { name: 'Delhi', value: 'Delhi' },
        { name: 'Goa', value: 'Goa' },
        { name: 'Gujarat', value: 'Gujarat' },
        { name: 'Haryana', value: 'Haryana' },
        { name: 'Himachal Pradesh', value: 'Himachal Pradesh' },
        { name: 'Jammu and Kashmir', value: 'Jammu and Kashmir' },
        { name: 'Jharkhand', value: 'Jharkhand' },
        { name: 'Karnataka', value: 'Karnataka' },
        { name: 'Kerala', value: 'Kerala' },
        { name: 'Lakshadweep', value: 'Lakshadweep' },
        { name: 'Madhya Pradesh', value: 'Madhya Pradesh' },
        { name: 'Maharashtra', value: 'Maharashtra' },
        { name: 'Manipur', value: 'Manipur' },
        { name: 'Meghalaya', value: 'Meghalaya' },
        { name: 'Mizoram', value: 'Mizoram' },
        { name: 'Nagaland', value: 'Nagaland' },
        { name: 'Orissa', value: 'Orissa' },
        { name: 'Puducherry', value: 'Puducherry' },
        { name: 'Punjab', value: 'Punjab' },
        { name: 'Rajasthan', value: 'Rajasthan' },
        { name: 'Sikkim', value: 'Sikkim' },
        { name: 'Tamil Nadu', value: 'Tamil Nadu' },
        { name: 'Tripura', value: 'Tripura' },
        { name: 'Uttarakhand', value: 'Uttarakhand' },
        { name: 'Uttar Pradesh', value: 'Uttar Pradesh' },
        { name: 'West Bengal', value: 'West Bengal' }
      ];

       $scope.transporteNames = [
     	 { name: 'Sachin', value:"Sachin" },
    	 { name: 'Swapnil', value:"Swapnil" },
    	 { name: 'Atul', value:"Atul" },
    	 { name: 'Dhairya', value:"Dhairya" },
    	 { name: 'Bhagvan', value:"Bhagvan" }
      ];

      //$scope.formData = {transporter_name : $scope.transporteNames[0].value};

      $scope.driverIdList= [
     	 { id: 1, Name: '12213' },
    	 { id: 2, Name: '12323' },
    	 { id: 3, Name: '23333' },
    	 { id: 4, Name: '24334' },
    	 { id: 5, Name: '23423' }
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

app.value('driverInfoSteps', [
  {uiSref: 'driver_info.driver_personal', valid: false},
  {uiSref: 'driver_info.driver_medical', valid: false},
  {uiSref: 'driver_info.driver_training', valid: false},
  {uiSref: 'driver_info.driver_rewards', valid: false},
  {uiSref: 'driver_info.driver_consequence', valid: false}
  
]);


function driverCtrl ($scope, $location, $stateParams, $rootScope, $timeout, $window, Driver) {
  //$scope.currentPage = 1;
  //$scope.totalItems = 0;
  $scope.pageSize = 5;
  //$scope.items = 5;
  $scope.searchText = '';
  $scope.sortby_column = '';
  $scope.sort_type = '';
  $scope.basepgHref = "/driver";
  $scope.currentPage = $stateParams.pgno;
  $scope.dots = "...";
  $scope.adjacent = 2;
  //$scope.total = 13;
  getData();

    function getData() {
      
    Driver.query({page: $scope.currentPage,size:$scope.pageSize,search:$scope.searchText,sortby_column:$scope.sortby_column,sort_type:$scope.sort_type}, function(data) {
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



angular.module('driverApi', ['ngResource']).
factory('Driver', function($resource) {
  var Driver = $resource('http://localhost/hyperapp/api/customer/:method/:id', {}, {
    query: {method:'GET', params: {method:'index'} }
  });

  return Driver;
});