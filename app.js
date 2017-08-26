/* App js */
(function() {
  var app = angular.module('gemStore', ['store-directives']);

        app.controller('GalleryController', function() {
            this.imageIndex = 0;
            this.setCurrent = function(imageNumber) {
                console.log(imageNumber);
                this.imageIndex = imageNumber || 0;
            };
        });


        app.controller('StoreController', [ '$http', function($http){

            let store = this;
            store.products = [];
            store.mytoken = "";
            let pword = prompt("Enter password: ", "mypassword"); // Don't want to hard code password

            $http.post('http://127.0.0.1:7177/api-token-auth/', {
                "username" : "dbrady",
                "password" : pword
            }).success(function(data) {
                store.mytoken = data["token"];
                $http.defaults.headers.common.Authorization = "JWT ".concat(store.mytoken);
                console.log("JWT " + store.mytoken);
                // Need to wrapper this call inside the success function due to the nature of how callbacks work
                // within javascript...the get function was getting executed prior to getting and setting the JWT
                // which royally screwed things up (djb 22 Jun 16).
                $http.get('http://127.0.0.1:7177/api/products/').success(function(data) {
                    store.products = data;
                    console.log("Get - JWT " + store.mytoken);
                    console.log(data);
                });
            });
        }]);

        app.controller("ReviewController", ['$http', function($http) {

            this.addReview = function(product) {

                product.reviews.push(this.review);
                // create array of values returned by `.toLocaleDateString()`,
                var d = new Date().toLocaleDateString().split("/");
                var y = d.splice(-1)[0];
                d.splice(0, 0, y);
                var date = d.join("-");

                this.review.createdOn = date;
                this.review.product = product.id;
                console.log(this.review);

                $http.post('http://127.0.0.1:7177/api/reviews/', this.review).success(function (data) {
                    console.log("Success")
                    this.review = {};
                })
                .error(function(data, status) {
                    console.error('Error trying to submit review', status, data);
                })
                .finally(function() {
                    console.log("Successfully submitted review!");
                    this.review = {};
                });
                this.review = {};
            }
        }]);

        app.controller("PanelController", function() {
	        this.tab = 1;
	  
	        this.selectTab = function(setTab) {
		        this.tab = setTab;
	        };
	  
	        this.isSelected = function(checkTab) {
		        return this.tab === checkTab;
	        };
        });

})();