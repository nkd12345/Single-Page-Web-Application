(function () {
  'use strict';
  angular.module ('LunchCheck',[])
  .controller ('LunchCheckController', LunchCheckController)

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController ($scope) {
    $scope.name = "";
    $scope.wh=""
    $scope.CheckIfTooMuch = function () {
      var n = $scope.name.split(",");
var message;
       for (var i = 0; i<n.length; i++){
       }
       if (n.length==1){
         $scope.wh="Please enter data first";
       }
       else if (n.length<=3) {
        $scope.wh="Enjoy!"

       }
       else {
         $scope.wh="Too Much!";
       }


    };
   $scope.message = function (){
    return $scope.wh;

};
  }
})();
