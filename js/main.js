let cardsContainer=document.querySelector('.cards-container')
let cardsContainerContent=''
let content=[
    ['Navegador Web','Software para acceder a internet, visualizar páginas web y realizar búsquedas en la red.','green',0],
    ['Navegadores Web','Ejemplos incluyen Google Chrome, Mozilla Firefox, Microsoft Edge, Safari y Opera, siendo programas para acceder y explorar internet.','green',1],
    ['Versiones de Chrome','Goggle Chrome y otros navegadores tienen versiones adicionales las cuales se actualizan periodicamente.','brown',0],
    ['Canary','Versión experimental para probar las últimas características y correcciones. Puede ser inestable, pero ofrece acceso temprano a las innovaciones.','brown',0],
    ['Dev (Desarrollador)','Versión para desarrolladores con funciones y correcciones en proceso de prueba. Más estable que Canary pero aún en desarrollo activo.','brown',0],
    ['Stable (Estable)','Versión final y estable para el público en general. Probada exhaustivamente y adecuada para un uso diario, con todas las características optimizadas y libres de errores significativos.','brown',1],
    ['Búsqueda en Navegador','Proceso donde el navegador envía consultas a un motor de búsqueda, que devuelve resultados relevantes de la web.','green',0],
    ['Motor de Búsqueda','Software que indexa y busca información en la web, proporcionando resultados relevantes a las consultas de los usuarios.','green',0],
    ['Motores de Búsqueda','Google, Bing, Yahoo, y otros son ejemplos de motores de búsqueda populares utilizados para encontrar información en la web.','green',1],
    ['Conexión a un sitio web','El navegador envía solicitudes HTTP al servidor del sitio web, que responde proporcionando la página solicitada.','brown',0],
    ['Protocolo HTTP','Protocolo de transferencia de hipertexto que facilita la comunicación entre navegadores web y servidores, permitiendo la visualización de páginas.','brown',0],
    ['Servidor','Computadora o sistema que almacena y gestiona recursos, proporcionando servicios o información a otros dispositivos, como clientes o usuarios.','brown',0],
    ['Formato de Solicitud','La solicitud del navegador al servidor sigue el formato de solicitud HTTP, que incluye encabezados y métodos como GET o POST.','brown',0],  
    ['Formato de Respuesta','La información se recibe comúnmente en formato HTML, aunque también puede incluir CSS, JavaScript y otros recursos web.','brown',1],    
    ['Lenguaje HTML','Lenguaje de marcado utilizado para crear y estructurar contenido en la web, definiendo la apariencia y el formato de las páginas.','green',0],
    ['Lenguaje CSS','Hojas de estilo en cascada utilizadas para estilizar y diseñar documentos HTML, definiendo la presentación y el aspecto visual de las páginas web.','green',0],
    ['Lenguaje JavaScript','Lenguaje de programación del lado del cliente que permite la interactividad en páginas web, mejorando la experiencia del usuario mediante acciones dinámicas.','green',1],
    ['Interpretación de Web','El navegador interpreta HTML para estructurar, CSS para estilizar y JavaScript para agregar interactividad, mostrando la página web correctamente.','brown',0],
    ['Proceso de Renderizado','Conversión de código HTML, CSS y JavaScript en una representación visual en el navegador, mostrando la página web al usuario.','brown',0],
    ['Motor de Renderizado','Componente del navegador que interpreta y presenta el contenido web, convirtiendo código HTML, CSS y JavaScript en una interfaz visual para el usuario.','brown',0],
    ['Motores de renderizado','Ejemplos incluyen Blink (utilizado por Google Chrome), Gecko (Firefox), WebKit (Safari), y Trident/EdgeHTML (anteriormente en Internet Explorer y Microsoft Edge).','brown',0],
    ['Optimización','Los navegadores realizan optimizaciones para mejorar la velocidad de renderizado.','brown',1],
    ['Pasos de Renderizado','Los motores de renderizado deben seguir algunos pasos para mostrar un sitio web de forma correcta.','green',0],
    ['Análisis HTML','Se analiza el código HTML para construir el DOM.','green',0],
    ['Procesamiento CSS','Se aplican estilos para crear el CSSOM.','green',0],
    ['Combinación','Se combinan DOM y CSSOM para crear el Render Tree.','green',0],
    ['Renderización','Determinación de la posición, tamaño y espacio entre elementos en la página web, considerando estilos CSS y la estructura del Render Tree, para pintar la página.','green',0],
    ['Interactividad','Se agrega la capacidad de respuesta a eventos mediante JavaScript.','green',0],
    ['DOM','Significa Modelo de Objetos del Documento.','brown',0],
    ['DOM','Representación jerárquica y estructurada en memoria de un documento HTML/XML, permitiendo la manipulación dinámica de contenido mediante scripts.','brown',0],
    ['CSSOM ','Significa Modelo de Objetos de Hojas de Estilo en Cascada.','brown',0],
    ['CSSOM ','Representación en memoria de las reglas CSS aplicadas a un documento, permitiendo la manipulación dinámica de estilos mediante scripts.','brown',1],
    ['Render Tree','Estructura de nodos que resulta de la combinación del DOM y el CSSOM, sirviendo como base para la renderización visual de una página web.','green',0],
    ['Nodo en Desarrollo Web','Elemento individual en una estructura jerárquica como el DOM, representando elementos HTML, atributos o texto, siendo la unidad básica para construir la estructura del documento.','green',0],
    ['Caché','Se almacenan recursos para acelerar futuras visitas al mismo sitio web.','green',0],
    ['Reflujo y Repintado','Se minimizan para evitar cambios innecesarios en la visualización.','green',1],
    ['Scripts','Conjunto de instrucciones o código ejecutable, generalmente escrito en JavaScript, que proporciona funcionalidad dinámica y comportamiento interactivo en páginas web.','brown',0],
    ['Funcionalidad Dinámica','Características o acciones que cambian en tiempo real en respuesta a eventos, proporcionando experiencias interactivas y adaptativas en una aplicación web.','brown',0],
    ['Interacción','Respuesta y reacción de una interfaz web a las acciones del usuario, permitiendo la manipulación directa y la participación activa en la experiencia del usuario.','brown',1],
]
for(x=0;x<content.length;x++){
    if(content[x][3]==1){
        cardsContainerContent=cardsContainerContent+`<div class="card ${content[x][2]}"><h2 class="card-title">${content[x][0]}</h2><p class="card-text">${content[x][1]}</p></div><br>`
    }
    else{
        cardsContainerContent=cardsContainerContent+`<div class="card ${content[x][2]}"><h2 class="card-title">${content[x][0]}</h2><p class="card-text">${content[x][1]}</p></div>`
    }
}
cardsContainer.innerHTML=cardsContainerContent