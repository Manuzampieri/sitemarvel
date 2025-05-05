
const elemMini1 = document.querySelector(".mini1")
const elemMini2 = document.querySelector(".mini2")
const elemMini3 = document.querySelector(".mini3")
const elemMini4 = document.querySelector(".mini4")
const elemTitulo = document.querySelector("#tituloDescricao")
const elemTexto1 = document.querySelector("#textoDescricao1")
const elemTexto2 = document.querySelector("#textoDescricao2")
const elemTexto3 = document.querySelector("#textoDescricao3")

const elemImg1 = document.querySelector(".imgcard1")
const elemImg2 = document.querySelector(".imgcard2")
const elemImg3 = document.querySelector(".imgcard3")
const elemImg4 = document.querySelector(".imgcard4")

elemMini1.addEventListener("click", trocarTexto)
  
function trocarTexto() {
    elemTitulo.innerText = "Amigo da Vizinhança"
    elemTexto1.innerText = "Atualmente, o Homem-Aranha, também conhecido como Peter Parker, é um dos super-heróis do universo marvel mais conhecido, fazendo muito sucesso com suas diversas versões.."
    elemTexto2.innerText = "Em sua origem, um garoto, criado pelos tios, genial e impopular no colégio, é picado por uma aranha radioativa e desenvolve força e agilidade proporcionais às de um aracnídeo,"
    elemTexto3.innerText = "e ao descobrir que um ladrão que ele impediu de escapar foi o assassino de seu tio, Peter Parker decide usar seus poderes para o bem, vivendo através do lema de seu Tio Ben: Com grandes poderes vêm grandes responsabilidades."  
    elemImg1.src = "asset/imgs/aranha/aranhatraje.avif"
    elemImg2.src = "assets/imgs/aranha/aranhahq.webp"
    elemImg3.src = "assets/imgs/aranha/spidermiles.webp"
    elemImg4.src = "assets/imgs/aranha/aranhaescudo.jpg"
  }

  elemMini2.addEventListener("click", trocarTexto2)

  function trocarTexto2() {
    elemTitulo.innerText = "Deus da Trapaça"
    elemTexto1.innerText = "Loki, também conhecido como Deus da trapaça, é um personagem gigante dentro da marvel, ficando muito conhecido atualmente por sua nova série."
    elemTexto2.innerText = "Considerado um dos mais poderosos personagens dos quadrinhos, nos filmes não pode-se dizer o mesmo, após a sua morte no filme Vingadores: Guerra infinita,"
    elemTexto3.innerText = "o mesmo ganhou uma série, considerada por muitos, uma das melhores já feita pelos estudios da Marvel, onde mostra todo o desenrolar do Multiverso, também deixando claro a importância do Loki nessa franquia."
     elemImg1.src = "assets/imgs/Loki/lokifaca.jpg"
     elemImg2.src = "assets/imgs/Loki/lokihq.webp"
     elemImg3.src = "assets/imgs/Loki/lokithor.webp"
     elemImg4.src = "assets/imgs/Loki/lokipreso.webp"
 }
 elemMini3.addEventListener("click", trocarTexto3)

  function trocarTexto3() {
    elemTitulo.innerText = "Pantera Negra"
    elemTexto1.innerText = "Pantera Negra, também conhecido como T'Challa, rei protetor da nação de Wakanda, é um herói muitp significativo, po ter sido o primeiro de ascendência africana a ser criado por uma editora tão grande, como a Marvel ."
    elemTexto2.innerText = "Dono de inuméras HQ's e dois filmes, tem um carinho enorme principalmente por conta do ator que o interpretou em seu primeiro filme para a franquia,"
    elemTexto3.innerText = "O Pantera Negra é de grande importância para a Marvel por conta de todas as mensagens que ele consegue passar para os telespectadores."
    elemImg1.src = "assets/imgs/pantera/pantera.webp"
    elemImg2.src = "assets/imgs/pantera/panteraroxo.webp"
    elemImg3.src = "assets/imgs//pantera/panterapessoa.jpg"
    elemImg4.src = "assets/imgs/pantera/panterahq.jpg"
 }

 elemMini4.addEventListener("click", trocarTexto4)

  function trocarTexto4() {
    elemTitulo.innerText = "Kate Bishop"
    elemTexto1.innerText = "Kate Bishop é a super-heroína Gaviã Arqueira, uma integrante dos jovens vingadores"
    elemTexto2.innerText = "Os Jovens Vinagadores são um grupo de super-heróis adolescentes da Marvel que, inspirados pelos Vingadores, uniram seus poderes para proteger o mundo."
    elemTexto3.innerText = "A Gaviã Arqueira tem sua própria HQ e foi introduzida no UCM (universo cinematográfico Marvel) recentemente ao fazer parte da nova série do Gavião Arqueiro, deixando claro aos espectadores que ocuparia sua posição na nova geração dos Vingadores"
    elemImg1.src = "assets/imgs/gavia/katetela.jpeg"
    elemImg2.src = "assets/imgs/gavia/katepessoa.jpg"
    elemImg3.src = "assets/imgs/gavia/kateatirando.jpg"
    elemImg4.src = "assets/imgs/gavia/kateantiga.jpg"
 }
 function abrirModal(titulo, descricao) {
  document.getElementById('modal-titulo').innerText = titulo;
  document.getElementById('modal-descricao').innerText = descricao;
  document.getElementById('modal').style.display = 'flex';
}

function fecharModal() {
  document.getElementById('modal').style.display = 'none';
}