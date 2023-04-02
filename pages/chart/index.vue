<template>
  <div>
      <VueApexCharts type="bar" height="540px"  :options="chartOptions" :series="data" />

  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [{
          name: 'Marine Sprite',
          data: [44, 55, 41, 37, 22, 43, 21] ,
        }, {
          name: 'Striking Calf',
          data: [44, 32, 33, 52, 13, 43, 32],
        }] ,
        chartOptions : {
          chart: {
          type: 'bar',
          height: 350,
          stacked: true,
          
        },
        colors: ['#E8EAF7', '#F8EAE8'],
        plotOptions: {
          bar: {     
            horizontal: true,
          },
        },
        title: {
          text: 'Fiction Books Sales'
        },
        xaxis: {
          axisBorder: {
              show: false
          },
          axisTicks: {
              show: false,
      },
          categories: ["คอนโด", "บ้านเดี่ยว", "บ้านแฝด", "ทาวน์โฮม", "โครงการบ้าน", "โครงการ", "บ้าน"],
          labels: {
            show: false,
            formatter: function (val) {
              return val + "K"
            }
          }
        },
        yaxis: {
          labels: {
          show: true,
          minWidth: 0,
          maxWidth: 160,
          style: {
              colors: [],
              fontSize: '12px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: 700,
              cssClass: 'apexcharts-yaxis-label',
          },
          offsetX: 0,
      },
      
          title: {
            text: "Word",
          rotate: 0,
          offsetX: -20,
          offsetY: -240,
          style: {
              color: undefined,
              fontSize: '13px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: 600,
              cssClass: 'apexcharts-yaxis-title',
          },
          },
        },
        tooltip: {
            
          y: {
            formatter: function (val) {
              return val + "K"
            }
          }
        },
        fill: {
          opacity: 1
        },
        legend: {
          position: 'top',
          horizontalAlign: 'left',
          offsetX: 60
        },
        dataLabels: {
          enabled: false,
        }
        }
    }
  }

}
</script>

<style>

</style>