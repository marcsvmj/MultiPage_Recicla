const categorias = {

    plastico: [
        {
            titulo: "Porta-lápis",
            texto: "Feito com garrafa PET.",
            imagem: "assets/img/plastico1.png",
            link: "https://www.youtube.com/watch?v=z2ZoZph3aGc",
            alt: "Porta-lápis no formato de bichos feito com garrafa PET"
        },
        {
            titulo: "Vaso Autoirrigável",
            texto: "Feito com garrafas plásticas.",
            imagem: "assets/img/plastico2.png",
            link: "https://www.instagram.com/p/DX1bUokj72E/",
            alt: "Vaso autoirrigável pronto para compra, utilize como inspiração. O vendedor é a Flex 3D Pro no site Magazine Luiza pela foto. Link: https://www.magazineluiza.com.br/vaso-autoirrigavel-garrafa-pet-horta-caseira-e-sustentavel-flex3d/p/cgajekh374/fj/vspt/"
        },
        {
            titulo: "Cofrinho",
            texto: "Feito com garrafas pequenas.",
            imagem: "assets/img/plastico3.png",
            link: "https://tock.earth/crafts-plastic-bottle-piggy-bank/",
            alt: "Cofrinho feito com garrafa PET"
        }
    ],

    papel: [
        {
            titulo: "Porta-retratos",
            texto: "Feito com papelão.",
            imagem: "assets/img/papel1.png",
            link: "https://br.pinterest.com/mariaconceioq/palitos-de-sorvetes/"
        },
        {
            titulo: "Caixa Organizadora",
            texto: "Feita com caixas usadas.",
            imagem: "assets/img/papel2.png",
            link: "https://www.westwing.com.br/guiar/como-fazer-caixas-organizadoras/"
        },
        {
            titulo: "Marcador",
            texto: "Feito com papel reciclado.",
            imagem: "assets/img/papel3.png",
            link: "https://pt.wikihow.com/Fazer-um-Marcador-de-P%C3%A1ginas-para-Livros"
        }
    ],

    vidro: [
        {
            titulo: "Luminária",
            texto: "Feita com garrafa de vidro.",
            imagem: "assets/img/vidro1.png",
            link: "https://br.pinterest.com/maludipe10/abajour/"
        },
        {
            titulo: "Vaso",
            texto: "Feito com pote reutilizado.",
            imagem: "assets/img/vidro2.png",
            link: "https://br.pinterest.com/pin/696721004833869060/"
        },
        {
            titulo: "Porta-vela",
            texto: "Feito com vidro reutilizado.",
            imagem: "assets/img/vidro3.png",
            link: "https://br.pinterest.com/pin/4714774588299687/"
        }
    ],

    metal: [
        {
            titulo: "Porta-canetas",
            texto: "Feito com lata.",
            imagem: "assets/img/metal1.png",
            link: "https://br.pinterest.com/valnadim/lata/",
            alt: "Foto de porta-canetas decorativos nas cores rosa e marrom retirado do website depositphotos. Link: https://depositphotos.com/photo/pens-and-scissors-holders-creative-recycled-tin-cans-for-storage-of-stationery-decoration-tin-cans-151094196.html"
        },
        {
            titulo: "Vaso Decorativo",
            texto: "Feito com latas recicladas.",
            imagem: "assets/img/metal2.png",
            link: "https://revistaoeste.com/oestegeral/2026/03/09/lata-de-leite-em-po-vazia-vira-um-vaso-decorativo-para-flores-pequenas-e-cheirosas/"
        },
        {
            titulo: "Luminária",
            texto: "Feita com alumínio.",
            imagem: "assets/img/metal3.png",
            link: "https://br.pinterest.com/pin/439593613625442967/"
        }
    ]
};

function mostrarCategoria(nomeCategoria){

    document.querySelectorAll(".categorias button")
        .forEach(btn => btn.classList.remove("ativo"));

    document.getElementById(nomeCategoria)
        .classList.add("ativo");

    const dados = categorias[nomeCategoria];

    document.getElementById("img1").src = dados[0].imagem;
    document.getElementById("titulo1").innerText = dados[0].titulo;
    document.getElementById("texto1").innerText = dados[0].texto;
    document.getElementById("link1").href = dados[0].link;
    document.getElementById("img1").alt = dados[0].alt;


    document.getElementById("img2").src = dados[1].imagem;
    document.getElementById("titulo2").innerText = dados[1].titulo;
    document.getElementById("texto2").innerText = dados[1].texto;
    document.getElementById("link2").href = dados[1].link;
    document.getElementById("img2").alt = dados[1].alt;


    document.getElementById("img3").src = dados[2].imagem;
    document.getElementById("titulo3").innerText = dados[2].titulo;
    document.getElementById("texto3").innerText = dados[2].texto;
    document.getElementById("link3").href = dados[2].link;
    document.getElementById("img3").alt = dados[2].alt;
}

document.addEventListener("DOMContentLoaded", function() {
    mostrarCategoria("plastico");
});