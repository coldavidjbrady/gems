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
    var store = this;
    store.products = [];

    $http.get('/gemstore/store-products.json').success(function(data) {
       store.products = data;
    });
  }]);


  
  app.controller("ReviewController", function(){

    this.review = {};
  
    this.addReview = function(product){
      this.review.createdOn = Date.now();
      product.reviews.push(this.review);
      this.review = {};
    };
  });
  
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