(function() {
  angular.module('store-directives', []);

  app.directive("productDescriptions", function() {
    return {
      restrict: 'E',
      templateUrl: "../blackstone_media/product-description.html"
    };
  });

  app.directive("productReviews", function() {
    return {
      restrict: 'E',
      templateUrl: "../blackstone_media/product-reviews.html"
    };
  });

  app.directive("productSpecs", function() {
    return {
      restrict:"A",
      templateUrl: "../blackstone_media/product-specs.html"
    };
  });

  app.directive("productTabs", function() {
    return {
      restrict: "E",
      templateUrl: "../blackstone_media/product-tabs.html",
      controller: function() {
        this.tab = 1;

        this.isSet = function(checkTab) {
          return this.tab === checkTab;
        };

        this.setTab = function(activeTab) {
          this.tab = activeTab;
        };
      },
      controllerAs: "tab"
    };
  });

 app.directive("productGallery", function() {
    return {
      restrict: 'E',
      templateUrl: "../blackstone_media/product-gallery.html",
      controller: function(){
        this.current = 0;
        this.setCurrent = function(imageNumber){
        this.current = imageNumber || 0;
        };
      },
      controllerAs: "gallery"
    };
  });
});




