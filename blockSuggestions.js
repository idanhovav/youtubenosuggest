// Written by Idan Hovav please don't be mean or bad.
var deleteThisHereNode = (node) => {
	if (node && node.parentNode) {
		node.parentNode.removeChild(node);
	}
}

try {
		var relatedSidebar = document.getElementById("related");
		deleteThisHereNode(relatedSidebar);
		var postVideo = document.getElementsByClassName("ytp-endscreen-content");
} catch (err) {
	console.log('blockSugesstions error');
	console.log(err.message);
}
console.log("now be productive")
