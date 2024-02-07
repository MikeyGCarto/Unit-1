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
    // Loop through each row (tr) in the table
    $("tr").each(function(i, row){

        if (i == 0){
            // Add a header for "City Size" to the first row
            $(row).append('<th>City Size</th>');
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
            $(row).append('<td>' + citySize + '</td>');
        }
    });
}

function addEvents(){
    // Add mouseover event to the table
    $("table").mouseover(function(){
        var color = "rgb(";

        // Generate random RGB color
        for (var i=0; i<3; i++){
            var random = Math.round(Math.random() * 255);
            color += random;
            if (i<2){
                color += ",";
            } else {
                color += ")";
            }
        }

        // Apply the generated color to the table's text color
        $(this).css('color', color);
    });

    // Add click event to the table
    $("table").on('click', function(){
        alert('Hey, you clicked me!');
    });
}

// Initialize the table and events when the document is ready
$(document).ready(function(){
    // Call the function to add columns based on city population
    addColumns(cityPop);
    // Call the function to add hover and click events to the table
    addEvents();
});



// EXAMPLE TABLE
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
