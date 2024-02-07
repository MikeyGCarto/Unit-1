// Debugging and commenting the main_with_debug.js script

// Log a message to confirm that the script is running
console.log('Hello world');

// Define city population data
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

// Function to add columns to the table based on city population
function addColumns(cityPop){
    // Iterate over each row in the table
    document.querySelectorAll("tr").forEach(function(row, i){
        if (i == 0){
            // Add a column header for "City Size" to the first row
            row.insertAdjacentHTML('beforeend', '<th>City Size</th>');
        } else {
            var citySize;
            // Determine the city size based on population
            if (cityPop[i-1].population < 100000){
                citySize = 'Small';
            } else if (cityPop[i-1].population < 500000){
                citySize = 'Medium';
            } else {
                citySize = 'Large';
            }
            // Add a cell with the city size to the current row
            row.insertAdjacentHTML('beforeend', '<td>' + citySize + '</td>');
        }
    });
}

// Function to add hover and click events to the table
function addEvents(){
    // Add event listeners to the table for hover and click
    var table = document.querySelector("table");
    table.addEventListener("mouseover", function(){
        // Change the background color of the table on hover
        var color = "rgb(";
        for (var i=0; i<3; i++){
            var random = Math.round(Math.random() * 255);
            color += random;
            if (i < 2){
                color += ",";
            } else {
                color += ")";
            }
        }
        table.style.backgroundColor = color;
    });

    // Define the clickme function for the click event
    function clickme(){
        alert('Hey, you clicked me!');
    }

    // Add the click event listener to the table
    table.addEventListener("click", clickme);
}

// Initialize the table and events when the window loads
function initialize(){
    cities(); // Populate the table with city data
    addColumns(cityPop); // Add columns for city size
    addEvents(); // Add hover and click events to the table
}

// Function to populate the table with city names and populations
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

    // Create a new table element
    var table = document.createElement("table");

    // Create and append header row to the table
    var headerRow = document.createElement("tr");
    var cityHeader = document.createElement("th");
    cityHeader.innerHTML = "City";
    headerRow.appendChild(cityHeader);
    var popHeader = document.createElement("th");
    popHeader.innerHTML = "Population";
    headerRow.appendChild(popHeader);
    table.appendChild(headerRow);

    // Iterate over cities and populations to create rows in the table
    for (var i = 0; i < cities.length; i++){
        var tr = document.createElement("tr");
        var city = document.createElement("td");
        city.innerHTML = cities[i];
        tr.appendChild(city);
        var pop = document.createElement("td");
        pop.innerHTML = population[i];
        tr.appendChild(pop);
        table.appendChild(tr);
    }

    // Append the table to the specified div in the HTML
    var mydiv = document.getElementById("mydiv");
    mydiv.appendChild(table);
}

// Call the initialize function when the window loads
window.onload = initialize;
