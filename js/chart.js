myChart();

function myChart(){
const directory = document.getElementById('chart');
const data = {
    labels: delightsForShow,
    datasets: [
    {
      label: 'Percents',
      data: percentsArray,
      borderWidth: 1,
      color: '#F1F0F9',
    },
  ]}

  const config = {
    type: "pie",
    data: data,
  };
  
  const percents = new Chart(directory, config); 
  
    Chart.defaults.color = '#F1F0F9';

}