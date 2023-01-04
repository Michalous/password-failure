document.addEventListener('DOMContentLoaded', function() {
    function characterProbability(numb) {
        var total = 0
        for (var i = 0; i < 1000; i++) {
            var num = 0 // numerical characters
            var special = 0 // special characters
            var lower = 0 // lower case
            var upper = 0 // upper case
            for (var j = 0; j < numb; j++) {
                var x = Math.ceil(Math.random() * 95)
                if (x <= 20) {
                    num++
                }
                else if (x > 20 && x <= 43) {
                    special++
                }
                else if (x > 43 && x <= 69) {
                    lower++
                }
                else {
                    upper++
                }
            }
            if (num == 0 || special == 0 || lower == 0 || upper == 0) {
                total++
            }
        }
        return total
    }
    var x_axis = []
    var y_axis = []
    for (var i = 10; i <= 64; i++) {
        x_axis.push(i)
        y_axis.push((characterProbability(i) / 1000).toFixed(2))
    }

    var trace = {
        x: [...x_axis],
        y: [...y_axis],
        mode: 'lines',
        type: 'scatter'
      };

      var layout = {
        margin: {t:0,r:0,b:0,l:20},
        xaxis: {
          automargin: true,
          tickangle: 0,
          title: {
            text: "Length of password",
            standoff: 20
          }},
        yaxis: {
          automargin: true,
          tickangle: 0,
          title: {
            text: "Probability",
            standoff: 40
          }}}
    
    var data = [trace]
    Plotly.newPlot('myDiv', data, layout, {displayModeBar : false})
})