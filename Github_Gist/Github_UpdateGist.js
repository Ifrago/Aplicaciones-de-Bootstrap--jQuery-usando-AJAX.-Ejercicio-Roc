var API_BASE_URL = "https://api.github.com";

var USERNAME = "ifrago";
var PASSWORD = "dsagrupo3";

$.ajaxSetup({
    headers: { 'Authorization': "Basic "+ btoa(USERNAME+':'+PASSWORD) }
});

$("#button_to_edit").click(function(e) {
	e.preventDefault();
	var editGist = new Object();
	editGist.description= $("#description_to_create").val();
	//editGist.files.name= $("#filename_to_create").val();
	SendEditGist(editGist);
});

function SendEditGist (editGist) {
	var id = $("#gist_id").val();
	var url= API_BASE_URL + '/gists/'+ id;
	var data = JSON.stringify(editGist);
	
	$.ajax({
		url:url,
		type:'PATCH',
		crossDomain: true,
		dataType:'json',
		data: data,
	}).done(function(data, status, jqxhr) {
				var info= data;
			
			$("update_result").text('');
			$('<strong> ID: </strong> ' + info.id + '<br>').appendTo($('#update_result'));
			$('<p>').appendTo($('#update_result'));
			$('<strong> URL: </strong>'+ info.html_url + '<br>').appendTo($('#update_result'));
			$('<strong> Descripción: </strong> ' + info.description +'<br>').appendTo($('#update_result'));
			$('</p>').appendTo($('#update_result'));
			
			console.log(info.files);

	}).fail(function() {
		$('<div class="alert alert-danger"> <strong>Oh!</strong> Error</div>').appendTo($("#update_result"));
	});
}
