const addTask = () => {
    let view = document.getElementById("taskList");
	let newTd = document.createElement("li");
	var inputText = document.getElementById("name").value;
	var node = document.createTextNode(inputText);
	newTd.appendChild(node);
	view.appendChild(newTd);
}

