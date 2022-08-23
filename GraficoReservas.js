import { any } from "cypress/types/bluebird";
import { Chart } from "highcharts";
import { data } from "jquery"
// import { number, string } from "prop-types";

const ctx = document.getElementById('myChart').getContext("2d")

const gradient = ctx.createLinearGradient(0, 0, 150, 400)
gradient.addColorStop(0, '#4680ff')
gradient.addColorStop(1, '#66ff')

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

const data = {
    labels: ["2012","2013","2014","2015","2016","2017","2018","2019","2020","2021","2022"],
    datasets: [{
        data: [211, 298, 189, 259, 312, 423, 498, 388, 433],
        label: 'Reservas',
        fill: true,
        backgroundColor: gradient
    }]

}

const config = (ctx, {
    type: 'line',
    data: data,
    options: {
        responsive: true,
        radius: 4,
        hoverRadius: 10,
        scales: {
            y: {
                // stacked: true
                ticks: {
                    callback: function (value) {
                        let finalValue = value.tofixed(2)
                        return 'R$' + finalValue.replace('.', ',') + ' mil'
                    }
                }
            }
        }
    }
});

const myChart = new Chart(ctx, {
    
    config

});