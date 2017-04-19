app.controller('AdminTopicsController', ['$http', '$location', 'TopicsFactory', '$firebaseAuth', function($http, $location, TopicsFactory, $firebaseAuth){
  const self = this;
  const auth = $firebaseAuth();

  auth.$onAuthStateChanged(function(firebaseUser) {
   if (firebaseUser) {
     console.log('we are still logged in!');
     self.email = firebaseUser.email;
     // go reload idea data....
    //  AdminFactory.init();
    //load all of the data ->
    TopicsFactory.init();
   } else {
     console.log('boooo');
     // redirect
     TopicsFactory.init();
     self.email = '';
    //  self.logout();
   }
  });

  //********************************************//
  //         UPDATE CURRENT MAIN TOPIC          //
  //********************************************//
  self.mainTopic = TopicsFactory.mainTopic;

  self.updateTopic = function(title, description, id) {
    TopicsFactory.updateTopic(title, description, id);
  };

  //********************************************//
  //        UPDATE UPCOMING MAIN TOPIC          //
  //********************************************//
  self.upcomingMainTopic = TopicsFactory.upcomingMainTopic;
  self.noUpcomingTopic = TopicsFactory.noUpcomingTopic;

  self.updateUpcomingTopic = function(title, description, id) {
    TopicsFactory.updateUpcomingTopic(title, description, id);
  };

  self.addUpcomingTopic = function(title, description) {
    TopicsFactory.addUpcomingTopic(title, description);
  };

  //********************************************//
  //        SET NEW CURRENT MAIN TOPIC          //
  //********************************************//


  //*********************************************//
  //           UPDATE CURRENT SUBTOPICS          //
  //*********************************************//
  self.subTopic = TopicsFactory.subTopic;

  self.updateSubTopic = function(title, description, id) {
    TopicsFactory.updateSubTopic(title, description, id);
  };
  //*********************************************//
  //           UPDATE UPCOMING SUBTOPICS         //
  //*********************************************//
  self.upcomingSubTopic = TopicsFactory.upcomingSubTopic;

  self.updateUpcomingSubTopic = function(title, description, id) {
    TopicsFactory.updateUpcomingSubTopic(title, description, id);
  };

  self.addUpcomingSubTopic = function(title, description) {
    TopicsFactory.addUpcomingSubTopic(title, description);
  };


  //*********************************************//
  //          SET NEW CURRENT SUBTOPICS          //
  //*********************************************//


  //*********************************************//
  //                CHANGE VIEWS                 //
  //*********************************************//
  self.update = true;

  self.updateView = function(){
    self.update = true;
  }

  self.newTriView = function(){
    self.update = false;
  }

}]);
