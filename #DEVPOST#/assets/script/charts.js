const xValues = ["Sept 2022","Oct 2022","Nov 2022","Dec 2022","Jan 2022","Feb 2022"];
const yValues = [250,330,360,380,430,460];
 
new Chart("myChart", {
	type: "line",
	data: {
	labels: xValues,
	datasets: [{
		fill: false,
		lineTension: 0,
	 
		borderColor: "#3ACCE6",
		pointBackgroundColor: "#3ACCE6",
		data: yValues
	}]
	},
	options: {
	legend: {display: false},
 
	}
}); 