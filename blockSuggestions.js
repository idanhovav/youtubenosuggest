// Written by Idan Hovav please don't be mean or bad.

try {
	var sidebar = document.getElementById("watch7-sidebar");
	if (sidebar && sidebar.parentNode) {
		sidebar.parentNode.removeChild(sidebar);
	}
} catch (err) {
	console.log(err.message);
}
console.log("now be productive")
