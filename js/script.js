let numero = [1, 2, 3, 4]
let fruta = ["banana", "kiwi", "usa", "maçã", "limão"]

let imagens = ["image1.png", "image.png", "imageCopy.png"]
let paragrafos = ["Pinguins são aves marinhas não voadoras da família Spheniscidae, altamente adaptadas à vida aquática e exclusivas do Hemisfério Sul.",
    "A Lua é o único satélite natural da Terra e o quinto maior do Sistema Solar.",
    "O Lenovo Yoga é uma linha de notebooks premium e versáteis, focada em produtividade e criatividade"
]


function caixa() {
    let cardContainer = document.querySelector('.cardContainer')
    for (let i =0; i < imagens.length; i++) {
        cardContainer.innerHTML += ` <div class="card">
            <img src="../img/${imagens[i]}">
            <p>${paragrafos[i]}</p>
            <button>Pinguin</button>
        </div>`
    }

}
caixa()
