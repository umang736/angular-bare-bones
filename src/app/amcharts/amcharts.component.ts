import { Component, OnInit } from '@angular/core';
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import { DataService } from '../shared/data.service';

am5.addLicense("AM5C314732014");

@Component({
  selector: 'app-amcharts',
  templateUrl: './amcharts.component.html',
  styleUrls: ['./amcharts.component.scss']
})
export class AmchartsComponent implements OnInit {
  protected root!: am5.Root;
  protected chart!: am5xy.XYChart;
  date: Date = new Date();
  value: number = 100;
  protected xAxis!: am5xy.DateAxis<am5xy.AxisRenderer>;
  protected yAxis!: am5xy.ValueAxis<am5xy.AxisRenderer>;
  protected legend!: am5.Legend;
  protected seriesCount: Number = 10;
  loading: boolean = false;
  errorMessage: string | undefined;

  constructor(private dataService: DataService) { 
    
  }

  ngOnInit(): void {
    try {
      // this._updateChart();
      this._createChartV2();
      this._updateChartV2();
    }
    catch (e) {
      console.log(`Error: ${e}`);
    }
  }

  private generateData() {
    this.value = Math.round((Math.random() * 10 - 4.2) + this.value);
    am5.time.add(this.date, "day", 1);
    return {
      date: this.date.getTime(),
      value: this.value
    };
  }

  private generateDatas(count: Number) {
    let data = [];
    for (var i = 0; i < count; ++i) {
      data.push(this.generateData());
    }
    return data;
  }

  public getDummyGraphData() {
    this.seriesCount = Math.round(Math.random()*10); 
    this._updateChartV2();
    /*
    this.loading = true;
    this.errorMessage = "";
    this.dataService.getGraphDataLineSeriesCount()
      .subscribe({
        next: (responseJson) => {                           //next() callback
          console.log('responseJson received')
          this.seriesCount = responseJson; 
          this._updateChartV2();
        },
        error: (error) => {                              //error() callback
          console.error('Request failed with error')
          this.errorMessage = error;
        },
        complete: () => {                                   //complete() callback
          console.error('Request completed')      
          this.loading = false; 
        }
    });
    */
  }

  protected _createChartV2(): void {
    /* Chart code */
    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element 
    let root = am5.Root.new("chartdiv");
    this.root = root;



    // Create chart
    // https://www.amcharts.com/docs/v5/charts/xy-chart/
    let chart = root.container.children.push(am5xy.XYChart.new(root, {
      panX: true,
      panY: true,
      wheelX: "panX",
      wheelY: "zoomX",
      maxTooltipDistance: 0,
      pinchZoomX:true
    }));
    this.chart = chart;

    this.date = new Date();
    this.date.setHours(0, 0, 0, 0);
    this.value = 100;

    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    let xAxis = this.chart.xAxes.push(am5xy.DateAxis.new(this.root, {
      maxDeviation: 0.2,
      baseInterval: {
        timeUnit: "day",
        count: 1
      },
      renderer: am5xy.AxisRendererX.new(this.root, {}),
      tooltip: am5.Tooltip.new(this.root, {})
    }));
    this.xAxis = xAxis;

    let yAxis = this.chart.yAxes.push(am5xy.ValueAxis.new(this.root, {
      renderer: am5xy.AxisRendererY.new(this.root, {})
    }));
    this.yAxis = yAxis;

    // Add cursor
    // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
    let cursor = this.chart.set("cursor", am5xy.XYCursor.new(this.root, {
      behavior: "none"
    }));
    cursor.lineY.set("visible", false);


    // Add scrollbar
    // https://www.amcharts.com/docs/v5/charts/xy-chart/scrollbars/
    this.chart.set("scrollbarX", am5.Scrollbar.new(this.root, {
      orientation: "horizontal"
    }));

    this.chart.set("scrollbarY", am5.Scrollbar.new(this.root, {
      orientation: "vertical"
    }));


    // Add legend
    // https://www.amcharts.com/docs/v5/charts/xy-chart/legend-xy-series/
    let legend = this.chart.rightAxesContainer.children.push(am5.Legend.new(this.root, {
      width: 200,
      paddingLeft: 15,
      height: am5.percent(100)
    }));

    


    legend.itemContainers.template.set("width", am5.p100);
    legend.valueLabels.template.setAll({
      width: am5.p100,
      textAlign: "right"
    });
    this.legend = legend;

    // It's is important to set legend data after all the events are set on template, otherwise events won't be copied
    legend.data.setAll(this.chart.series.values);
  }

  protected _updateChartV2(): void {

    // Create series
    this.chart.series.clear();
    // Add series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    for (var i = 0; i < this.seriesCount; i++) {
      let series = this.chart.series.push(am5xy.LineSeries.new(this.root, {
        name: "Series " + i,
        xAxis: this.xAxis,
        yAxis: this.yAxis,
        valueYField: "value",
        valueXField: "date",
        legendValueText: "{valueY}",
        tooltip: am5.Tooltip.new(this.root, {
          pointerOrientation: "horizontal",
          labelText: "{valueY}"
        })
      }));

      this.date = new Date();
      this.date.setHours(0, 0, 0, 0);
      this.value = 0;
    
      let data = this.generateDatas(100);
      series.data.setAll(data);

      // Make stuff animate on load
      // https://www.amcharts.com/docs/v5/concepts/animations/
      series.appear();
    }

    // It's is important to set legend data after all the events are set on template, otherwise events won't be copied
    this.legend.data.setAll(this.chart.series.values);


    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    this.chart.appear(1000, 100);

    // chart.root.dom.style.height = "500px";    
  }


/* 
  protected _updateChart(): void {

    // Chart code
    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element 
    let root = am5.Root.new("chartdiv");




    // Create chart
    // https://www.amcharts.com/docs/v5/charts/xy-chart/
    let chart = root.container.children.push(am5xy.XYChart.new(root, {
      panX: true,
      panY: true,
      wheelX: "panX",
      wheelY: "zoomX",
      maxTooltipDistance: 0,
      pinchZoomX:true
    }));


    let date = new Date();
    date.setHours(0, 0, 0, 0);
    let value = 100;

    function generateData() {
      value = Math.round((Math.random() * 10 - 4.2) + value);
      am5.time.add(date, "day", 1);
      return {
        date: date.getTime(),
        value: value
      };
    }

    function generateDatas(count: Number) {
      let data = [];
      for (var i = 0; i < count; ++i) {
        data.push(generateData());
      }
      return data;
    }


    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    let xAxis = chart.xAxes.push(am5xy.DateAxis.new(root, {
      maxDeviation: 0.2,
      baseInterval: {
        timeUnit: "day",
        count: 1
      },
      renderer: am5xy.AxisRendererX.new(root, {}),
      tooltip: am5.Tooltip.new(root, {})
    }));

    let yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
      renderer: am5xy.AxisRendererY.new(root, {})
    }));


      // Create series
      chart.series.clear();
    // Add series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    for (var i = 0; i < 10; i++) {
      let series = chart.series.push(am5xy.LineSeries.new(root, {
        name: "Series " + i,
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value",
        valueXField: "date",
        legendValueText: "{valueY}",
        tooltip: am5.Tooltip.new(root, {
          pointerOrientation: "horizontal",
          labelText: "{valueY}"
        })
      }));

      date = new Date();
      date.setHours(0, 0, 0, 0);
      value = 0;
    
      let data = generateDatas(100);
      series.data.setAll(data);

      // Make stuff animate on load
      // https://www.amcharts.com/docs/v5/concepts/animations/
      series.appear();
    }


    // Add cursor
    // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
    let cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
      behavior: "none"
    }));
    cursor.lineY.set("visible", false);


    // Add scrollbar
    // https://www.amcharts.com/docs/v5/charts/xy-chart/scrollbars/
    chart.set("scrollbarX", am5.Scrollbar.new(root, {
      orientation: "horizontal"
    }));

    chart.set("scrollbarY", am5.Scrollbar.new(root, {
      orientation: "vertical"
    }));


    // Add legend
    // https://www.amcharts.com/docs/v5/charts/xy-chart/legend-xy-series/
    let legend = chart.rightAxesContainer.children.push(am5.Legend.new(root, {
      width: 200,
      paddingLeft: 15,
      height: am5.percent(100)
    }));

    // When legend item container is hovered, dim all the series except the hovered one
    legend.itemContainers.template.events.on("pointerover", function(e) {
      let itemContainer = e.target;

      // As series list is data of a legend, dataContext is series
      // let series = itemContainer.dataItem.dataContext;

      // chart.series.each(function(chartSeries) {
      //   if (chartSeries != series) {
      //     chartSeries.strokes.template.setAll({
      //       strokeOpacity: 0.15,
      //       stroke: am5.color(0x000000)
      //     });
      //   } else {
      //     chartSeries.strokes.template.setAll({
      //       strokeWidth: 3
      //     });
      //   }
      // })
      
    })

    // When legend item container is unhovered, make all series as they are
    legend.itemContainers.template.events.on("pointerout", function(e) {
      let itemContainer = e.target;

      // let series = itemContainer.dataItem.dataContext;

      // chart.series.each(function(chartSeries) {
      //   chartSeries.strokes.template.setAll({
      //     strokeOpacity: 1,
      //     strokeWidth: 1,
      //     stroke: chartSeries.get("fill")
      //   });
      // });
      
    })

    legend.itemContainers.template.set("width", am5.p100);
    legend.valueLabels.template.setAll({
      width: am5.p100,
      textAlign: "right"
    });

    // It's is important to set legend data after all the events are set on template, otherwise events won't be copied
    legend.data.setAll(chart.series.values);


    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    chart.appear(1000, 100);



    // chart.root.dom.style.height = "500px";    
  }
*/

}
