// Datos de ejemplo: edítalos para personalizar tu landing
const LINKS = [
  { title: 'Mi sitio web', url: 'https://tusitio.com', desc: 'Portfolio y proyectos', color: '' },
  { title: 'Blog', url: 'https://tusitio.com/blog', desc: 'Artículos y notes' },
  { title: 'GitHub', url: 'https://github.com/tuusuario', desc: 'Código abierto' },
  { title: 'Twitter', url: 'https://twitter.com/tuusuario', desc: 'Tweets y pensamientos' },
  { title: 'Contacto', url: 'mailto:tu@correo.com', desc: 'Escríbeme' }
];

function createLinkCard(link){
  const a = document.createElement('a');
  a.className = 'link-btn';
  a.href = link.url;
  a.target = '_blank';
  a.rel = 'noopener noreferrer';

  const title = document.createElement('span');
  title.className = 'link-title';
  title.textContent = link.title;

  const desc = document.createElement('span');
  desc.className = 'link-desc';
  desc.textContent = link.desc || '';

  const copy = document.createElement('button');
  copy.className = 'copy-btn';
  copy.title = 'Copiar enlace';
  copy.innerHTML = '📋';

  copy.addEventListener('click', (ev) => {
    ev.preventDefault();
    ev.stopPropagation();
    navigator.clipboard.writeText(link.url).then(()=>{
      const prev = copy.textContent;
      copy.textContent = '✅';
      setTimeout(()=> copy.textContent = prev, 1200);
    }).catch(()=>{
      copy.textContent = '❌';
      setTimeout(()=> copy.textContent = '📋', 1200);
    })
  });

  a.appendChild(title);
  a.appendChild(desc);
  a.appendChild(copy);
  return a;
}

function renderLinks(){
  const container = document.getElementById('links');
  container.innerHTML = '';
  LINKS.forEach(link => {
    container.appendChild(createLinkCard(link));
  })
}

// Ajustes simples de contenido
document.addEventListener('DOMContentLoaded', ()=>{
  renderLinks();
  document.getElementById('year').textContent = new Date().getFullYear();
});
