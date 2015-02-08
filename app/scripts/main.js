// dataset = [
//     datapoint,
//     datapoint
// ];

// var madataset = [
// ['feature-24', 0.9, -0.9],
// ['feature-4', 0.95, -0.84],
// ['feature-20', 0.92, -0.85],
// ['feature-8', 0.92, -0.83],
// ['feature-17', 0.84, -0.76],
// ['feature-14', 0.99, -0.7],
// ['feature-18', 0.72, -0.77],
// ['feature-2', 0.79, -0.69],
// ['feature-6', 0.08, -0.92],
// ['feature-13', 0.75, -0.59],
// ['feature-30', 0.72, -0.59],
// ['feature-25', 0.29, -0.72],
// ['feature-5', 0.6, -0.6],
// ['feature-11', 0.37, -0.67],
// ['feature-22', 0.71, -0.54],
// ['feature-10', 0.58, -0.58],
// ['feature-3', 0.67, -0.53],
// ['feature-27', 0.54, -0.56],
// ['feature-12', 0.48, -0.56],
// ['feature-9', 0.8, -0.44],
// ['feature-7', 0.5, -0.54],
// ['feature-29', 0.64, -0.47],
// ['feature-19', 0.72, -0.44],
// ['feature-1', 0.66, -0.43],
// ['feature-16', 0.32, -0.54],
// ['feature-15', 0.58, -0.42],
// ['feature-21', 0.54, -0.33],
// ['feature-26', 0.31, -0.35],
// ['feature-28', 0.23, -0.23],
// ['feature-23', 0.27, -0.18],
// ];


function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}


document.addEventListener('DOMContentLoaded', function() {
  var public_sheet_id = getQueryVariable('public_sheet_id');
  if (public_sheet_id){
    var URL = public_sheet_id;
    // get data from URL and then plot it with c3
    Tabletop.init( { key: URL, callback: myData, simpleSheet: true } );
  }
  else {
    alert("errorrrrr");
  }
})



function myData(data) {
  console.log(data);

  // Convert strings to numbers as appropriate
  data = _.map(data, function(d){
    d.Dissatisfaction = +d.Dissatisfaction;
    d.Satisfaction = +d.Satisfaction;
    return d;
  });

  // Sort by Dissatisfaction
  data = _.sortBy( data, 'Dissatisfaction');
  console.log(data);

  // Draw the beautiful c3 chart
  var chart = c3.generate({
    data: {
        json: data,
        keys: {
            value: ['Satisfaction', 'Dissatisfaction']
        },
        names: {'Satisfaction': 'Impact on Satisfaction',
                'Dissatisfaction': 'Impact on Dissatisfaction'},
        type: 'bar'
    },
    grid: {
        y: {
            lines: [{value:0}]
        }
    },
    tooltip: {
        format: {
            title: function (d) { return 'Feature ' + data[d].FeatureID + ": " + data[d].Description; },
        }
    }
  });


}


// var importeddataset = d3.csv("sampledata/kanodata.csv", function(d) {
//   return {
//     featureid: +d.Featureid,
//     // label: function(){
//     //     return "Feature " + featureid;
//     // },
//     description: d.Description,
//     satisfaction: +d.Satisfaction,
//     dissatisfaction: +d.Dissatisfaction
//   };
// }, function(error, rows) {
//   console.log(rows);
//   var chart = c3.generate({
//       data: {
//           json: rows,
//           keys: {
//               value: ['satisfaction', 'dissatisfaction']
//           },
//           type: 'bar'
//       },
//       grid: {
//           y: {
//               lines: [{value:0}]
//           }
//       },
//       tooltip: {
//           format: {
//               title: function (d) { return 'Feature ' + rows[d].featureid + ": " + rows[d].description; },
//           }
//       }
//   });
// });


// object we have =>

// [
//   [satisfaction, dissatisfaction],
// ]