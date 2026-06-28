// ─────────────────────────────────────────────
// CONFIGURAÇÃO
// ─────────────────────────────────────────────
const WHATSAPP_NUMBER = "5563999911234";

// ─────────────────────────────────────────────
// ENCODE DE CAMINHO DE IMAGEM
// Preserva "img/" e encoda só o nome do arquivo,
// resolvendo espaços, acentos, parênteses, etc.
// ─────────────────────────────────────────────
function encodeImgPath(path) {
    if (!path) return "";
    const lastSlash = path.lastIndexOf("/");
    if (lastSlash === -1) return encodeURIComponent(path);
    const dir      = path.slice(0, lastSlash + 1);
    const filename = path.slice(lastSlash + 1);
    return dir + encodeURIComponent(filename);
}

// ─────────────────────────────────────────────
// DATASET DE EMPREENDIMENTOS
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
        vagas: 1,
        area: "Planta Otimizada",
        mapsUrl: "https://maps.app.goo.gl/SbFnn7GDbw4oVjTX7",
        imagens: [
            // ✅ nomes exatos conforme pasta img/ no disco
            "img/PPC_PALMA_GUARITA_2026.03.30.jpg",
            "img/PPC_PALMA_LAZER GERAL_2026.03.30.jpg",
            "img/PCC_PALMA_PISCINA AÉREA_2026.03.30.jpg",   // PCC (não PPC)
            "img/PCC_PALMA_PLAYBABY_2026.03.30.jpg",        // PCC
            "img/PCC_PALMA_QUADRA_2026.03.30.jpg",          // PCC + QUADRA (não MINI QUADRA)
            "img/PCC_PALMA_FUNCIONAL_2026.03.30.jpg",       // PCC + FUNCIONAL (extra)
            "img/INT_PALMA_SALA E COZINHA_2026.03.30.jpg",
            "img/INT_PALMA_QUARTO MAIOR_2026.03.30.jpg",
            "img/INT_PALMA_QUARTO MENOR_2026.03.30.jpg",
            "img/INT_PALMA_VARANDA_2026.03.30.jpg",
            "img/INT_PALMA_ÁREA PRIVATIVA_2026.03.30.jpg"
        ],
        descricao: "Apartamentos bem distribuídos com 2 quartos, sala, cozinha e banheiro. Escolha a planta ideal para o seu estilo de vida, com opções de unidades com ou sem varanda, área privativa e vagas de garagem para carro ou moto. Localização estratégica na região norte.",
        diferenciais: ["Dois quartos/sala/cozinha/banheiro","Opções com ou sem Varanda","Opções com ou sem área privada","Opções de garagem para carro ou moto"]
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
        vagas: "1 a 2",
        area: "Planta Inteligente",
        mapsUrl: "https://maps.app.goo.gl/ChfJRLSKuFwAxArt8",
        imagens: [
            "img/SQUAD-MRV ENGENHARIA-RESERVA DO GIRASSOL-IMG-GUARITA-R03.jpg",
            "img/SQUAD-MRV ENGENHARIA-RESERVA DO GIRASSOL-IMG-AEREA LAZER-02 R02.jpg",  
            "img/SQUAD-MRV ENGENHARIA-RESERVA DO GIRASSOL-IMG-CHURRASQUEIRA-R03.jpg", 
            "img/SQUAD-MRV ENGENHARIA-RESERVA DO GIRASSOL-IMG-PISCINA-R03.jpg",
            "img/SQUAD-MRV-RESERVA DOS GIRASSOIS-IMG-LIVING01-R03.jpg",
            "img/SQUAD-MRV-RESERVA DOS GIRASSOIS-IMG-QUARTO CASAL01-R04.jpg",
            "img/SQUAD-MRV-RESERVA DOS GIRASSOIS-IMG-VARANDA01-R04.jpg"
        ],
        descricao: "Apartamentos bem distribuídos com 2 quartos, sala, cozinha e banheiro. Escolha a planta ideal para o seu estilo de vida, com opções de unidades com ou sem varanda, área privativa e vagas de garagem para carro ou moto. Uma excelente oportunidade de investimento patrimonial com plantas inteligentes.",
        diferenciais: ["Dois quartos/sala/cozinha/banheiro","Opções com ou sem Varanda","Opções com ou sem área privada","Opções de garagem para carro ou moto"]
    },
    {
        id: 3,
        nome: "Palmeira Serena",
        status: "À Venda",
        statusCode: "À Venda",
        badgeColor: "#06d2d9",
        bairro: "Quadra 1101 Sul",
        regiao: "sul",
        quartos: 2,
        vagas: "Privativa",
        area: "Conceito Moderno",
        mapsUrl: "https://maps.app.goo.gl/3aG9oH433Q8QpQjn6",
        imagens: [
            "img/PPC_PALMEIRA SERENA_GUARITA_2026.03.03.jpg",
            "img/PPC_PALMEIRA SERENA_PISCINA_2026.03.03.jpg",
            "img/PPC_PALMEIRA SERENA_MINI QUADRA_2026.03.03.jpg",
            "img/PPC_PALMEIRA SERENA_GOURMET_2026.03.03.jpg",
            "img/PPC_PALMEIRA SERENA_GOURMET 02_2026.03.05.jpg",
            "img/MRV_SALÃO DE FESTAS.jpg",                          // underscore MRV_ (não espaço)
            "img/INT_PALMEIRA SERENA_SALA COZINHA_2026.02.27.jpg",
            "img/INT_PALMEIRA SERENA_QUARTO MAIOR_2026.02.27.jpg",
            "img/INT_PALMEIRA SERENA_QUARTO MENOR_2026.02.27.jpg",
            "img/INT_PALMEIRA SERENA_VARANDA_2026.02.27.jpg",
            "img/INT_PALMEIRA SERENA_PRIVATIVA_2026.02.27.jpg"
        ],
        descricao: "Apartamentos bem distribuídos com 2 quartos, sala, cozinha e banheiro. Escolha a planta ideal para o seu estilo de vida, com opções de unidades com ou sem varanda, área privativa e vagas de garagem para carro ou moto. Conceito moderno de moradia que integra uma infraestrutura de lazer.",
        diferenciais: ["Dois quartos/sala/cozinha/banheiro","Opções com ou sem Varanda","Opções com ou sem área privada","Opções de garagem para carro ou moto"]
    },
    {
        id: 4,
        nome: "Palmeira Solare",
        status: "À Venda",
        statusCode: "À Venda",
        badgeColor: "#06d2d9",
        bairro: "Quadra 207 Norte",
        regiao: "norte",
        quartos: 2,
        vagas: "Até 2",
        area: "Alto Padrão",
        mapsUrl: "https://maps.app.goo.gl/RJTcLszhJKUgpqFz6",
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
        descricao: "Apartamentos bem distribuídos com 2 quartos, sala, cozinha e banheiro. Escolha a planta ideal para o seu estilo de vida, com opções de unidades com ou sem varanda, área privativa e vagas de garagem para carro ou moto. O ápice da conveniência urbana.",
        diferenciais: ["Dois quartos/sala/cozinha/banheiro","Opções com ou sem Varanda","Opções com ou sem área privada","Opções de garagem para carro ou moto"]
    },
    {
        id: 5,
        nome: "Palmeira Boreal",
        status: "Sucesso de Venda",
        statusCode: "Sucesso de Venda",
        badgeColor: "#DAA520",
        bairro: "Ao lado do Shopping Capim Dourado",
        regiao: "sul",
        quartos: 2,
        vagas: "Até 2",
        area: "Alto Padrão",
        mapsUrl: "https://maps.app.goo.gl/uhxnnNcXJ5vR3UQL7",
        imagens: [
            "img/RESIDENCIAL PALMEIRA BOREAL_PPC_GUARITA E FACHADA_20240513 (1).jpg",
            "img/RESIDENCIAL PALMEIRA BOREAL_PPC_QUARTO MAIOR_20240513.jpg",
            "img/RESIDENCIAL PALMEIRA BOREAL_PPC_SALA COZINHA_20240513.jpg",
            "img/RESIDENCIAL PALMEIRA BOREAL_PPC_VARANDA_20240513.jpg",
            "img/RESIDENCIAL PALMEIRA BOREAL_PPC_CHURRASQUEIRA PLAY_20240513.jpg",
            "img/RESIDENCIAL PALMEIRA BOREAL_PPC_PISCINA 01_20240513 (1).jpg",  // 01 (não 02)
            "img/RESIDENCIAL PALMEIRA BOREAL_PPC_PISCINA 02_20240513.jpg"
        ],
        descricao: "Apartamentos bem distribuídos com 2 quartos, sala, cozinha e banheiro. Escolha a planta ideal para o seu estilo de vida, com opções de unidades com ou sem varanda, área privativa e vagas de garagem para carro ou moto. O ápice da conveniência urbana.",
        diferenciais: ["Dois quartos/sala/cozinha/banheiro","Opções com ou sem Varanda","Opções com ou sem área privada","Opções de garagem para carro ou moto"]
    }
];

// ─────────────────────────────────────────────
// DATASET DE DEPOIMENTOS
// ─────────────────────────────────────────────
const depoimentos = [
    {
        nome: "Ricardo Cavalcante",
        cargo: "Investidor Imobiliário",
        texto: "O atendimento consultivo superou todas as expectativas. A transparência na apresentação das plantas e a dedicação do Neto foram o diferencial para fecharmos o negócio.",
        img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&auto=format&fit=crop&q=80"
    },
    {
        nome: "Mariana Fontes",
        cargo: "Investidora — Orla 14",
        texto: "O Neto superou todas as expectativas. Desde a primeira reunião até o suporte pós-venda na entrega das chaves do Residencial Palma, o processo foi impecável.",
        img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100"
    }
];

// ─────────────────────────────────────────────
// HELPER: link WhatsApp
// ─────────────────────────────────────────────
function buildWhatsAppLink(nomeEmpreendimento) {
    const msg = encodeURIComponent(
        `Olá Neto! Tenho interesse no *${nomeEmpreendimento}* e gostaria de mais informações. Pode me atender?`
    );
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
}

// ─────────────────────────────────────────────
// LIGHTBOX GLOBAL
// ─────────────────────────────────────────────
function initLightbox() {
    const style = document.createElement("style");
    style.textContent = `
        #lightbox-overlay {
            display:none; position:fixed; inset:0;
            background:rgba(0,0,0,.92); z-index:9999;
            align-items:center; justify-content:center;
            flex-direction:column; padding:0;
        }
        #lightbox-overlay.active { display:flex; }
        #lightbox-img-wrap {
            position:relative; max-width:92vw; max-height:80vh;
            display:flex; align-items:center; justify-content:center;
        }
        #lightbox-img {
            max-width:92vw; max-height:78vh; border-radius:10px;
            object-fit:contain; box-shadow:0 8px 48px rgba(0,0,0,.7);
            user-select:none; transition:opacity .25s;
        }
        #lightbox-img.fading { opacity:0; }
        .lb-arrow {
            position:absolute; top:50%; transform:translateY(-50%);
            background:rgba(255,255,255,.12); border:1.5px solid rgba(255,255,255,.3);
            color:#fff; width:48px; height:48px; border-radius:50%;
            display:flex; align-items:center; justify-content:center;
            font-size:1.2rem; cursor:pointer;
            transition:background .2s, transform .2s;
            backdrop-filter:blur(4px); z-index:2;
        }
        .lb-arrow:hover { background:rgba(255,255,255,.28); transform:translateY(-50%) scale(1.1); }
        .lb-arrow-prev { left:-64px; }
        .lb-arrow-next { right:-64px; }
        @media(max-width:640px){
            .lb-arrow-prev { left:-44px; }
            .lb-arrow-next { right:-44px; }
            .lb-arrow { width:38px; height:38px; font-size:1rem; }
        }
        #lightbox-close {
            position:fixed; top:18px; right:22px;
            background:rgba(255,255,255,.12); border:1.5px solid rgba(255,255,255,.3);
            color:#fff; width:42px; height:42px; border-radius:50%;
            display:flex; align-items:center; justify-content:center;
            font-size:1.15rem; cursor:pointer; transition:background .2s;
            backdrop-filter:blur(4px); z-index:10001;
        }
        #lightbox-close:hover { background:rgba(255,255,255,.28); }
        #lightbox-counter {
            margin-top:16px; color:rgba(255,255,255,.55);
            font-size:.85rem; letter-spacing:.05em;
        }
        #lightbox-thumbs {
            display:flex; gap:8px; margin-top:14px;
            overflow-x:auto; max-width:92vw; padding-bottom:4px;
            scrollbar-width:thin; scrollbar-color:rgba(255,255,255,.2) transparent;
        }
        .lb-thumb {
            flex-shrink:0; width:56px; height:40px; border-radius:5px;
            object-fit:cover; opacity:.45; cursor:pointer;
            border:2px solid transparent; transition:opacity .2s, border-color .2s;
        }
        .lb-thumb.active, .lb-thumb:hover { opacity:1; border-color:rgba(255,255,255,.7); }

        /* Setas Swiper */
        .swiper-button-next, .swiper-button-prev {
            width:36px !important; height:36px !important;
            background:rgba(255,255,255,.92) !important;
            border-radius:50% !important;
            box-shadow:0 2px 10px rgba(0,0,0,.25) !important;
            transition:background .2s, transform .2s !important;
        }
        .swiper-button-next:hover, .swiper-button-prev:hover {
            background:#b89047 !important; transform:scale(1.1) !important;
        }
        .swiper-button-next::after, .swiper-button-prev::after {
            font-size:.8rem !important; font-weight:800 !important;
            color:#0b192c !important; transition:color .2s !important;
        }
        .swiper-button-next:hover::after, .swiper-button-prev:hover::after { color:#fff !important; }

        .property-image-wrapper img,
        .property-image-wrapper .swiper-slide img { cursor:zoom-in; }

        /* Botões dos cards */
        .card-actions {
            display:grid; grid-template-columns:1fr auto;
            gap:10px; margin-top:16px;
        }
        .btn-whatsapp-card {
            display:inline-flex; align-items:center; justify-content:center;
            gap:8px; padding:13px 18px; background:#25d366; color:#fff;
            font-size:.88rem; font-weight:600; border-radius:10px; border:none;
            cursor:pointer; text-decoration:none;
            transition:background .2s, transform .2s, box-shadow .2s; white-space:nowrap;
        }
        .btn-whatsapp-card:hover {
            background:#1ebe5a; transform:translateY(-2px);
            box-shadow:0 6px 20px rgba(37,211,102,.3);
        }
        .btn-whatsapp-card i { font-size:1rem; }
        .btn-maps-card {
            display:inline-flex; align-items:center; justify-content:center;
            gap:7px; padding:13px 16px; background:transparent;
            color:var(--primary,#0b192c); font-size:.85rem; font-weight:600;
            border-radius:10px; border:1.5px solid var(--border,#e2e8f0);
            cursor:pointer; text-decoration:none;
            transition:background .2s, border-color .2s, transform .2s;
            white-space:nowrap; flex-shrink:0;
        }
        .btn-maps-card:hover {
            background:var(--bg-light,#f8fafc);
            border-color:var(--primary,#0b192c); transform:translateY(-2px);
        }
        .btn-maps-card i { font-size:.9rem; color:#ea4335; }

        /* Estilos extras do HTML novo */
        .hero-ctas { display:flex; gap:14px; margin-top:32px; flex-wrap:wrap; }
        .btn-outline {
            display:inline-flex; align-items:center; justify-content:center;
            gap:10px; padding:15px 30px; font-size:.92rem; font-weight:600;
            border-radius:10px; border:1.5px solid rgba(255,255,255,.45);
            color:#fff; background:transparent; cursor:pointer;
            transition:all .35s cubic-bezier(.16,1,.3,1); white-space:nowrap;
            text-decoration:none;
        }
        .btn-outline:hover {
            background:rgba(255,255,255,.1); border-color:rgba(255,255,255,.8);
            transform:translateY(-2px);
        }
        .btn-ghost {
            display:inline-flex; align-items:center; justify-content:center;
            gap:10px; padding:13px 24px; font-size:.9rem; font-weight:600;
            border-radius:10px; border:1.5px solid var(--border,#e2e8f0);
            color:var(--primary,#0b192c); background:transparent; cursor:pointer;
            transition:all .2s ease; white-space:nowrap; text-decoration:none;
        }
        .btn-ghost:hover { background:var(--bg-light,#f8fafc); border-color:var(--primary,#0b192c); transform:translateY(-2px); }
        .about-ctas { display:flex; gap:14px; margin-top:32px; flex-wrap:wrap; }
        .btn-submit { width:100%; justify-content:center; margin-top:20px; padding:16px; font-size:1rem; }
        .form-privacy { text-align:center; font-size:.78rem; color:var(--text-faint,#94a3b8); margin-top:14px; }
        .form-privacy i { margin-right:4px; }
        .testimonials-header { text-align:center; max-width:560px; margin-left:auto; margin-right:auto; }
        .testimonials-header .subtitle { justify-content:center; }
        .contact-header { text-align:center; max-width:580px; margin-left:auto; margin-right:auto; }
        .contact-header .subtitle { justify-content:center; }
        .contact-grid {
            display:grid; grid-template-columns:1fr; gap:48px; margin-top:0;
        }
        @media(min-width:768px){ .contact-grid { grid-template-columns:1.2fr 1fr; } }
        .form-grid { display:grid; grid-template-columns:1fr; gap:14px; }
        @media(min-width:640px){ .form-grid { grid-template-columns:1fr 1fr; } .form-grid .full-width { grid-column:1/-1; } }
        .form-group { display:flex; flex-direction:column; gap:6px; }
        .form-group label { font-size:.78rem; font-weight:600; letter-spacing:.06em; text-transform:uppercase; color:var(--text-dark,#0b192c); }
        .form-group input, .form-group select, .form-group textarea {
            padding:12px 16px; border:1.5px solid var(--border,#e2e8f0);
            border-radius:10px; font-size:.92rem; color:var(--text-dark,#0b192c);
            background:var(--bg-light,#f8fafc); transition:border-color .2s, box-shadow .2s;
            outline:none; font-family:inherit;
        }
        .form-group input:focus, .form-group select:focus, .form-group textarea:focus {
            border-color:#b89047; box-shadow:0 0 0 3px rgba(184,144,71,.12);
            background:#fff;
        }
        .form-group.invalid input, .form-group.invalid select {
            border-color:#ef4444; box-shadow:0 0 0 3px rgba(239,68,68,.1);
        }
        .contact-info { padding:36px; background:var(--bg-light,#f8fafc); border-radius:16px; border:1px solid var(--border,#e2e8f0); }
        .contact-info h3 { font-size:1.2rem; color:var(--primary,#0b192c); margin-bottom:12px; font-weight:700; }
        .contact-info > p { font-size:.9rem; color:var(--text-muted,#64748b); margin-bottom:28px; line-height:1.6; }
        .contact-channels { display:flex; flex-direction:column; gap:12px; margin-bottom:28px; }
        .contact-channel-link {
            display:flex; align-items:center; gap:14px; padding:14px 16px;
            background:#fff; border-radius:10px; border:1px solid var(--border,#e2e8f0);
            text-decoration:none; transition:box-shadow .2s, transform .2s;
        }
        .contact-channel-link:hover { box-shadow:0 4px 16px rgba(11,25,44,.08); transform:translateY(-2px); }
        .channel-icon {
            width:40px; height:40px; border-radius:10px;
            display:flex; align-items:center; justify-content:center;
            font-size:1.2rem; flex-shrink:0; color:#fff;
        }
        .channel-wpp { background:#25d366; }
        .channel-ig { background:linear-gradient(135deg,#f58529,#dd2a7b,#8134af); }
        .channel-text { flex:1; display:flex; flex-direction:column; }
        .channel-text strong { font-size:.9rem; font-weight:600; color:var(--primary,#0b192c); }
        .channel-text small { font-size:.78rem; color:var(--text-muted,#64748b); }
        .channel-arrow { font-size:.75rem; color:var(--text-faint,#94a3b8); }
        .contact-badges { display:flex; flex-wrap:wrap; gap:8px; }
        .badge {
            display:inline-flex; align-items:center; gap:6px;
            padding:6px 12px; background:#fff; border-radius:20px;
            border:1px solid var(--border,#e2e8f0); font-size:.75rem;
            font-weight:600; color:var(--text-muted,#64748b);
        }
        .badge i { color:#b89047; }
        .footer-socials { display:flex; gap:14px; margin-top:18px; }
        .footer-socials a { color:#94a3b8; font-size:1.1rem; transition:color .2s; }
        .footer-socials a:hover { color:#b89047; }
        .filter-hint-new i { margin-right:4px; opacity:.7; }
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
    const lbImg    = overlay.querySelector("#lightbox-img");
    const counter  = overlay.querySelector("#lightbox-counter");
    const thumbs   = overlay.querySelector("#lightbox-thumbs");
    const btnClose = overlay.querySelector("#lightbox-close");
    const btnPrev  = overlay.querySelector(".lb-arrow-prev");
    const btnNext  = overlay.querySelector(".lb-arrow-next");

    function setImage(index) {
        _idx = (index + _imgs.length) % _imgs.length;
        lbImg.classList.add("fading");
        setTimeout(() => {
            lbImg.src = encodeImgPath(_imgs[_idx]);
            lbImg.classList.remove("fading");
        }, 200);
        counter.textContent = `${_idx + 1} / ${_imgs.length}`;
        thumbs.querySelectorAll(".lb-thumb").forEach((t, i) => t.classList.toggle("active", i === _idx));
        const activeThumb = thumbs.querySelector(".lb-thumb.active");
        if (activeThumb) activeThumb.scrollIntoView({ inline: "center", behavior: "smooth" });
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

    window.openLightbox = function(imagens, indexInicial = 0) {
        _imgs = imagens;
        buildThumbs();
        setImage(indexInicial);
        overlay.classList.add("active");
        document.body.style.overflow = "hidden";
    };

    btnPrev.addEventListener("click", () => setImage(_idx - 1));
    btnNext.addEventListener("click", () => setImage(_idx + 1));
    btnClose.addEventListener("click", closeLightbox);
    overlay.addEventListener("click", (e) => { if (e.target === overlay) closeLightbox(); });
    document.addEventListener("keydown", (e) => {
        if (!overlay.classList.contains("active")) return;
        if (e.key === "ArrowRight") setImage(_idx + 1);
        if (e.key === "ArrowLeft")  setImage(_idx - 1);
        if (e.key === "Escape")     closeLightbox();
    });

    function closeLightbox() {
        overlay.classList.remove("active");
        document.body.style.overflow = "";
        lbImg.src = "";
        thumbs.innerHTML = "";
    }
}

// ─────────────────────────────────────────────
// FALLBACK: imagem quebrada
// ─────────────────────────────────────────────
function handleImageError(imgEl, altText) {
    // Evita loop de error
    imgEl.onerror = null;
    imgEl.style.display = "none";
    const placeholder = document.createElement("div");
    placeholder.style.cssText = `
        width:100%; height:260px;
        background:linear-gradient(135deg,#e8e8e8 0%,#d0d0d0 100%);
        display:flex; flex-direction:column;
        align-items:center; justify-content:center;
        color:#999; font-size:.85rem; gap:8px;
    `;
    placeholder.innerHTML = `<i class="fa-solid fa-image" style="font-size:2rem;opacity:.4;"></i><span>${altText || "Imagem indisponível"}</span>`;
    if (imgEl.parentNode) imgEl.parentNode.insertBefore(placeholder, imgEl);
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
    initFormValidation();
});

// ─────────────────────────────────────────────
// HEADER STICKY + MENU MOBILE
// ─────────────────────────────────────────────
function initHeader() {
    const header = document.getElementById("header");
    if (header) {
        window.addEventListener("scroll", () => {
            header.classList.toggle("sticky", window.scrollY > 40);
        });
    }
    const toggle = document.querySelector(".mobile-menu-toggle");
    const nav    = document.querySelector(".nav-menu");
    if (toggle && nav) {
        toggle.addEventListener("click", () => {
            const isOpen = nav.classList.toggle("active");
            toggle.setAttribute("aria-expanded", String(isOpen));
            toggle.innerHTML = isOpen
                ? '<i class="fa-solid fa-xmark"></i>'
                : '<i class="fa-solid fa-bars"></i>';
        });
        nav.querySelectorAll("ul a").forEach(link => {
            link.addEventListener("click", () => {
                nav.classList.remove("active");
                toggle.setAttribute("aria-expanded", "false");
                toggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
            });
        });
    }
}

// ─────────────────────────────────────────────
// SWIPER HTML — encode em cada src
// ─────────────────────────────────────────────
function getSwiperHTML(imagens, swiperClass, itemId) {
    if (!imagens || imagens.length === 0) {
        return `<div style="background:#e8e8e8;height:260px;display:flex;align-items:center;justify-content:center;color:#999;flex-direction:column;gap:8px;">
                    <i class="fa-solid fa-image" style="font-size:2rem;opacity:.4;"></i>
                    <span style="font-size:.85rem;">Sem imagem</span>
                </div>`;
    }

    if (imagens.length === 1) {
        const src = encodeImgPath(imagens[0]);
        return `
            <div style="position:relative;cursor:zoom-in;" data-lightbox-id="${itemId}" data-lightbox-index="0">
                <img src="${src}" alt=""
                    style="width:100%;height:260px;object-fit:cover;display:block;"
                    onerror="handleImageError(this,'Imagem indisponível')">
                <span style="position:absolute;bottom:10px;right:10px;background:rgba(0,0,0,.5);color:#fff;border-radius:20px;padding:3px 10px;font-size:.75rem;pointer-events:none;backdrop-filter:blur(2px);">
                    <i class='fa-solid fa-magnifying-glass-plus'></i> Ampliar
                </span>
            </div>`;
    }

    const slides = imagens.map((raw, idx) => {
        const src = encodeImgPath(raw);
        return `
        <div class="swiper-slide" style="cursor:zoom-in;" data-lightbox-id="${itemId}" data-lightbox-index="${idx}">
            <img src="${src}"
                style="width:100%;height:260px;object-fit:cover;display:block;"
                onerror="handleImageError(this,'Foto indisponível')"
                alt="Foto ${idx + 1}">
        </div>`;
    }).join('');

    return `
        <div class="swiper ${swiperClass}" style="width:100%;height:260px;">
            <div class="swiper-wrapper">${slides}</div>
            <div class="swiper-pagination"></div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
            <span style="position:absolute;bottom:10px;right:10px;z-index:10;background:rgba(0,0,0,.5);color:#fff;border-radius:20px;padding:3px 10px;font-size:.75rem;pointer-events:none;backdrop-filter:blur(2px);">
                <i class='fa-solid fa-images'></i> ${imagens.length} fotos
            </span>
        </div>`;
}

// ─────────────────────────────────────────────
// RENDERIZAR CARDS
// ─────────────────────────────────────────────
function renderCards(dados) {
    const container = document.getElementById("properties-container") || document.getElementById("lista-empreendimentos");
    if (!container) return;
    container.innerHTML = "";

    if (dados.length === 0) {
        container.innerHTML = `
            <p class="no-results" style="grid-column:1/-1;text-align:center;padding:60px 20px;color:var(--text-muted,#64748b);font-weight:500;font-size:1.1rem;">
                Nenhum empreendimento corresponde aos filtros selecionados.
            </p>`;
        return;
    }

    dados.forEach((item) => {
        const card        = document.createElement("article");
        card.className    = "property-card";
        const swiperClass = `swiper-card-${item.id}`;

        const icons = ["fa-bed","fa-vector-square","fa-car","fa-check"];
        const featuresHTML = item.diferenciais.map((dif, i) =>
            `<li><i class="fa-solid ${icons[i] || 'fa-check'}"></i> ${dif}</li>`
        ).join('');

        const wppLink  = buildWhatsAppLink(item.nome);
        const mapsLink = item.mapsUrl
            || `https://www.google.com/maps/search/${encodeURIComponent(item.bairro + ', Palmas, TO')}`;

        card.innerHTML = `
            <div class="property-image-wrapper">
                ${getSwiperHTML(item.imagens, swiperClass, item.id)}
                <span class="property-tag" style="background-color:${item.badgeColor || 'var(--gold,#b89047)'}">
                    ${item.status}
                </span>
            </div>
            <div class="property-info">
                <span class="property-location">
                    <i class="fa-solid fa-map-pin"></i> ${item.bairro}
                </span>
                <h3>${item.nome}</h3>
                <p class="property-description">${item.descricao}</p>
                <ul class="property-features">${featuresHTML}</ul>
                <div class="card-actions">
                    <a href="${wppLink}" target="_blank" rel="noopener noreferrer"
                       class="btn-whatsapp-card"
                       aria-label="Falar sobre ${item.nome} no WhatsApp">
                        <i class="fa-brands fa-whatsapp" aria-hidden="true"></i>
                        Falar no WhatsApp
                    </a>
                    <a href="${mapsLink}" target="_blank" rel="noopener noreferrer"
                       class="btn-maps-card"
                       aria-label="Ver localização de ${item.nome} no Google Maps">
                        <i class="fa-solid fa-location-dot" aria-hidden="true"></i>
                        Ver local
                    </a>
                </div>
            </div>
        `;
        container.appendChild(card);

        if (item.imagens.length > 1) {
            setTimeout(() => {
                const swiperInstance = new Swiper(`.${swiperClass}`, {
                    loop: true,
                    pagination: { el: `.${swiperClass} .swiper-pagination`, clickable: true },
                    navigation: {
                        nextEl: `.${swiperClass} .swiper-button-next`,
                        prevEl: `.${swiperClass} .swiper-button-prev`
                    }
                });
                swiperInstance.on("slideChange", () => {
                    card._swiperRealIndex = swiperInstance.realIndex;
                });
                card._swiperInstance  = swiperInstance;
                card._swiperRealIndex = 0;
            }, 100);
        }
    });

    // Lightbox via delegação — ignora cliques em links
    container.addEventListener("click", (e) => {
        if (e.target.closest("a")) return;
        const trigger = e.target.closest("[data-lightbox-id]");
        if (!trigger) return;
        const id   = parseInt(trigger.dataset.lightboxId);
        const item = empreendimentos.find(em => em.id === id);
        if (!item) return;
        const cardEl = trigger.closest("article");
        const idx    = (cardEl && cardEl._swiperRealIndex !== undefined)
            ? cardEl._swiperRealIndex
            : parseInt(trigger.dataset.lightboxIndex || "0");
        window.openLightbox(item.imagens, idx);
    });
}

// ─────────────────────────────────────────────
// FILTROS
// ─────────────────────────────────────────────
function initFilters() {
    const filterStatus  = document.getElementById("filter-status");
    const filterBairro  = document.getElementById("filter-bairro");
    const filterQuartos = document.getElementById("filter-quartos");
    const btnSearch     = document.getElementById("btn-execute-filter");

    function aplicarFiltros(scrollToResults = false) {
        let filtrados = empreendimentos;

        if (filterStatus && filterStatus.value) {
            const busca = filterStatus.value.trim().toLowerCase();
            filtrados = filtrados.filter(i => {
                if (!i.statusCode) return false;
                const sc = i.statusCode.toLowerCase();
                // "Venda" do HTML captura tanto "Venda" quanto "À Venda" e "Sucesso de Venda"
                if (busca === "venda") return sc.includes("venda");
                return sc === busca;
            });
        }

        if (filterBairro && filterBairro.value) {
            const termo = filterBairro.value.toLowerCase().includes("sul") ? "sul" : "norte";
            filtrados = filtrados.filter(i => i.regiao && i.regiao.toLowerCase().includes(termo));
        }

        if (filterQuartos && filterQuartos.value) {
            const q = parseInt(filterQuartos.value);
            filtrados = filtrados.filter(i => i.quartos >= q);
        }

        renderCards(filtrados);

        if (scrollToResults) {
            const container = document.getElementById("properties-container");
            if (container) {
                setTimeout(() => container.scrollIntoView({ behavior: "smooth", block: "start" }), 150);
            }
        }
    }

    [filterStatus, filterBairro, filterQuartos].forEach(el => {
        if (el) el.addEventListener("change", () => aplicarFiltros(false));
    });
    if (btnSearch) btnSearch.addEventListener("click", (e) => { e.preventDefault(); aplicarFiltros(true); });
}

// ─────────────────────────────────────────────
// ANIMAÇÃO MÉTRICAS
// ─────────────────────────────────────────────
function initStatsAnimation() {
    const statsSection = document.getElementById("stats-section");
    const stats        = document.querySelectorAll(".stat-number");
    if (!statsSection || !stats.length) return;

    let animated = false;
    new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animated) {
                animated = true;
                stats.forEach(stat => {
                    const target = parseInt(stat.getAttribute("data-target"));
                    if (isNaN(target)) return;
                    let current = 0;
                    const inc = target / 40;
                    const tick = () => {
                        if (current < target) {
                            current += inc;
                            stat.innerText = Math.ceil(current);
                            setTimeout(tick, 25);
                        } else {
                            stat.innerText = target + (stat.getAttribute("data-target") === "100" ? "%" : "+");
                        }
                    };
                    tick();
                });
            }
        });
    }, { threshold: 0.15 }).observe(statsSection);
}

// ─────────────────────────────────────────────
// DEPOIMENTOS — carrossel com prev/next
// ─────────────────────────────────────────────
let currentTestimonial = 0;
function initTestimonials() {
    const nextBtn = document.getElementById("next-testimonial");
    const prevBtn = document.getElementById("prev-testimonial");
    const card    = document.querySelector(".testimonial-card");
    if (!nextBtn || !prevBtn || !card || !depoimentos.length) return;

    function updateTestimonial(index) {
        const t = depoimentos[index];
        card.style.opacity   = "0";
        card.style.transform = "translateY(8px)";
        setTimeout(() => {
            const textEl  = card.querySelector(".testimonial-text");
            const imgEl   = card.querySelector(".testimonial-user img");
            const nameEl  = card.querySelector(".testimonial-user h4");
            const cargoEl = card.querySelector(".testimonial-user span");
            if (textEl)  textEl.innerText = `"${t.texto.replace(/"/g, "")}"`;
            if (imgEl)   imgEl.src         = t.img;
            if (nameEl)  nameEl.innerText  = t.nome;
            if (cargoEl) cargoEl.innerText = t.cargo;
            card.style.opacity   = "1";
            card.style.transform = "translateY(0)";
        }, 200);
    }

    nextBtn.addEventListener("click", () => {
        currentTestimonial = (currentTestimonial + 1) % depoimentos.length;
        updateTestimonial(currentTestimonial);
    });
    prevBtn.addEventListener("click", () => {
        currentTestimonial = (currentTestimonial - 1 + depoimentos.length) % depoimentos.length;
        updateTestimonial(currentTestimonial);
    });
}

// ─────────────────────────────────────────────
// FORMULÁRIO DE LEADS
// ─────────────────────────────────────────────
function initFormValidation() {
    const form = document.getElementById("lead-form") || document.getElementById("contact-form");
    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let isValid = true;

        form.querySelectorAll("input[required], select[required]").forEach(input => {
            const group = input.parentElement;
            const bad   = !input.value.trim() || (input.type === "email" && !validateEmail(input.value));
            group.classList.toggle("invalid", bad);
            if (bad) isValid = false;
        });

        if (isValid) {
            const btn = form.querySelector("button[type='submit']");
            if (btn) { btn.textContent = "Enviando..."; btn.disabled = true; }

            setTimeout(() => {
                form.innerHTML = `
                    <div style="text-align:center;padding:48px 0;animation:fadeIn .4s ease forwards;">
                        <i class="fa-solid fa-circle-check" style="color:#10b981;font-size:3.5rem;margin-bottom:20px;display:block;"></i>
                        <h3 style="font-size:1.5rem;color:var(--text-dark,#0b192c);font-weight:700;">Atendimento Solicitado!</h3>
                        <p style="color:var(--text-muted,#64748b);margin-top:10px;font-size:.95rem;max-width:360px;margin-left:auto;margin-right:auto;">
                            Sua ficha foi gerada. O consultor fará contato exclusivo em instantes via WhatsApp ou ligação.
                        </p>
                        <a href="https://wa.me/${WHATSAPP_NUMBER}" target="_blank" rel="noopener noreferrer"
                           style="display:inline-flex;align-items:center;gap:8px;margin-top:24px;padding:13px 28px;background:#25d366;color:#fff;border-radius:10px;font-weight:600;font-size:.95rem;text-decoration:none;">
                            <i class="fa-brands fa-whatsapp"></i> Falar agora no WhatsApp
                        </a>
                    </div>`;
            }, 1200);
        }
    });

    form.querySelectorAll("input, select, textarea").forEach(input => {
        input.addEventListener("input", () => input.parentElement.classList.remove("invalid"));
    });
}

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}