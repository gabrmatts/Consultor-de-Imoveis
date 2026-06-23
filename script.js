// ARRAYS DE DADOS DOS EMPREENDIMENTOS (ORDEM REQUERIDA E DADOS COMPLETOS)
const empreendimentos = [
    {
        id: 1,
        nome: "Residencial Palma",
        status: "Lançamento",
        statusCode: "lancamento",
        badgeColor: "var(--tag-green)",
        bairro: "Orla 14",
        preco: 1450000,
        quartos: 3,
        vagas: 2,
        area: "120m² a 180m²",
        imagem: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
        descricao: "O maior destaque da Orla 14. Apartamentos com vista panorâmica definitiva para o lago, acabamento em mármore e varanda gourmet integrada.",
        diferenciais: ["Piscina de borda infinita", "Automação residencial completa", "Portaria blindada com IA", "Gerador integral"]
    },
    {
        id: 2,
        nome: "Reserva dos Girassóis",
        status: "Últimas Unidades",
        statusCode: "ultimas",
        badgeColor: "var(--tag-red)",
        bairro: "Plano Diretor Sul",
        preco: 790000,
        quartos: 2,
        vagas: 1,
        area: "78m²",
        imagem: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800",
        descricao: "Oportunidade única de morar bem no coração financeiro de Palmas. Planta inteligente e otimizada para famílias modernas.",
        diferenciais: ["Coworking interno", "Rooftop Lounge", "Vaga para carro elétrico"]
    },
    {
        id: 3,
        nome: "Palmeira Serene",
        status: "À Venda",
        statusCode: "venda",
        badgeColor: "var(--tag-blue)",
        bairro: "Jardim Europa",
        preco: 2200000,
        quartos: 4,
        vagas: 3,
        area: "210m²",
        imagem: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800",
        descricao: "Mansões suspensas em área nobre. Conforto térmico de última geração adaptado perfeitamente ao clima de Palmas.",
        diferenciais: ["Elevador privativo biométrico", "4 Suítes plenas", "Climatização central dutada"]
    },
    {
        id: 4,
        nome: "Palmeira Solare",
        status: "À Venda",
        statusCode: "venda",
        badgeColor: "var(--tag-blue)",
        bairro: "Orla 14",
        preco: 1100000,
        quartos: 3,
        vagas: 2,
        area: "95m²",
        imagem: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80&w=800",
        descricao: "Arquitetura biofílica integrada à paisagem urbana. Iluminação natural abundante e áreas comuns decoradas por designers premiados.",
        diferenciais: ["Energia solar nas áreas comuns", "Academia com equipamentos Technogym", "Pet Place com spa"]
    },
    {
        id: 5,
        nome: "Palmeira Boreal",
        status: "Sucesso de Venda",
        statusCode: "sucesso",
        badgeColor: "var(--tag-gold)",
        bairro: "Plano Diretor Sul",
        preco: 3100000,
        quartos: 4,
        vagas: 4,
        area: "340m²",
        imagem: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800",
        descricao: "O ápice do luxo e exclusividade corporativa ou residencial. Um marco arquitetônico icônico com pouquíssimas cotas remanescentes.",
        diferenciais: ["Heliponto homologado próximo", "Piscina privativa na varanda", "Adega climatizada no subsolo"]
    }
];

// DEPOIMENTOS (PROVA SOCIAL)
const depoimentos = [
    {
        nome: "Mariana Fontes",
        cargo: "Investidora - Orla 14",
        texto: '"O Neto superou todas as expectativas. Desde a primeira reunião até o suporte pós-venda na entrega das chaves do Residencial Palma, o processo foi impecável."',
        img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100"
    },
    {
        nome: "Dr. Carlos Eduardo",
        cargo: "Médico - Palmeira Boreal",
        texto: '"Assessoria jurídica perfeita e total privacidade. Neto não é um corretor comum, é um verdadeiro consultor estratégico de patrimônio."',
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

// STICKY HEADER
function initHeader() {
    const header = document.getElementById("header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    });

    // Mobile Menu Toggle
    const toggle = document.querySelector(".mobile-menu-toggle");
    const nav = document.querySelector(".nav-menu");
    toggle.addEventListener("click", () => {
        nav.classList.toggle("active");
        toggle.innerHTML = nav.classList.contains("active") ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
    });
}

// RENDERIZAR CARDS DINAMICAMENTE
function renderCards(dados) {
    const container = document.getElementById("properties-container");
    container.innerHTML = "";

    if(dados.length === 0) {
        container.innerHTML = `<p class="no-results">Nenhum empreendimento corresponde aos filtros selecionados.</p>`;
        return;
    }

    dados.forEach((item, index) => {
        const card = document.createElement("div");
        card.className = `property-card ${index === 0 ? 'featured-card' : ''}`;
        
        card.innerHTML = `
            <div class="property-media">
                <span class="property-badge" style="background-color: ${item.badgeColor}">${item.status}</span>
                <div class="property-slider">
                    <img src="${item.imagem}" alt="${item.nome}" loading="lazy">
                </div>
            </div>
            <div class="property-info">
                <div class="property-location"><i class="fa-solid fa-location-dot"></i> ${item.bairro}, Palmas - TO</div>
                <h3>${item.nome}</h3>
                <p class="property-desc">${item.descricao}</p>
                <div class="property-features">
                    <span><i class="fa-solid fa-bed"></i> ${item.quartos} Qts</span>
                    <span><i class="fa-solid fa-car"></i> ${item.vagas} Vag</span>
                    <span><i class="fa-solid fa-ruler-combined"></i> ${item.area}</span>
                </div>
                <button class="btn btn-primary-outline btn-full open-details" data-id="${item.id}">Ver Todos os Detalhes</button>
            </div>
        `;
        container.appendChild(card);
    });

    // Reatribuir eventos dos botões do modal
    document.querySelectorAll(".open-details").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const id = parseInt(e.target.getAttribute("data-id"));
            openModalDetails(id);
        });
    });
}

// FILTROS REAL-TIME
function initFilters() {
    const filterStatus = document.getElementById("filter-status");
    const filterBairro = document.getElementById("filter-bairro");
    const filterQuartos = document.getElementById("filter-quartos");
    const filterPreco = document.getElementById("filter-preco");

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
        if (filterPreco.value) {
            const p = parseInt(filterPreco.value);
            filtrados = filtrados.filter(item => item.preco <= p);
        }

        renderCards(filtrados);
    }

    [filterStatus, filterBairro, filterQuartos, filterPreco].forEach(el => {
        el.addEventListener("change", aplicarFiltros);
    });
}

// ANIMAÇÃO DE ESTATÍSTICAS (CONTADOR PROGRESSIVO)
function initStatsAnimation() {
    const statsSection = document.getElementById("stats-section");
    const stats = document.querySelectorAll(".stat-number");
    let animated = false;

    const startAnimation = () => {
        stats.forEach(stat => {
            const target = parseInt(stat.getAttribute("data-target"));
            let current = 0;
            const increment = target / 50;
            const updateCounter = () => {
                if(current < target) {
                    current += increment;
                    stat.innerText = Math.ceil(current);
                    setTimeout(updateCounter, 20);
                } else {
                    stat.innerText = target + (stat.innerText.includes('%') || stat.getAttribute("data-target") === "100" ? "%" : "+");
                }
            };
            updateCounter();
        });
    };

    window.addEventListener("scroll", () => {
        if(!statsSection) return;
        const pos = statsSection.getBoundingClientRect().top;
        const screen = window.innerHeight;
        if(pos < screen && !animated) {
            startAnimation();
            animated = true;
        }
    });
}

// CARROSSEL DE TESTEMUNHOS (PROVA SOCIAL)
let currentTestimonial = 0;
function initTestimonials() {
    const nextBtn = document.getElementById("next-testimonial");
    const prevBtn = document.getElementById("prev-testimonial");
    const card = document.querySelector(".testimonial-card");

    function updateTestimonial(index) {
        const t = depoimentos[index];
        card.style.opacity = 0;
        setTimeout(() => {
            card.querySelector(".testimonial-text").innerText = t.texto;
            card.querySelector(".testimonial-user img").src = t.img;
            card.querySelector(".testimonial-user h4").innerText = t.nome;
            card.querySelector(".testimonial-user span").innerText = t.cargo;
            card.style.opacity = 1;
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

// VALIDAÇÃO PREMIUM DE FORMULÁRIO (NEURODESIGN DE ERROS)
function initFormValidation() {
    const form = document.getElementById("contact-form");
    
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let isValid = true;

        const inputs = form.querySelectorAll("input[required], select[required]");
        
        inputs.forEach(input => {
            const group = input.parentElement;
            if(!input.value.trim()) {
                group.classList.add("invalid");
                isValid = false;
            } else if(input.type === "email" && !validateEmail(input.value)) {
                group.classList.add("invalid");
                isValid = false;
            } else {
                group.classList.remove("invalid");
            }
        });

        if(isValid) {
            // Conversão Simulação / Sucesso Elegante
            const btn = form.querySelector("button[type='submit']");
            btn.innerText = "Processando Solicitação...";
            btn.disabled = true;
            setTimeout(() => {
                form.innerHTML = `<div class="success-box" style="text-align:center; padding: 20px 0;">
                    <i class="fa-solid fa-circle-check" style="color:var(--tag-green); font-size: 3rem; margin-bottom: 16px;"></i>
                    <h3>Solicitação Recebida com Sucesso!</h3>
                    <p style="color: var(--text-muted); margin-top: 8px;">Neto entrará em contato em menos de 15 minutos via WhatsApp corporativo.</p>
                </div>`;
            }, 1500);
        }
    });

    // Limpar erro ao digitar
    form.querySelectorAll("input, select").forEach(input => {
        input.addEventListener("input", () => {
            input.parentElement.classList.remove("invalid");
        });
    });
}

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// MODAL PREMIUM DINÂMICO
const modal = document.getElementById("premium-modal");
function initModal() {
    const closeBtn = document.querySelector(".modal-close");
    closeBtn.addEventListener("click", () => modal.classList.remove("active"));
    window.addEventListener("click", (e) => {
        if(e.target === modal) modal.classList.remove("active");
    });
}

function openModalDetails(id) {
    const item = empreendimentos.find(p => p.id === id);
    if(!item) return;

    const body = document.getElementById("modal-dynamic-body");
    
    let diferenciaisHTML = "";
    item.diferenciais.forEach(dif => {
        diferenciaisHTML += `<li><i class="fa-solid fa-check" style="color:var(--accent)"></i> ${dif}</li>`;
    });

    body.innerHTML = `
        <div class="modal-grid">
            <div class="modal-gallery">
                <img src="${item.imagem}" alt="${item.nome}">
                <div style="background:#F0F4F8; height: 150px; display:flex; align-items:center; justify-content:center; color:var(--text-muted); border-radius:4px;">
                    <i class="fa-solid fa-map-location-dot" style="font-size:1.5rem; margin-right:8px;"></i> Planta Baixa & Implantação Disponíveis no Atendimento
                </div>
            </div>
            <div class="modal-info">
                <span style="color:${item.badgeColor}; font-weight:700; text-transform:uppercase; font-size:0.8rem;">${item.status}</span>
                <h2 style="font-size:2rem; margin: 8px 0 16px 0; color:var(--primary);">${item.nome}</h2>
                <p style="color:var(--text-muted); margin-bottom:20px;">${item.descricao}</p>
                
                <h4>Diferenciais Exclusivos</h4>
                <ul style="margin: 12px 0 24px 0; display:flex; flex-direction:column; gap:8px;">
                    ${diferenciaisHTML}
                </ul>

                <div class="modal-meta-grid">
                    <div><strong>Metragem:</strong><br>${item.area}</div>
                    <div><strong>Localização:</strong><br>${item.bairro}</div>
                </div>

                <div style="display:flex; flex-direction:column; gap:12px; margin-top:30px;">
                    <a href="https://wa.me/5563999999999?text=Olá%20Neto,%20gostaria%20de%20solicitar%20a%20tabela%20e%20plantas%20do%20${encodeURIComponent(item.nome)}" target="_blank" class="btn btn-primary">Solicitar Atendimento para Este Imóvel</a>
                    <a href="#contato" onclick="modal.classList.remove('active');" class="btn btn-primary-outline">Agendar Uma Visita Presencial</a>
                </div>
            </div>
        </div>
    `;

    modal.classList.add("active");
}