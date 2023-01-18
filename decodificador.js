var alerta=0
function codifica(){
	var textarea= document.querySelector("#texto")
	var textarearesult= document.querySelector("#resultado")
	var texto = textarea.value

	if(texto = textarea.value){
		resultado=texto.replaceAll("e","enter")
			.replaceAll("i","imes")
			.replaceAll("a","ai")
			.replaceAll("o","ober")
			.replaceAll("u","ufat");		

		textarearesult.value=resultado
		document.querySelector(".imagemResultado").style.visibility="hidden";
		document.querySelector("#texto").value="";
		alerta=1;
	}else{
		alert("Nenhum texto encontrado!!");
	}
}

function decodifica(){
	var textarea= document.querySelector("#texto")
	var textarearesult= document.querySelector("#resultado")
	var texto = textarea.value

	if(texto = textarea.value){
		resultado=texto.replaceAll("enter","e")
		.replaceAll("imes","i")
		.replaceAll("ai","a")
		.replaceAll("ober","o")
		.replaceAll("ufat","u");		

		textarearesult.value=resultado;
		document.querySelector(".imagemResultado").style.visibility="hidden";
		document.querySelector("#texto").value="";
		alerta=1;
	}else{
		alert("Nenhum texto encontrado!!");
	}
}

function copiarTexto(){

	copiarTexto=document.querySelector ("#resultado");
	copiarTexto.select();
       	document.execCommand("copy");
	document.querySelector ("#resultado").value="";

	if(alerta==1){
		alert("Copiado com sucesso");
		document.querySelector(".imagemResultado").style.visibility="visible";
		alerta=0;
	}else{
		alert("Nenhum texto encontrado!!");
		alerta=0;
	}
}

var botaoCodifica=document.querySelector("#cod")
botaoCodifica.onclick=codifica;

var botaoDecodifica=document.querySelector("#decod")
botaoDecodifica.onclick=decodifica;

var botaoCopiar=document.querySelector("#copiar")
botaoCopiar.onclick=copiarTexto;
