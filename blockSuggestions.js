// Written by Idan Hovav. Updated on 12/15/19.

idsToRemove = ['related', 'comments'];

var removeNode = node => {
	if (node && node.parentNode) {
		node.parentNode.removeChild(node);
	}
}

var getNode = id => {
	return document.getElementById(id);
}

var removeNodeById = id => {
	try {
		var node = getNode(id);
		removeNode(node);	
	}
	catch (err) {
		console.log(err.message);
	}
}

idsToRemove.forEach(id => removeNodeById(id));
console.log('done');
