var API_BASE_URL = "https://api.github.com";

var USERNAME = "ifrago";
var PASSWORD = "dsagrupo3";

$.ajaxSetup({
    headers: { 'Authorization': "Basic "+ btoa(USERNAME+':'+PASSWORD) }
});


$("#button_delete_gist").click(function(e) {
	e.preventDefault();
	deleteGist($("#gist_id").val());
});

function deleteGist(gist_id){

	var url= API_BASE_URL + '/gists/' + gist_id;
	
	$.ajax({
		url: url,
		type: 'DELETE',
		crossDomain: true,
		dataType: 'json',
		}).done(function(data, status, jqxhr){
			$('<div class="alert alert-success"> <strong>Bien!</strong> Has Deleteado correctamente </div>').appendTo($("#gist_result"));
		}).fail(function() {
			$('<div class="alert alert-danger"> <strong>404</strong> Gist NOT FOUND </div>').appendTo($("#gist_result"));
	});
}