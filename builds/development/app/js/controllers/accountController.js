angular.module('myApp').controller('accountFormController', function ($scope, $http) {
    $scope.oneAtATime = false;

    $scope.orders = [
        {"orderid":"1","date":"12/25/13","status":"Completed","tracking":"b103dfe232","ammount":"75.00"},
        {"orderid":"2","date":"12/29/14","status":"Completed","tracking":"b123dfe236","ammount":"103.00"},
        {"orderid":"3","date":"12/31/14","status":"Completed","tracking":"b12dfsasdffe236","ammount":"153.00"},
        {"orderid":"4","date":"1/5/15","status":"Shipped","tracking":"b123dffdae236","ammount":"203.00"}
    ];

    $scope.returns = [
        {"orderid":"1","date":"12/25/13","status":"Completed","tracking":"b103dfe232","ammount":"75.00"},
        {"orderid":"2","date":"12/29/14","status":"Completed","tracking":"b123dfe236","ammount":"103.00"},
        {"orderid":"3","date":"12/31/14","status":"Completed","tracking":"b12dfsasdffe236","ammount":"153.00"},
        {"orderid":"4","date":"1/5/15","status":"Shipped","tracking":"b123dffdae236","ammount":"203.00"}
    ];

    $scope.wishlist = [
        [
            {"image":"http://static.heels.com/images/shoes/outside_view/small/ZDKNY002_OUT_SML.jpg","title":"Griffin a Studs - Black Lt Gold By DKNY","size":"8.5","price":"1000"},
            {"image":"http://static.heels.com/images/shoes/outside_view/small/ZDKNY002_OUT_SML.jpg","title":"Griffin b Studs - Black Lt Gold By DKNY","size":"8.5","price":"1000"},
            {"image":"http://static.heels.com/images/shoes/outside_view/small/ZDKNY002_OUT_SML.jpg","title":"Griffin c Studs - Black Lt Gold By DKNY","size":"8.5","price":"1000"},
            {"image":"http://static.heels.com/images/shoes/outside_view/small/ZDKNY002_OUT_SML.jpg","title":"Griffin d Studs - Black Lt Gold By DKNY","size":"8.5","price":"1000"},
            {"image":"http://static.heels.com/images/shoes/outside_view/small/ZDKNY002_OUT_SML.jpg","title":"Griffin e Studs - Black Lt Gold","size":"8.5","price":"1000"}
        ],
        [
            {"image":"http://static.heels.com/images/shoes/outside_view/small/ZDKNY002_OUT_SML.jpg","title":"Griffin f Studs - Black Lt Gold By DKNY","size":"8.5","price":"1000"},
            {"image":"http://static.heels.com/images/shoes/outside_view/small/ZDKNY002_OUT_SML.jpg","title":"Griffin g Studs - Black Lt Gold By DKNY","size":"8.5","price":"1000"},
            {"image":"http://static.heels.com/images/shoes/outside_view/small/ZDKNY002_OUT_SML.jpg","title":"Griffin h Studs - Black Lt Gold","size":"8.5","price":"1000"}
        ]
    ];

    $scope.emails = {
      sale:[{"image":"http://static.heels.com/images/shoes/outside_view/small/ZDKNY002_OUT_SML.jpg","title":"Griffin a Studs - Black Lt Gold By DKNY","sku":"0020323"}],
        stock: [
            {"image":"http://static.heels.com/images/shoes/outside_view/small/ZDKNY002_OUT_SML.jpg","title":"Griffin a Studs - Black Lt Gold By DKNY","sku":"0020323"},
            {"image":"http://static.heels.com/images/shoes/outside_view/small/ZDKNY002_OUT_SML.jpg","title":"Griffin a Studs - Black Lt Gold By DKNY","sku":"0020323"}
        ],
        styles: [
            {"image":"http://static.heels.com/images/shoes/outside_view/small/ZDKNY002_OUT_SML.jpg","title":"Griffin a Studs - Black Lt Gold By DKNY","sku":"0020323"},
            {"image":"http://static.heels.com/images/shoes/outside_view/small/ZDKNY002_OUT_SML.jpg","title":"Griffin a Studs - Black Lt Gold By DKNY","sku":"0020323"}
        ]
    };


    getUser = function(){
        $http.get('/api/user').
            success(function(data, status, headers, config) {
                $scope.user = data;
                console.log(data);
            }).
            error(function(data, status, headers, config) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });
    };

    getUser();


    $scope.rewards = {"spent":0,"earned":0,"value":0, points:0};
    $scope.updateUser = function() {

        var accountPost = $http({
            method: "post",
            url: "/api/user",
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            transformRequest: function(obj) {
                var str = [];
                for(var p in obj)
                    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                return str.join("&");
            },
            data: $scope.user
        });

        // Store the data-dump of the FORM scope.
        accountPost.success(
            function( data ) {
                alert('Successfully updated!');
            }
        );
    };

    $scope.status = {
        isFirstOpen: true,
        isFirstDisabled: false
    };
});