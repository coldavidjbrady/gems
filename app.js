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

  app.controller('StoreController', function() {
    this.products = gems;
  });

  
  app.controller("ReviewController", function(){

    this.review = {};
  
    this.addReview = function(product){
      this.review.createdOn = Date.now();
      product.reviews.push(this.review);
      this.review = {};
    };

  });

  var gems = [{
    name: 'Topaz',
    description: "Some gems have hidden qualities beyond their luster, beyond their shine... Topaz is one of those gems.",
    shine: 8,
    price: 110.50,
    rarity: 7,
    color: '#CCC',
    faces: 14,
    images: [
      "http://localhost/gemstore/images/azurite.jpeg",
      "http://localhost/gemstore/images/azurite1.jpeg",
      "http://localhost/gemstore/images/azurite2.jpeg"
    ],
    reviews: [{
      stars: 5,
      body: "I love this gem!",
      author: "joe@thomas.com",
      createdOn: 1397490980837
    }, {
      stars: 1,
      body: "This gem sucks.",
      author: "tim@hater.com",
      createdOn: 1397490980837
    }]
  }, {
    name: 'Opal',
    description: "Origin of the Opal is unknown, but it is very popular due to its multi-colored hues.",
    shine: 9,
    price: 22.90,
    rarity: 6,
    color: '#EEE',
    faces: 12,
    images: [
      "http://localhost/gemstore/images/opal.jpeg",
      "http://localhost/gemstore/images/opal1.jpeg",
      "http://localhost/gemstore/images/opal2.jpeg"
    ],
    reviews: [{
      stars: 3,
      body: "I think this gem was just OK, could honestly use more shine, IMO.",
      author: "JimmyDean@sausage.com",
      createdOn: 1397490980837
    }, {
      stars: 4,
      body: "Any gem with 12 faces is for me!",
      author: "gemsRock@alyssaNicoll.com",
      createdOn: 1397490980837
    }]
  }, {
    name: 'Ruby',
    description: "Ruby is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
    shine: 70,
    price: 1100,
    rarity: 2,
    color: 'Red',
    faces: 6,
   images: [
      "http://localhost/gemstore/images/ruby.jpeg",
      "http://localhost/gemstore/images/ruby1.jpeg",
      "http://localhost/gemstore/images/ruby2.jpeg"
    ],
     reviews: [{
      stars: 1,
      body: "This gem is WAY too expensive for its rarity value.",
      author: "turtleguyy@zdn.me",
      createdOn: 1397490980837
    }, {
      stars: 1,
      body: "BBW: High Shine != High Quality.",
      author: "LouisW407@gmail.com",
      createdOn: 1397490980837
    }, {
      stars: 1,
      body: "Don't waste your rubles!",
      author: "nat@flatland.com",
      createdOn: 1397490980837
    }]
  }];

})();