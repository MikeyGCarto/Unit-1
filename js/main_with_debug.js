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
