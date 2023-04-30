function insert_Row() {
    //Write your code here
 let table = document.getElementById("sampleTable");

	let newRow = table.insertRow(0);

	let leftCell= newRow.insertCell(0);
	
		let rightCell= newRow.insertCell(1);

	leftCell.innerHTML= "New Cell1";
rightCell.innerHTML= "New Cell2";
}

