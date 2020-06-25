# Red Social - Bienvenida a Lima|topia
<p align="center">
  <img src="https://storage.googleapis.com/md-links/titleBig.png">
</p>

## 1. Resumen
Se construyó una aplicación web, una red social, donde los usuarios pueden interactuar, compartiendo información, sobre eventos que se realizan en la ciudad de Lima capital del Perú. Esta aplicación permitirá el acceso a usuarios que inicien sesión, para administrar su perfil, compartir publicaciones, hacer comentarios, dar like a publicaciones de su preferencia.

- Vista portada

![portada](https://github.com/ElinAlice/LIM012-fe-social-network/blob/master/src/assets/app/Login.PNG?raw=true)

- Vista home 

![home y publicaciones](https://github.com/ElinAlice/LIM012-fe-social-network/blob/master/src/assets/app/home.PNG?raw=true)

- Vista Profile

![Profile](https://github.com/ElinAlice/LIM012-fe-social-network/blob/master/src/assets/app/profile.PNG?raw=true)


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

* Para esto utilizarás respectivamente
[`Firebase authentication`](https://firebase.google.com/docs/auth/) y
[`Firestore security rules`](https://firebase.google.com/docs/firestore/security/get-started)

### 3.4 Creación de un database en Firebase
* Para crear una nueva colección en Firebase, usamos el Cloud Firestorage, y realizar  tener interacción para  crear, mostrar, eliminar y actualizar; utilizarás la siguiente documentación:
[`Modelo de datos Clout Firestore `](https://firebase.google.com/docs/firestore?hl=es-419)

### 3.5 Subir en Firebase
* Neceitamos que la aplicación pueda subir y cargar archivos, por eso necesitaremos la funcionalidad del Storage de Firebase, donde se almacen los archivos; utilizaremos la siguiente documentación: 
[`Clout Cloud Storage`](https://firebase.google.com/docs/storage?hl=es-419)
