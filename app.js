
var options = {
  chart: {
    type: 'bar'
  },
  fill: {
    colors: ['#7C00FE', '#7C00FE', '#9C27B0','#F44336', '#F9E400', '#9C27B0','#F5004F', '#E91E63', '#9C27B0','#7C00FE', '#7C00FE']
  },
  series: [{
    name: 'IPM Menurut Provinsi Tahun 2023',
    data: [83.55,81.09,0,0,75.13,0,74.39,0,0,67.47,63.01],
    
  }],
  xaxis: {
    categories: ["DKI Jakarta","DI Yogyakarta","","","Sumatera Utara","","INDONESIA","","", "Papua Barat","Papua"]
  }
}

var chart = new ApexCharts(document.querySelector("#chart"), options);

chart.render();


