

//$.getJSON("https://sandbox.tinypass.com/api/v3/publisher/user/list?api_token=zziNT81wShznajW2BD5eLA4VCkmNJ88Guye7Sw4D&aid=o1sRRZSLlw", function(user_data){
$.getJSON("piano_users.json", function(user_data){

	$(".piano-get_userid-input-button").on("click", function(){
		var searchstring = $(".piano-get_userid-input-text").val();
		
		$.each(user_data.users, function(i, v) {
			if (v.email == searchstring) {
				//alert(v.uid);
				$(".piano-get_userid-output-text").val(v.uid);
				return;
			}
		});
	});
	//console.log(user_data);	
});

function handleFiles(files) {
	// Check for the various File API support.
	if (window.FileReader) {
		// FileReader are supported.
		getAsText(files[0]);
	} else {
		alert('FileReader are not supported in this browser.');
	}
}

function getAsText(fileToRead) {
	var reader = new FileReader();
	// Read file into memory as UTF-8      
	reader.readAsText(fileToRead);
	// Handle errors load
	reader.onload = loadHandler;
	reader.onerror = errorHandler;
}

function loadHandler(event) {
	var csv = event.target.result;
	processData(csv);
}

function processData(csv) {
	var allTextLines = csv.split(/\r\n|\n/);
	var lines = [];
	for (var i=0; i<allTextLines.length; i++) {
		var data = allTextLines[i].split(',');
		var tarr = [];
		for (var j=0; j<data.length; j++) {
			tarr.push(data[j]);
		}
		lines.push(tarr);
	}
	
	//$.getJSON("https://sandbox.tinypass.com/api/v3/publisher/user/list?api_token=zziNT81wShznajW2BD5eLA4VCkmNJ88Guye7Sw4D&aid=o1sRRZSLlw", function(user_data){
	$.getJSON("piano_users.json", function(user_data){
		for (var i=0; i < lines.length; i++) {
			var searchstring = lines[i];
			var line = lines[i].slice(0);
			
			$.each(user_data.users, function(i, v) {
				if (v.email == searchstring[1]) {
					line[0] = v.uid;
					lines[i-1] = line;
					
					$(".piano-read_csv-output-text").append(lines[i-1] + "\n");
					return;
				}
			});
		};
	});
	//console.log(lines);
	
	let csvContent = "data:text/csv;charset=utf-8," + lines.map(e => e.join(",")).join("\n");
	
	var encodedUri = encodeURI(csvContent);
	var link = document.createElement("a");
	link.setAttribute("href", encodedUri);
	link.setAttribute("download", ("piano_clientfile_validatedIDs.csv"));
	document.body.appendChild(link); // Required for FF

	link.click();
}

function errorHandler(evt) {
	if(evt.target.error.name == "NotReadableError") {
		alert("Cannot read file!");
	}
}