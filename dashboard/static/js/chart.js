var oilCanvas = document.getElementById("oilChart");

Chart.defaults.global.defaultFontFamily = "Lato";

var oilData = {
    labels: [
        "CP01",
        "CP08",
        "CP09",
        "CP15",
        "CP04",
    ],
    datasets: [
        {
            data: [133.3, 86.2, 52.2, 51.2, 50.2],
            backgroundColor: [
                "#f74656",
                "#f6db34",
                "#22a3dc",
                "#7fe33a",
                "#f88b2c",
                
            ]
        }]
};

var pieChart = new Chart(oilCanvas, {
  type: 'pie',
  data: oilData
});

var ctx = document.getElementById("myChart").getContext('2d');


var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["",	"Monday",	"Tuesday",	"Wednesday",	"Thursday",	"Friday", "Saturay"],
        datasets: [{
            label: 'PRESENT', // Name the series
            data: ["",899, 760, 955, 796, 901, 501], // Specify the data values array
            fill: false,
            borderColor: '#2196f3', // Add custom color border (Line)
            backgroundColor: '#2196f3', // Add custom color background (Points and Fill)
            borderWidth: 1 // Specify bar border width
        }]},
    options: {
      responsive: true, // Instruct chart js to respond nicely.
      maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
    }
});