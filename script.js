var topo = document.getElementById("topo");
window.onscroll = function () { topo.classList.toggle("solido", window.scrollY > 60); };

var contou = false;
var nums = document.querySelectorAll(".numeros b");
function contar() {
  nums.forEach(function (n) {
    var fim = Number(n.dataset.fim), v = 0;
    var t = setInterval(function () {
      v += Math.ceil(fim / 40);
      if (v >= fim) { v = fim; clearInterval(t); }
      n.textContent = v + (v === fim ? n.dataset.mais : "");
    }, 40);
  });
}
new IntersectionObserver(function (lista) {
  if (lista[0].isIntersecting && !contou) { contou = true; contar(); }
}).observe(document.querySelector(".numeros"));

var gente = [
  ["Arthur Morgan", "Protagonista", "#7a3b2a", "A", "arthur", "Braço direito de Dutch. Criado dentro da gangue, ele começa a duvidar do caminho que ela segue. Voz: Roger Clark."],
  ["Dutch van der Linde", "Líder", "#3b4a63", "D", "dutch", "Fundador da gangue. Fala bonito e promete um futuro melhor, mas fica cada vez mais perigoso. Voz: Benjamin Byron Davis."],
  ["John Marston", "Pistoleiro", "#4d5a3a", "J", "john", "Cresceu com Dutch. É o protagonista do primeiro jogo e volta no epílogo. Voz: Rob Wiethoff."],
  ["Hosea Matthews", "Conselheiro", "#6a5a3a", "H", "hosea", "O cérebro dos golpes. É calmo e amigo de Dutch há muitos anos. Voz: Curzon Dobell."],
  ["Sadie Adler", "Caçadora", "#5a3a4d", "S", "sadie", "Viúva que entra para a gangue e aprende a lutar. Vira uma das mais fortes do grupo. Voz: Alex McKenna."],
  ["Micah Bell", "Atirador", "#2f3a3a", "M", "micah", "Violento e esperto. Muda o clima dentro da gangue desde que chega. Voz: Peter Blomquist."]
];
var gangue = document.getElementById("gangue");
gente.forEach(function (g) {
  var r = document.createElement("button");
  r.className = "retrato";
  r.style.setProperty("--cor", g[2]);
  r.innerHTML =
    '<span class="inicial">' + g[3] + '</span>' +
    '<img src="img/' + g[4] + '.jpg" alt="" onerror="this.remove()">' +
    '<span class="legenda"><b>' + g[0] + '</b><small>' + g[1] + '</small><span class="detalhe">' + g[5] + '</span></span>';
  r.onclick = function () { r.classList.toggle("aberta"); };
  gangue.appendChild(r);
});

var barra = document.getElementById("barraHonra");
var tituloHonra = document.getElementById("tituloHonra");
var textoHonra = document.getElementById("textoHonra");
function mudarHonra() {
  var v = Number(barra.value), t, x;
  if (v < 25) { t = "Honra baixa"; x = "Arthur é visto como um fora da lei cruel. Muita gente tem medo dele e as lojas ficam desconfiadas."; }
  else if (v < 75) { t = "Honra média"; x = "Arthur é um homem duro, mas que ainda tem coração. É o jeito mais comum de jogar."; }
  else { t = "Honra alta"; x = "Arthur ajuda estranhos, é gentil e respeitado. As pessoas o tratam com carinho."; }
  tituloHonra.textContent = t;
  textoHonra.textContent = x;
}
barra.oninput = mudarHonra;
mudarHonra();