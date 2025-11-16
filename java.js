// ===== BASE DE DATOS ESTÁTICA DE TRABAJOS =====

const jobs = [
    {
        id: 1,
        titulo: "Desarrollador Web Frontend",
        empresa: "TechCorp Bolivia",
        tipo: "Tiempo completo",
        ubicacion: "Mercado 4 de Abril",
        salario: "Bs. 6,500",
        descripcion: "Buscamos desarrollador frontend con experiencia en React, JavaScript y CSS. Trabajo en equipo dinámico con proyectos internacionales.",
        fecha: "2025-10-15",
        foto: "fotos/computadora.jpeg",
        requisitos: ["React", "JavaScript", "CSS", "Git"],
        contacto: "rrhh@techcorp.com",
        whatsapp: "59178945612"
    },
    {
        id: 2,
        titulo: "Repartidor de Delivery",
        empresa: "Food Express",
        tipo: "Medio tiempo",
        ubicacion: "Satelite - Centro",
        salario: "Bs. 2,800 + propinas",
        descripcion: "Se busca repartidor con moto propia para delivery de comida. Horarios flexibles, ambiente joven y dinámico.",
        fecha: "2025-09-14",
        foto:"fotos/repartidor.jpg",
        requisitos: ["Moto propia", "Licencia de conducir", "Smartphone"],
        contacto: "delivery@foodexpress.com",
        whatsapp: "59179856423"
    },
    {
        id: 3,
        titulo: "Diseñador Gráfico",
        empresa: "Creative Studio",
        tipo: "Tiempo completo",
        ubicacion: "Satelite - Las Brisas",
        salario: "Bs. 180/hora",
        descripcion: "Diseñador gráfico para proyectos de marketing digital, branding y diseño web. Portfolio requerido.",
        fecha: "2025-10-13",
        foto: "fotos/diseño grafico.jpg",
        requisitos: ["Adobe Creative Suite", "Portfolio", "Experiencia 2+ años"],
        contacto: "info@creativestudio.com",
        whatsapp: "59172369841"
    },
    {
        id: 4,
        titulo: "Vendedor/a de Tienda",
        empresa: "Fashion Point",
        tipo: "Tiempo completo",
        ubicacion: "Satelite- Mega Center",
        salario: "Bs. 3,200 + comisiones",
        descripcion: "Vendedor/a para tienda de ropa. Experiencia en atención al cliente y ventas. Disponibilidad fines de semana.",
        fecha: "2025-09-12",
        foto: "fotos/tiemda d ropa.jpg",
        requisitos: ["Experiencia en ventas", "Atención al cliente", "Disponibilidad fines de semana"],
        contacto: "ventas@fashionpoint.com",
        whatsapp: "59174125836"
    },
    {
        id: 5,
        titulo: "Contador",
        empresa: "Banco Sol",
        tipo: "Tiempo completo",
        ubicacion: "Satelite-Banco Sol",
        salario: "Bs. 4,500",
        descripcion: "Contador para manejo de libros contables, declaraciones de impuestos y reportes financieros.",
        fecha: "2025-09-11",
        foto: "fotos/contaduria.jpg",
        requisitos: ["Título en Contaduría", "Conocimiento tributario", "Excel avanzado"],
        contacto: "contabilidad@consultoraabc.com",
        whatsapp: "59175892347"
    },
    {
        id: 6,
        titulo: "Cajera",
        empresa: "Pollos Zelaya",
        tipo: "Tiempo completo",
        ubicacion: "Satelite Norte",
        salario: "Bs. 5,800",
        descripcion: "Cajera con experiencia, experiencia en manejo de caja y atencion al cliente, disponible para trabajar en horarios rotativos y una buena presencia y habilidad en trabajar en equipo.",
        fecha: "2025-11-07",
        foto: "fotos/pollozelaya.jpg",
        requisitos: ["Amabildad", "Buena presencia"],
        contacto: "marketing@digitalagency.com",
        whatsapp: "59176543298"
    },
    {
        id: 7,
        titulo: "Mesero",
        empresa: "Pampeño",
        tipo: "Turno Noche",
        ubicacion: "Satelite-Pentaguazu",
        salario: "Bs. 2,900",
        descripcion: "Se requiere un mesero con experiencia al cliente y atencion en la mesa, que tenga buena presencia y las ganas de trabajar.",
        fecha: "2025-11-05",
        foto:"fotos/pampeño.jpg",
        requisitos: ["Experiencia ", "Buena presencia"],
        contacto: "recepcion@hotelplaza.com",
        whatsapp: "59177234856"
    },
    {
        id: 8,
        titulo: "Programador PHP",
        empresa: "WebSolutions",
        tipo: "Medio tiempo",
        ubicacion: "Satelite Norte",
        salario: "Bs. 7,200",
        descripcion: "Programador PHP para desarrollo de sistemas web y APIs. Experiencia con Laravel y bases de datos MySQL.",
        fecha: "2025-10-08",
        foto: "fotos/php.jpg",
        requisitos: ["PHP", "Laravel", "MySQL", "Git", "3+ años experiencia"],
        contacto: "dev@websolutions.com",
        whatsapp: "59178456123"
    },
    {
    id: 9,
        titulo: "Cocinero",
        empresa: "",
        tipo: "Medio tiempo",
        ubicacion: "Satelite- Mercado",
        salario: "Bs. 2,200",
        descripcion: " Se requiere cocinero con experiencia que sepa freir tenga buen manejo en parilla y buen ritmo.",
        fecha: "2025-10-08",
        foto: "fotos/cocina.jpg",
        requisitos: ["Experiencia min 1 año", "Preparacion de platos tipicos"],
        contacto: "dev@websolutions.com",
        whatsapp: "59178456123"
    },
    {
    id: 10,
        titulo: "Vendedor",
        empresa: "Shady Tore",
        tipo: "Medio tiempo",
        ubicacion: "Satelite Norte",
        salario: "Bs. 7,200",
        descripcion: " Se requiere vendedor de ropa que tenga buena presencia y buen ojo para la ropa de moda .",
        fecha: "2025-10-20",
        foto: "fotos/shadytr.jpg",
        requisitos: ["Experiencia en venta y conocimiento de moda urbana"],
        contacto: "dev@websolutions.com",
        whatsapp: "59178456123"
    },
];   

// ===== VARIABLES GLOBALES =====
let filteredJobs = [...jobs];
let currentFilter = 'todos';

// Número de WhatsApp del administrador
const ADMIN_WHATSAPP = "59178945612";

// ===== INICIALIZACIÓN =====
document.addEventListener('DOMContentLoaded', function() {
    displayJobs(jobs);
    updateJobCount(jobs.length);
    initContactForm();
});

// ===== FUNCIÓN PARA MOSTRAR TRABAJOS =====
function displayJobs(jobsToShow) {
    const container = document.getElementById('jobListings');
    
    if (jobsToShow.length === 0) {
        container.innerHTML = `
            <div class="no-results">
                <h3>😔 No se encontraron empleos</h3>
                <p>Intenta con otros términos de búsqueda o filtros diferentes</p>
            </div>
        `;
        return;
    }

    container.innerHTML = jobsToShow.map(job => `
        <div class="job-card" data-job-id="${job.id}">
            <div class="job-photo">
                ${job.foto ? 
                    `<img src="${job.foto}" alt="${job.empresa}">` : 
                    `<div class="job-photo-placeholder">🏢</div>`
                }
            </div>
            
            <div class="job-info">
                <div class="job-header">
                    <div>
                        <div class="job-title">${job.titulo}</div>
                        <div class="job-company">${job.empresa}</div>
                    </div>
                    <div class="job-type">${job.tipo}</div>
                </div>
                
                <div class="job-details">
                    <div class="job-detail">
                        <span class="job-detail-icon">📍</span>
                        ${job.ubicacion}
                    </div>
                    <div class="job-detail">
                        <span class="job-detail-icon">💰</span>
                        <span class="job-salary">${job.salario}</span>
                    </div>
                    <div class="job-detail">
                        <span class="job-detail-icon">📅</span>
                        <span class="job-date">${formatDate(job.fecha)}</span>
                    </div>
                </div>
                
                <div class="job-description">
                    ${job.descripcion}
                </div>
                
                <div class="job-actions">
                    <button class="apply-btn" onclick="openWhatsApp('${job.whatsapp}', '${job.titulo}', '${job.empresa}')">
                        📱 Contactar por WhatsApp
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// ===== FUNCIÓN DE BÚSQUEDA =====
function searchJobs() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    
    const filtered = jobs.filter(job => 
        job.titulo.toLowerCase().includes(searchTerm) ||
        job.empresa.toLowerCase().includes(searchTerm) ||
        job.ubicacion.toLowerCase().includes(searchTerm) ||
        job.descripcion.toLowerCase().includes(searchTerm)
    );

    const finalFiltered = currentFilter === 'todos' ? 
        filtered : 
        filtered.filter(job => job.tipo === currentFilter);

    filteredJobs = finalFiltered;
    displayJobs(finalFiltered);
    updateJobCount(finalFiltered.length);
}

// ===== FILTRAR POR TIPO DE TRABAJO =====
function filterByType(type) {
    currentFilter = type;
    
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    const filtered = type === 'todos' ? jobs : jobs.filter(job => job.tipo === type);
    
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    if (searchTerm) {
        const searchFiltered = filtered.filter(job => 
            job.titulo.toLowerCase().includes(searchTerm) ||
            job.empresa.toLowerCase().includes(searchTerm) ||
            job.ubicacion.toLowerCase().includes(searchTerm) ||
            job.descripcion.toLowerCase().includes(searchTerm)
        );
        filteredJobs = searchFiltered;
        displayJobs(searchFiltered);
        updateJobCount(searchFiltered.length);
    } else {
        filteredJobs = filtered;
        displayJobs(filtered);
        updateJobCount(filtered.length);
    }
}

// ===== MANEJAR ENTER EN BÚSQUEDA =====
function handleEnter(event) {
    if (event.key === 'Enter') {
        searchJobs();
    }
}

// ===== ACTUALIZAR CONTADOR =====
function updateJobCount(count) {
    document.getElementById('jobCount').textContent = count;
}

// ===== FORMATEAR FECHA =====
function formatDate(dateString) {
    const options = { day: 'numeric', month: 'short' };
    return new Date(dateString).toLocaleDateString('es-ES', options);
}

// ===== ABRIR WHATSAPP DIRECTO =====
function openWhatsApp(phoneNumber, jobTitle, company) {
    const message = `Hola! 👋 Vi la oferta de trabajo de *${jobTitle}* en ${company} y me interesa mucho. ¿Podrían darme más información? Estoy disponible para una entrevista. ¡Gracias!`;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
}

// ===== CONTACTAR ADMIN DESDE PRECIOS =====
function contactAdmin(plan) {
    const message = `Hola! 👋 Estoy interesado en contratar el *${plan}* para publicar empleos en Satélite Jobs. ¿Podrían darme más información sobre el proceso? ¡Gracias!`;
    const whatsappURL = `https://wa.me/${ADMIN_WHATSAPP}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
}

// ===== INICIALIZAR FORMULARIO DE CONTACTO =====
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Obtener datos del formulario
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };
        
        // Crear mensaje para WhatsApp
        const whatsappMessage = `
*Nuevo mensaje de contacto - Satélite Jobs*

👤 *Nombre:* ${formData.name}
📧 *Email:* ${formData.email}
📱 *Teléfono:* ${formData.phone}
📋 *Asunto:* ${formData.subject}

💬 *Mensaje:*
${formData.message}
        `.trim();
        
        // Abrir WhatsApp con el mensaje
        const whatsappURL = `https://wa.me/${ADMIN_WHATSAPP}?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappURL, '_blank');
        
        // Mostrar mensaje de éxito
        formMessage.className = 'success';
        formMessage.textContent = '✅ ¡Mensaje enviado! Te estamos redirigiendo a WhatsApp para completar el contacto.';
        
        // Limpiar formulario
        contactForm.reset();
        
        // Ocultar mensaje después de 5 segundos
        setTimeout(() => {
            formMessage.textContent = '';
            formMessage.className = '';
        }, 5000);
    });
}

// ===== FUNCIONES DEL MODAL =====
function closeModal() {
    document.getElementById('applyModal').style.display = 'none';
    document.getElementById('applyForm').reset();
}

window.onclick = function(event) {
    const modal = document.getElementById('applyModal');
    if (event.target === modal) {
        closeModal();
    }
}

document.getElementById('applyForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const modalContent = document.querySelector('.modal-content');
    modalContent.innerHTML = `
        <div style="text-align: center; padding: 2rem;">
            <div style="font-size: 4rem; margin-bottom: 1rem;">🎉</div>
            <h2 style="color: #34a853; margin-bottom: 1rem;">¡Aplicación Enviada!</h2>
            <p style="margin-bottom: 1rem; color: #666;">
                Tu aplicación ha sido enviada exitosamente. 
                La empresa se pondrá en contacto contigo pronto.
            </p>
            <button onclick="closeModal()" class="btn-submit">
                Continuar Buscando
            </button>
        </div>
    `;
    
    setTimeout(() => {
        closeModal();
        location.reload();
    }, 3000);
});