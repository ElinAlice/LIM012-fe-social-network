<p align="center">
  <img src="https://storage.googleapis.com/md-links/titleBig.png">
</p>

# Red Social - Bienvenida a Lima|topia...
## 1. Resumen
Se construyó una aplicación web, una red social, donde los usuarios pueden interactuar, compartiendo información, sobre eventos que se realizan en la ciudad de Lima capital del Perú. Esta aplicación permitirá el acceso a usuarios que inicien sesión, para administrar su perfil, compartir publicaciones, hacer comentarios, dar like a publicaciones de su preferencia.

- Vista portada

![portada]()

- Vista home 

![home y publicaciones]()

- Vista Profile

![Profile]()


## Arquitectura de la aplicación

A continuación te proporcionamos el layout (diseño) de la vista mobile y desktop.

- Vista mobile

  ![mobile](https://storage.googleapis.com/md-links/vistasMobile.png)

- Vista Desktop

  ![desktop](https://storage.googleapis.com/md-links/viewDesktop.png)

## 2. Definición del producto
### 2.1 Usuarios
* Para jóvenes y adultos que tengan cierto interés en buscar opciones para pasar el tiempo libre, por lo que necesitan estar al tanto de opciones para disfrutar un tiempo agradable, y también compartir sus opciones a los demás.
### 2.2 Objetivo
Crear una aplicación web, una Red Social para compartir información sobre eventos en la ciudad de Lima-Perú.

### 2.3 Problemas que soluciona
* Crear una nueva cuenta para el acceso del perfil.
* Opciones de acceso (cuenta de google o facebook).
* Recuperar contraseña.
* Acceso al perfil con una cuenta.
* Muestra información del dueño del perfil.
* El dueño puede configurar su nombre, foto, portada para identificarse.
* Crear un nuevo post (texto y/o imágen).
* Configurar su post, público o privado.
* Editar un post.
* Eliminar un post.
* Agregar comentarios (testo y/o imagen)
* Eliminar un comentario.
* Darle like a los post de preferencia.

## 3. Planificación

### 3.1 Múltiples vistas

En proyectos anteriores nuestras aplicaciones habían estado compuestas de una
sola _vista_ principal (una sóla _página_). En este proyecto se introduce la
necesidad de tener que dividir nuestra interfaz en varias _vistas_ o _páginas_
y ofrecer una manera de navegar entre ellas.

### 3.2 Escritura de datos

En los proyectos anteriores hemos consumido (leído) datos, pero todavía no
habíamos escrito datos (salvar cambios, crear datos, borrar, ...). En este
proyecto tendrás que crear (salvar) nuevos datos, así como leer, actualizar y
modificar datos existentes. Estos datos se podrán guardar de forma remota
usando [Firestore](https://firebase.google.com/docs/firestore) o de forma
local utilizando`localStorage`.

### 3.3 Autenticación y autorización

Para esto utilizarás respectivamente
[`Firebase authentication`](https://firebase.google.com/docs/auth/) y
[`Firestore security rules`](https://firebase.google.com/docs/firestore/security/get-started)

### 3.4 Creación de un database en Firebase
* Para crear una nueva colección; utilizarás la siguiente documentación:
[`Modelo de datos Clout Firestore `](https://firebase.google.com/docs/firestore/data-model?hl=es-419#collections)
* Para agregar datos en una colección: 
[`Agregar datos`](https://firebase.google.com/docs/firestore/manage-data/add-data?hl=es-419)
* Para eliminar datos en una colección:
[`Borrar datos`](https://firebase.google.com/docs/firestore/manage-data/delete-data?hl=es-419)
* Para mostrar datos de una colección en tiempo real:
[`Leer datos`](https://firebase.google.com/docs/firestore/query-data/listen?hl=es-419)
* Para actualizar datos en una colección:




### Objetivos de aprendizajes pendientes


### HTML y CSS

* [ ] [HTML semántico](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML)
* [ ] [CSS `flexbox`](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
* [ ] Construir tu aplicación respetando el diseño realizado (maquetación).

### DOM y Web APIs

* [ ] [Manipulación dinámica del DOM](https://developer.mozilla.org/es/docs/Referencia_DOM_de_Gecko/Introducci%C3%B3n)
* [ ] [History API](https://developer.mozilla.org/es/docs/DOM/Manipulando_el_historial_del_navegador)
* [ ] [`localStorage`]

### Javascript

* [ ] [Uso de callbacks](https://developer.mozilla.org/es/docs/Glossary/Callback_function)
* [ ] [Consumo de Promesas](https://scotch.io/tutorials/javascript-promises-for-dummies#toc-consuming-promises)
* [ ] Uso ES modules
([`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
| [`export`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export))

### Firebase

* [ ] [Firestore](https://firebase.google.com/docs/firestore)
* [ ] [Firebase Auth](https://firebase.google.com/docs/auth/web/start)
* [ ] [Firebase security rules](https://firebase.google.com/docs/rules)
* [ ] [Uso de onSnapshot](https://firebase.google.com/docs/firestore/query-data/listen)
| [onAuthStateChanged](https://firebase.google.com/docs/auth/web/start#set_an_authentication_state_observer_and_get_user_data)

### Testing

* [ ] [Testeo de tus funciones](https://jestjs.io/docs/es-ES/getting-started)
* [ ] [Testeo asíncrono](https://jestjs.io/docs/es-ES/asynchronous)
* [ ] [Mocking](https://jestjs.io/docs/es-ES/manual-mocks)

### Colaboración en Github

* [ ] Branches
* [ ] Pull Requests
* [ ] Tags

### Organización en Github

* [ ] Projects
* [ ] Issues
* [ ] Labels
* [ ] Milestones

### Buenas prácticas de desarrollo

* [ ] Modularización
* [ ] Nomenclatura / Semántica
* [ ] Linting

***
