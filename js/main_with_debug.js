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
