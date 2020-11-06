  var custom = {
    	"#header-wrap": "hide",
      	"#sidebar-wrapper": "hide",
      	"#footer-wrapper": "hide",
      	"#main-wrapper": "fullsize",
      	".post-header": "hide"
  }
/*******************FUNC****************/
function addBGImage(idClass,url){
	$(idClass).css({"background-image":"url("+url+")"});
}
function addCss(idClass,objCss){
	$(idClass).css(objCss);
}
  	
function createLandingPage(custom,lineCss){
	if(typeof custom == "object"){
		for (const property in custom) {
			$(property).addClass(custom[property]);
		}
	}else{
		//default
		$("#header-wrap").addClass('hide');     
		$("#sidebar-wrapper").addClass('hide');
		$("#footer-wrapper").addClass('hide');
		$("#main-wrapper").addClass("fullsize");
		$(".post-header").addClass('hide');
	}
 }
