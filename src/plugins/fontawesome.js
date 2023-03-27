import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faWhatsapp, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faWhatsapp, faStar, faInstagram, faTiktok)

Vue.component('font-awesome-icon', FontAwesomeIcon)

/* Instalando Font Awesome dentro de Vue
Ciertamente existen muchas formas de utilizar Font Awesome en un proyecto: puedes incluirlo a través de un CDN, puedes descargar la librería y agregar los archivos manualmente, pero en mi caso, lo instalaré a través de npm ya que esto me permitirá solo agregar los iconos de la librería que vaya necesitando y no toda la librería completamente.

Ejecuta estos tres comandos en una terminal (uno a la vez) para agregar la librería y los componentes que necesitas:

npm i --save @fortawesome/fontawesome-svg-core
npm i --save @fortawesome/free-solid-svg-icons
npm i --save @fortawesome/vue-fontawesome
npm i --save @fortawesome/free-brands-svg-icons
npm i --save @fortawesome/free-regular-svg-icons

El primer comando incluye el núcleo de la librería, el segundo el paquete de iconos
solid el cual contiene los iconos free y el tercer comando instalará el plugin de Font Awesome
para vue que permitirá incluirlos como un componente.

La documentación oficial te sugiere agregarlos directamente dentro del archivo main.js, sin embargo,
considero esto poco óptimo ya que estaríamos llenando este archivo de llamadas a los iconos que vayamos
necesitando y esto no debería ser su funcionalidad.

En mi caso y por lo simple del ejemplo vamos a crear un directorio plugins donde incluiremos un archivo
Javascript para importar Font Awesome en el proyecto. Este directorio debemos crearlo dentro de src:

directorio del proyecto con la carpeta plugins

Ahora dentro de este directorio creamos el archivo Javascript. Puedes llamarlo como quieras pero sugiero
que el nombre esté relacionado con su contenido. En mi caso lo llamaré fontawesome.js

Dentro de este archivo agregamos las siguientes instrucciones:

import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faHome)

Vue.component('font-awesome-icon', FontAwesomeIcon)
La primera instrucción hace el llamado al core de Vue el cual es necesario, el segundo import se encarga
de agregar el core de Font Awesome, la siguiente instrucción es donde vamos a ir agregando entre las llaves
{} el nombre de los iconos que vayamos necesitando en formato camelCase. En nuestro caso y a modo de ejemplo
estoy incluyendo el icono de una casa, el último import se encarga de llamar el plugin de Font Awesome para Vue.

La instrucción library.add()se encargará de ir agregando los iconos que necesitemos. Los nombres aquí deben ser
iguales a los nombres del tercer import donde agregamos los iconos que necesitamos.

Finalmente, la última instrucción se encarga de generar un componente de Vue al que llamaremos font-awesome-icon
y le pasaremos nuestro plugin de Font Awesome para Vue FontAwesomeIcon.

Ya con esto solo nos queda incluir nuestro archivo dentro de main.js para tenerlo global en todo el proyecto,
 aunque también pudiésemos agregarlo solo en los componentes que lo vayamos requiriendo.

Para ello, en el archivo main.js agregamos la instrucción:

require('./plugins/fontawesome');
Ya para probar que todo va bien, vamos al componente donde requerimos nuestros iconos
 (en mi caso utilizaré el archivo App.vue) y llamamos el icono dentro del template (previamente elimino todo el contenido del template de App.vue para mostrar únicamente el icono)

<template>
  <div id="app">
    <font-awesome-icon icon="fa-brands fa-whatsapp"/>
  </div>
</template> */