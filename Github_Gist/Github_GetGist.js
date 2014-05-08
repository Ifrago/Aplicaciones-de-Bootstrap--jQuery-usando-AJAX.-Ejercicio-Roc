var API_BASE_URL = "https://api.github.com";

$("#button_get_gist").click(function(e) {
	e.preventDefault();
	getGist($("#gist_id").val());
});

function getGist(gist_id){
	
	var url= API_BASE_URL + '/gists/' + gist_id;
	
	$.ajax({
		url: url,
		type: 'GET',
		crossDomain: true,
		dataType: 'json',
		}).done(function(data, status, jqxhr){
			var info= data;
			
			$("gist_result").text('');
			$('<strong> ID: </strong> ' + info.id + '<br>').appendTo($('#gist_result'));
			$('<p>').appendTo($('#gist_result'));
			$('<strong> URL: </strong>'+ info.html_url + '<br>').appendTo($('#gist_result'));
			$('<strong> Descripción: </strong> ' + info.description +'<br>').appendTo($('#gist_result'));
			$('</p>').appendTo($('#doc_result'));
		}).fail(function() {
			$("#gist_result").text("FAIL");
	});

	}