function insert_Row() {
    //Write your code here
  var table = document.getElementById("sampleTable");

	var newRow = table.insertRow(0);

	var leftCell= newRow.insertCell(0);
	
		var rightCell= newRow.insertCell(1);

	leftCell.innerHTML= "newCell1";
rightCell.innerHTML= "newCell2";
}

