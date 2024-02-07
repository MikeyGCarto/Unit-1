console.log('Hello world');
// Replacing Main.js script into main_with_debug.js script

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

function addColumns(cityPop){
    document.querySelectorAll("tr").forEach(function(row, i){
        if (i == 0){
            // Bug: Correcting method name to insertAdjacentHTML
            row.insertAdjacentHTML('beforeend', '<th>City Size</th>');
        } else {
            var citySize;
            if (cityPop[i-1].population < 100000){
                citySize = 'Small';
            } else if (cityPop[i-1].population < 500000){
                // Bug: Correcting variable name to citySize
                citySize = 'Medium';
            } else {
                citySize = 'Large';
            }
            // Bug: Correcting assignment to use innerHTML
            row.insertAdjacentHTML('beforeend', '<td>' + citySize + '</td>');
        }
    });
}

function addEvents(){
    var table = document.querySelector("table");
    table.addEventListener("mouseover", function(){
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
        // Bug: Correcting property name to style.backgroundColor
        table.style.backgroundColor = color;
    });

    // Bug: Click event handler function was not properly defined
    function clickme(){
        alert('Hey, you clicked me!');
    }

    table.addEventListener("click", clickme);
}

// Initialize function to set up the table and events
function initialize(){
    cities();
    addColumns(cityPop);
    addEvents();
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

    var table = document.createElement("table");

    var headerRow = document.createElement("tr");
    var cityHeader = document.createElement("th");
    cityHeader.innerHTML = "City";
    headerRow.appendChild(cityHeader);
    var popHeader = document.createElement("th");
    popHeader.innerHTML = "Population";
    headerRow.appendChild(popHeader);
    table.appendChild(headerRow);

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

    var mydiv = document.getElementById("mydiv");
    mydiv.appendChild(table);
}

// Call initialize function when the window loads
window.onload = initialize;
