app.controller('myctrl', function($scope){
        
        $scope.users = [
            {"id":1,"name":"Nazeer", "age":26, "mobile":7358444561, "email":"jemsynazeer6@gmail.com", "address":"Royapettah"},
            {"id":2,"name":"Dilip", "age":25, "mobile":9551819292, "email":"dilip@gmail.com", "address":"VM Street"},
            {"id":3,"name":"Arzath", "age":26, "mobile":9710128495, "email":"arzath@gmail.com", "address":"Kottivakkam"},
            {"id":4,"name":"Karthi", "age":25, "mobile":9876543210, "email":"karthi@gmail.com", "address":"Icehouse"}
        ]
  
    $scope.hideUpdate = true;
    $scope.hideEdit = false;
    $scope.addData = function(){
        $scope.users.push({
            "name":$scope.name,
            "age":$scope.age,
            "mobile":$scope.mobile,
            "email":$scope.email,
            "address":$scope.address
        })
        $scope.name = '';
        $scope.age = '';
        $scope.mobile = '';
        $scope.email = '';
        $scope.address = '';
    }



    $scope.editTable = function(user){
        $scope.name = user.name;
        $scope.age = user.age;
        $scope.mobile = user.mobile;
        $scope.email = user.email;
        $scope.address = user.address;
        $scope.hideUpdate = false;
        $scope.hideEdit = true;
    }
    
    $scope.deleteTable = function($index){
    var myIndex = $index
     console.log(myIndex);
     var remove = confirm("Are you sure you want to delete!");
        if(remove == true){
            $scope.users.splice(myIndex,1)
        }
        
    }


    // $scope.entity = {}
      
    // $scope.editMe = function(index){
    //   $scope.entity = $scope.users[index];
    // //   console.log( $scope.entity);
    //   $scope.entity.index = index;
    //   console.log( $scope.entity.index);
    //   $scope.entity.editable = true;
    // }
       
    $scope.myUser = {}
    $scope.editMe = function(index){
        $scope.myUser = $scope.users[index];
        $scope.myUser.index = index;
        console.log($scope.myUser.index)
        $scope.myUser.editable = true;
    }

    $scope.save = function(index){
        $scope.users[index].editable = false;
    }

    // $scope.save = function(index){
    //   $scope.users[index].editable = false;
    // }

    // var url ="./api/firstapi.json";
    // console.log("myUrl", url)
    // $http.get(url).then(function(res){
    //     $scope.myres = res;
    //     console.log("response", $scope.myres);
    // })


 

})