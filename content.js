class Content {
    constructor (img_src, title) {
	this.title = title;
	this.element = document.createElement("img");
	document.getElementById("content_image").appendChild(this.element);
	this.element.src = img_src;
	
	this.hide();
    }
    hide () {
	this.element.style.display = "none";
    }
    show () {
	this.element.style.display = "block";
	document.getElementById("content_title").innerHTML = this.title;
    }
    set_size (width, height) {
	this.element.style.width = width + "px";
	this.element.style.height = height + "px";
    }
}
