mainApp.controller('studentController', function($scope, CalcFees){
    $scope.students = [
    {
        id:1,
        firstName: "Mahesh1",
        lastName: "Parashar1",
        fees:100,
        email:"Mahesh1.Parashar1@gmail.com",
        image:'image/card-1.png'
    },
    {
        id:2,
        firstName: "Mahesh2",
        lastName: "Parashar2",
        fees:200,
        email:"Mahesh2.Parashar2@gmail.com",
        image:'image/card-2.png'
    },
    {
        id:3,
        firstName: "Mahesh3",
        lastName: "Parashar3",
        fees:300,
        email:"Mahesh3.Parashar3@gmail.com",
        image:'image/card-3.png'
    },
    {
        id:4,
        firstName: "Mahesh4",
        lastName: "Parashar4",
        fees:400,
        email:"Mahesh4.Parashar4@gmail.com",
        image:'image/child-photo.png'
    }]
    $scope.newStudents = {};
    // $scope.email = "";
    $scope.newStudents.email="";
    $scope.$watch("newStudents.email", function(newValue, oldValue) {
    if ($scope.newStudents.email.length > 0) {
    console.log("User has started writing into email");
    }
    });
    var studentid=1;
    $scope.DeleteData=function(Student){
    var index=$scope.students.indexOf(Student);
    $scope.students.splice(parseInt(index), 1); 
    };

    $scope.EditData=function(Student)
    {
    $scope.firstName=Student.firstName;
    $scope.lastName=Student.lastName;
    $scope.fees=Student.fees;
    var id=Student.id; 

    for (i in $scope.students) {
        if ($scope.students[i].id == id) {
            $scope.newStudents = angular.copy($scope.students[i]);
            
        }
    }
    };
    $scope.UpdateData=function(){

        for (i in $scope.students) {
            if ($scope.students[i].id == $scope.newStudents.id) {
                $scope.students[i] = $scope.newStudents;
            }
        }
    $scope.newStudents = {};
    };
    $scope.AddData=function(){
            if($scope.newStudents.id == null) {
        $scope.newStudents.id = studentid++;
        $scope.students.push($scope.newStudents);
    } 
    $scope.newStudents = {};
    };
    $scope.calculateFees=function(){
    $scope.fees=CalcFees.calculateFees($scope.newStudents.fees,$scope.newStudents.quarter);
    };
});

//for using ajax services
mainApp.controller('booksCtrl', function($scope, $http) {
  $http.get("https://whispering-woodland-9020.herokuapp.com/getAllBooks")
    .then(function(response) {
    $scope.data = response.data;
    });
});

//end here
		    