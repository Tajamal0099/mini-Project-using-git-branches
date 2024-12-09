 // ApexCharts Configuration
 document.addEventListener("DOMContentLoaded", () => {
    const options = {
      chart: {
        type: "line",
        height: 300,
      },
      series: [
        { name: "This week", data: [10, 20, 15, 30, 25, 35] },
        { name: "Last week", data: [15, 25, 20, 35, 30, 40] },
      ],
      xaxis: {
        categories: ["Feb 14", "Feb 15", "Feb 16", "Feb 17", "Feb 18", "Feb 19"],
      },
      colors: ["#6366F1", "#EAB308"],
    };

    const chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();});