<template>
  <div>
    <apexcharts :options="chartOptions" :series="chartData" type="wordCloud" height="350" />
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";

export default {
  components: {
    apexcharts: VueApexCharts
  },
  data() {
    return {
     chartOptions: {
  textStyle: {
    fontFamily: '"Open Sans", sans-serif',
    fontWeight: 600
  },
  options: {
    minLength: 3,
    ignore: ['of', 'and', 'the', 'a', 'to', 'is', 'in'],
    rotations: 3,
    rotationAngles: [0, 90],
    scale: "log",
    spiral: "archimedean"
  }
},
      chartData: [
        // chart data here
      ]
    };
  }
};
</script>