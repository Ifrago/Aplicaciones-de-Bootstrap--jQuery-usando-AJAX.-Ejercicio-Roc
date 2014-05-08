var API_BASE_URL = "https://api.github.com";
var USER = "";
var PASS = "";

$("#button_list_gistUser").click(function(e) {
	e.preventDefault();
	listGistUser();
});

function listGistUser(){

	USER= $("#username").val();
	PASS= $("#password").val();
	
	var url = API_BASE_URL + '/users/' + USER + '/gists';


	

	$("#gistlist_result").text('');	
	
	$.ajax({
		url : url,
		type : 'GET',
		crossDomain : true,
		dataType : 'json',
		username: USER,
		password: PASS,
	}).done(function(data, status, jqxhr) {
				var gists = data;
				
				$.each(gists, function(i, v) {
					var gist = v;

					$('<h4> URL: ' + gist.url+ '</h4>').appendTo($('#gistlist_result'));
					$('<p>').appendTo($('#gistlist_resultt'));	
					$('<strong> ID: </strong> ' + gist.id + '<br>').appendTo($('#gistlist_result'));
					
					$('<strong> Description: </strong> ' + gist.description + '<br>').appendTo($('#gistlist_result'));
					$('</p>').appendTo($('#gistlist_result'));
				});
				

	}).fail(function() {
		$('<div class="alert alert-danger"> <strong>Oh!</strong> Error</div>').appendTo($("#gistlist_result"));
	});
	
}