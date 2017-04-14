app.controller('CommentController', ['$firebaseAuth', '$http', '$location', 'DataFactory', function($firebaseAuth, $http, $location, DataFactory){


  var self = this;
  var auth = $firebaseAuth();

//shows all comments from BD to view
  self.commentsObject = DataFactory.commentsObject;
//add comment to comment to DB
  self.commentRedirect = function() {
//redirect after submission
    $location.url('/comment');
  }//end of self.commentRedirect()
//adds new comment to DB
  self.addComment = function(newComment) {
//sents comment from view to DB
    DataFactory.addComment(newComment);
//empties inputs after submission
    self.newComment = {};
//redirect after submission
    $location.url('/home');
  }//end of self.addComment()
  self.createIdea = function() {
  //redirect after submission
    $location.path('/idea');
  }

}]);//end of app.controller()
