//------Seletor de Imagem do Produto------//
function imgSlider(anything){
    document.querySelector('.cafeRituais').src = anything;
}

//------Background Circle------//

function changeBackgroundCircle(color){
    const bgcircle = document.querySelector('.backgroundCircle');
    bgcircle.style.background = color;

}

//------Conteúdo dos Textos------//

var titulo1 = document.getElementById('title1');
var titulo2 = document.getElementById('title2');
var textoDoProdutoo = document.getElementById('productText');

function textoCRCerradoMineiro(){
    titulo1.textContent = "Rituais Cafés Especiais";
    titulo2.textContent = "Cerrado Mineiro";
    textoDoProdutoo.textContent = "Primeira área brasileira de plantio demarcada com Denominação de Origem, o Cerrado Mineiro localiza-se no noroeste de Minas Gerais e apresenta altitudes que vão dos 800 aos 1.200 metros. O resultado deste café é uma bebida encorpada, de sabor adocicado, com notas de chocolate e frutas amarelas e de aroma intenso. Além disso, sua acidez proporciona um sabor de longa duração.";
}

function textoCRMogianaPaulista(){
    titulo1.textContent = "Rituais Cafés Especiais";
    titulo2.textContent = "Mogiana Paulista";
    textoDoProdutoo.textContent = "Com uma tradição de mais de 200 anos, a cultura do café da Mogiana Paulista é realizada em uma região privilegiada no interior de São Paulo, com clima ideal para o cultivo, altitudes entre 900 e 1.050 metros e temperatura média de 20°C. O resultado é uma bebida com características encorpadas, aroma intenso e sabor adocicado com frutas cítricas e mel.";
}

function textoCRSulDeMinas(){
    titulo1.textContent = "Rituais Cafés Especiais";
    titulo2.textContent = "Sul de Minas";
    textoDoProdutoo.textContent = "Serras e montanhas com altitudes que variam de 850 a 1.250 metros emolduram a maior região produtora de café do mundo. O Sul de Minas é um terroir excelente de onde saem cerca de 10 milhões de sacas de café a cada ano. O resultado do café é uma bebida encorpada, de sabor adocicado, com notas de castanhas e amêndoas, aroma intenso e acidez cítrica média.";
}

function textoCROrganico(){
    titulo1.textContent = "Rituais Cafés Especiais";
    titulo2.textContent = "Orgânico";
    textoDoProdutoo.textContent = "O café 3 Corações Rituais Orgânico não só possui sabores e aromas marcantes, mas também se diferencia pelo propósito de difundir boas práticas em toda a sua cadeia produtiva.";
}

//------Menu Sanduiche------//

function toggleMenu(){
    var menuToggle = document.querySelector('.toggle');
    var navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}
