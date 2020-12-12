$("a[href^='http']").each(function() {

console.log($(this).find("li"));

// console.log(this.href);
// console.log(this.hostname);
if (this.href.includes('https://www.youtube.com') == true){$(this).prepend('<img src="./img/youtube-icon.png" style="height:14px; margin-right:5px;margin-bottom:1px; ">');}
else if (this.href.includes('https://www.facebook.com') == true){$(this).prepend('<img src="./img/facebook-icon.png" style="height:16px; margin-right:5px;margin-bottom:0px; ">');}
else if (this.href.includes('https://www.instagram.com') == true){$(this).prepend('<img src="./img/instagram-icon.png" style="height:14px; margin-right:5px;margin-bottom:1px; ">');}
else if (this.href.includes('https://www.reddit.com') == true){$(this).prepend('<img src="./img/reddit-icon.png" style="height:17px; margin-right:5px;margin-bottom:0px; ">');}
else if (this.href.includes('https://www.google.com/maps/') == true){$(this).prepend('<img src="./img/google-maps-icon.png" style="height:14px; margin-right:5px;margin-bottom:1px; ">');}
else if (this.href.includes('https://www.google.com/travel/flights') == true){$(this).prepend('<img src="./img/google-flights-icon.png" style="height:17px; margin-right:5px;margin-bottom:0px; ">');}
else if (this.href.includes('https://www.google.com/travel/') == true){$(this).prepend('<img src="./img/google-travel-icon.svg" style="height:17px; margin-right:5px;margin-bottom:0px; ">');}
// No favicon
else if (this.href.includes('nexstand.com') == true){$(this).prepend('<span style="margin-right:5px"> 🔗</span>');}
else if (this.href.includes('canva.com') == true){$(this).prepend('<span style="margin-right:5px"> 🔗</span>');}
else if (this.href.includes('toggl.com') == true){$(this).prepend('<span style="margin-right:5px"> 🔗</span>');}

else{
// $(this).prepend('<img src="https://www.google.com/s2/favicons?domain=' + this.hostname + '" style="height:16px; margin-right:5px;margin-bottom:3px; ">');
$(this).children("li").prepend('<img src="https://www.google.com/s2/favicons?domain=' + this.hostname + '" style="height:16px; margin-right:5px;margin-bottom:3px; ">');
}
});

// New Window Link Icon
// $("li").mouseover(function(){
// 	if ($(this).children("a").attr("href")){
// 		$(this).children("a").append('<img id="newWindow" src="./img/new-window-icon.png" style="height:13px;float:right;margin-top:5px;">');
// 	}
// }).mouseout(function() {
// 	$(this).find("#newWindow").remove();
// });