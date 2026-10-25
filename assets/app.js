const CURSOS = [
  { id: 1, t: 'Planificación de la demanda', te: 'Demand planning', tema: 'Planificación', mod: 'Virtual', f: '12–14 nov 2026', h: '12 h', p: 180, d: 'Pronósticos, indicadores de error y proceso S&OP.', de: 'Forecasts, error metrics and the S&OP process.' },
  { id: 2, t: 'Gestión de inventarios', te: 'Inventory management', tema: 'Inventarios', mod: 'Presencial', f: '3–4 dic 2026', h: '16 h', p: 220, d: 'Niveles de stock, clasificación ABC y rotación.', de: 'Stock levels, ABC classification and turnover.' },
  { id: 3, t: 'Logística y distribución', te: 'Logistics and distribution', tema: 'Logística', mod: 'Presencial', f: '20–21 ene 2027', h: '16 h', p: 240, d: 'Diseño de rutas, costos de transporte y nivel de servicio.', de: 'Route design, transport costs and service level.' },
  { id: 4, t: 'Compras y abastecimiento', te: 'Procurement and sourcing', tema: 'Abastecimiento', mod: 'Virtual', f: '9–11 feb 2027', h: '12 h', p: 170, d: 'Selección de proveedores, negociación y contratos.', de: 'Supplier selection, negotiation and contracts.' },
  { id: 5, t: 'Indicadores de supply chain', te: 'Supply chain KPIs', tema: 'Planificación', mod: 'Virtual', f: 'Bajo demanda', h: '8 h', p: 95, d: 'Tablero de KPIs y análisis de desempeño.', de: 'KPI dashboards and performance analysis.' },
  { id: 6, t: 'Gestión de almacenes', te: 'Warehouse management', tema: 'Inventarios', mod: 'Presencial', f: '4–5 mar 2027', h: '16 h', p: 230, d: 'Distribución de bodega, picking y control de operaciones.', de: 'Warehouse layout, picking and operations control.' }];

const EN = {
  'Inicio': 'Home', 'Conócenos': 'About us', 'Capacitaciones': 'Training', 'Contacto': 'Contact', 'Carrito': 'Cart', 'Iniciar sesión': 'Log in', 'Salir': 'Log out',
  'Una cadena de suministro que responde antes de que llegue el problema': 'A supply chain that responds before the problem arrives',
  'Consultoría y capacitación en supply chain para empresas que quieren entregar a tiempo con menos inventario parado.': 'Supply chain consulting and training for companies that want to deliver on time with less idle inventory.',
  'Agendar una consulta': 'Book a consultation', 'Ver capacitaciones': 'View training',
  'años de experiencia': 'years of experience', 'proyectos de mejora': 'improvement projects', 'reducción promedio de costos': 'average cost reduction', 'profesionales capacitados': 'professionals trained',
  'Qué hacemos con tu operación': 'What we do for your operation', 'Cuatro frentes que puedes contratar por separado o combinar en un programa.': 'Four areas you can hire separately or combine in one program.',
  'Diagnóstico de supply chain': 'Supply chain diagnosis', 'Medimos dónde se pierde tiempo, dinero e inventario y entregamos un mapa de mejoras priorizado.': 'We measure where time, money and inventory are lost and deliver a prioritized improvement map.',
  'Planificación de demanda y S&OP': 'Demand planning and S&OP', 'Alineamos ventas, producción y finanzas en un solo plan mensual.': 'We align sales, production and finance in one monthly plan.',
  'Inventarios y almacenes': 'Inventory and warehouses', 'Definimos niveles de stock, rotación y procesos de bodega.': 'We define stock levels, turnover and warehouse processes.',
  'Logística y abastecimiento': 'Logistics and sourcing', 'Rediseñamos rutas, proveedores y tiempos de entrega.': 'We redesign routes, suppliers and delivery times.',
  'Cómo trabajamos contigo': 'How we work with you', 'Conversamos': 'We talk', 'Entendemos tu operación y tus metas.': 'We understand your operation and goals.', 'Diagnosticamos': 'We diagnose', 'Medimos el estado actual.': 'We measure the current state.', 'Proponemos': 'We propose', 'Priorizamos por impacto.': 'We prioritize by impact.', 'Implementamos': 'We implement', 'Acompañamos a tu equipo.': 'We support your team.', 'Medimos': 'We measure', 'Verificamos resultados.': 'We verify results.',
  'Conoce nuestra empresa': 'Get to know our company', 'Somos un equipo de consultores que ha trabajado en planta, bodega y transporte. Hablamos el idioma de la operación.': 'We are a team of consultants with experience in plants, warehouses and transport. We speak the language of operations.', 'Conócenos →': 'About us →',
  'Experiencia en campo': 'Field experience', 'Hemos trabajado dentro de plantas, bodegas y flotas.': 'We have worked inside plants, warehouses and fleets.', 'Resultados medibles': 'Measurable results', 'Cada proyecto parte de indicadores y termina con ellos.': 'Every project starts and ends with metrics.', 'Equipo cercano': 'Close-knit team', 'Consultores e instructores que acompañan a tu equipo.': 'Consultants and instructors who work alongside your team.',
  'Próximas capacitaciones': 'Upcoming training', 'Ver todas →': 'View all →', 'Agregar': 'Add', 'Agregado ✓': 'Added ✓',
  'Hablemos de tu operación': 'Let’s talk about your operation', 'Cuéntanos qué necesitas y te respondemos en un día hábil.': 'Tell us what you need and we will respond in one business day.', 'Datos de contacto': 'Contact details', 'Lunes a viernes, 08:00 a 17:00': 'Monday to Friday, 08:00 to 17:00', 'Escribir por WhatsApp': 'Chat on WhatsApp',
  'Nombre': 'Name', 'Correo corporativo': 'Corporate email', 'Empresa': 'Company', 'Tema de interés': 'Topic of interest', '¿En qué podemos ayudarte?': 'How can we help you?', 'Enviar solicitud': 'Send request', 'Solicitud enviada. Te responderemos en un día hábil.': 'Request sent. We will respond within one business day.',
  'Tu nombre': 'Your name', 'Nombre de tu empresa': 'Company name', 'Cuéntanos brevemente sobre tu requerimiento': 'Briefly tell us about your requirement',
  'Acceso para alumnos': 'Student portal', 'Acceso exclusivo para alumnos y clientes con capacitaciones contratadas. Si aún no tienes cuenta, se crea al confirmar tu inscripción.': 'Exclusive access for enrolled students and clients. If you don’t have an account yet, it is created with your registration.',
  'Continuar con Google': 'Continue with Google', 'o continuar con correo': 'or continue with email', 'o continuar con': 'or continue with',
  'Registrarse': 'Sign up', 'Crear cuenta': 'Create account', 'Nombre completo': 'Full name', '¿No tienes una cuenta?': 'Don’t have an account?', '¿Ya tienes una cuenta?': 'Already have an account?',
  'Correo': 'Email', 'Contraseña': 'Password', 'Ingresar': 'Sign in', 'Cancelar': 'Cancel', 'Inicio de sesión simulado.': 'Simulated login.', 'Registro simulado.': 'Simulated sign up.',
  'Tu carrito': 'Your cart', 'Datos y pago': 'Details and payment', 'Nombre completo': 'Full name', 'Cédula o RUC': 'ID or Tax Number', 'Tarjeta': 'Card', 'Transferencia': 'Bank transfer', 'Billetera digital': 'Digital wallet', 'Número de tarjeta': 'Card number', 'Vence': 'Expires', 'Pasarela simulada: no se procesa ningún cobro real.': 'Simulated payment: no real charge is made.', 'Pagar ahora': 'Pay now', 'Procesando pago…': 'Processing payment…', 'Pago aprobado (simulado)': 'Payment approved (simulated)', '¡Gracias por tu compra!': 'Thank you for your purchase!', 'Tu orden es': 'Your order is', 'Te enviamos el comprobante y el acceso al curso por correo (ejemplo).': 'Receipt and course access sent to your email (mock).', 'Seguir viendo cursos': 'Browse more courses',
  '© 2026 Tu Consultora · Prototipo con datos de ejemplo': '© 2026 Tu Consultora · Prototype with sample data', 'Política de privacidad · Términos': 'Privacy policy · Terms'
};

const $ = (s, r = document) => r.querySelector(s), usd = n => '$' + n.toFixed(2), K = 'sc_cart';
const G = k => { try { return localStorage.getItem(k) } catch (e) { return null } }, S = (k, v) => { try { v == null ? localStorage.removeItem(k) : localStorage.setItem(k, v) } catch (e) { } };
let lang = G('sc_lang') || 'es', theme = G('sc_theme') || (matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light');
document.documentElement.dataset.theme = theme;

const T = s => lang === 'en' && EN[s] ? EN[s] : s, nm = c => lang === 'en' ? c.te : c.t, ds = c => lang === 'en' ? c.de : c.d, md = m => lang === 'en' && m === 'Presencial' ? 'In person' : m;
const fd = f => lang === 'en' ? f.replace('nov', 'Nov').replace('dic', 'Dec').replace('ene', 'Jan').replace('feb', 'Feb').replace('mar', 'Mar').replace('Bajo demanda', 'On demand') : f;
const getC = () => { try { return JSON.parse(G(K)) || [] } catch (e) { return [] } };
const badge = () => { const b = $('#cb'); if (b) b.textContent = getC().length };
const setC = c => { S(K, JSON.stringify(c)); badge() };
const card = c => `<article class="card"><span class="tag">${md(c.mod)}</span><h3>${nm(c)}</h3><p class="mu">${ds(c)}</p><p><small>${fd(c.f)} · ${c.h}</small></p><div class="row"><b>${usd(c.p)}</b><button class="btn sm" data-add="${c.id}">${T('Agregar')}</button></div></article>`;

function tr() {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-t]').forEach(e => { e.dataset.t = e.dataset.t || e.textContent; e.textContent = T(e.dataset.t) });
  document.querySelectorAll('[data-tp]').forEach(e => { e.dataset.tp = e.dataset.tp || e.placeholder; e.placeholder = T(e.dataset.tp) });
}

function ctl() {
  const u = G('sc_user');
  const bl = $('#bl'), bt = $('#bt'), bu = $('#bu');
  if (bl) {
    bl.innerHTML = `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg> <span>${lang === 'es' ? 'EN' : 'ES'}</span>`;
  }
  if (bt) {
    bt.title = theme === 'dark' ? (lang === 'es' ? 'Cambiar a modo claro' : 'Switch to light mode') : (lang === 'es' ? 'Cambiar a modo oscuro' : 'Switch to dark mode');
    bt.innerHTML = theme === 'dark'
      ? `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path></svg>`
      : `<svg viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
  }
  if (bu) {
    bu.className = 'nav-pill' + (u ? ' active-user' : '');
    bu.innerHTML = u
      ? `<svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg><span>${u}</span>`
      : `<svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg><span>${T('Iniciar sesión')}</span>`;
  }
}

function layout() {
  const p = document.body.dataset.p, L = [['index', 'Inicio'], ['conocenos', 'Conócenos'], ['capacitaciones', 'Capacitaciones'], ['contacto', 'Contacto']];
  document.body.insertAdjacentHTML('afterbegin', `
  <header class="top">
    <nav class="w">
      <a class="logo" href="index.html"><i></i>Tu Consultora</a>
      <ul class="nav-links">
        ${L.map(l => `<li><a href="${l[0]}.html"${l[0] === p ? ' aria-current="page"' : ''}><span data-t>${l[1]}</span></a></li>`).join('')}
        <li><a class="cartl" href="pago.html"><span data-t>Carrito</span> <b id="cb">0</b></a></li>
      </ul>
      <div class="ctl">
        <button class="nav-pill" id="bl" aria-label="Cambiar idioma"></button>
        <button class="nav-pill" id="bt" aria-label="Cambiar tema"></button>
        <button class="nav-pill" id="bu" aria-label="Cuenta de usuario"></button>
      </div>
    </nav>
  </header>
  <dialog id="lg">
    <button type="button" class="dialog-close" id="lc" aria-label="Cerrar">&times;</button>
    <div class="modal-tabs">
      <button type="button" class="tab-btn active" id="tab-login" data-t>Iniciar sesión</button>
      <button type="button" class="tab-btn" id="tab-reg" data-t>Registrarse</button>
    </div>

    <h2 id="modal-title" data-t>Acceso para alumnos</h2>
    <p class="mu" id="modal-sub" style="font-size:13.5px;margin:0 0 16px" data-t>Acceso exclusivo para alumnos y clientes con capacitaciones contratadas. Si aún no tienes cuenta, se crea al confirmar tu inscripción.</p>

    <form id="lf">
      <label id="lf-name-wrap" hidden><span data-t>Nombre completo</span><input type="text" id="lf-name" placeholder="Tu nombre"></label>
      <label><span data-t>Correo</span><input type="email" id="lf-email" required placeholder="tu@empresa.com"></label>
      <label><span data-t>Contraseña</span><input type="password" id="lf-pass" required placeholder="••••••••"></label>
      <button class="btn" id="lf-submit" style="width:100%;margin-top:6px" data-t>Ingresar</button>
      <p class="note" id="lf-note" style="margin-top:6px" data-t>Inicio de sesión simulado.</p>
    </form>

    <div class="modal-divider"><span data-t>o continuar con</span></div>

    <button type="button" class="btn-google" id="b-google">
      <svg viewBox="0 0 24 24"><path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"/><path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.36 24 12 24z"/><path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 10.04 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/><path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.36 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/></svg>
      <span data-t>Continuar con Google</span>
    </button>

    <div class="modal-switch">
      <span id="switch-text" data-t>¿No tienes una cuenta?</span>
      <button type="button" id="switch-btn" data-t>Registrarse</button>
    </div>
  </dialog>`);

  document.body.insertAdjacentHTML('beforeend', '<footer><div class="w row"><span data-t>© 2026 Tu Consultora · Prototipo con datos de ejemplo</span><span data-t>Política de privacidad · Términos</span></div></footer>');

  let isRegister = false;
  const setAuthMode = reg => {
    isRegister = reg;
    $('#tab-login').classList.toggle('active', !reg);
    $('#tab-reg').classList.toggle('active', reg);
    $('#lf-name-wrap').hidden = !reg;
    $('#lf-name').required = reg;

    $('#modal-title').textContent = T(reg ? 'Crear cuenta' : 'Acceso para alumnos');
    $('#modal-sub').textContent = T(reg ? 'Regístrate para dar seguimiento a tus capacitaciones y certificados.' : 'Acceso exclusivo para alumnos y clientes con capacitaciones contratadas. Si aún no tienes cuenta, se crea al confirmar tu inscripción.');
    $('#lf-submit').textContent = T(reg ? 'Crear cuenta' : 'Ingresar');
    $('#lf-note').textContent = T(reg ? 'Registro simulado.' : 'Inicio de sesión simulado.');
    $('#switch-text').textContent = T(reg ? '¿Ya tienes una cuenta?' : '¿No tienes una cuenta?');
    $('#switch-btn').textContent = T(reg ? 'Iniciar sesión' : 'Registrarse');
  };

  $('#tab-login').onclick = () => setAuthMode(false);
  $('#tab-reg').onclick = () => setAuthMode(true);
  $('#switch-btn').onclick = () => setAuthMode(!isRegister);

  $('#bl').onclick = () => { lang = lang === 'es' ? 'en' : 'es'; S('sc_lang', lang); render() };
  $('#bt').onclick = () => { theme = theme === 'dark' ? 'light' : 'dark'; document.documentElement.dataset.theme = theme; S('sc_theme', theme); ctl() };
  $('#bu').onclick = () => { if (G('sc_user')) { S('sc_user'); ctl() } else { setAuthMode(false); $('#lg').showModal() } };
  $('#lc').onclick = () => $('#lg').close();
  $('#b-google').onclick = () => { S('sc_user', 'Google User'); $('#lg').close(); ctl() };
  $('#lf').onsubmit = e => {
    e.preventDefault();
    const nameVal = $('#lf-name').value.trim();
    const emailVal = $('#lf-email').value.trim();
    const displayName = (isRegister && nameVal) ? nameVal : emailVal.split('@')[0];
    S('sc_user', displayName);
    $('#lg').close();
    ctl();
  };
}

function cat() {
  const q = $('#q'), t = $('#t'), m = $('#m');
  const go = () => { $('#lista').innerHTML = CURSOS.filter(c => (!t.value || c.tema === t.value) && (!m.value || c.mod === m.value) && nm(c).toLowerCase().includes(q.value.toLowerCase())).map(card).join('') || '<p>No hay capacitaciones con esos filtros.</p>' };
  [q, t, m].forEach(e => e.oninput = go);
  go();
}

function pago() {
  const c = getC().map(i => CURSOS.find(x => x.id === i)).filter(Boolean), s = c.reduce((a, x) => a + x.p, 0);
  $('#items').innerHTML = c.length ? c.map(x => `<div class="line"><div><b>${nm(x)}</b><br><small>${fd(x.f)} · ${md(x.mod)}</small></div><span>${usd(x.p)}</span><button class="lnk" data-rm="${x.id}">Quitar</button></div>`).join('') : '<p>Tu carrito está vacío. <a href="capacitaciones.html">Ver capacitaciones</a></p>';
  $('#tot').innerHTML = `Subtotal ${usd(s)}<br>IVA (ejemplo 15%) ${usd(s * .15)}<br><b>Total ${usd(s * 1.15)}</b>`;
  $('#pf').hidden = !c.length;
}

function render() {
  const p = document.body.dataset.p;
  if (p === 'inicio') { $('#dest').innerHTML = CURSOS.slice(0, 3).map(card).join('') }
  if (p === 'capacitaciones') cat();
  if (p === 'pago') pago();
  tr();
  ctl();
  badge();
}

document.addEventListener('click', e => {
  const a = e.target.closest('[data-add]'), r = e.target.closest('[data-rm]');
  if (a) {
    const c = getC(), id = +a.dataset.add;
    if (!c.includes(id)) c.push(id);
    setC(c);
    a.textContent = T('Agregado ✓');
  }
  if (r) {
    setC(getC().filter(i => i !== +r.dataset.rm));
    pago();
  }
  const dlg = $('#lg');
  if (dlg && e.target === dlg) dlg.close();
});

document.addEventListener('DOMContentLoaded', () => {
  layout();
  render();
  const p = document.body.dataset.p;
  if (p === 'pago') {
    const f = $('#pf');
    document.querySelectorAll('[name=m]').forEach(r => r.onchange = () => $('#tj').hidden = r.value !== 'tarjeta');
    f.onsubmit = e => {
      e.preventDefault();
      const b = $('#go');
      b.disabled = true;
      b.textContent = T('Procesando pago…');
      setTimeout(() => {
        $('#ord').textContent = 'SC-' + Math.floor(1e5 + Math.random() * 9e5);
        setC([]);
        $('#chk').hidden = true;
        $('#fin').hidden = false;
      }, 1300);
    };
  }
  const cf = $('#cf');
  if (cf) {
    cf.onsubmit = e => {
      e.preventDefault();
      cf.hidden = true;
      $('#okc').hidden = false;
    };
  }
});
