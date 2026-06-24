/* ==========================================================================
   ARRAYS DE DADOS DOS EMPREENDIMENTOS (REFERÊNCIA DE ALTO PADRÃO - PALMAS/TO)
   ========================================================================== */
const empreendimentos = [
    {
        id: 1,
        nome: "Residencial Palma",
        status: "Lançamento",
        statusCode: "lancamento",
        badgeColor: "#10b981", /* Verde Esmeralda Soft */
        bairro: "Orla 14",
        quartos: 3,
        vagas: 2,
        area: "120m² a 180m²",
        imagem: "img/RESIDENCIAL PALMEIRA BOREAL_PPC_GUARITA E FACHADA_20240513 (1).jpg",
        descricao: "O maior destaque da Orla 14. Apartamentos com vista panorâmica definitiva para o lago, acabamento de alto padrão e varanda gourmet integrada.",
        diferenciais: ["Piscina de borda infinita", "Automação residencial completa", "Portaria blindada com IA", "Gerador integral"]
    },
    {
        id: 2,
        nome: "Reserva dos Girassóis",
        status: "Últimas Unidades",
        statusCode: "ultimas",
        badgeColor: "#b89047", /* Dourado Corporativo */
        bairro: "Plano Diretor Sul",
        quartos: 2,
        vagas: 1,
        area: "78m²",
        imagem: "img/SQUAD-MRV ENGENHARIA-RESERVA DO GIRASSOL-IMG-GUAR TA-R03.jpg",
        descricao: "Oportunidade única de morar bem no coração corporativo de Palmas. Planta inteligente e perfeitamente otimizada para a vida moderna.",
        diferenciais: ["Coworking interno premium", "Rooftop Lounge", "Vaga pronta para carro elétrico"]
    },
    {
        id: 3,
        nome: "Palmeira Serene",
        status: "Exclusivo",
        statusCode: "venda",
        badgeColor: "#d97706", /* Âmbar Sofisticado */
        bairro: "Jardim Europa",
        quartos: 4,
        vagas: 3,
        area: "210m²",
        imagem: "img/PPC_PALMEIRA SERENA_GUARITA_2026.03.03.jpg",
        descricao: "Verdadeiras mansões suspensas em área nobre. Conforto térmico de última geração adaptado perfeitamente ao clima da capital.",
        diferenciais: ["Elevador privativo biométrico", "4 Suítes plenas", "Climatização central dutada"]
    },
    {
        id: 4,
        nome: "Palmeira Solare",
        status: "À Venda",
        statusCode: "venda",
        badgeColor: "#3b82f6", /* Azul Soft */
        bairro: "Orla 14",
        quartos: 3,
        vagas: 2,
        area: "95m²",
        imagem: "img/PALMEIRA SOLARE_PPC_FACHADA_01.09.2025.jpg",
        descricao: "Arquitetura biofílica perfeitamente integrada à paisagem urbana. Iluminação natural abundante e áreas comuns com assinaturas renomadas.",
        diferenciais: ["Energia solar nas áreas comuns", "Academia de última geração", "Pet Place com spa dedicado"]
    },
    {
        id: 5,
        nome: "Palmeira Boreal",
        status: "Sucesso de Vendas",
        statusCode: "sucesso",
        badgeColor: "#0f1a24", /* Azul Marinho Profundo */
        bairro: "Plano Diretor Sul",
        quartos: 4,
        vagas: 4,
        area: "340m²",
        imagem: "img/RESIDENCIAL PALMEIRA BOREAL_PPC_GUARITA E FACHADA_20240513 (1).jpg", // Usando como referência premium disponível
        descricao: "O ápice absoluto do luxo, sofisticação e da privacidade. Um marco arquitetônico com pouquíssimas unidades remanescentes.",
        diferenciais: ["Heliponto homologado próximo", "Piscina privativa na varanda", "Adega climatizada no subsolo"]
    }
];

// DEPOIMENTOS (PROVA SOCIAL PREMIUM)
const depoimentos = [
    {
        nome: "Mariana Fontes",
        cargo: "Investidora — Orla 14",
        texto: '"A assessoria superou todas as expectativas. Desde as primeiras reuniões corporativas até o suporte estratégico na escolha das melhores plantas, o processo foi impecável."',
        img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100"
    },
    {
        nome: "Dr. Carlos Eduardo",
        cargo: "Médico — Palmeira Boreal",
        texto: '"Atendimento com total discrição e nível premium. Atua verdadeiramente como um consultor estratégico focado na expansão e proteção do patrimônio imobiliário de alto padrão."',
        img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100"
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

// STICKY HEADER & MENU LATERAL MOBILE (DRAWER COM SUPORTE A REDES SOCIAIS)
function initHeader() {
    const header = document.getElementById("header");
    if (header) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 40) {
                header.classList.add("sticky");
            } else {
                header.classList.remove("sticky");
            }
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

        // Fecha o menu ao clicar em qualquer link de navegação interno
        nav.querySelectorAll("ul a").forEach(link => {
            link.addEventListener("click", () => {
                nav.classList.remove("active");
                toggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
            });
        });
    }
}

// RENDERIZAR CARDS (ESTILO DE SELEÇÃO EXCLUSIVA - SEM EXIBIÇÃO DE PREÇOS)
function renderCards(dados) {
    const container = document.getElementById("properties-container");
    if (!container) return;
    
    container.innerHTML = "";

    if (dados.length === 0) {
        container.innerHTML = `<p class="no-results" style="grid-column: 1/-1; text-align: center; padding: 60px 20px; color: var(--text-muted); font-weight: 500; font-size: 1.1rem;">Nenhum empreendimento corresponde aos filtros selecionados.</p>`;
        return;
    }

    dados.forEach((item) => {
        const card = document.createElement("div");
        card.className = "property-card";
        
        card.innerHTML = `
            <div class="property-media">
                <span class="property-badge" style="background-color: ${item.badgeColor}">${item.status}</span>
                <div class="property-slider">
                    <img src="${item.imagem}" alt="${item.nome}" loading="lazy">
                </div>
            </div>
            <div class="property-info">
                <div class="property-location">
                    <i class="fa-solid fa-location-dot icon-gold"></i> ${item.bairro}, Palmas - TO
                </div>
                <h3>${item.nome}</h3>
                <p class="property-desc">${item.descricao}</p>
                <div class="property-features">
                    <span><i class="fa-solid fa-ruler-combined"></i> ${item.area}</span>
                    <span><i class="fa-solid fa-bed"></i> ${item.quartos} Qts</span>
                    <span><i class="fa-solid fa-car"></i> ${item.vagas} Vag</span>
                </div>
                <button class="btn btn-primary-outline btn-full open-details" data-id="${item.id}">
                    Contatar Consultor <i class="fa-solid fa-arrow-right" style="font-size: 0.8rem; margin-left: 4px;"></i>
                </button>
            </div>
        `;
        container.appendChild(card);
    });

    // Gatilhos do Modal Dinâmico Premium
    document.querySelectorAll(".open-details").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const button = e.target.closest(".open-details");
            const id = parseInt(button.getAttribute("data-id"));
            openModalDetails(id);
        });
    });
}

// FILTROS REAL-TIME ATUALIZADOS
function initFilters() {
    const filterStatus = document.getElementById("filter-status");
    const filterBairro = document.getElementById("filter-bairro");
    const filterQuartos = document.getElementById("filter-quartos");

    if (!filterStatus || !filterBairro || !filterQuartos) return;

    function aplicarFiltros() {
        let filtrados = empreendimentos;

        if (filterStatus.value) {
            filtrados = filtrados.filter(item => item.statusCode === filterStatus.value);
        }
        if (filterBairro.value) {
            filtrados = filtrados.filter(item => item.bairro === filterBairro.value);
        }
        if (filterQuartos.value) {
            const q = parseInt(filterQuartos.value);
            filtrados = filtrados.filter(item => item.quartos >= q);
        }

        renderCards(filtrados);
    }

    [filterStatus, filterBairro, filterQuartos].forEach(el => {
        el.addEventListener("change", aplicarFiltros);
    });
}

// ANIMAÇÃO DE MÉTRICAS (INTERSECTION OBSERVER)
function initStatsAnimation() {
    const statsSection = document.getElementById("stats-section");
    const stats = document.querySelectorAll(".stat-number");
    if (!statsSection || stats.length === 0) return;

    let animated = false;

    const startAnimation = () => {
        stats.forEach(stat => {
            const target = parseInt(stat.getAttribute("data-target"));
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

// CARROSSEL SUAVE DE DEPOIMENTOS
let currentTestimonial = 0;
function initTestimonials() {
    const nextBtn = document.getElementById("next-testimonial");
    const prevBtn = document.getElementById("prev-testimonial");
    const card = document.querySelector(".testimonial-card");

    if (!nextBtn || !prevBtn || !card) return;

    function updateTestimonial(index) {
        const t = depoimentos[index];
        card.style.opacity = 0;
        card.style.transform = "translateY(8px)";
        
        setTimeout(() => {
            card.querySelector(".testimonial-text").innerText = t.texto;
            card.querySelector(".testimonial-user img").src = t.img;
            card.querySelector(".testimonial-user h4").innerText = t.nome;
            card.querySelector(".testimonial-user span").innerText = t.cargo;
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

// CAPTURA E VALIDAÇÃO DE LEADS DE ALTO PADRÃO
function initFormValidation() {
    const form = document.getElementById("contact-form");
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
            btn.innerText = "Enviando Solicitação Privada...";
            btn.disabled = true;

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

// CONTROLE DO MODAL CORPORATIVO (SEM PREÇOS - FOCO TOTAL NA SOLICITAÇÃO)
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

    let diferenciaisHTML = "";
    item.diferenciais.forEach(dif => {
        diferenciaisHTML += `<li style="display: flex; align-items: center; gap: 10px; font-size: 0.95rem; color: var(--text-dark); font-weight:500;"><i class="fa-solid fa-check" style="color:var(--gold); font-size: 0.95rem;"></i> ${dif}</li>`;
    });

    body.innerHTML = `
        <div class="modal-grid">
            <div class="modal-gallery">
                <img src="${item.imagem}" alt="${item.nome}" style="width:100%; border-radius:var(--radius-md); object-fit:cover; height:280px; margin-bottom:12px;">
                <div style="background:var(--bg-light); padding: 16px; display:flex; align-items:center; justify-content:center; color:var(--text-muted); border-radius:var(--radius-md); font-size: 0.85rem; border: 1px dashed var(--primary-blue-light); text-align:center;">
                    <i class="fa-solid fa-map-location-dot" style="font-size:1.2rem; margin-right:8px; color: var(--gold);"></i> Plantas de Prerrogativa Corporativa sob Consulta.
                </div>
            </div>
            <div class="modal-info" style="display: flex; flex-direction: column;">
                <span style="color:${item.badgeColor}; font-weight:700; text-transform:uppercase; font-size:0.75rem; letter-spacing: 0.5px;">${item.status}</span>
                <h2 style="font-size:1.8rem; margin: 4px 0 12px 0; color:var(--text-dark); line-height: 1.2; font-weight:700;">${item.nome}</h2>
                <p style="color:var(--text-muted); margin-bottom:20px; font-size: 0.95rem; line-height: 1.5;">${item.descricao}</p>
                
                <h4 style="text-transform: uppercase; font-size: 0.8rem; letter-spacing: 0.5px; color: var(--text-muted); margin-bottom: 10px; font-weight:700;">Diferenciais do Empreendimento</h4>
                <ul style="margin-bottom: 24px; display:flex; flex-direction:column; gap:10px;">
                    ${diferenciaisHTML}
                </ul>

                <div class="modal-meta-grid" style="margin-bottom: 24px; display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px;">
                    <div style="font-size: 0.85rem; color: var(--text-dark);"><strong>Configuração de Área:</strong><br><span style="color:var(--text-muted);">${item.area}</span></div>
                    <div style="font-size: 0.85rem; color: var(--text-dark);"><strong>Região Climatizada:</strong><br><span style="color:var(--text-muted);">${item.bairro}</span></div>
                </div>

                <div style="display:flex; flex-direction:column; gap:10px; margin-top: auto;">
                    <a href="https://wa.me/5563999999999?text=Olá,%20gostaria%20de%20receber%20a%20ficha%20técnica%20e%20disponibilidade%20do%20${encodeURIComponent(item.nome)}" target="_blank" class="btn btn-primary" style="text-align: center; justify-content: center;">
                        <i class="fa-brands fa-whatsapp" style="margin-right: 6px;"></i> Simular Disponibilidade via WhatsApp
                    </a>
                    <button class="btn btn-primary-outline" id="modal-scroll-contact">Consultar Memorial Descritivo Completo</button>
                </div>
            </div>
        </div>
    `;

    document.getElementById("modal-scroll-contact").addEventListener("click", () => {
        fecharModal();
        setTimeout(() => {
            const contactSection = document.getElementById("contato");
            if (contactSection) contactSection.scrollIntoView({ behavior: "smooth" });
        }, 200);
    });

    modal.classList.add("active");
    document.body.style.overflow = "hidden";
}