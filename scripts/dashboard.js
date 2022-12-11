var ctxDespesa = document.getElementById('chartDespesa').getContext('2d');
var myChartDespesa = new Chart(ctxDespesa, {
    type: 'doughnut',
    data: {
        labels: ["Alimentos","Diversão", "Farmacia"],
        datasets: [{
            data: [800,300,50],
            borderColor:[
                "#3cba9f",
                "#ffa500",
                "#c45850",
            ],
            backgroundColor: [
                "rgb(60,186,159,1)",
                "rgb(255,165,0,1)",
                "rgb(196,88,80,1)",
            ],
            borderWidth:2,
        }]
    },
    options: {
        scales: {
            xAxes: [{
                display: false,
            }],
            yAxes: [{
                display: false,
            }],
        }
    },

});

var ctxReceita = document.getElementById('chartReceita').getContext('2d');
var myChartReceita = new Chart(ctxReceita, {
    type: 'doughnut',
    data: {
        labels: ["Trabalho","Freelance"],
        datasets: [{
            data: [1500,300],
            borderColor:[
                "#3cba9f",
                "#ffa500",
            ],
            backgroundColor: [
                "rgb(60,186,159,1)",
                "rgb(255,165,0,1)",
            ],
            borderWidth:2,
        }]
    },
    options: {
        scales: {
            xAxes: [{
                display: false,
            }],
            yAxes: [{
                display: false,
            }],
        }
    },

});

var ctxMonth = document.getElementById('chartMonth').getContext('2d');
var myChartMonth = new Chart(ctxMonth, {
    type: 'bar',
    data: {
        labels: ["Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
        datasets: [{
            data: [500,450,600,1200,800,800,1000],
            label: "Receita x Gasto",
            borderColor: "#3cba9f",
            backgroundColor: "#71d1bd",
            borderWidth:2
        },]
    },
    options: {
        scales: {
            xAxes: [{
                stacked: true
            }],
            yAxes: [{
                stacked: true
            }],
        }
    },
});