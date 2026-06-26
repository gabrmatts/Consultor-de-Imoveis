const empreendimentos = [
    {
        id: 1,
        nome: "Reserva dos Girassóis",
        status: "Últimas Unidades",
        statusCode: "Últimas Unidades",
        badgeColor: "#b91010",
        bairro: "Quadra 1506 Sul",
        regiao: "sul",
        quartos: 2,
        vagas: "1 a 2",
        area: "Planta Inteligente",
        imagens: ["img/SQUAD-MRV ENGENHARIA-RESERVA DO GIRASSOL-IMG-GUARITA-R03.jpg"],
        descricao: "Uma excelente oportunidade de investimento patrimonial com plantas inteligentes.",
        diferenciais: ["2 Quartos (Suíte)", "Varanda Gourmet"]
    },
    {
        id: 2,
        nome: "Residencial Palma",
        status: "Lançamento",
        statusCode: "Lançamento",
        badgeColor: "#57e220",
        bairro: "Quadra 606 Norte",
        regiao: "norte",
        quartos: 2,
        vagas: 1,
        area: "Planta Otimizada",
        imagens: ["img/PPC_PALMA_GUARITA_2026.03.30.jpg"],
        descricao: "Localização estratégica na região norte.",
        diferenciais: ["2 Quartos Premium", "Sacada Privativa"]
    },
    {
        id: 3,
        nome: "Palmeira Serena",
        status: "Venda",
        statusCode: "Venda",
        badgeColor: "#06d2d9",
        bairro: "Quadra 1101 Sul",
        regiao: "sul",
        quartos: 2,
        vagas: "Privativa",
        area: "Conceito Moderno",
        imagens: ["img/PPC_PALMEIRA SERENA_GUARITA_2026.03.03.jpg"],
        descricao: "Conceito moderno de moradia que integra uma infraestrutura de lazer.",
        diferenciais: ["2 Quartos (plantas versáteis)", "Ampla Varanda Social"]
    },
    {
        id: 4,
        nome: "Palmeira Solare",
        status: "Venda",
        statusCode: "Venda",
        badgeColor: "#06d2d9",
        bairro: "Ao lado do Shopping Capim Dourado",
        regiao: "sul",
        quartos: 2,
        vagas: "Até 2",
        area: "Alto Padrão",
        imagens: ["img/PALMEIRA SOLARE_PPC_FACHADA_01.09.2025.jpg"],
        descricao: "O ápice da conveniência urbana.",
        diferenciais: ["2 Quartos (Suíte)", "Varanda com Churrasqueira"]
    },
    {
        id: 5,
        nome: "Palmeira Boreal",
        status: "Venda",
        statusCode: "Venda",
        badgeColor: "#06d2d9",
        bairro: "Ao lado do Shopping Capim Dourado",
        regiao: "sul",
        quartos: 2,
        vagas: "Até 2",
        area: "Alto Padrão",
        imagens: [
            "img/RESIDENCIAL PALMEIRA BOREAL_PPC_GUARITA E FACHADA_20240513 (1) (1).jpg",
            "img/RESIDENCIAL PALMEIRA BOREAL_PPC_GUARITA E FACHADA_20240513 (1).jpg"
        ],
        descricao: "O ápice da conveniência urbana.",
        diferenciais: ["2 Quartos (Suíte)", "Varanda com Churrasqueira"]
    }
];

// DATASET DE DEPOIMENTOS
const depoimentos = [
    {
        nome: "Ricardo Cavalcante",
        cargo: "Investidor Imobiliário",
        texto: "O atendimento consultivo superou todas as expectativas. A transparência na apresentação das plantas corporativas na Orla 14 foi o diferencial para fecharmos o negócio.",
        img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&auto=format&fit=crop&q=80"
    },
    {
        nome: "Mariana Fontes",
        cargo: "Investidora - Orla 14",
        texto: "O Neto superou todas as expectativas. Desde a primeira reunião até o suporte pós-venda na entrega das chaves do Residencial Palma, o processo foi impecável.",
        img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100"
    }
];

// EXECUÇÃO AO CARREGAR O DOM
document.addEventListener("DOMContentLoaded", () => {
    initHeader();
    renderCards(empreendimentos);
    initFilters();
    initStatsAnimation();
    initTestimonials();
    initFormValidation();
    initModal();
});

// STICKY HEADER & MENU LATERAL MOBILE
function initHeader() {
    const header = document.getElementById("header");
    if (header) {
        window.addEventListener("scroll", () => {
            header.classList.toggle("sticky", window.scrollY > 40);
        });
    }

    const toggle = document.querySelector(".mobile-menu-toggle");
    const nav = document.querySelector(".nav-menu");

    if (toggle && nav) {
        toggle.addEventListener("click", () => {
            nav.classList.toggle("active");
            toggle.innerHTML = nav.classList.contains("active")
                ? '<i class="fa-solid fa-xmark"></i>'
                : '<i class="fa-solid fa-bars"></i>';
        });

        nav.querySelectorAll("ul a").forEach(link => {
            link.addEventListener("click", () => {
                nav.classList.remove("active");
                toggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
            });
        });
    }
}

// GERA HTML DO SWIPER para cada card
function getSwiperHTML(imagens, swiperClass) {
    if (!imagens || imagens.length === 0) {
        return `<div style="background:#ddd; height:260px; display:flex; align-items:center; justify-content:center; color:#999;">Sem imagem</div>`;
    }

    // Se só tem 1 imagem, renderiza img simples (sem overhead do Swiper)
    if (imagens.length === 1) {
        return `<img src="${imagens[0]}" alt="" style="width:100%; height:260px; object-fit:cover; display:block;">`;
    }

    const slides = imagens.map(img => `
        <div class="swiper-slide">
            <img src="${img}" style="width:100%; height:260px; object-fit:cover; display:block;">
        </div>
    `).join('');

    return `
        <div class="swiper ${swiperClass}" style="width:100%; height:260px;">
            <div class="swiper-wrapper">${slides}</div>
            <div class="swiper-pagination"></div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
        </div>
    `;
}

// RENDERIZAR CARDS
function renderCards(dados) {
    const container = document.getElementById("properties-container") || document.getElementById("lista-empreendimentos");
    if (!container) return;

    container.innerHTML = "";

    if (dados.length === 0) {
        container.innerHTML = `<p class="no-results" style="grid-column: 1/-1; text-align: center; padding: 60px 20px; color: var(--text-muted); font-weight: 500; font-size: 1.1rem;">Nenhum empreendimento corresponde aos filtros selecionados.</p>`;
        return;
    }

    dados.forEach((item) => {
        const card = document.createElement("article");
        card.className = "property-card";

        const swiperClass = `swiper-card-${item.id}`;

        const featuresHTML = item.diferenciais.map((dif, index) => {
            let icon = "fa-check";
            if (index === 0) icon = "fa-bed";
            else if (index === 1) icon = "fa-vector-square";
            else if (index === 2) icon = "fa-car";
            return `<li><i class="fa-solid ${icon}"></i> ${dif}</li>`;
        }).join('');

        card.innerHTML = `
            <div class="property-image-wrapper">
                ${getSwiperHTML(item.imagens, swiperClass)}
                <span class="property-tag" style="background-color: ${item.badgeColor || 'var(--gold)'}">${item.status}</span>
            </div>
            <div class="property-info">
                <span class="property-location"><i class="fa-solid fa-map-pin"></i> ${item.bairro}</span>
                <h3>${item.nome}</h3>
                <p class="property-description">${item.descricao}</p>
                <ul class="property-features">
                    ${featuresHTML}
                </ul>
                <button class="btn btn-secondary-card open-details" data-id="${item.id}" style="width: 100%; text-align: center; margin-top: 15px;">
                    Solicitar Informações
                </button>
            </div>
        `;
        container.appendChild(card);

        // Inicia o Swiper apenas se tiver mais de 1 imagem
        if (item.imagens.length > 1) {
            setTimeout(() => {
                new Swiper(`.${swiperClass}`, {
                    loop: true,
                    pagination: { el: `.${swiperClass} .swiper-pagination`, clickable: true },
                    navigation: {
                        nextEl: `.${swiperClass} .swiper-button-next`,
                        prevEl: `.${swiperClass} .swiper-button-prev`
                    }
                });
            }, 100);
        }
    });

    // Vincula eventos dos botões
    container.querySelectorAll(".open-details").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const button = e.target.closest(".open-details");
            const id = parseInt(button.getAttribute("data-id"));
            openModalDetails(id);
        });
    });
}

// FILTROS REAL-TIME — corrigido para bater com os dados reais
function initFilters() {
    const filterStatus = document.getElementById("filter-status");
    const filterBairro = document.getElementById("filter-bairro");
    const filterQuartos = document.getElementById("filter-quartos");
    const btnSearch = document.getElementById("btn-execute-filter");

    function aplicarFiltros() {
        let filtrados = empreendimentos;

        if (filterStatus && filterStatus.value) {
            filtrados = filtrados.filter(item => item.statusCode === filterStatus.value);
        }

        // FIX: compara com o campo "regiao" em vez do texto do bairro
        if (filterBairro && filterBairro.value) {
            const regiaoSelecionada = filterBairro.value.toLowerCase().includes("sul") ? "sul" : "norte";
            filtrados = filtrados.filter(item => item.regiao === regiaoSelecionada);
        }

        if (filterQuartos && filterQuartos.value) {
            const q = parseInt(filterQuartos.value);
            filtrados = filtrados.filter(item => item.quartos >= q);
        }

        renderCards(filtrados);
    }

    [filterStatus, filterBairro, filterQuartos].forEach(el => {
        if (el) el.addEventListener("change", aplicarFiltros);
    });

    if (btnSearch) {
        btnSearch.addEventListener("click", (e) => {
            e.preventDefault();
            aplicarFiltros();
        });
    }
}

// ANIMAÇÃO DE MÉTRICAS
function initStatsAnimation() {
    const statsSection = document.getElementById("stats-section");
    const stats = document.querySelectorAll(".stat-number");
    if (!statsSection || stats.length === 0) return;

    let animated = false;

    const startAnimation = () => {
        stats.forEach(stat => {
            const target = parseInt(stat.getAttribute("data-target"));
            if (isNaN(target)) return;

            let current = 0;
            const increment = target / 40;

            const updateCounter = () => {
                if (current < target) {
                    current += increment;
                    stat.innerText = Math.ceil(current);
                    setTimeout(updateCounter, 25);
                } else {
                    stat.innerText = target + (stat.getAttribute("data-target") === "100" ? "%" : "+");
                }
            };
            updateCounter();
        });
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animated) {
                startAnimation();
                animated = true;
                observer.unobserve(statsSection);
            }
        });
    }, { threshold: 0.15 });

    observer.observe(statsSection);
}

// CARROSSEL DE DEPOIMENTOS
let currentTestimonial = 0;
function initTestimonials() {
    const nextBtn = document.getElementById("next-testimonial");
    const prevBtn = document.getElementById("prev-testimonial");
    const card = document.querySelector(".testimonial-card");

    if (!nextBtn || !prevBtn || !card || !depoimentos.length) return;

    function updateTestimonial(index) {
        const t = depoimentos[index];
        card.style.opacity = 0;
        card.style.transform = "translateY(8px)";

        setTimeout(() => {
            const textEl = card.querySelector(".testimonial-text");
            const imgEl = card.querySelector(".testimonial-user img");
            const nameEl = card.querySelector(".testimonial-user h4");
            const cargoEl = card.querySelector(".testimonial-user span");

            if (textEl) textEl.innerText = `"${t.texto.replace(/"/g, '')}"`;
            if (imgEl) imgEl.src = t.img;
            if (nameEl) nameEl.innerText = t.nome;
            if (cargoEl) cargoEl.innerText = t.cargo;

            card.style.opacity = 1;
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

// CAPTURA E VALIDAÇÃO DE LEADS
function initFormValidation() {
    const form = document.getElementById("lead-form") || document.getElementById("contact-form");
    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let isValid = true;

        const inputs = form.querySelectorAll("input[required], select[required]");

        inputs.forEach(input => {
            const group = input.parentElement;
            if (!input.value.trim()) {
                group.classList.add("invalid");
                isValid = false;
            } else if (input.type === "email" && !validateEmail(input.value)) {
                group.classList.add("invalid");
                isValid = false;
            } else {
                group.classList.remove("invalid");
            }
        });

        if (isValid) {
            const btn = form.querySelector("button[type='submit']");
            if (btn) {
                btn.innerText = "Enviando Solicitação Privada...";
                btn.disabled = true;
            }

            setTimeout(() => {
                form.innerHTML = `
                    <div class="success-box" style="text-align:center; padding: 40px 0; animation: fadeIn 0.4s ease forwards;">
                        <i class="fa-solid fa-circle-check" style="color:#10b981; font-size: 3.5rem; margin-bottom: 20px; display:block;"></i>
                        <h3 style="font-size: 1.6rem; color: var(--text-dark); font-weight:700;">Atendimento Solicitado</h3>
                        <p style="color: var(--text-muted); margin-top: 10px; font-size: 0.95rem; max-width: 360px; margin-left: auto; margin-right: auto;">Sua ficha de interesse foi gerada. O consultor responsável fará contato exclusivo em instantes via ligação ou WhatsApp.</p>
                    </div>
                `;
            }, 1200);
        }
    });

    form.querySelectorAll("input, select, textarea").forEach(input => {
        input.addEventListener("input", () => {
            input.parentElement.classList.remove("invalid");
        });
    });
}

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// CONTROLE DO MODAL
const modal = document.getElementById("premium-modal");
function initModal() {
    if (!modal) return;
    const closeBtn = document.querySelector(".modal-close");

    if (closeBtn) {
        closeBtn.addEventListener("click", () => fecharModal());
    }

    window.addEventListener("click", (e) => {
        if (e.target === modal) fecharModal();
    });

    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal.classList.contains("active")) fecharModal();
    });
}

function fecharModal() {
    if (!modal) return;
    modal.classList.remove("active");
    document.body.style.overflow = "";
}

function openModalDetails(id) {
    const item = empreendimentos.find(p => p.id === id);
    if (!item || !modal) return;

    const body = document.getElementById("modal-dynamic-body");
    if (!body) return;

    const diferenciaisHTML = item.diferenciais.map(dif => `
        <li style="display: flex; align-items: center; gap: 10px; font-size: 0.95rem; color: var(--text-dark, #111); font-weight:500; text-align: left;">
            <i class="fa-solid fa-check" style="color:var(--gold, #b89047); font-size: 0.95rem;"></i> ${dif}
        </li>
    `).join('');

    // Swiper no modal se tiver mais de 1 imagem
    const modalSwiperClass = "swiper-modal-gallery";
    const galeriaHTML = item.imagens.length > 1
        ? getSwiperHTML(item.imagens, modalSwiperClass)
        : `<img src="${item.imagens[0]}" alt="${item.nome}" style="width:100%; border-radius:var(--radius-md, 8px); object-fit:cover; height:280px; margin-bottom:12px;">`;

    body.innerHTML = `
        <div class="modal-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; text-align: left;">
            <div class="modal-gallery">
                <div style="border-radius:var(--radius-md, 8px); overflow:hidden; margin-bottom:12px;">
                    ${galeriaHTML}
                </div>
                <div style="background:var(--bg-light, #f9f9f9); padding: 16px; display:flex; align-items:center; justify-content:center; color:var(--text-muted, #666); border-radius:var(--radius-md, 8px); font-size: 0.85rem; border: 1px dashed #3b82f6; text-align:center;">
                    <i class="fa-solid fa-map-location-dot" style="font-size:1.2rem; margin-right:8px; color: var(--gold, #b89047);"></i> Plantas de Prerrogativa Corporativa sob Consulta.
                </div>
            </div>
            <div class="modal-info" style="display: flex; flex-direction: column; justify-content: center;">
                <span style="color:${item.badgeColor}; font-weight:700; text-transform:uppercase; font-size:0.75rem; letter-spacing: 0.5px;">${item.status}</span>
                <h2 style="font-size:1.8rem; margin: 4px 0 12px 0; color:var(--text-dark, #111); line-height: 1.2; font-weight:700;">${item.nome}</h2>
                <p style="color:var(--text-muted, #666); margin-bottom:20px; font-size: 0.95rem; line-height: 1.5;">${item.descricao}</p>

                <h4 style="text-transform: uppercase; font-size: 0.8rem; letter-spacing: 0.5px; color: var(--text-muted, #666); margin-bottom: 10px; font-weight:700;">Destaques da Unidade</h4>
                <ul style="margin-bottom: 24px; display:flex; flex-direction:column; gap:10px; list-style: none; padding: 0;">
                    ${diferenciaisHTML}
                </ul>

                <div class="modal-meta-grid" style="margin-bottom: 24px; display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px;">
                    <div style="font-size: 0.85rem; color: var(--text-dark, #111);"><strong>Configuração:</strong><br><span style="color:var(--text-muted, #666);">${item.area}</span></div>
                    <div style="font-size: 0.85rem; color: var(--text-dark, #111);"><strong>Região / Setor:</strong><br><span style="color:var(--text-muted, #666);">${item.bairro}</span></div>
                </div>

                <div style="display:flex; flex-direction:column; gap:10px; margin-top: auto;">
                    <a href="https://wa.me/5563999999999?text=Olá,%20gostaria%20de%20receber%20a%20ficha%20técnica%20e%20disponibilidade%20do%20${encodeURIComponent(item.nome)}" target="_blank" class="btn btn-primary" style="text-align: center; justify-content: center; display: inline-flex; align-items: center; background: #10b981; color: #fff; padding: 12px; border-radius: 6px; text-decoration: none; font-weight: 600;">
                        <i class="fa-brands fa-whatsapp" style="margin-right: 6px;"></i> Simular Disponibilidade via WhatsApp
                    </a>
                    <button class="btn btn-primary-outline" id="modal-scroll-contact" style="padding: 12px; border-radius: 6px; background: transparent; border: 1px solid #ccc; cursor: pointer;">Consultar Memorial Descritivo Completo</button>
                </div>
            </div>
        </div>
    `;

    // Inicia Swiper no modal se necessário
    if (item.imagens.length > 1) {
        setTimeout(() => {
            new Swiper(`.${modalSwiperClass}`, {
                loop: true,
                pagination: { el: `.${modalSwiperClass} .swiper-pagination`, clickable: true },
                navigation: {
                    nextEl: `.${modalSwiperClass} .swiper-button-next`,
                    prevEl: `.${modalSwiperClass} .swiper-button-prev`
                }
            });
        }, 100);
    }

    const scrollBtn = document.getElementById("modal-scroll-contact");
    if (scrollBtn) {
        scrollBtn.addEventListener("click", () => {
            fecharModal();
            setTimeout(() => {
                const contactSection = document.getElementById("contato") || document.getElementById("lead-form");
                if (contactSection) contactSection.scrollIntoView({ behavior: "smooth" });
            }, 200);
        });
    }

    modal.classList.add("active");
    document.body.style.overflow = "hidden";
}