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
        descricao: "Apartamentos bem distribuídos com 2 quartos, sala, cozinha e banheiro. Escolha a planta ideal para o seu estilo de vida, com opções de unidades com ou sem varanda, área privativa e vagas de garagem para carro ou moto. Uma excelente oportunidade de investimento patrimonial com plantas inteligentes.",
        diferenciais: ["Dois quartos/sala/cozinha/banheiro", "Opções com ou sem Varanda", "Opções com ou sem área privada", "Opções de garagem para carro ou moto"]
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
        descricao: "Apartamentos bem distribuídos com 2 quartos, sala, cozinha e banheiro. Escolha a planta ideal para o seu estilo de vida, com opções de unidades com ou sem varanda, área privativa e vagas de garagem para carro ou moto. Localização estratégica na região norte.",
        diferenciais: ["Dois quartos/sala/cozinha/banheiro", "Opções com ou sem Varanda", "Opções com ou sem área privada", "Opções de garagem para carro ou moto"]
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
        descricao: "Apartamentos bem distribuídos com 2 quartos, sala, cozinha e banheiro. Escolha a planta ideal para o seu estilo de vida, com opções de unidades com ou sem varanda, área privativa e vagas de garagem para carro ou moto. Conceito moderno de moradia que integra uma infraestrutura de lazer.",
        diferenciais: ["Dois quartos/sala/cozinha/banheiro", "Opções com ou sem Varanda", "Opções com ou sem área privada", "Opções de garagem para carro ou moto"]
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
        descricao: "Apartamentos bem distribuídos com 2 quartos, sala, cozinha e banheiro. Escolha a planta ideal para o seu estilo de vida, com opções de unidades com ou sem varanda, área privativa e vagas de garagem para carro ou moto. O ápice da conveniência urbana.",
        diferenciais: ["Dois quartos/sala/cozinha/banheiro", "Opções com ou sem Varanda", "Opções com ou sem área privada", "Opções de garagem para carro ou moto"]
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
            "img/RESIDENCIAL PALMEIRA BOREAL_PPC_GUARITA E FACHADA_20240513 (1).jpg",
            "img/RESIDENCIAL PALMEIRA BOREAL_PPC_QUARTO MAIOR_20240513.jpg",
            "img/RESIDENCIAL PALMEIRA BOREAL_PPC_SALA COZINHA_20240513.jpg",
            "img/RESIDENCIAL PALMEIRA BOREAL_PPC_VARANDA_20240513.jpg",
            "img/RESIDENCIAL PALMEIRA BOREAL_PPC_CHURRASQUEIRA PLAY_20240513.jpg",
            "img/RESIDENCIAL PALMEIRA BOREAL_PPC_PISCINA 02_20240513.jpg",
        ],
        descricao: "Apartamentos bem distribuídos com 2 quartos, sala, cozinha e banheiro. Escolha a planta ideal para o seu estilo de vida, com opções de unidades com ou sem varanda, área privativa e vagas de garagem para carro ou moto. O ápice da conveniência urbana.",
        diferenciais: ["Dois quartos/sala/cozinha/banheiro", "Opções com ou sem Varanda", "Opções com ou sem área privada", "Opções de garagem para carro ou moto"]
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

    // Vincula eventos dos botões para rolar até o formulário
    container.querySelectorAll(".open-details").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            const contactSection = document.getElementById("contato") || document.getElementById("lead-form");
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
            }
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
