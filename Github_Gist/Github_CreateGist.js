var API_BASE_URL = "https://api.github.com";
var USER = "";
var PASS = "";



$("#button_to_create").click(function(e) {
	e.preventDefault();
	
	var newGist = {
	
		"description": $("#description_to_create").val(),
		"public": true,
		"files": {
			"ProvaHtml": {
				"content":$("#content_to_create").val()
			}
		}
	}
	
	if($("#username").val()=="" || $("#password").val()=="" ){//Condición si el campo Username o Password estan vacios
		$('<div class="alert alert-danger"> <strong>Oh!</strong> Rellena todos los Campos para autenticarte </div>').appendTo($("#create_result"));
		
	}
		if($("#description_to_create").val()=="" ){//Condición si el campo Description está vacio
		$("#repos_result").text("Campo vacío.");
		$('<div class="alert alert-danger"> <strong>Oh!</strong> Rellena el campo de descripción </div>').appendTo($("#create_result"));
		
	}
			if($("#content_to_create").val()=="" ){//Condición si el campo Content está vacio
		$("#repos_result").text("Campo vacío.");
		$('<div class="alert alert-danger"> <strong>Oh!</strong> Rellena el campo de contenido del Gist </div>').appendTo($("#create_result"));
		
	}
	else{
		SendNewGist(newGist);
	}
});


function SendNewGist(newGist){
	
	var url= API_BASE_URL + '/gists';
	var data = JSON.stringify(newGist);
	
	USER=$("#username").val();
	PASS=$("#password").val();
	
	
	$.ajax({
		url:url,
		type:'POST',
		crossDomain: true,
		dataType:'json',
		username: USER,
		password: PASS,
		data: data,
	}).done(function(data, status, jqxhr) {
		$('<div class="alert alert-success"> <strong>Ok!</strong> Repository Created</div>').appendTo($("#create_result"));				
  	}).fail(function() {
		$('<div class="alert alert-danger"> <strong>Oh!</strong> Error </div>').appendTo($("#create_result"));
	});
}