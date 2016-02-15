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

/*
  app.controller('StoreController', [ '$http', function($http){
    var store = this;
    store.products = [];

    $http.get('/gemstore/store-products.json').success(function(data) {
       store.products = data;
    });
  }]);
*/
/*
    app.config(['$httpProvider', function($httpProvider) {
        login = "dbrady";
        pass = "WestPoint87";
        $httpProvider.defaults.headers.common["Authorization"] = "Basic  " + login + ':' + pass + '"';
        $httpProvider.defaults.useXDomain = true;
        $httpProvider.defaults.withCredentials = false;
        delete $httpProvider.defaults.headers.common["X-Requested-With"];
        $httpProvider.defaults.headers.common["Accept"] = "application/json";
        $httpProvider.defaults.headers.common["Content-Type"] = "application/json";
    }]);
*/

    app.controller('StoreController', [ '$http', function($http){

        var store = this;
        store.products = [];

        $http.get('http://127.0.0.1:8000/api/products/').success(function(data) {
        store.products = data;
        console.log(data);
        });
    }]);

    app.controller("ReviewController", [ '$http', function($http) {

    this.review = {};

    this.addReview = function(product) {

        // create array of values returned by `.toLocaleDateString()`,
        var d = new Date().toLocaleDateString().split("/");
        var y = d.splice(-1)[0];
        d.splice(0, 0, y);
        var date = d.join("-");

        this.review.createdOn = date;
        this.review.product = product.id;
        console.log(this.review);
        $http.post('http://127.0.0.1:8000/api/reviews/', this.review).success(function (data) {
            this.review = {};
        });
    }}]);
/*
  app.controller("ReviewController", function(){

    this.review = {};
  
    this.addReview = function(product){
      this.review.createdOn = Date.now();
      product.reviews.push(this.review);
      this.review = {};
    };
  });
  */
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