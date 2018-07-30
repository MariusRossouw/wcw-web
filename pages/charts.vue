<template>
    <div>
        <center>
            <div class="echarts">
                <chart
                    :option="option"
                    :loading="loading"
                    @ready="onReady"
                    @click="onClick"
                />

                <chart
                    :option="option2"
                    :loading="loading"
                    @ready="onReady"
                    @click="onClick"
                />

                <chart
                    :option="option3"
                    :loading="loading"
                    @ready="onReady"
                    @click="onClick"
                />

                <chart
                    id="chart4"
                    :option="option4"
                    :loading="loading"
                    @ready="onReady"
                />


                <chart
                    id="chart5"
                    :option="option5"
                    :loading="loading"
                    @ready="onReady"
                />
                <!-- <button @click="doRandom">Random</button> -->
            </div>
        </center>
    </div>
    
</template>

<script type="text/babel">
import echarts from 'echarts'
import IEcharts from 'vue-echarts-v3/src/full.js';
export default {
    name: 'view',
    data: () => ({
        loading: false,
        chart: null,
        chart5: null,
        option : {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    crossStyle: {
                        color: '#999'
                    }
                }
            },
            toolbox: {
                feature: {
                    dataView: {show: true, readOnly: false, title: 'Data View'},
                    magicType: {show: true, type: ['bar','line'], title: 'Stuff'},
                    restore: {show: true, title: 'Restore'},
                    saveAsImage: {show: true, title: 'Download'}
                }
            },
            // legend: {
            //     data:['ONE','TWO','THREE']
            // },
            xAxis: [
                {
                    type: 'category',
                    data: ['JAN','FEB','MRT','APR','MAY','JNE','JLY','AUG','SEP','OCT','NOV','DEC'],
                    axisPointer: {
                        type: 'shadow'
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: 'Budget',
                    min: 0,
                    max: 200000,
                    interval: 50000,
                    axisLabel: {
                        formatter: '{value} R'
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#b34038'
                        }
                    },
                },
                {
                    type: 'value',
                    name: 'Sales',
                    min: 0,
                    max: 200000,
                    interval: 50000,
                    axisLabel: {
                        formatter: '{value} R'
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#5197d5'
                        }
                    },
                }
            ],
            series: [
                {
                    name:'Budget',
                    type:'line',
                    yAxisIndex: 1,
                    data:[30000, 29000, 23442, 67645, 78678, 23423, 56756, 54645, 56756, 87664, 78445, 45343]
                },
                {
                    name:'Sales',
                    type:'bar',
                    itemStyle: {
                        normal: {color: '#3398DB'}
                    },
                    data:[25000, 39760, 29880, 31440, 21000, 69006, 56879, 45546, 12323, 89678, 45435, 84656]
                }
            ]
        },
        option2: {
            title : {
                text: 'Text',
                subtext: 'Subtext',
                x:'center'
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                // orient: 'vertical',
                bottom: 10,
                left: 'center',
                data: ['A','B','C','D','E']
            },
            series : [
                {
                    name: 'Something',
                    type: 'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    label: {
                        normal: {
                            formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                            backgroundColor: '#eee',
                            borderColor: '#aaa',
                            borderWidth: 1,
                            borderRadius: 4,
                            // shadowBlur:3,
                            // shadowOffsetX: 2,
                            // shadowOffsetY: 2,
                            // shadowColor: '#999',
                            // padding: [0, 7],
                            rich: {
                                a: {
                                    color: '#999',
                                    lineHeight: 22,
                                    align: 'center'
                                },
                                // abg: {
                                //     backgroundColor: '#333',
                                //     width: '100%',
                                //     align: 'right',
                                //     height: 22,
                                //     borderRadius: [4, 4, 0, 0]
                                // },
                                hr: {
                                    borderColor: '#aaa',
                                    width: '100%',
                                    borderWidth: 0.5,
                                    height: 0
                                },
                                b: {
                                    fontSize: 16,
                                    lineHeight: 33
                                },
                                per: {
                                    color: '#eee',
                                    backgroundColor: '#334455',
                                    padding: [2, 4],
                                    borderRadius: 2
                                }
                            }
                        }
                    },
                    data:[
                        {value:335, name:'A'},
                        {value:310, name:'B'},
                        {value:234, name:'C'},
                        {value:135, name:'D'},
                        {value:1548, name:'E'}
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        },
        option3: {
            title: {
                text: 'TEXT'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data:['ONE','TWO','THEE','FOUR','FIVE']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['1','2','3','4','5','6','7']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name:'ONE',
                    type:'line',
                    stack: 'A',
                    data:[120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name:'TWO',
                    type:'line',
                    stack: 'B',
                    data:[220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name:'THEE',
                    type:'line',
                    stack: 'C',
                    data:[150, 232, 201, 154, 190, 330, 410]
                },
                {
                    name:'FOUR',
                    type:'line',
                    stack: 'D',
                    data:[320, 332, 301, 334, 390, 330, 320]
                },
                {
                    name:'FIVE',
                    type:'line',
                    stack: 'E',
                    data:[820, 932, 901, 934, 1290, 1330, 1320]
                }
            ]
        },
        option4: {
            legend: {},
            tooltip: {
                trigger: 'axis',
                showContent: false
            },
            dataset: {
                source: [
                    ['product', '2012', '2013', '2014', '2015', '2016', '2017'],
                    ['Matcha Latte', 41.1, 30.4, 65.1, 53.3, 83.8, 98.7],
                    ['Milk Tea', 86.5, 92.1, 85.7, 83.1, 73.4, 55.1],
                    ['Cheese Cocoa', 24.1, 67.2, 79.5, 86.4, 65.2, 82.5],
                    ['Walnut Brownie', 55.2, 67.1, 69.2, 72.4, 53.9, 39.1]
                ]
            },
            xAxis: {type: 'category'},
            yAxis: {gridIndex: 0},
            grid: {top: '55%'},
            series: [
                {type: 'line', smooth: true, seriesLayoutBy: 'row'},
                {type: 'line', smooth: true, seriesLayoutBy: 'row'},
                {type: 'line', smooth: true, seriesLayoutBy: 'row'},
                {type: 'line', smooth: true, seriesLayoutBy: 'row'},
                {
                    type: 'pie',
                    id: 'pie',
                    radius: '30%',
                    center: ['50%', '25%'],
                    label: {
                        formatter: '{b}: {@2012} ({d}%)'
                    },
                    encode: {
                        itemName: 'product',
                        value: '2012',
                        tooltip: '2012'
                    }
                }
            ]
        },
        option5: {
            legend: {},
            tooltip: {
                trigger: 'axis',
                showContent: false
            },
            dataset: {
                source: [
                    ['product', '2012', '2013', '2014', '2015', '2016', '2017'],
                    ['Matcha Latte', 41.1, 30.4, 65.1, 53.3, 83.8, 98.7],
                    ['Milk Tea', 86.5, 92.1, 85.7, 83.1, 73.4, 55.1],
                    ['Cheese Cocoa', 24.1, 67.2, 79.5, 86.4, 65.2, 82.5],
                    ['Walnut Brownie', 55.2, 67.1, 69.2, 72.4, 53.9, 39.1]
                ]
            },
            xAxis: {type: 'category'},
            yAxis: {gridIndex: 0},
            grid: {top: '55%'},
            series: [
                {type: 'line', smooth: true, seriesLayoutBy: 'row'},
                {type: 'bar', smooth: true, seriesLayoutBy: 'row'},
                {type: 'line', smooth: true, seriesLayoutBy: 'row'},
                {type: 'line', smooth: true, seriesLayoutBy: 'row'},
                {
                    type: 'pie',
                    id: 'pie',
                    radius: '30%',
                    center: ['50%', '25%'],
                    label: {
                        formatter: '{b}: {@2012} ({d}%)'
                    },
                    encode: {
                        itemName: 'product',
                        value: '2012',
                        tooltip: '2012'
                    }
                }
            ]
        }
    }),
    methods: {
        doRandom() {
            const that = this;
            that.loading = !that.loading;
        },
        onReady(instance, ECharts) {
            console.log(instance, ECharts);
        },
        onClick(event, instance, ECharts) {
            console.log(arguments);
        },
        // onClick2(event, instance, ECharts){
        //     console.log('Mouse',arguments); 
        //     var xAxisInfo = event.data;
        //     var dimension = xAxisInfo[0];
        //     // console.log(this.option4.series.length-1);
        //     this.option4.series[this.option4.series.length-1].label.formatter = '{b}: {@[' + dimension + ']} ({d}%)';
        //     this.option4.series[this.option4.series.length-1].encode.value = dimension;
        //     this.option4.series[this.option4.series.length-1].encode.tooltip = dimension;
        // },
        drawGraph(id) {
            this.chart = echarts.init(document.getElementById(id));
            console.log("CHART: ",this.chart);
        },
    },
    watch:{
        chart(val){
            this.chart.on('updateAxisPointer', function (event) {
                var xAxisInfo = event.axesInfo[0];
                if (xAxisInfo) {
                    var dimension = xAxisInfo.value + 1;
                    val.setOption({
                        series: {
                            id: 'pie',
                            label: {
                                formatter: '{b}: {@[' + dimension + ']} ({d}%)'
                            },
                            encode: {
                                value: dimension,
                                tooltip: dimension
                            }
                        }
                    });
                }
            });
        }
    },
    beforeMount() {
        
    },
    mounted() {
        this.$nextTick(function() {
            this.drawGraph('chart4')
        })
    }
};
</script>

<style scoped>
    .echarts {
        width: 800px;
        height: 400px;
    }
</style>