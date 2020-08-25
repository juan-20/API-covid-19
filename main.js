function exibir(){
    debugger
    axios.get(`https://covid19-brazil-api.now.sh/api/report/v1/brazil`)
    .then(response =>{
            let dadosBR = response.data;
            console.log(dadosBR);

            let casos = dadosBR.data.cases;

            console.log(casos);

            document.getElementById("casosbr").innerHTML = casos +' Casos';
            document.getElementById("mortesbr").innerHTML = dadosBR.data.deaths +' Mortes';

    })

    axios.get('https://covid19-brazil-api.now.sh/api/report/v1/countries').then(response =>{
        let dadospais = response.data;
        console.log(dadospais);
    })

    axios.get('https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/sp').then(response =>{
        let dadosSP = response.data;
        console.log(dadosSP);
        document.getElementById("mortesSP").innerHTML = dadosSP.deaths +' Mortes';
        document.getElementById("casosSP").innerHTML = dadosSP.cases +' Casos';
    })

    axios.get('https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/rj').then(response =>{
        let dadosRJ = response.data;
        console.log(dadosRJ);
        document.getElementById("mortesRJ").innerHTML = dadosRJ.deaths +' Mortes';
        document.getElementById("casosRJ").innerHTML = dadosRJ.cases +' Casos';
    })

    axios.get('https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/mg').then(response =>{
        let dadosMG = response.data;
        console.log(dadosMG);
        document.getElementById("mortesMG").innerHTML = dadosMG.deaths +' Mortes';
        document.getElementById("casosMG").innerHTML = dadosMG.cases +' Casos';
    })
}

axios.get('https://covid19-brazil-api.now.sh/api/report/v1/brazil').then(response =>{
    let q = response.data;
    console.log(q.death);
})

function drawChart() {

    var data = google.visualization.arrayToDataTable([
      ['Mês', 'Mortes', 'Contaminados'],
      ['Abril',  5901,      115451],
      ['Maio',  28834,       498440],
      ['Junho',  59656,       1408485],
      ['Julho',  91377,      2613789],
      ['Agosto',  115451,      3627217]
    ]);

    var options = {
      title: 'Mortes/Casos',
      curveType: 'function',
      legend: { position: 'bottom' }
    };

    var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

    chart.draw(data, options);
  }
