		$(function(){
			var getInfo = function(callback){
				Twitch.api({method: 'channel'}, function(error, channel) {
					callback(channel);
					console.log("test log");
				});
			}
			
		  Twitch.init({clientId: 'hj0u0ban55ryh4hs4gv6q18u70gohm6'}, function(error, status) {
			  
			  console.log(status);
			  
			  if(status.authenticated){
 				  $('.twitch-disconnect').hide();
				  getInfo(function(data){
					  $('strong').text(data.display_name);
					  $(#picture).attr('src',"");
					
				  });

 			  }
 			  else{
 				  $('#login-info').hide();
 			  }
 		  });
 		  var login =function(){
 		   			    Twitch.login({
 		   			      scope: ['user_read', 'channel_read']
 		   			    });

 		  }
		  checkStatus();
		  
 		  var logout =function(){


 		  }
 		  $('.twitch-connect').click(function(e){
 		   			  e.preventDefault();
 		   			  login();
 		  })
 		  $('.twitch-disconnect').click(function(e){
 		   			  e.preventDefault();
 		   			  logout();
 		  })
	  })