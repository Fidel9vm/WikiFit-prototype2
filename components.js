// importComponents.js

// Función para importar componentes
function importComponent(url, elementId) {
    fetch(url)
    .then(response => response.text())
    .then(html => {
        document.getElementById(elementId).innerHTML = html;
    });
}

// Importar la barra de navegación
importComponent('../../../components/navbar.html', 'navbar');
importComponent('../../components/hero.html', 'hero');
importComponent('../../components/info.html', 'info');
importComponent('../../components/contenidos-index/index-navbar.html', 'index-navbar');
importComponent('../../../components/contenidos-index/index-ejercicios.html', 'ejercicios');
importComponent('../../components/contenidos-index/index-guia.html', 'guia');
importComponent('../../components/contenidos-index/index-nutricion.html', 'nutricion');
importComponent('../../components/contenidos-index/index-rutinas.html', 'rutinas');
importComponent('../../components/contenidos-index/index-faq.html', 'faq');
importComponent('../../components/contenidos-index/index-grupo30.html', 'grupo30');
importComponent('../../../components/footer.html','footer');
importComponent('rutinas-navbar.html','rutinas-navbar');
importComponent('../ejercicios-navbar.html','ejercicios-navbar');
