// FUNCIONANDO =====================================

//     <!-- <section class="GraficoReservas.js"> -->
//     <div class="GraficoReservas.js">
//       <canvas id="myChart"></canvas>
//     </div>

//     <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

//     <script>

//       const ctx = document.getElementById('myChart').getContext("2d")

//       const gradient = ctx.createLinearGradient(0, 0, 150, 400)
//       gradient.addColorStop(0, '#4680ff')
//       gradient.addColorStop(1, '#66ff')

//       const labels = [
//         'January',
//         'February',
//         'March',
//         'April',
//         'May',
//         'June',
//         'July',
//         'August',
//         'September',
//         'October',
//         'November',
//         'December'
//       ];

//       const data = {
//         labels: labels,
//         datasets: [{
//           label: 'Embarcadas',
//           data: [211, 298, 189, 455, 312, 423, 498, 388, 433, 521, 611, 481, 523, 655],
//           borderWidth: 6,
//           borderColor: 'rgba(77,166,253,0.85)',
//           backgroundColor: gradient,
//           fill: true
//         }

//           // datasets: [{
//           //   label: 'Reservas',
//           //   data: [211, 298, 189, 455, 312, 423, 498, 388, 433, 521, 611, 481, 523, 655],
//           //   borderWidth: 6,
//           //   borderColor: 'rgba(77,166,253,0.85)',
//           //   backgroundColor: gradient,
//           //   fill: true
//           // }

//         ]
//       };


//       const config = {
//         type: 'line',
//         data: data,
//         options: {
//           responsive: true
//         }
//       };


//     </script>

//     <script>
//       const myChart = new Chart(
//         document.getElementById('myChart'),
//         config
//       );
//     </script>

//   </section>


// ======================================================
// const labels = [
//   'January',
//   'February',
//   'March',
//   'April',
//   'May',
//   'June',
// ];

// const data = {
//   labels: labels,
//   datasets: [{
//     label: 'My First dataset',
//     backgroundColor: 'rgb(255, 99, 132)',
//     borderColor: 'rgb(255, 99, 132)',
//     data: [0, 10, 5, 2, 20, 30, 45],
//   }]
// };

// const config = {
//   type: 'line',
//   data: data,
//   options: {}
// };

// const myChart = new Chart(
//     document.getElementById('myChart'),
//     config
//   );


// *=---------------------------------------------------------------------*//
// const ctx = document.getElementById('myChart').getContext("2d")

// const gradient = ctx.createLinearGradient(0, 0, 150, 400)
// gradient.addColorStop(0, '#4680ff')
// gradient.addColorStop(1, '#66ff')

// const labels = [
//     'January',
//     'February',
//     'March',
//     'April',
//     'May',
//     'June',
//     'July',
//     'August',
//     'September',
//     'October',
//     'November',
//     'December'
// ];

// const data = {
//     labels: labels,
//     datasets: [{
//         label: 'Embarcadas',
//         data: [211, 298, 189, 455, 312, 423, 498, 388, 433, 521, 611, 481, 523, 655],
//         borderWidth: 6,
//         borderColor: 'rgba(77,166,253,0.85)',
//         backgroundColor: gradient,
//         fill: true
//     }
//   ]
// };

// const config = {
//     type: 'line',
//     data: data,
//     // options: {
//     //     responsive: true
//     // }
// };

// const myChart = new Chart(
//     document.getElementById('myChart'),
//     config
//   );




// const labels = [

//     '2012',
//     '2013',
//     '2014',
//     '2015',
//     '2016',
//     '2017',
//     '2018',
//     '2019',
//     '2020',
//     '2021',
//     '2022'
// ]

// const data = {
//     labels: ["2012","2013","2014","2015","2016","2017","2018","2019","2020","2021","2022"],
//     datasets: [{
//         data: [211, 298, 189, 259, 312, 423, 498, 388, 433],
//         label: 'Reservas',
//         fill: true,
//         backgroundColor: gradient
//     }]
// }

// const config = (ctx, {
//         type: 'line',
//         data: {
//             labels: ["2012","2013","2014","2015","2016","2017","2018","2019","2020","2021","2022"],
//             datasets: [{
//                 data: [211, 298, 189, 259, 312, 423, 498, 388, 433],
//                 label: 'Reservas',
//                 // fill: true,
//                 backgroundColor: gradient
//             }]
//         },
//         options: {
//             responsive: true,
//             radius: 4,
//             hoverRadius: 10,
//             scales: {
//                 y: {
//                     // stacked: true
//                     ticks: {
//                         callback: function (value) {
//                             let finalValue = value.tofixed(2)
//                             return 'R$' + finalValue.replace('.', ',') + ' mil'
//                         }
//                     }
//                 }
//             }
//         }
//     });

//     var myChart = new Chart(ctx, {
//         type: 'line',
//         data: {
//             labels: ["2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022"],
//             datasets: [{
//                 data: [211, 298, 189, 259, 312, 423, 498, 388, 433],
//                 label: 'Reservas',
//                 // fill: true,
//                 // backgroundColor: gradient
//                 borderWidth: 6,
//                 borderColor: 'rgba(77,166,253,0.85)',
//                 backgroundColor: 'transparent',
//             }]
//         },
//         options: {
//             responsive: true,
//             radius: 4,
//             hoverRadius: 10,
//             scales: {
//                 y: {
//                     // stacked: true
//                     ticks: {
//                         callback: function (value) {
//                             let finalValue = value.tofixed(2)
//                             return 'R$' + finalValue.replace('.', ',') + ' mil'
//                         }
//                     }
//                 }
//             }
//         }
//     });


// });