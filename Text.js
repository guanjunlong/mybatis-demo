   function getDataGet(g_url,callback){
	          $.ajax({
		          type:'GET',
	               url:g_url,
		       dateType:'json',
		        success:callback
	});
}
function getDataPost(g_url,da,callback){
	$.ajax({
		type:'POST',
	    url:g_url,
		data:da,
		dateType:'json',
		success:callback
	});
}