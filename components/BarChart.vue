<template>
  <div class="relative flex justify-between w-[520px] text-gray-900">
    <div class="absolute left-4 text-[16px] font-bold">Word</div>
    <div class="absolute right-0 text-[16px] font-bold ">Amount</div>
    <div class="absolute z-10 text-[14px]  h-[400px]  left-5 ">
      <div class="mt-10 flex-row  font-medium h-[320px]  pt-1">
          <div v-for="(item,index) in categories" :key="index"><div class=" h-[29px] mb-3">{{item}}</div></div>
      </div>
    </div>
      <div class="w-[450px]" ><VueApexCharts type="bar" height="380"  :options="chartOptions" :series="series" /></div>
       <div class="absolute z-10 text-[14px]   h-[316px]  right-0 ">
      <div class="mt-10 flex-row space-y-3 font-medium">
          <div v-for="(item,index) in dataValue" :key="index"><div v-if="item!==0">{{item}}</div></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => []
    },
    categories: {
     type: Array
    },
    dataValue:{
      type: Array
    }
  },
  data() {
    return {
      chartData:[],
      series: [{
          name: 'Marine Sprite',
          data: this.dataValue ,
        }] ,
        chartOptions : {
          chart: {
          type: 'bar',
          stacked: false,
          toolbar: {
              show: false
            },
          
        },
        colors: ['#E8EAF7', '#F8EAE8'],
        plotOptions: {
          bar: {     
            horizontal: true,
          },
        },
        title: {
          text: ''
        },
        xaxis: {
          axisBorder: {
              show: false
          },
          axisTicks: {
              show: false,
      },
          categories: this.categories,
          labels: {
            show: false,
            formatter: function (val) {
              return val + "K"
            }
          }
        },
        
        yaxis: {
          labels: {
          show: false,
          minWidth: 0,
          maxWidth: 0,
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
        }, 
          
toolbar: {
    show: false,
    tools: {
      download: false
    }
  }
        }
    }
  },
  watch:{
    categories() {
       this.chartOptions = {categories : this.categories}
       this.series = {data : this.dataValue}
    }
  }

}
</script>

<style>

</style>