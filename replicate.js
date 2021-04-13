/* globals Chart:false, feather:false */

(function () {
  "use strict";

  new Chart(document.getElementById("myChart"), {
    type: "bubble",
    data: {
      labels: "Africa",
      datasets: [
        {
          backgroundColor: "rgba(255,221,50,0.2)",
          borderColor: "rgba(255,221,50,1)",
          title: "Affinity Dental",
          data: [
            {
              x: 1.5,
              y: 2750,
              r: 40,
            },
          ],
        },
        {
          backgroundColor: "rgba(60,186,159,0.2)",
          borderColor: "rgba(60,186,159,1)",
          title: "Bugs Bunny Dental",
          data: [
            {
              x: 2.0,
              y: 2550,
              r: 40,
            },
          ],
        },
        {
          backgroundColor: "rgba(0,0,0,0.2)",
          borderColor: "#000",
          title: "Feregi Teeth",
          data: [
            {
              x: 1.2,
              y: 1000,
              r: 40,
            },
          ],
        },
        {
          backgroundColor: "rgba(193,46,12,0.2)",
          borderColor: "rgba(193,46,12,1)",
          title: "Klington Smiles",
          data: [
            {
              x: 2.0,
              y: 750,
              r: 40,
            },
          ],
        },
        {
          backgroundColor: "rgba(193,46,12,0.2)",
          borderColor: "rgba(193,46,12,1)",
          title: "Awesome Smiles",
          data: [
            {
              x: 3.75,
              y: 2750,
              r: 40,
            },
          ],
        },
        {
          backgroundColor: "rgba(193,46,12,0.2)",
          borderColor: "rgba(193,46,12,1)",
          title: "Bluetooth Dental",
          data: [
            {
              x: 4.45,
              y: 1100,
              r: 40,
            },
          ],
        },
      ],
    },
    options: {
      legend: {
        display: false,
      },
      tooltips: {
        enabled: false,
      },
      title: {
        display: false,
      },
      scales: {
        yAxes: [
          {
            ticks: {
              min: 0,
              max: 3500,
              callback: (val) => val.toLocaleString(),
            },
            scaleLabel: {
              display: true,
              labelString: "Patients Seen",
            },
          },
        ],
        xAxes: [
          {
            ticks: {
              min: 1,
              max: 5,
              callback: (val) => `\$${val.toFixed(1)}M`,
            },
            scaleLabel: {
              display: true,
              labelString: "Adjusted Production",
            },
          },
        ],
      },
    },
  });

  Chart.plugins.register({
    afterDatasetsDraw: function (chart, easing) {
      var ctx = chart.ctx;

      chart.data.datasets.forEach(function (dataset, i) {
        var meta = chart.getDatasetMeta(i);
        if (meta.type == "bubble") {
          //exclude scatter
          meta.data.forEach(function (element, index) {
            // Draw the text in black, with the specified font
            ctx.fillStyle = "rgb(0, 0, 0)";
            var fontSize = 13;
            var fontStyle = "normal";
            var fontFamily = "Helvetica Neue";
            ctx.font = Chart.helpers.fontString(
              fontSize,
              fontStyle,
              fontFamily
            );

            // Just naively convert to string for now
            var dataString = dataset.data[index].toString();
            // Make sure alignment settings are correct
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";

            var padding = 15;
            var position = element.tooltipPosition();
            ctx.fillText(dataset.title, position.x, position.y - fontSize / 2);
          });
        }
      });
    },
  });
})();
