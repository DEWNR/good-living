$("[data-js=carousel]").owlCarousel({loop:!0,margin:12,onInitialized:$("[data-js=carousel]").removeClass("carousel--loading spinner spinner--large"),responsiveClass:!0,responsive:{0:{center:!0,items:1.25},640:{center:!0,items:1.5},1024:{center:!0,items:2}}}),function(){var s=angular.module("postList",[]);s.controller("ListController",function(){this.posts=goodliving.posts;for(var s=0;s<this.posts.length;s++)this.posts[s].image=this.posts[s].image.replace(/^http\:\/\//,""),this.posts[s].url=this.posts[s].url.replace(/^http\:\/\//,""),this.posts[s].image=this.posts[s].image.replace(/^\//,"www.environment.sa.gov.au/"),this.posts[s].url=this.posts[s].url.replace(/^\//,"www.environment.sa.gov.au/");this.postIncrement=10,this.loadedPostCount=this.postIncrement,this.maxPostCount=this.posts.length,this.loadMore=function(s){"number"!=typeof s&&(s=this.postIncrement),this.loadedPostCount+=s}})}();