$(function(){
	
	Twitch.init({clientId: 'pugdziizvbmk12pd1qkp8svt3ptb7zp'}, function(error, status) {
		 console.log(status);
		 if(status.authenticated){
			 $('.twitch-disconnect').hide();
			
		 }else{
		 	
		 }
	  });	
	
	
	
})