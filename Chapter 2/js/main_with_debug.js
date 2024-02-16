//creates a variable array with strings and numbers
var cityPop = [
	{ 
		city: 'Madison',
		population: 233209
	},
	{
		city: 'Milwaukee',
		population: 594833
	},
	{
		city: 'Green Bay',
		population: 104057
	},
	{
		city: 'Superior',
		population: 27244
	}
];

//This function uses each element of cityPop variables to create columns.
//small, medium, or large city
function addColumns(cityPop) {
    
	//creates the header for City Size
	document.querySelectorAll("tr").forEach(function(row, i) {
        if (i == 0) {
            row.insertAdjacentHTML('beforeend', '<th>City Size</th>');
        } else {
            var citySize; //Creates classes for city size based on population
            if (cityPop[i - 1].population < 100000) {
                citySize = 'Small';
            } else if (cityPop[i - 1].population < 500000) {
                citySize = 'Medium';
            } else {
                citySize = 'Large';
            }
            row.insertAdjacentHTML('beforeend', '<td>' + citySize + '</td>'); //adds citySize to column
        }
    });
}

//Function creates two interactive buttons
function addEvents(){
	
	//Creates the mouseover event that changes the color of the numbers when hovered over
	document.querySelector("table").addEventListener("mouseover", function(){
		
		var color = "rgb(";

		for (var i=0; i<3; i++){

			var random = Math.round(Math.random() * 255); //random color generator

			color += random; 

			if (i<2){
				color += ",";
			
			} else {
				color += ")";
		};

		//Uses the random color generator on the text when hovered over
		document.querySelector("table").style.color = color;
	}},)

	//Click interaction when something is clicked
	function clickme(){

		alert('Hey, you clicked me!');
	};

	document.querySelector("table").addEventListener("click", clickme)
};

//Initializes the functions when called upon
function initialize(){
    cities();
	addColumns(cityPop);
	addEvents();
};

//Function creates another table with cities and population
function cities(){
    var cities = [
        'Madison',
        'Milwaukee',
        'Green Bay',
        'Superior'
    ];
    var population = [
        233209,
        594833,
        104057,
        27244
    ];

    //create a table element
    var table = document.createElement("table");

    //create a header row
    var headerRow = document.createElement("tr");

    //add city column to header row
    var cityHeader = document.createElement("th");
    cityHeader.innerHTML = "City";
    headerRow.appendChild(cityHeader);

    //add population column to header row
    var popHeader = document.createElement("th");
    popHeader.innerHTML = "Population";
    headerRow.appendChild(popHeader);
	
    //add the header row
    table.appendChild(headerRow);

    //loop to add a new row for each city
    for (var i = 0; i < cities.length; i++){
        var tr = document.createElement("tr");

        var city = document.createElement("td");
        city.innerHTML = cities[i];
        tr.appendChild(city);

        var pop = document.createElement("td");
        pop.innerHTML = population[i];
        tr.appendChild(pop);

        table.appendChild(tr);
    };

    //add the table to the div in index.html
    var mydiv = document.getElementById("mydiv");
    mydiv.appendChild(table);
};

window.onload = initialize();

//New Code for Activity 4
//Giving extra seperation so it's easier for my brain to find it

function debugCallback(response){ //Call function to retrieve CSV data

    response.text().then(function(csvData) {
        // Append the CSV data to the div as well as change it to CSV and not geojson
        document.querySelector("#mydiv").insertAdjacentHTML('beforeend', '<br>CSV data:<br>' + csvData); //geojson to csv again, this line is for completing the div call to the HTML index
    });
}

function debugAjax(){
    fetch("Chapter 2/data/MegaCities.csv") // Function to collect the CSV data from the data folder.
        .then(function(response){
            // Call debugCallback and pass the response
            debugCallback(response); // response is for displaying the CSV on the webpage.
        })
        // Catch any errors in fetching the data
        .catch(function(error) {
            console.log('Error fetching data:', error); //Function to showcase an error in the console so debugging is easier.
        });
}

// Call debugAjax to fetch and display data
debugAjax();
