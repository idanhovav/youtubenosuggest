// Written by Idan Hovav please don't be mean or bad.
const removeNode = (node) => {
	if (node && node.parentNode) {
		node.parentNode.removeChild(node);
	}
}

try {
		var sidebar = document.getElementById("watch7-sidebar");
		removeNode(sidebar);
		var postVideo = document.getElementsByClassName("ytp-endscreen-content");
		var i;
		for (i = 0; i < postVideo.length; i++) {
			removeNode(postVideo[i]);
		}
} catch (err) {
	console.log(err.message);
}
console.log("now be productive")
