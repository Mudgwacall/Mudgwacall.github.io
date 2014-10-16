		$(function(){
			
		  $('#video').hide();
		  $('#twitch_chat_inside').hide();
		  
			var getInfo = function(callback){
				Twitch.api({method: 'channel'}, function(error, channel) {
					callback(channel);
					console.log("test log");
				});
			}
		  Twitch.init({clientId: 'hj0u0ban55ryh4hs4gv6q18u70gohm6'}, function(error, status) {
			  
			  console.log(status);
			  
			  
			  if(status.authenticated){
 				  $('.twitch-connect').hide();
				  
				  getInfo(function(data){
					  $('strong').text(data.display_name);
					  $('#views_text').text('views:');
					  $('#followers_text').text('Followers:');
					  $('#views').text(data.views);
					  $('#followers').text(data.followers);
					  
					  $('#picture').attr(data.logo);
				  });
				  $('#video').show();
				  $('#twitch_chat_inside').show();

 			  }
 			  else{
 				  $('#login-info').hide();
 			  }
 		  });
 		  var login = function(){
			  
 		   			    Twitch.login({
 		   			      scope: ['user_read', 'channel_read']
 		   			    });
						

 		  }
		  
 		  var logout = function(){
			  Twitch.logout(function(error) {
				  $('.twitch-connect').show();
				  $('strong').text('');
				  $('#picture').attr('src','');
				  $('#login-info').hide();
				  $('#video').hide();
				  $('#twitch_chat_inside').hide();
				  
			  });

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