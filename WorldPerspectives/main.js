		$(function(){
			var getInfo = function(callback){
				Twitch.api({method: 'channel'}, function(error, channel) {
					callback(channel);
					console.log("test log");
				});
			}
			$('#video').hide();
		  Twitch.init({clientId: 'hj0u0ban55ryh4hs4gv6q18u70gohm6'}, function(error, status) {
			  
			  console.log(status);
			  
			  
			  if(status.authenticated){
 				  $('.twitch-connect').hide();
				  getInfo(function(data){
					  $('strong').text(data.display_name);
					  $('#picture').attr('src','http://static-cdn.jtvnw.net/jtv_user_pictures/imdonning-profile_image-dc549200c02cbf4a-150x150.png');
				  });

 			  }
 			  else{
 				  $('#login-info').hide();
 			  }
 		  });
 		  var login = function(){
			  $('#video').show();
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