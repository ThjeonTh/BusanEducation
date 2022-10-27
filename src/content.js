
var mpFileName="";
var midFileName="";
var fileUrl="";
var fileType="";
function Load(){
    console.log(window.location.href);
    const url = new URL(window.location.href);
    const urlParams = url.searchParams;
	mpFileName=urlParams.get('mpFileName');
	midFileName=urlParams.get('midFileName');
	fileUrl=urlParams.get('fileUrl');
	console.log(mpFileName);
	console.log(midFileName);
    console.log(fileUrl);
	
}


function OnCreateMp(){
	var t_u=fileUrl.replace("%fileName%","&id="+mpFileName);
	//alert(t_u)
	location.href=t_u;
}


function OnCreateMid(){
	var t_u=fileUrl.replace("%fileName%","&id="+midFileName);
	//alert(t_u)
	location.href=t_u;
}