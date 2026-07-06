// ─────────────────────────────────────────────
// CONFIGURAÇÃO
// ─────────────────────────────────────────────
const WHATSAPP_NUMBER = "5563999911234";

// ─────────────────────────────────────────────
// ENCODE DE CAMINHO DE IMAGEM
// ─────────────────────────────────────────────
function encodeImgPath(path) {
    if (!path) return "";
    const lastSlash = path.lastIndexOf("/");
    if (lastSlash === -1) return encodeURIComponent(path);
    return path.slice(0, lastSlash + 1) + encodeURIComponent(path.slice(lastSlash + 1));
}

// ─────────────────────────────────────────────
// DATASET DE EMPREENDIMENTOS
//
// AJUSTE: cada item ganhou um campo opcional `locomocao` (array de strings).
// Ele só é usado quando statusCode === "Alugar", pois o filtro de Locomoção
// só aparece nesse modo. Valores aceitos (precisam bater com as <option>
// do <select id="filter-locomocao"> no HTML):
//   "A pé" | "Transporte Público" | "Vias Principais" | "Carro"
// Um item pode ter mais de um valor (ex.: ["A pé", "Transporte Público"]).
// ─────────────────────────────────────────────
const empreendimentos = [
    {
        id: 1,
        nome: "Residencial Palma",
        status: "Lançamento",
        statusCode: "Lançamento",
        badgeColor: "#57e220",
        bairro: "Quadra 606 Norte",
        regiao: "norte",
        quartos: 2,
        mapsUrl: "https://maps.app.goo.gl/SbFnn7GDbw4oVjTX7",
        locomocao: [],
        imagens: [
            "img/PPC_PALMA_GUARITA_2026.03.30.jpg",
            "img/PPC_PALMA_LAZER GERAL_2026.03.30.jpg",
            "img/PCC_PALMA_PISCINA AÉREA_2026.03.30.jpg",
            "img/PCC_PALMA_PLAYBABY_2026.03.30.jpg",
            "img/PCC_PALMA_QUADRA_2026.03.30.jpg",
            "img/PCC_PALMA_FUNCIONAL_2026.03.30.jpg",
            "img/INT_PALMA_SALA E COZINHA_2026.03.30.jpg",
            "img/INT_PALMA_QUARTO MAIOR_2026.03.30.jpg",
            "img/INT_PALMA_QUARTO MENOR_2026.03.30.jpg",
            "img/INT_PALMA_VARANDA_2026.03.30.jpg",
            "img/INT_PALMA_ÁREA PRIVATIVA_2026.03.30.jpg"
        ],
        descricao: "Apartamentos com 2 quartos, sala, cozinha e banheiro. Opções com ou sem varanda, área privativa e vagas para carro ou moto. Localização estratégica na região norte.",
        diferenciais: [
            { icone: "fa-bed",            texto: "2 quartos · sala · cozinha · banheiro" },
            { icone: "fa-door-open",      texto: "Opções com ou sem varanda" },
            { icone: "fa-lock",           texto: "Opções com ou sem área privativa" },
            { icone: "fa-square-parking", texto: "Opções de garagem para carro ou moto" }
        ]
    },
    {
        id: 2,
        nome: "Reserva dos Girassóis",
        status: "Últimas Unidades",
        statusCode: "Últimas Unidades",
        badgeColor: "#b91010",
        bairro: "Quadra 1506 Sul",
        regiao: "sul",
        quartos: 2,
        mapsUrl: "https://maps.app.goo.gl/ChfJRLSKuFwAxArt8",
        locomocao: [],
        imagens: [
            "img/SQUAD-MRV ENGENHARIA-RESERVA DO GIRASSOL-IMG-GUARITA-R03.jpg",
            "img/SQUAD-MRV ENGENHARIA-RESERVA DO GIRASSOL-IMG-AEREA LAZER-02 R02.jpg",
            "img/SQUAD-MRV ENGENHARIA-RESERVA DO GIRASSOL-IMG-CHURRASQUEIRA-R03.jpg",
            "img/SQUAD-MRV ENGENHARIA-RESERVA DO GIRASSOL-IMG-PISCINA-R03.jpg",
            "img/SQUAD-MRV-RESERVA DOS GIRASSOIS-IMG-LIVING01-R03.jpg",
            "img/SQUAD-MRV-RESERVA DOS GIRASSOIS-IMG-QUARTO CASAL01-R04.jpg",
            "img/SQUAD-MRV-RESERVA DOS GIRASSOIS-IMG-VARANDA01-R04.jpg"
        ],
        descricao: "Apartamentos com 2 quartos, sala, cozinha e banheiro. Opções com ou sem varanda, área privativa e vagas para carro ou moto. Excelente oportunidade de investimento com plantas inteligentes.",
        diferenciais: [
            { icone: "fa-bed",            texto: "2 quartos · sala · cozinha · banheiro" },
            { icone: "fa-door-open",      texto: "Opções com ou sem varanda" },
            { icone: "fa-lock",           texto: "Opções com ou sem área privativa" },
            { icone: "fa-square-parking", texto: "Opções de garagem para carro ou moto" }
        ]
    },
    {
        id: 3,
        nome: "Palmeira Serena",
        status: "À Venda",
        statusCode: "Venda",
        badgeColor: "#06d2d9",
        bairro: "Quadra 1101 Sul",
        regiao: "sul",
        quartos: 2,
        mapsUrl: "https://maps.app.goo.gl/3aG9oH433Q8QpQjn6",
        locomocao: [],
        imagens: [
            "img/PPC_PALMEIRA SERENA_GUARITA_2026.03.03.jpg",
            "img/PPC_PALMEIRA SERENA_PISCINA_2026.03.03.jpg",
            "img/PPC_PALMEIRA SERENA_MINI QUADRA_2026.03.03.jpg",
            "img/PPC_PALMEIRA SERENA_GOURMET_2026.03.03.jpg",
            "img/PPC_PALMEIRA SERENA_GOURMET 02_2026.03.05.jpg",
            "img/MRV_SALÃO DE FESTAS.jpg",
            "img/INT_PALMEIRA SERENA_SALA COZINHA_2026.02.27.jpg",
            "img/INT_PALMEIRA SERENA_QUARTO MAIOR_2026.02.27.jpg",
            "img/INT_PALMEIRA SERENA_QUARTO MENOR_2026.02.27.jpg",
            "img/INT_PALMEIRA SERENA_VARANDA_2026.02.27.jpg",
            "img/INT_PALMEIRA SERENA_PRIVATIVA_2026.02.27.jpg"
        ],
        descricao: "Apartamentos com 2 quartos, sala, cozinha e banheiro. Opções com ou sem varanda, área privativa e vagas de garagem. Conceito moderno com infraestrutura de lazer completa.",
        diferenciais: [
            { icone: "fa-bed",            texto: "2 quartos · sala · cozinha · banheiro" },
            { icone: "fa-door-open",      texto: "Opções com ou sem varanda" },
            { icone: "fa-lock",           texto: "Área privativa disponível" },
            { icone: "fa-square-parking", texto: "Opções de garagem para carro ou moto" }
        ]
    },
    {
        id: 4,
        nome: "Palmeira Solare",
        status: "À Venda",
        statusCode: "Venda",
        badgeColor: "#06d2d9",
        bairro: "Quadra 207 Norte",
        regiao: "norte",
        quartos: 2,
        mapsUrl: "https://maps.app.goo.gl/RJTcLszhJKUgpqFz6",
        locomocao: [],
        imagens: [
            "img/PALMEIRA SOLARE_PPC_FACHADA_01.09.2025.jpg",
            "img/PALMEIRA SOLARE_PPC_ACADEMIA_2025.08.08.jpg",
            "img/PALMEIRA SOLARE_PPC_PLAYGROUND_2025.08.08.jpg",
            "img/PALMEIRA SOLARE_PPC_CHURRASQUEIRA_2025.08.08.jpg",
            "img/PALMEIRA SOLARE_PPC_HAPPY HOUR_2025.08.08.jpg",
            "img/PALMEIRA SOLARE_INTERNA_SALA_COZINHA_2025.08.08.jpg",
            "img/PALMEIRA SOLARE_INTERNA_QUARTO MAIOR_2025.08.08.jpg",
            "img/PALMEIRA SOLARE_INTERNA_QUARTO MENOR_2025.08.08.jpg",
            "img/PALMEIRA SOLARE_INTERNA_VARANDA_2025.08.08.jpg",
            "img/PALMEIRA SOLARE_INTERNA_AREA PRIVATIVA_2025.08.08.jpg"
        ],
        descricao: "Apartamentos com 2 quartos, sala, cozinha e banheiro. Opções com ou sem varanda, área privativa e até 2 vagas de garagem. O ápice da conveniência urbana.",
        diferenciais: [
            { icone: "fa-bed",            texto: "2 quartos · sala · cozinha · banheiro" },
            { icone: "fa-door-open",      texto: "Opções com ou sem varanda" },
            { icone: "fa-lock",           texto: "Opções com ou sem área privativa" },
            { icone: "fa-square-parking", texto: "Opções de garagem para carro ou moto" }
        ]
    },
    {
        id: 5,
        nome: "Palmeira Boreal",
        status: "Sucesso de Venda",
        statusCode: "Sucesso de Venda",
        badgeColor: "#DAA520",
        bairro: "Região Norte",
        regiao: "norte",
        quartos: 2,
        mapsUrl: "https://maps.app.goo.gl/uhxnnNcXJ5vR3UQL7",
        locomocao: [],
        imagens: [
            "img/RESIDENCIAL PALMEIRA BOREAL_PPC_GUARITA E FACHADA_20240513 (1).jpg",
            "img/RESIDENCIAL PALMEIRA BOREAL_PPC_QUARTO MAIOR_20240513.jpg",
            "img/RESIDENCIAL PALMEIRA BOREAL_PPC_SALA COZINHA_20240513.jpg",
            "img/RESIDENCIAL PALMEIRA BOREAL_PPC_VARANDA_20240513.jpg",
            "img/RESIDENCIAL PALMEIRA BOREAL_PPC_CHURRASQUEIRA PLAY_20240513.jpg",
            "img/RESIDENCIAL PALMEIRA BOREAL_PPC_PISCINA 01_20240513 (1).jpg",
            "img/RESIDENCIAL PALMEIRA BOREAL_PPC_PISCINA 02_20240513.jpg"
        ],
        descricao: "Apartamentos com 2 quartos, sala, cozinha e banheiro. Opções com ou sem varanda, área privativa e até 2 vagas de garagem.",
        diferenciais: [
            { icone: "fa-bed",            texto: "2 quartos · sala · cozinha · banheiro" },
            { icone: "fa-door-open",      texto: "Opções com ou sem varanda" },
            { icone: "fa-lock",           texto: "Opções com ou sem área privativa" },
            { icone: "fa-square-parking", texto: "Opções de garagem para carro ou moto" }
        ]
    },

    // ─────────────────────────────────────────
    // EXEMPLO / PLACEHOLDER — apartamento para ALUGAR
    // Adicionado só para o filtro "Para Alugar" + "Locomoção" ter algo
    // para mostrar. Troque nome, bairro, imagens, descrição e os valores
    // de `locomocao` pelos dados reais assim que tiver um imóvel de
    // aluguel de verdade. As imagens abaixo são placeholders — se o
    // arquivo não existir, o próprio handleImageError() já cobre o
    // fallback visual, então nada quebra.
    // ─────────────────────────────────────────
  {
    id: 6,
    nome: "Palmeira Boreal",
    status: "Para Alugar",
    statusCode: "Alugar",
    badgeColor: "#1e3e62",
    bairro: "Quadra 104 Sul",
    regiao: "sul",
    quartos: 2,
    mapsUrl: "",
    locomocao: ["Transporte Público", "Vias Principais"],
    imagens: [
        "img/RESIDENCIAL PALMEIRA BOREAL_PPC_GUARITA E FACHADA_20240513 (1).jpg",
        "img/RESIDENCIAL PALMEIRA BOREAL_PPC_QUARTO MAIOR_20240513.jpg",
        "img/RESIDENCIAL PALMEIRA BOREAL_PPC_SALA COZINHA_20240513.jpg",
        "img/RESIDENCIAL PALMEIRA BOREAL_PPC_VARANDA_20240513.jpg",
        "img/RESIDENCIAL PALMEIRA BOREAL_PPC_CHURRASQUEIRA PLAY_20240513.jpg",
        "img/RESIDENCIAL PALMEIRA BOREAL_PPC_PISCINA 01_20240513 (1).jpg",
        "img/RESIDENCIAL PALMEIRA BOREAL_PPC_PISCINA 02_20240513.jpg",
        "img/banheiro.jpg",
        "img/corredor.jpg",
        "img/cozinha 3.jpg",
        "img/cozinha e area de serviço 1.jpg",
        "img/quarto 1 (2).jpg",
        "img/quarto 2 (2).jpg"
    ],
    descricao: "Apartamentos com 2 quartos, sala, cozinha e banheiro. Opções com ou sem varanda, área privativa e até 2 vagas de garagem.",
    diferenciais: [
            { icone: "fa-bed",            texto: "2 quartos · sala · cozinha · banheiro" },
            { icone: "fa-door-open",      texto: "Opções com ou sem varanda" },
            { icone: "fa-lock",           texto: "Opções com ou sem área privativa" },
            { icone: "fa-square-parking", texto: "Opções de garagem para carro ou moto" }
    ]
}
];

// ─────────────────────────────────────────────
// HELPER: link WhatsApp
// ─────────────────────────────────────────────
function buildWhatsAppLink(nome) {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Olá Neto! Tenho interesse no *${nome}* e gostaria de mais informações. Pode me atender?`)}`;
}

// ─────────────────────────────────────────────
// LAZY LOADING COM INTERSECTION OBSERVER
// ─────────────────────────────────────────────
const lazyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const img = entry.target;
        if (!img.dataset.src) return;
        img.src = img.dataset.src;
        img.removeAttribute("data-src");
        img.classList.remove("img-lazy");
        lazyObserver.unobserve(img);
    });
}, { rootMargin: "200px 0px", threshold: 0 });

function registerLazyImages(container) {
    container.querySelectorAll("img[data-src]").forEach(img => lazyObserver.observe(img));
}

// ─────────────────────────────────────────────
// FALLBACK: imagem quebrada
// ─────────────────────────────────────────────
function handleImageError(imgEl) {
    imgEl.onerror = null;
    imgEl.style.display = "none";
    const ph = document.createElement("div");
    ph.style.cssText = "width:100%;height:260px;background:linear-gradient(135deg,#e8e8e8,#d0d0d0);display:flex;flex-direction:column;align-items:center;justify-content:center;color:#999;font-size:.85rem;gap:8px;";
    ph.innerHTML = `<i class="fa-solid fa-image" style="font-size:2rem;opacity:.4;"></i><span>Imagem indisponível</span>`;
    imgEl.parentNode?.insertBefore(ph, imgEl);
}

// ─────────────────────────────────────────────
// LIGHTBOX
// ─────────────────────────────────────────────
function initLightbox() {
    // CSS injetado uma única vez — apenas o essencial do lightbox
    // (estilos dos cards e swiper estão no style.css)
    const style = document.createElement("style");
    style.textContent = `
        img.img-lazy{background:linear-gradient(110deg,#e8eaed 30%,#f5f5f5 50%,#e8eaed 70%);background-size:200% 100%;animation:lazy-shimmer 1.4s infinite linear;}
        @keyframes lazy-shimmer{0%{background-position:200% 0}100%{background-position:-200% 0}}

        #lightbox-overlay{display:none;position:fixed;inset:0;background:rgba(0,0,0,.92);z-index:9999;align-items:center;justify-content:center;flex-direction:column;padding:16px;}
        #lightbox-overlay.active{display:flex;}
        #lightbox-img-wrap{position:relative;max-width:92vw;max-height:80vh;display:flex;align-items:center;justify-content:center;}
        #lightbox-img{max-width:92vw;max-height:78vh;border-radius:10px;object-fit:contain;box-shadow:0 8px 48px rgba(0,0,0,.7);user-select:none;transition:opacity .2s;}
        #lightbox-img.fading{opacity:0;}
        .lb-arrow{position:absolute;top:50%;transform:translateY(-50%);background:rgba(255,255,255,.12);border:1.5px solid rgba(255,255,255,.3);color:#fff;width:48px;height:48px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:1.2rem;cursor:pointer;transition:background .2s,transform .2s;z-index:2;}
        .lb-arrow:hover{background:rgba(255,255,255,.28);transform:translateY(-50%) scale(1.1);}
        .lb-arrow-prev{left:-64px;}
        .lb-arrow-next{right:-64px;}
        #lightbox-close{position:fixed;top:18px;right:22px;background:rgba(255,255,255,.12);border:1.5px solid rgba(255,255,255,.3);color:#fff;width:42px;height:42px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:1.15rem;cursor:pointer;transition:background .2s;z-index:10001;}
        #lightbox-close:hover{background:rgba(255,255,255,.28);}
        #lightbox-counter{margin-top:16px;color:rgba(255,255,255,.55);font-size:.85rem;letter-spacing:.05em;}
        #lightbox-thumbs{display:flex;gap:8px;margin-top:14px;overflow-x:auto;max-width:92vw;padding-bottom:4px;scrollbar-width:thin;scrollbar-color:rgba(255,255,255,.2) transparent;}
        .lb-thumb{flex-shrink:0;width:56px;height:40px;border-radius:5px;object-fit:cover;opacity:.45;cursor:pointer;border:2px solid transparent;transition:opacity .2s,border-color .2s;background:#333;}
        .lb-thumb.active,.lb-thumb:hover{opacity:1;border-color:rgba(255,255,255,.7);}
        @media(max-width:640px){.lb-arrow-prev{left:-44px;}.lb-arrow-next{right:-44px;}.lb-arrow{width:38px;height:38px;font-size:1rem;}}

        .card-actions{display:grid;grid-template-columns:1fr auto;gap:10px;margin-top:16px;}
        .btn-whatsapp-card{display:inline-flex;align-items:center;justify-content:center;gap:8px;padding:13px 18px;background:#25d366;color:#fff;font-size:.88rem;font-weight:600;border-radius:10px;border:none;cursor:pointer;text-decoration:none;transition:background .2s,transform .2s,box-shadow .2s;white-space:nowrap;}
        .btn-whatsapp-card:hover{background:#1ebe5a;transform:translateY(-2px);box-shadow:0 6px 20px rgba(37,211,102,.3);}
        .btn-maps-card{display:inline-flex;align-items:center;justify-content:center;gap:7px;padding:13px 16px;background:transparent;color:#0b192c;font-size:.85rem;font-weight:600;border-radius:10px;border:1.5px solid #e2e8f0;cursor:pointer;text-decoration:none;transition:background .2s,border-color .2s,transform .2s;white-space:nowrap;flex-shrink:0;}
        .btn-maps-card:hover{background:#f8fafc;border-color:#0b192c;transform:translateY(-2px);}
        .btn-maps-card i{font-size:.9rem;color:#ea4335;}
        .photo-counter{position:absolute;bottom:10px;right:10px;z-index:10;background:rgba(0,0,0,.52);color:#fff;border-radius:20px;padding:3px 10px;font-size:.75rem;pointer-events:none;display:flex;align-items:center;gap:5px;}
    `;
    document.head.appendChild(style);

    const overlay = document.createElement("div");
    overlay.id = "lightbox-overlay";
    overlay.innerHTML = `
        <button id="lightbox-close" aria-label="Fechar"><i class="fa-solid fa-xmark"></i></button>
        <div id="lightbox-img-wrap">
            <button class="lb-arrow lb-arrow-prev" aria-label="Anterior"><i class="fa-solid fa-chevron-left"></i></button>
            <img id="lightbox-img" src="" alt="Visualização ampliada">
            <button class="lb-arrow lb-arrow-next" aria-label="Próxima"><i class="fa-solid fa-chevron-right"></i></button>
        </div>
        <div id="lightbox-counter"></div>
        <div id="lightbox-thumbs"></div>
    `;
    document.body.appendChild(overlay);

    let _imgs = [], _idx = 0;
    const lbImg   = overlay.querySelector("#lightbox-img");
    const counter = overlay.querySelector("#lightbox-counter");
    const thumbs  = overlay.querySelector("#lightbox-thumbs");

    function setImage(index) {
        _idx = (index + _imgs.length) % _imgs.length;
        lbImg.classList.add("fading");
        setTimeout(() => {
            lbImg.src = encodeImgPath(_imgs[_idx]);
            lbImg.classList.remove("fading");
        }, 180);
        counter.textContent = `${_idx + 1} / ${_imgs.length}`;
        thumbs.querySelectorAll(".lb-thumb").forEach((t, i) => t.classList.toggle("active", i === _idx));
        thumbs.querySelector(".lb-thumb.active")?.scrollIntoView({ inline: "center", behavior: "smooth" });
    }

    function buildThumbs() {
        thumbs.innerHTML = "";
        if (_imgs.length <= 1) return;
        _imgs.forEach((src, i) => {
            const t = document.createElement("img");
            t.className = "lb-thumb";
            t.src = encodeImgPath(src);
            t.alt = `Foto ${i + 1}`;
            t.addEventListener("click", () => setImage(i));
            t.addEventListener("error", () => { t.style.display = "none"; });
            thumbs.appendChild(t);
        });
    }

    function closeLightbox() {
        overlay.classList.remove("active");
        document.body.style.overflow = "";
        lbImg.src = "";
        thumbs.innerHTML = "";
    }

    window.openLightbox = function(imagens, idx = 0) {
        _imgs = imagens;
        buildThumbs();
        setImage(idx);
        overlay.classList.add("active");
        document.body.style.overflow = "hidden";
    };

    overlay.querySelector(".lb-arrow-prev").addEventListener("click", () => setImage(_idx - 1));
    overlay.querySelector(".lb-arrow-next").addEventListener("click", () => setImage(_idx + 1));
    overlay.querySelector("#lightbox-close").addEventListener("click", closeLightbox);
    overlay.addEventListener("click", (e) => { if (e.target === overlay) closeLightbox(); });
    document.addEventListener("keydown", (e) => {
        if (!overlay.classList.contains("active")) return;
        if (e.key === "ArrowRight") setImage(_idx + 1);
        if (e.key === "ArrowLeft")  setImage(_idx - 1);
        if (e.key === "Escape")     closeLightbox();
    });
}

// ─────────────────────────────────────────────
// SWIPER HTML
// ─────────────────────────────────────────────
function getSwiperHTML(imagens, swiperClass, itemId) {
    if (!imagens?.length) {
        return `<div style="background:#e8e8e8;height:260px;display:flex;align-items:center;justify-content:center;color:#999;flex-direction:column;gap:8px;">
                    <i class="fa-solid fa-image" style="font-size:2rem;opacity:.4;"></i>
                    <span style="font-size:.85rem;">Sem imagem</span>
                </div>`;
    }

    if (imagens.length === 1) {
        return `
            <div style="position:relative;cursor:zoom-in;" data-lightbox-id="${itemId}" data-lightbox-index="0">
                <img src="${encodeImgPath(imagens[0])}" alt="Foto do empreendimento"
                    width="640" height="260"
                    style="width:100%;height:260px;object-fit:cover;display:block;"
                    loading="lazy" decoding="async"
                    onerror="handleImageError(this)">
                <span class="photo-counter"><i class="fa-solid fa-magnifying-glass-plus"></i> Ampliar</span>
            </div>`;
    }

    const slides = imagens.map((raw, idx) => {
        const src     = encodeImgPath(raw);
        const isFirst = idx === 0;
        return `
        <div class="swiper-slide" style="cursor:zoom-in;" data-lightbox-id="${itemId}" data-lightbox-index="${idx}">
            <img ${isFirst ? `src="${src}"` : `data-src="${src}" class="img-lazy"`}
                width="640" height="260"
                style="width:100%;height:260px;object-fit:cover;display:block;"
                ${isFirst ? 'loading="eager"' : 'loading="lazy"'}
                decoding="async"
                onerror="handleImageError(this)"
                alt="Foto ${idx + 1}">
        </div>`;
    }).join("");

    return `
        <div class="swiper ${swiperClass}" style="width:100%;height:260px;">
            <div class="swiper-wrapper">${slides}</div>
            <div class="swiper-pagination"></div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
            <span class="photo-counter"><i class="fa-solid fa-images"></i> ${imagens.length} fotos</span>
        </div>`;
}

// ─────────────────────────────────────────────
// RENDERIZAR CARDS
// ─────────────────────────────────────────────
function renderCards(dados) {
    const container = document.getElementById("properties-container");
    if (!container) return;

    if (!dados.length) {
        container.innerHTML = `<p class="no-results">Nenhum empreendimento corresponde aos filtros selecionados.</p>`;
        return;
    }

    // Cria fragment para minimizar reflows
    const frag = document.createDocumentFragment();

    dados.forEach(item => {
        const card        = document.createElement("article");
        card.className    = "property-card";
        const swiperClass = `swiper-card-${item.id}`;
        const mapsLink    = item.mapsUrl || `https://www.google.com/maps/search/${encodeURIComponent(item.bairro + ", Palmas, TO")}`;

        card.innerHTML = `
            <div class="property-image-wrapper">
                ${getSwiperHTML(item.imagens, swiperClass, item.id)}
                <span class="property-tag" style="background-color:${item.badgeColor || "var(--gold)"}">
                    ${item.status}
                </span>
            </div>
            <div class="property-info">
                <span class="property-location">
                    <i class="fa-solid fa-location-dot"></i>
                    ${item.bairro}
                </span>
                <h3>${item.nome}</h3>
                <p class="property-description">${item.descricao}</p>
                <ul class="property-features">
                    ${item.diferenciais.map(d => `<li><i class="fa-solid ${d.icone}"></i>${d.texto}</li>`).join("")}
                </ul>
                <div class="card-actions">
                    <a href="${buildWhatsAppLink(item.nome)}" target="_blank" rel="noopener noreferrer"
                       class="btn-whatsapp-card" aria-label="Falar sobre ${item.nome} no WhatsApp">
                        <i class="fa-brands fa-whatsapp"></i>Falar no WhatsApp
                    </a>
                    <a href="${mapsLink}" target="_blank" rel="noopener noreferrer"
                       class="btn-maps-card" aria-label="Ver localização de ${item.nome}">
                        <i class="fa-solid fa-location-dot"></i>Ver local
                    </a>
                </div>
            </div>`;

        frag.appendChild(card);
        registerLazyImages(card);

        // Swiper — só inicializa se tiver mais de 1 imagem
        if (item.imagens.length > 1) {
            // requestIdleCallback para não bloquear o render inicial dos cards
            const initSwiper = () => {
                const sw = new Swiper(`.${swiperClass}`, {
                    loop: true,
                    preloadImages: false,
                    lazy: false,
                    pagination: { el: `.${swiperClass} .swiper-pagination`, clickable: true },
                    navigation: {
                        nextEl: `.${swiperClass} .swiper-button-next`,
                        prevEl: `.${swiperClass} .swiper-button-prev`
                    }
                });

                // Carrega imagem do slide atual ao trocar
                sw.on("slideChange", () => {
                    card._swiperIdx = sw.realIndex;
                    const next = (sw.realIndex + 1) % item.imagens.length;
                    [sw.realIndex, next].forEach(i => {
                        const img = card.querySelectorAll(".swiper-slide")[i]?.querySelector("img[data-src]");
                        if (img) {
                            img.src = img.dataset.src;
                            img.removeAttribute("data-src");
                            img.classList.remove("img-lazy");
                        }
                    });
                });

                card._swiperIdx = 0;
            };

            // Usa requestIdleCallback se disponível, senão setTimeout 0
            "requestIdleCallback" in window
                ? requestIdleCallback(initSwiper, { timeout: 500 })
                : setTimeout(initSwiper, 0);
        }
    });

    container.innerHTML = "";
    container.appendChild(frag);

    // Lightbox via delegação de eventos — um listener só para todos os cards
    container.addEventListener("click", (e) => {
        if (e.target.closest("a")) return;
        const trigger = e.target.closest("[data-lightbox-id]");
        if (!trigger) return;
        const item = empreendimentos.find(em => em.id === +trigger.dataset.lightboxId);
        if (!item) return;
        const cardEl = trigger.closest("article");
        const idx    = cardEl?._swiperIdx ?? +trigger.dataset.lightboxIndex ?? 0;
        window.openLightbox(item.imagens, idx);
    }, { once: false });
}

// ─────────────────────────────────────────────
// FILTROS
// ─────────────────────────────────────────────
function initFilters() {
    const selStatus    = document.getElementById("filter-status");
    const selBairro    = document.getElementById("filter-bairro");
    const selLocomocao = document.getElementById("filter-locomocao");
    const btnSearch    = document.getElementById("btn-execute-filter");

    // Campo condicional + divisor ao lado dele (só existem no modo "Alugar")
    const campoLocomocao    = document.getElementById("filter-field-locomocao");
    const divisorLocomocao  = document.querySelector('.filter-divider-new[data-conditional="alugar"]');

    // ─────────────────────────────────────
    // Mostra/esconde "Locomoção" conforme o
    // status selecionado. Segue o mesmo
    // princípio dos outros filtros: reage a
    // "change" e reseta o próprio valor
    // quando sai do modo Alugar.
    // ─────────────────────────────────────
    function atualizarVisibilidadeLocomocao() {
        const ehAluguel = selStatus?.value === "Alugar";
        if (campoLocomocao)   campoLocomocao.hidden = !ehAluguel;
        if (divisorLocomocao) divisorLocomocao.hidden = !ehAluguel;
        if (!ehAluguel && selLocomocao) selLocomocao.value = "";
    }

    function aplicar(scroll = false) {
        let lista = empreendimentos;

        if (selStatus?.value) {
            const v = selStatus.value.toLowerCase();
            lista = lista.filter(i => {
                const sc = (i.statusCode || "").toLowerCase();
                return v === "venda" ? sc.includes("venda") : sc === v;
            });
        }

        if (selBairro?.value) {
            const regiao = selBairro.value.toLowerCase().includes("sul") ? "sul" : "norte";
            lista = lista.filter(i => i.regiao?.toLowerCase().includes(regiao));
        }

        // Locomoção só filtra de fato quando o modo Alugar está ativo
        // (o campo fica escondido nos outros modos, então na prática
        // selLocomocao.value só existe nesse contexto).
        if (selStatus?.value === "Alugar" && selLocomocao?.value) {
            lista = lista.filter(i => Array.isArray(i.locomocao) && i.locomocao.includes(selLocomocao.value));
        }

        renderCards(lista);

        if (scroll) {
            setTimeout(() => {
                document.getElementById("properties-container")
                    ?.scrollIntoView({ behavior: "smooth", block: "start" });
            }, 150);
        }
    }

    // Status precisa atualizar a visibilidade do campo de Locomoção
    // ANTES de reaplicar o filtro, senão o campo mostra/esconde um
    // frame depois do resultado.
    selStatus?.addEventListener("change", () => {
        atualizarVisibilidadeLocomocao();
        aplicar();
    });

    [selBairro, selLocomocao].forEach(el => el?.addEventListener("change", () => aplicar()));
    btnSearch?.addEventListener("click", (e) => { e.preventDefault(); aplicar(true); });

    atualizarVisibilidadeLocomocao(); // estado inicial da página
}

// ─────────────────────────────────────────────
// HEADER STICKY + MENU MOBILE
// ─────────────────────────────────────────────
function initHeader() {
    const header = document.getElementById("header");
    if (header) {
        window.addEventListener("scroll", () => {
            header.classList.toggle("sticky", window.scrollY > 40);
        }, { passive: true });
    }

    const toggle = document.querySelector(".mobile-menu-toggle");
    const nav    = document.querySelector(".nav-menu");
    if (!toggle || !nav) return;

    toggle.addEventListener("click", () => {
        const open = nav.classList.toggle("active");
        toggle.setAttribute("aria-expanded", String(open));
        toggle.innerHTML = open
            ? '<i class="fa-solid fa-xmark"></i>'
            : '<i class="fa-solid fa-bars"></i>';
    });

    nav.querySelectorAll("ul a").forEach(a => {
        a.addEventListener("click", () => {
            nav.classList.remove("active");
            toggle.setAttribute("aria-expanded", "false");
            toggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
        });
    });
}

// ─────────────────────────────────────────────
// ANIMAÇÃO DAS MÉTRICAS
// ─────────────────────────────────────────────
function initStatsAnimation() {
    const section = document.getElementById("stats-section");
    const stats   = section?.querySelectorAll(".stat-number");
    if (!section || !stats?.length) return;

    let done = false;
    new IntersectionObserver((entries) => {
        if (!entries[0].isIntersecting || done) return;
        done = true;
        stats.forEach(el => {
            const target = parseInt(el.dataset.target);
            if (isNaN(target)) return;
            const inc = target / 40;
            let current = 0;
            const tick = () => {
                current += inc;
                if (current < target) {
                    el.textContent = Math.ceil(current);
                    setTimeout(tick, 25);
                } else {
                    el.textContent = target + (el.dataset.target === "100" ? "%" : "+");
                }
            };
            tick();
        });
    }, { threshold: 0.15 }).observe(section);
}

// ─────────────────────────────────────────────
// DEPOIMENTOS — carrossel estático do HTML
// O HTML já tem o depoimento da Maria Aparecida.
// Os depoimentos extras do dataset ficam disponíveis
// caso o HTML venha a ter botões prev/next.
// ─────────────────────────────────────────────
const depoimentosExtras = [
    {
        nome: "Ricardo Cavalcante",
        cargo: "Investidor Imobiliário",
        texto: "O atendimento consultivo superou todas as expectativas. A transparência e dedicação do Neto foram o diferencial para fecharmos o negócio.",
        img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&auto=format&fit=crop&q=80"
    },
    {
        nome: "Mariana Fontes",
        cargo: "Investidora — Orla 14",
        texto: "O Neto superou todas as expectativas. Do primeiro contato ao suporte pós-venda, o processo foi impecável.",
        img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100"
    }
];

function initTestimonials() {
    const nextBtn = document.getElementById("next-testimonial");
    const prevBtn = document.getElementById("prev-testimonial");
    const card    = document.querySelector(".testimonial-card");
    // Se não existirem botões no HTML atual, não faz nada
    if (!nextBtn || !prevBtn || !card) return;

    // Mescla o depoimento do HTML com os extras
    const todos = [
        {
            nome: card.querySelector(".testimonial-user h4")?.textContent || "",
            cargo: card.querySelector(".testimonial-role")?.textContent?.trim() || "",
            texto: card.querySelector(".testimonial-text")?.textContent?.replace(/[""]/g, "").trim() || "",
            img: card.querySelector(".testimonial-user img")?.src || ""
        },
        ...depoimentosExtras
    ];

    let idx = 0;

    function show(i) {
        const t = todos[i];
        card.style.opacity = "0";
        setTimeout(() => {
            card.querySelector(".testimonial-text").textContent   = `"${t.texto}"`;
            card.querySelector(".testimonial-user img").src        = t.img;
            card.querySelector(".testimonial-user h4").textContent = t.nome;
            card.querySelector(".testimonial-role").innerHTML      = `<i class="fa-solid fa-user-tie"></i> ${t.cargo}`;
            card.style.opacity = "1";
        }, 200);
    }

    nextBtn.addEventListener("click", () => { idx = (idx + 1) % todos.length; show(idx); });
    prevBtn.addEventListener("click", () => { idx = (idx - 1 + todos.length) % todos.length; show(idx); });
}

// ─────────────────────────────────────────────
// INIT
// ─────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
    initLightbox();
    initHeader();
    renderCards(empreendimentos);
    initFilters();
    initStatsAnimation();
    initTestimonials();
});