var styleCss = "<style>"+
	"@keyframes loadingAnimate{from {-webkit-transform: rotateY(0deg);-o-transform: rotateY(0deg);-ms-transform: rotateY(0deg);-moz-transform: rotateY(0deg);transform: rotateY(0deg);}to {-webkit-transform: rotateY(-180deg);-o-transform: rotateY(-180deg);-ms-transform: rotateY(-180deg);-moz-transform: rotateY(-180deg);transform: rotateY(-180deg);}}"+
	"@-webkit-keyframes loadingAnimate{from {-webkit-transform: rotateY(0deg);-o-transform: rotateY(0deg);-ms-transform: rotateY(0deg);-moz-transform: rotateY(0deg);transform: rotateY(0deg);}to {-webkit-transform: rotateY(-180deg);-o-transform: rotateY(-180deg);-ms-transform: rotateY(-180deg);-moz-transform: rotateY(-180deg);transform: rotateY(-180deg);}}"+
	".loadingRun{-webkit-animation : loadingAnimate 1.2s infinite;animation : loadingAnimate 1.2s infinite;}</style>";
$("body").append(styleCss);

window.waitForLoading = true;
var LoadingJS = function(){
	this.initConfig();
	this.initHtml();
	this.initCss();
	this.startLoading();
	
	this.onResize();
	var self = this;
	$(window).resize(function(){
		self.onResize();
	});
	
	window.setTimeout(function(){window.waitForLoading = false;},250);
}

LoadingJS.prototype = {
	
	initHtml : function(){
		this.stop = false;
		this.loadImageUrl = "<svg t=\"1525916222299\" class=\"icon\" style=\"\" viewBox=\"130 0 800 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"2478\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"49\" height=\"56\"><defs><style type=\"text/css\"></style></defs><path d=\"M5 10.5A.5.5 0 015.5 10H7.5A.5.5 0 017.5 11H5.5A.5.5 0 015 10.5Z\" p-id=\"2479\"></path><path d=\"M775.164361 219.428572C788.910114 219.428572 800.05325 208.512847 800.05325 195.047619 800.05325 181.582391 788.910114 170.666667 775.164361 170.666667L263.111111 170.666667C249.365357 170.666667 238.222222 181.582391 238.222222 195.047619 238.222222 208.512847 249.365357 219.428572 263.111111 219.428572L775.164361 219.428572Z\" p-id=\"2481\"></path><path d=\"M488.393 255C497.7 255 506.1 260.2 510.1 268.5L578.7 409.8 731.9 432.4C740.9 433.7 748.4 440 751.2 448.7S751.7 466.8 745.3 473.2L634.2 583.4 660.4 739C661.9 748 658.2 757.1 650.7 762.5S633.4 768.5 625.4 764.2L488.4 691 351.6 764.1C343.5 768.4 333.7 767.8 326.3 762.4S315.1 747.9 316.6 738.9L342.8 583.3 231.7 473.2C225.2 466.8 223 457.361 223.864 448.7S236.1 433.8 245.1 432.4L398.3 409.8 466.9 268.5C471 260.2 479.3 255 488.5 255Z\" p-id=\"2482\"></path><path d=\"M488.5 334 436 442.2C432.5 449.3 425.8 454.3 417.9 455.5L299.6 472.9 385.5 558C391 563.5 393.6 571.3 392.3 579L372 698.7 477.2 642.5C484.3 638.7 492.8 638.7 499.8 642.5L605 698.7 584.8 579.1C583.5 571.4 586 563.6 591.6 558.1L677.5 473 559.2 455.5C551.4 454.3 544.6 449.4 541.1 442.2L488.5 334Z\" p-id=\"2483\"></path></svg>";
		this.instance = $("<div></div>");
		this.image = $("<img src='" + this.loadingPicture + "'/>");
		this.title = $("<p></p>");
		
		this.bg = $("<div style='transform:scale(1)'></div>");

		if(this.loadingPicture) this.instance.append(this.image);

		this.initAnimationHtml();

		this.instance.append(this.title);
		this.bg.append(this.instance);
		$("body").append(this.bg);
	},

	initAnimationHtml : function(){

		this.loadBox = $("<div></div>");
		var img1 = $(this.loadImageUrl);
		var img2 = $(this.loadImageUrl);	
		this.img3 = $(this.loadImageUrl);
		this.img3.attr("class", "loadingRun");

		this.loadBox.css({
			"position":"relative",
			"perspective":"200px",
			"-webkit-transform-style":"preserve-3d",
			"-o-transform-style":"preserve-3d",
			"-ms-transform-style":"preserve-3d",
			"-moz-transform-style":"preserve-3d",
			"transform-style":"preserve-3d"
		});

		this.img3.css({
			"position" : "absolute" ,
			"left" : "50%" ,
			"z-index" : "-1" ,
			"-webkit-transform-origin" : "0 50%",
			"-o-transform-origin" : "0 50%",
			"-ms-transform-origin" : "0 50%",
			"-moz-transform-origin" : "0 50%",
			"transform-origin" : "0 50%",
			"fill" : this.loadingCaptionColor
		});

		img2.css({
			"position" : "absolute" ,
			"left" : "-50%" ,
			"-webkit-transform":"rotateY(180deg)",
			"-o-transform":"rotateY(180deg)",
			"-ms-transform":"rotateY(180deg)",
			"-moz-transform":"rotateY(180deg)",
			"transform":"rotateY(180deg)",
			"fill" : this.loadingCaptionColor
		});
		
		img1.css({
			"position" : "absolute" ,
			"left" : "50%",
			"fill" : this.loadingCaptionColor
		});

		this.loadBox.append(img1).append(img2).append(this.img3);
		this.instance.append(this.loadBox);
	},

	initConfig : function(){
		  this.loadingCaption, this.loadingCaptionColor, this.loadingPicture;
		  try{
		  	this.loadingCaption = bookConfig.loadingCaption ? bookConfig.loadingCaption : "Loading";
		  	this.loadingCaptionColor = bookConfig.loadingCaptionColor ? bookConfig.loadingCaptionColor : "#DDDDDD";
		  	this.loadingBackground = bookConfig.loadingBackground ? bookConfig.loadingBackground : "#1F2232";
		  	this.loadingPicture = bookConfig.loadingPicture ? bookConfig.loadingPicture : "";
		  }catch(err){
		  	this.loadingCaption = "Loading";
		  	this.loadingCaptionColor = "#BDBDBD";
		  	this.loadingBackground = "#1F2233";
		  	this.loadingPicture = "";
		  }
	},
	
	startLoading : function(){
		this.title.text($(document).attr("title"));
	},
	
	destroy : function(){

		animateOnce(this.bg , {"opacity":"0"} , 0.6 ,function(){
			this.img3.attr("class", "");
			$("body>style").html("");
			this.bg.remove();
			this.image.attr("src", "");
			$("body").css({"background-color" : ""});
		}.bind(this));
	},
	
	initCss : function(){
		$("html").css({
			"margin" : 0,
			"padding" : 0,
			"width" : "100%",
			"height" : "100%"
		});

		$("body").css({
			"margin" : 0,
			"padding" : 0,
			"width" : "100%",
			"height" : "100%",
			"position" : "fixed",
			"background-color" : this.loadingBackground
		});

		this.bg.css({
			"margin" : 0,
			"padding" : 0,
			"width" : "100%",
			"height" : "100%",
			"position" : "fixed",
			"background-color" : this.loadingBackground
		});

		this.instance.css({
			"width" : "100%",
			"height" : "100%",
			"color" : this.loadingCaptionColor,
			"text-align" : "center",
			"vertical-align" : "middle",
			"font-family" : "Tahoma",
		    "position" : "relative",

		});

		this.image.css({
			"position" : "absolute",
			"bottom" : "75%",
			"left" : "50%",
			"-webkit-transform" : "translate(-50% , 50%)",
		    "-moz-transform" : "translate(-50% , 50%)",
		    "-ms-transform" : "translate(-50% , 50%)",
		    "-o-transform" : "translate(-50% , 50%)",
			"transform" : "translate(-50% , 50%)",
			"margin-bottom" : "28px",
			"max-width" : "40%",
			"max-height" : "30%"
		});
		
		if(window.innerHeight <= 300) this.image.hide();
		
		var titleTran = "translate(-50%, 16px)";
		var loadingBoxTran = "translate(-50% , -56px)";
		
		// if(this.loadingPicture) {
			// var titleTran = "translate(-50%, 40px)";
			// var loadingBoxTran = "translate(-50% , -50%)";
		// }

		this.title.css({
			"font-family":"Arial",
		  	"font-size" : "24px",
		  	"position" : "absolute",
		  	"top" : "50%",
		  	"left" : "50%",
		  	"-webkit-transform" : titleTran,
		    "-moz-transform" : titleTran,
		    "-ms-transform" : titleTran,
		    "-o-transform" : titleTran,
			"transform" : titleTran,
		  	"margin" : 0,
		  	"padding" : 0
		});

		this.loadBox.css({
			"position" : "absolute",
			"width" : "49px",
			"height" : "56px",
			"left" : "50%",
			"top" : "50%",
			"-webkit-transform" : loadingBoxTran,
		    "-moz-transform" : loadingBoxTran,
		    "-ms-transform" : loadingBoxTran,
		    "-o-transform" : loadingBoxTran,
			"transform" : loadingBoxTran,
		  	"padding" : 0
		});
	},
	
	onResize : function(){}

}

var jsLoadingBar = new LoadingJS();