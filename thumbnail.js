class Thumbnail {
    constructor (img_src, parent_id) {
	this.element = document.createElement("img");
	document.getElementById(parent_id).appendChild(this.element);
	this.element.src = img_src;

	this.element.style.margin = "0px 2px";
    }
    set_size (width, height) {
	this.element.style.width = width + "px";
	this.element.style.height = height + "px";
    }
}
