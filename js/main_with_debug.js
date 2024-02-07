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
// Variables for multiple city populations with city being a string and population being numbers.

function addColumns(cityPop){
    
    document.querySelectorAll("tr").forEach(function(row, i){

        if (i == 0){

            // Bug: Incorrect method name, should be `insertAdjacentHTML` instead of `insertAdjacntHTML`
            row.insertAdjacntHTML('beforeend', '<th>City Size</th>');
        } else {

            var citySize;

            if (cityPop[i-1].population < 100000){
                citySize = 'Small';

            } else if (cityPop[i-1].population < 500000){
                // Bug: Variable name is incorrect, should be `citySize` instead of `citysize`
                citysize = 'Medium';

            } else {
                citySize = 'Large';
            }

            // Bug: Missing angle brackets for `<td>` and incorrect assignment operator
            row.insertAdjacntHTML = '<td>' + citySize + '</td>';
        }
    });
}

function addEvents(){

    document.querySelector("table").addEventListener("mouseover", function(){
        
        var color = "rgb(";

        for (var i=0; i<3; i++){

            var random = Math.round(Math.random() * 255);

            color += "random";

            if (i<2){
                color += ",";
            
            } else {
                color += ")";
            }
        }

        // Bug: Incorrect property to set the table color, should be `style.backgroundColor`
        document.querySelector("table").color = color;
    });

    function clickme(){

        alert('Hey, you clicked me!');
    }

    document.querySelector("table").addEventListener("click", clickme);
}

//ex2.3
function initialize(){
    cities();
};

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
    };

    var mydiv = document.getElementById("mydiv");
    mydiv.appendChild(table);
};

window.onload = initialize();
