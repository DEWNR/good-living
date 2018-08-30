(function() {

    var app = angular.module('postList', [ ]);

    app.controller('ListController', function() {

        // Load the posts

        this.posts = goodliving.posts;

        // Remove "http://" from links. This needs to be included in the HTML
        // or Seamless will add a forward slash at the beginning of the URL.

        for (var i = 0; i < this.posts.length; i++) {
            // Remove "http://"
            this.posts[i].image = this.posts[i].image.replace(/^http\:\/\//, "");
            this.posts[i].url = this.posts[i].url.replace(/^http\:\/\//, "");

            // Change "/" at the start of links to "www.environment.sa.gov.au/"
            this.posts[i].image = this.posts[i].image.replace(/^\//, "www.environment.sa.gov.au/");
            this.posts[i].url = this.posts[i].url.replace(/^\//, "www.environment.sa.gov.au/");

            // Change to a small image for the small thumbs
            this.posts[i].image = this.posts[i].image.replace("-large.", "-small.");
        }


        // Set the default number of posts to load at a time. This can be
        // controlled via HTML using data-ng-init.

        this.postIncrement = 10;


        // Set the number of posts that will be loaded

        this.loadedPostCount = this.postIncrement;


        // Set the maximum number of posts allowed to equal the number of posts

        this.maxPostCount = this.posts.length;


        // Load more posts

        this.loadMore = function(count) {

            if (typeof count !== "number") {

                count = this.postIncrement;

            }

            this.loadedPostCount += count;

        }

    });

})();
