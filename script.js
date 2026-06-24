const empreendimentos = [
    {
        id: 1,
        nome: "Reserva dos Girassóis",
        status: "Destaque",
        statusCode: "lancamento",
        badgeColor: "#10b981",
        bairro: "Quadra 1506 Sul",
        quartos: 2,
        vagas: "1 a 2",
        area: "Planta Inteligente",
        // Ajustado para o nome real do arquivo na sua pasta img
        imagem: "img/SQUAD-MRV ENGENHARIA-RESERVA DO GIRASSOL-IMG-GUARITA-R03.jpg",
        descricao: "Uma excelente oportunidade de investimento patrimonial com plantas inteligentes pensadas para o bem-estar e o conforto da sua família.",
        diferenciais: ["2 Quartos (sendo 1 Suíte)", "Varanda Gourmet Integrada", "1 a 2 Vagas de Garagem", "Opções de quintal privativo (Garden)"]
    },
    {
        id: 2,
        nome: "Residencial 606 Norte",
        status: "Exclusivo",
        statusCode: "venda",
        badgeColor: "#b89047",
        bairro: "Quadra 606 Norte",
        quartos: 2,
        vagas: 1,
        area: "Planta Otimizada",
        // Ajustado conforme o padrão de nomenclatura que você está usando
        imagem: "img/PPC_PALMA_GUARITA_2026.03.30.jpg",
        descricao: "Localização estratégica que une tranquilidade residencial ao acesso facilitado aos principais pontos comerciais da região norte.",
        diferenciais: ["2 Quartos Premium", "Sacada com Vista Privilegiada", "1 Vaga de Garagem Coberta", "Alta iluminação natural"]
    },
    {
        id: 3,
        nome: "Residencial 1101 Sul",
        status: "Lançamento",
        statusCode: "lancamento",
        badgeColor: "#d97706",
        bairro: "Quadra 1101 Sul",
        quartos: 2,
        vagas: "Privativa",
        area: "Conceito Moderno",
        // Ajustado para a imagem correspondente da guarita/fachada disponível
        imagem: "img/PPC_PALMEIRA SERENA_GUARITA_2026.03.03.jpg",
        descricao: "Conceito moderno de moradia que integra uma infraestrutura de lazer incomparável para desfrutar os melhores momentos em família.",
        diferenciais: ["2 Quartos (plantas versáteis)", "Ampla Varanda Social", "Garagem Privativa", "Lazer completo, equipado e decorado"]
    },
    {
        id: 4,
        nome: "Palmeira Solare",
        status: "Últimas Unidades",
        statusCode: "ultimas",
        badgeColor: "#3b82f6",
        bairro: "Ao lado do Shopping Capim Dourado",
        quartos: 2,
        vagas: "Até 2",
        area: "Alto Padrão",
        // Ajustado para o nome real do arquivo na sua pasta img
        imagem: "img/PALMEIRA SOLARE_PPC_FACHADA_01.09.2025.jpg",
        descricao: "O ápice da conveniência urbana. Viva a poucos passos do principal shopping da cidade com total requinte, segurança e lazer completo.",
        diferenciais: ["2 Quartos (Suíte com Acabamento Premium)", "Varanda com Churrasqueira integrada", "Até 2 Vagas de Garagem", "Complexo de Lazer com Piscina e SPA"]
    }
];

// DATASET DE DEPOIMENTOS (RESOLVE O ERRO DE REFERÊNCIA)
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

        nav.querySelectorAll("ul a").forEach(link => {
            link.addEventListener("click", () => {
                nav.classList.remove("active");
                toggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
            });
        });
    }
}

// RENDERIZAR CARDS (SEM EXIBIÇÃO DE PREÇOS)
function renderCards(dados) {
    const container = document.getElementById("properties-container");
    if (!container) return;
    
    container.innerHTML = "";

    if (dados.length === 0) {
        container.innerHTML = `<p class="no-results" style="grid-column: 1/-1; text-align: center; padding: 60px 20px; color: var(--text-muted); font-weight: 500; font-size: 1.1rem;">Nenhum empreendimento corresponde aos filtros selecionados.</p>`;
        return;
    }

    dados.forEach((item) => {
        const card = document.createElement("article");
        card.className = "property-card";
        
        // Mapeia os diferenciais para criar os itens da lista lateral/inferior do card
        let featuresHTML = "";
        item.diferenciais.forEach((dif, index) => {
            let icon = "fa-check";
            if (index === 0) icon = "fa-bed";
            else if (index === 1) icon = "fa-vector-square";
            else if (index === 2) icon = "fa-car";
            
            featuresHTML += `<li><i class="fa-solid ${icon}"></i> ${dif}</li>`;
        });
        
        card.innerHTML = `
            <div class="property-image-wrapper">
                <img src="${item.imagem}" alt="${item.nome} - ${item.bairro}" loading="lazy">
                <span class="property-tag" style="background-color: ${item.badgeColor || 'var(--gold)'}">${item.status}</span>
            </div>
            <div class="property-info">
                <span class="property-location"><i class="fa-solid fa-map-pin"></i> ${item.bairro}, Palmas - TO</span>
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
    });

    document.querySelectorAll(".open-details").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const button = e.target.closest(".open-details");
            const id = parseInt(button.getAttribute("data-id"));
            openModalDetails(id);
        });
    });
}

// FILTROS REAL-TIME
function initFilters() {
    const filterStatus = document.getElementById("filter-status");
    const filterBairro = document.getElementById("filter-bairro");
    const filterQuartos = document.getElementById("filter-quartos");
    const btnSearch = document.getElementById("btn-execute-filter");

    if (!filterStatus || !filterBairro || !filterQuartos) return;

    function aplicarFiltros() {
        let filtrados = empreendimentos;

        if (filterStatus.value) {
            filtrados = filtrados.filter(item => item.statusCode === filterStatus.value);
        }
        if (filterBairro.value) {
            // Permite busca parcial ou por correspondência de bairros mapeados na busca
            filtrados = filtrados.filter(item => item.bairro.toLowerCase().includes(filterBairro.value.toLowerCase()));
        }
        if (filterQuartos.value) {
            const q = parseInt(filterQuartos.value);
            filtrados = filtrados.filter(item => item.quartos >= q);
        }

        renderCards(filtrados);
    }

    // Filtros executam tanto na mudança quanto no clique do botão "Buscar"
    [filterStatus, filterBairro, filterQuartos].forEach(el => {
        el.addEventListener("change", aplicarFiltros);
    });

    if (btnSearch) {
        btnSearch.addEventListener("click", (e) => {
            e.preventDefault();
            aplicarFiltros();
        });
    }
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
            card.querySelector(".testimonial-text").innerText = `"${t.texto.replace(/"/g, '')}"`;
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

// CAPTURA E VALIDAÇÃO DE LEADS (Ajustado id do formulário para bater com o HTML "lead-form")
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
            const originalText = btn.innerText;
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

    let diferenciaisHTML = "";
    item.diferenciais.forEach(dif => {
        diferenciaisHTML += `<li style="display: flex; align-items: center; gap: 10px; font-size: 0.95rem; color: var(--text-dark); font-weight:500; text-align: left;"><i class="fa-solid fa-check" style="color:var(--gold); font-size: 0.95rem;"></i> ${dif}</li>`;
    });

    body.innerHTML = `
        <div class="modal-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; text-align: left;">
            <div class="modal-gallery">
                <img src="${item.imagem}" alt="${item.nome}" style="width:100%; border-radius:var(--radius-md, 8px); object-fit:cover; height:280px; margin-bottom:12px;">
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