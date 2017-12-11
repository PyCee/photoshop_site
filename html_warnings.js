function display_html_warnings () {
    if(document.getElementById("thumbnails").width !=
       document.getElementById("thumbnails").height){
	console.log("ERROR::thumbnail width != height. Resize thumbnails.");
    }
    if(document.getElementById("content").width !=
       document.getElementById("content").height){
	console.log("ERROR::content width != height. Resize content.");
    }
}
