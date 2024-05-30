/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

+( function() {
  const university = "UOC";
  console.log(`Hello, ${university}!`);
} )();

import Chart from 'chart.js/auto';

//Código gráfico participantes
document.addEventListener('DOMContentLoaded', function() {
 
  var ctx = document.getElementById('participantesChart').getContext('2d');

  var participantesData = {
    labels: ['Hombres', 'Mujeres'],
    datasets: [{
      label: 'Participantes por género',
      data: [2, 4],
      backgroundColor: [
        'rgba(128, 128, 128, 0.2)', //Gris hombres
        'rgba(153, 102, 255, 0.2)'  //Morado mujeres
      ],
      borderColor: [
        'rgba(0, 0, 0, 1)', //Negro para los bordes
        'rgba(0, 0, 0, 1)' //Negro para los bordes
      ],
      borderWidth: 1
    }]
  };

  //Configuración del gráfico
  var participantesChart = new Chart(ctx, {
    type: 'bar',
    data: participantesData,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
});