document.addEventListener("DOMContentLoaded", () => {
updateCartCount();
carregarProdutos();
});

// atualiza o badge do carrinho
function updateCartCount() {
const cart = JSON.parse(localStorage.getItem("cart") || "[]");
const count = cart.reduce((sum, item) => sum + item.qty, 0);
const badge = document.getElementById("cart-count");
if (badge) badge.textContent = count;
}

// gera os slides do carousel
function carregarProdutos() {
const produtos = [
{
    nome: "Bebê Reborn Clara",
    descricao: "Bebê realista com roupas delicadas.",
    preco: 269.9,
    imagem: "img/produtos/bebe1.jpg",
},
{
    nome: "Bebê Reborn Helena",
    descricao: "Acompanha manta rosa e mamadeira.",
    preco: 299.9,
    imagem: "img/produtos/bebe2.jpg",
},
{
    nome: "Bebê Reborn Melissa",
    descricao: "Toque de pele macia e enchimento especial.",
    preco: 289.9,
    imagem: "img/produtos/bebe3.jpg",
},
{
    nome: "Bebê Reborn Arthur",
    descricao: "Expressão doce e olhos brilhantes.",
    preco: 319.9,
    imagem: "img/produtos/bebe4.jpg",
},
{
    nome: "Bebê Reborn Emanuelly",
    descricao: "Roupinha azul com acessórios inclusos.",
    preco: 279.9,
    imagem: "img/produtos/bebe5.jpg",
},
{
    nome: "Bebê Reborn Valentina",
    descricao: "Vestido florido e chupeta magnética.",
    preco: 289.9,
    imagem: "img/produtos/bebe6.jpg",
},
];

const carouselInner = document.getElementById("carousel-items");
produtos.forEach((p, i) => {
const item = document.createElement("div");
item.className = "carousel-item" + (i === 0 ? " active" : "");
item.innerHTML = `
    <div class="card mx-auto" style="width: 18rem;">
    <img src="${p.imagem}" class="card-img-top" alt="${p.nome}">
    <div class="card-body text-center">
        <h5 class="card-title">${p.nome}</h5>
        <p class="card-text">${p.descricao}</p>
        <p class="fw-bold">R$ ${p.preco.toFixed(2).replace(".", ",")}</p>
        <button
        class="btn btn-primary add-to-cart"
        data-name="${p.nome}"
        data-price="${p.preco}"
        >
        Adicionar ao carrinho
        </button>
    </div>
    </div>
`;
carouselInner.appendChild(item);
});
}

// captura todos os cliques para adicionar ao carrinho
document.addEventListener("click", (e) => {
if (e.target.classList.contains("add-to-cart")) {
const btn = e.target;
const nome = btn.dataset.name;
const preco = parseFloat(btn.dataset.price);
const img =
    btn.closest(".card").querySelector("img").getAttribute("src");
const cart = JSON.parse(localStorage.getItem("cart") || "[]");
const existente = cart.find((x) => x.name === nome);
if (existente) {
    existente.qty++;
} else {
    cart.push({ name: nome, price: preco, img, qty: 1 });
}
localStorage.setItem("cart", JSON.stringify(cart));
updateCartCount();
}
});
function carregarProdutos() {
const produtos = [
{ nome: "Bebê Reborn Clara", preco: 269.9, descricao: "Bebê realista com roupas delicadas.", imagem: "img/produtos/bebe1.jpg" },
{ nome: "Bebê Reborn Helena", preco: 299.9, descricao: "Acompanha manta rosa e mamadeira.",    imagem: "img/produtos/bebe2.jpg" },
{ nome: "Bebê Reborn Melissa", preco: 289.9, descricao: "Toque de pele macia e enchimento especial.",imagem: "img/produtos/bebe3.jpg" },
{ nome: "Bebê Reborn Arthur", preco: 319.9, descricao: "Expressão doce e olhos brilhantes.",      imagem: "img/produtos/bebe4.jpg" },
{ nome: "Bebê Reborn Emanuelly", preco: 279.9, descricao: "Roupinha azul com acessórios inclusos.", imagem: "img/produtos/bebe5.jpg" },
{ nome: "Bebê Reborn Valentina", preco: 289.9, descricao: "Vestido florido e chupeta magnética.",   imagem: "img/produtos/bebe6.jpg" }
];

const itemsPerSlide = 3;                   // <— mude este valor para testar 4, 6, etc.
const carouselInner = document.getElementById("carousel-items");

for (let i = 0; i < produtos.length; i += itemsPerSlide) {
const slide = document.createElement("div");
slide.className = `carousel-item${i === 0 ? " active" : ""}`;

const row = document.createElement("div");
row.className = "row row-cols-1 row-cols-md-3 g-4";

produtos
.slice(i, i + itemsPerSlide)
.forEach(p => {
const col = document.createElement("div");
col.className = "col";
col.innerHTML = `
    <div class="card h-100">
    <img src="${p.imagem}" class="card-img-top" alt="${p.nome}">
    <div class="card-body">
        <h5 class="card-title">${p.nome}</h5>
        <p class="card-text">${p.descricao}</p>
        <p class="fw-bold">R$ ${p.preco.toFixed(2).replace(".", ",")}</p>
        <button
        class="btn btn-primary add-to-cart"
        data-name="${p.nome}"
        data-price="${p.preco}"
        >
        Adicionar ao carrinho
        </button>
    </div>
    </div>`;
row.appendChild(col);
});

slide.appendChild(row);
carouselInner.appendChild(slide);
}
}
