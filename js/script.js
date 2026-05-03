let imagens = ["image1.png", "image.png", "coffeeSeed.png"]
let titulos = ["1. Café Natural (Grãos Selecionados)", "2. Café em Pó (Moagem Clássica)", "3. Café Vermelho (Edição Reserva)"]
let paragrafos = ["A experiência em sua forma mais pura. Ideal para os puristas e entusiastas que possuem moedor em casa. O Café Natural preserva a essência da fazenda, com notas frutadas e um corpo aveludado.",
    "Praticidade com alma de cafeteria. Esqueça o café comum de mercado. Nosso Café em Pó utiliza grãos de classificação especial com moagem média-fina, perfeita para filtros de papel, pano ou cafeteiras italianas.",
    "A joia da coroa: Intensidade e Energia. O Café Vermelho é colhido exclusivamente no pico da maturação dos frutos. O resultado é uma bebida vibrante, com uma carga natural de antioxidantes e um sabor intensamente exótico."
]


function caixa() {
    let cardContainer = document.querySelector('.cardContainer')
    for (let i = 0; i < imagens.length; i++) {
        cardContainer.innerHTML += ` <div class="card">
            <img src="../img/${imagens[i]}">
            <h4>${titulos[i]}</h4>
            <p>${paragrafos[i]}</p>
            <button onclick="pedir(${i})">Pedir</button>
        </div>`
    }

}
caixa()

function pedir(pedido) {
    if (pedido == 0) {
        alert("Pedido feito com sucesso! \n Café Natural (Grãos Selecionados).")
    }
    if (pedido == 1) {
        alert("Pedido feito com sucesso! \n Café em Pó (Moagem Clássica).")
    }
    if (pedido == 2) {
        alert("Pedido feito com sucesso! \n Café Vermelho (Edição Reserva).")
    }
}
