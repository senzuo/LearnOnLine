window.onload = function() {
    var knowlegepoint = echarts.init(document.getElementById('knowlegepoint'));
    var knowlegeaccuracy = echarts.init(document.getElementById('knowlegeaccuracy'));
    var branchdis = echarts.init(document.getElementById('branchdis'));
    var branchaccuracy = echarts.init(document.getElementById('branchaccuracy'));
    var paperitembox = echarts.init(document.getElementById('paperitembox'));

    // 指定图表的配置项和数据
    optionKnowlegepoint = {
        title: {
            text: '知识点分布图',
            x: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            x: 'left',
            data: ['C', 'C++', 'Java', 'Python', 'PHP']
        },
        toolbox: {
            show: true,
            feature: {
                saveAsImage: { show: true }
            }
        },
        calculable: true,
        series: [{
            name: '知识点分布',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
                { value: 2, name: 'C' },
                { value: 3, name: 'C++' },
                { value: 4, name: 'Java' },
                { value: 5, name: 'Python' },
                { value: 6, name: 'PHP' }
            ]
        }]
    };
    optionKnowlegeaccuracy = {
        title: {
            text: '知识点正确率',
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['百分比%']
        },
        toolbox: {
            show: true,
            feature: {
                mark: { show: true },
                magicType: { show: true, type: ['line', 'bar'] },
                saveAsImage: { show: true }
            }
        },
        calculable: true,
        xAxis: [{
            type: 'value',
            min: 0,
            max: 100
        }],
        yAxis: [{
            type: 'category',
            data: ['C', 'C++', 'Java', 'Python', 'PHP', 'JS']
        }],
        series: [{
            name: '百分比%',
            type: 'bar',
            itemStyle: {
                normal: { color: '#e44436' }
            },
            barWidth: 18,
            data: [33, 55, 22, 77, 55, 90]
        }]
    };
    optionBranchdis = {
        title: {
            text: '部门分布',
            x: 'center',
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            x: 'left',
            data: ['部门2', '部门3', '部门4', '部门5', '部门6']
        },
        toolbox: {
            show: true,
            feature: {
                saveAsImage: { show: true }
            }
        },
        calculable: true,
        series: [{
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'],
            center: ['52%', '60%'],
            itemStyle: {
                normal: {
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                },
                emphasis: {
                    label: {
                        show: true,
                        position: 'center',
                        textStyle: {
                            fontSize: '14',
                            fontWeight: 'bold'
                        }
                    }
                }
            },
            data: [
                { value: 335, name: '部门2' },
                { value: 310, name: '部门3' },
                { value: 234, name: '部门4' },
                { value: 135, name: '部门5' },
                { value: 1548, name: '部门6' }
            ]
        }]
    };
    optionBranchaccuracy = {
        title: {
            text: '部门整体正确率',
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['部门正确率%']
        },
        toolbox: {
            show: true,
            feature: {
                saveAsImage: { show: true }
            }
        },
        calculable: true,
        xAxis: [{
            type: 'value',
            min: 0,
            max: 100
        }],
        yAxis: [{
            type: 'category',
            data: ['部门1', '部门2', '部门3', '部门4', '部门5', '部门6']
        }],
        series: [{
            name: '部门正确率%',
            type: 'bar',
            itemStyle: {
                normal: { color: '#3e98c5' }
            },
            barWidth: 18,
            data: [10, 30, 25, 40, 80, 46]
        }]
    }
    optionPaperitembox = {
        title: {
            text: '每道题正确率',
            x: 'center'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['正确率%']
        },
        toolbox: {
            show: true,
            feature: {
                saveAsImage: { show: true }
            }
        },
        calculable: true,
        xAxis: [{
            type: 'category',
            data: ['第1题', '第2题', '第3题', '第4题', '第5题', '第6题', '第7题', '第8题', '第9题', '1第0题', '1第1题', '1第2题', '第1题', '第2题', '第3题', '第4题', '第5题', '第6题', '第7题', '第8题', '第9题']
        }],
        yAxis: [{
            type: 'value',
            min: 0,
            max: 100
        }],
        series: [{
            name: '正确率 %',
            type: 'bar',
            barWidth: 18,
            itemStyle: {
                normal: { color: 'rgb(46, 88, 148)' }
            },

            data: [45, 33, 44, 66, 22, 11, 44, 19, 88, 25, 66, 55, 33, 44, 66, 22, 11, 44, 19, 11],
        }]
    }

    // 使用刚指定的配置项和数据显示图表。
    knowlegepoint.setOption(optionKnowlegepoint);
    knowlegeaccuracy.setOption(optionKnowlegeaccuracy);
    branchdis.setOption(optionBranchdis);
    branchaccuracy.setOption(optionBranchaccuracy);
    paperitembox.setOption(optionPaperitembox);
}