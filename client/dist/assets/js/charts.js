"undefined"!=typeof module&&(module.exports=function(){dataDailySalesChart={labels:["M","T","W","T","F","S","S"],series:[[12,17,7,17,23,18,38]]},optionsDailySalesChart={lineSmooth:Chartist.Interpolation.cardinal({tension:0}),low:0,high:50,chartPadding:{top:0,right:0,bottom:0,left:0}};var a=new Chartist.Line("#dailySalesChart",dataDailySalesChart,optionsDailySalesChart);md.startAnimationForLineChart(a),dataDailySalesChart={labels:["M","T","W","T","F","S","S"],series:[[12,17,7,17,23,18,38]]},optionsDailySalesChart={lineSmooth:Chartist.Interpolation.cardinal({tension:0}),low:0,high:50,chartPadding:{top:0,right:0,bottom:0,left:0}};var a=new Chartist.Line("#dailySalesChart",dataDailySalesChart,optionsDailySalesChart);md.startAnimationForLineChart(a),dataCompletedTasksChart={labels:["12am","3pm","6pm","9pm","12pm","3am","6am","9am"],series:[[230,750,450,300,280,240,200,190]]},optionsCompletedTasksChart={lineSmooth:Chartist.Interpolation.cardinal({tension:0}),low:0,high:1e3,chartPadding:{top:0,right:0,bottom:0,left:0}};var t=new Chartist.Line("#completedTasksChart",dataCompletedTasksChart,optionsCompletedTasksChart);md.startAnimationForLineChart(t);var i={labels:["Jan","Feb","Mar","Apr","Mai","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],series:[[542,443,320,780,553,453,326,434,568,610,756,895]]},e={axisX:{showGrid:!1},low:0,high:1e3,chartPadding:{top:0,right:5,bottom:0,left:0}},r=[["screen and (max-width: 640px)",{seriesBarDistance:5,axisX:{labelInterpolationFnc:function(a){return a[0]}}}]],o=Chartist.Bar("#emailsSubscriptionChart",i,e,r);md.startAnimationForBarChart(o)});