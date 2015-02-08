document.addEventListener('DOMContentLoaded', function() {
  var public_sheet_id = getQueryVariable('public_sheet_id');
  if (public_sheet_id){
    var URL = public_sheet_id;
    // get data from URL and then plot it with c3
    Tabletop.init( { key: URL, callback: plotMyData, simpleSheet: true } );
  }
  else {
    alert("errorrrrr");
  }
})


// get URL parameters from the current URL
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


// Massage the data got via tabletop, plot using c3
function plotMyData(data) {
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