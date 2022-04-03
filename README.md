![UTN BA Centro de e-Learning](https://campus.utnba.centrodeelearning.com/pluginfile.php/1/theme_impression/logo/1642623009/eLearning-fondo-transparente.png)
# Curso Programacion Web FullStack

### Repositorio con el codigo del curso de cada estudiante

<br>

# ¿Cómo funciona?

## Paso 1

### El estudiante debe cargar una clave SSH publica a su perfil de Github, [documentación oficial](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)

* Basicamente es ejecutar el comando `ssh-keygen` luego el contenido
del archivo `id_rsa.pub` agregarlo en la seccion de `SSH Keys` en la configuracion de Github

## Paso 2

### El estudiante debe tener permiso como colaborador a este repositorio, el cual debera clonarlo en su repositorio local, pero no de la forma tradicional sino por conexion por SSH:  
<h3 align="center" style="color:#f6a700">git clone git@github.com:jhoacar-utn/course.git</h3>

### Ya con el repositorio clonado en local, debera crear una rama con su nombre y apellido separados por el caracter `_`, ejemplo:

* El estudiante con nombre Jhoan Carrero debera crear una rama `jhoan_carrero`
<br>Para ello debera ejecutar: `git checkout -b jhoan_carrero`
<br>Esto creara la rama y tambien se posicionara en ella

## Paso 3

### El estudiante debe crear una carpeta con el mismo nombre que creo la rama

* Puede hacerlo con el mouse o escribiendo el comando: `mkdir jhoan_carrero`


## Paso 4

### Se debe tener la siguiente estructura de carpetas:
   
    utn   
    └── jhoan_carrero
            └── lessons (Se guardaran acá los apuntes del curso)
                  ├── lesson_1       
                  ├── lesson_2 ( Se organizaran por clase )
                  ├── ...
            └── project ( Se guardara acá el progreso de la aplicación )
                  ├── backend_node
                  ├── frontend_angular    
                  └── frontend_react
            └── index.js (Archivo fundamental para que este en produccion el codigo que desee)

## Para hacerlo mas rapido podes realizar un merge con la rama jhoan_carrero y luego cambiar los directorios a tu nombre, ejecutando el siguiente comando, cambiando solo el valor de user_test por el nombre correspondiente se configurara tu entorno con el de la rama jhoan_carrero:
`
STUDENT=user_test; 
EXISTING=jhoan_carrero; 
git checkout $EXISTING; 
git checkout -b $STUDENT; 
find ./utn -iname "$EXISTING" | while read FILE; 
    do 
    NEW_FILE="$(sed -e "s/$EXISTING/$STUDENT/" <<< $FILE)"; 
    mv "${FILE}" "${NEW_FILE}" ; 
    done; 
find ./utn -type f -exec sed -i "s/$EXISTING/$STUDENT/g" {} \;
find . -iname "*README*" -exec sed -i "s/$EXISTING/$STUDENT/g" {} \;
`

## Tiene la opcion de crear un archivo, por ejemplo, script.sh y ejecutarlo atraves de la consola ./script.sh dandole previamente permisos de ejecucion con `chmod +x ./script.sh`

<br>

# Notas

<h2 align="center"> Todo el codigo que se realice sera hosteado a través del dominio</h2>
<br> 
<h1 align="center"><a href="https://utn-course.web.app">https://utn-course.web.app</a></h1>
<br>

### Esta estructura es probable a cambios futuros, se debe cumplir al 100% ya que depende eso como es la forma de trabajo de cada uno y como cumple las normativas del equipo. 

<br>

### Durante todo el curso estaremos usando [Visual Studio Code](https://code.visualstudio.com/download) como editor de codigo.

<br>

### Tambien es recomendable una [Git Bash](https://git-scm.com/downloads) para tener una consola interactiva de comandos y un desarrollo agil, donde pueda ver en todo momento la rama de trabajo.

<br>

### Si desea trabajar mucho mas comodo les recomiendo instalar [Docker](https://www.docker.com/get-started/) en su computadora y asi pueden levantar un entorno de desarrollo en segundos.

<br>



# Clases (contenido para cada clase)

## Clase 1 (Nivelacion)

 * Lenguajes de Programacion (Compilados e Interpretados)
     * ) Metafora: Recetas de Cocina 
 * Protocolos de Comunicación y Servicios:
     * ) TCP (Protocolo de Control de Transmision)
     * ) UDP (Protocolo de Datagramas de Usuario)
     * ) IP (Protocolo de Internet, Ubicacion en la red de una maquina)
     * ) Puertos (Servicios que brinda la maquina, ejemplo el puerto 80 es para servicio web)
     * ) HTTP (Protocolo de Transferencia de HyperTexto)
     * ) DNS (Servicios de Nombres de Dominio)
 * Navegacion Web
     * ) HTML,CSS,Javascript
     * ) Conocimientos del DOM
     * ) Funciones
     * ) Objetos
 * Trabajo Practico de Nivelacion
     * ) Luego de clonado el repositorio debera realizar un merge con la rama `tasks` que 
     contendra la informacion del primer TP
     a realizar, no sera de caracter obligatorio.
     Para proceder a hacer un merge deberas asegurarte que te encuentras en tu rama de trabajo, ejemplo `jhoan_carrero`, luego
     ejecutas el comando `git pull origin tasks`,
     esto traera todas las tareas que haya dejado en esa rama.
     El contenido se encuentra aca: <br><h1 align="center" ><a href="https://utn-course.web.app/tasks/lesson_1/index.html">https://utn-course.web.app/tasks/lesson_1/index.html
     </a></h1><br>
     * ) Para entregarlo debera estar guardado en la carpeta correspondiente a la clase, es decir, en `lessons/lesson_1` y se pedira una pull request atraves de `github` para que sea
     posteriormente corregido.

## Clase 2 (Introduccion a NodeJS)

 * ¿Que es NodeJS? ¿Para que me puede servir?
    * ) Motor V8 (Chrome's V8 JavaScript engine)
    * ) Problemas de concurrencia
    * ) Adaptabilidad en frontend y backend
 * Instalacion de NodeJS
    * ) [https://nodejs.org/es/download](https://nodejs.org/es/download/)
 * Uso de Node JS
    * ) Mi primer: `JEJEJE Aqui metiendome al backend`
 * Modularizacion
    * ) Mi primer: `JEJEJE Aqui imprimiendo algo de otro archivo`
 * Eventos y Callbacks
    * ) Jugando con `require('events')`
    * ) Emitiendo un evento especifico llamado `mostrar_fecha` con la fecha actual y mostrarlo por consola cada 1 segundo.
    * ) Levantando mi primer servidor HTTP y mostrando `Primer mensaje del backend`



## Clase 3 (Introduccion a Express)

 * ¿Que es Express? ¿Para que me puede servir?
    * ) Framework para desarrollo web
    * ) Flexibilidad de trabajo  
 * Instalacion de Express ( `npm` )
    * ) `npm install express`
    * ) Gestor de Paquetes `package.json`
 * Enrutamiento
    * ) Express Router
    * ) Verbos HTTP y Cabeceras
      * ) Verbos: GET, POST, DELETE, PUT, ...
      * ) Cabeceras: Content-Type, Server, User-Agent, ...
    * ) Modularizacion de Rutas
    * ) Crear endpoint `GET: lessons/lesson_1` donde la respuesta debera ser el primer TP del curso.
 * Middlewares (Software que se pone en medio)
    * ) Autenticar un usuario
    * ) Proteger las rutas con los usuarios autenticados

## Clase 4 ( Persistencia de la Informacion )

 * ¿Porque guardarlo en Bases de Datos?
    * ) Control de la informacion
    * ) Control de Seguridad
    * ) Flexibilidad y Rapidez en consultas
 * Base de Datos Relaciones ( MySQL ) 
    * ) Conexion a Base de Datos Remota
        * ) [MySQL Workbench](https://dev.mysql.com/downloads/workbench/) Visor de base de datos MySQL
        * ) La base de datos se encontrara bajo el dominio <br><h1><a href="https://mysql.utn.jhoacar.me">mysql.utn.jhoacar.me</a></h1>
        * ) Las credenciales seran el nombre de la rama que se haya creado al igual que la contraseña, ejemplo:<br>`usuario : jhoan_carrero`<br>`contraseña: jhoan_carrero`
        * ) La base de datos sera el mismo nombre de la rama, ejemplo: `jhoan_carrero` 
 * Express y MySQL
    * ) `npm install mysql`
    * ) Procesamiento de Variables de Entorno
      * ) `npm install dotenv`
    * ) Guardar la informacion de una peticion
    * ) Guardar la sesion en la base de datos
    * ) Hashear las contraseñas
      * ) `npm install bcrypt`

## Clase 5 ( Introduccion a API )

 * ¿Que es una API? ¿Para que me puede servir?
 * [PostMan](https://www.postman.com/downloads/) Herramienta para testear APIs
 * JWT (JSON Web Tokens)
   * ) `npm install jsonwebtoken`
   * ) Registro en la base de datos
   * ) Validacion de sesion
   * ) Proteccion de rutas ( Middlewares, CORS )
 * Modulos utiles
   * ) Multer
   * ) Formidable
   * ) PDF
   * ) ... 

## Clase 6 ( Repaso de NodeJS )

 * Hagamos una API

## Clase 7 ( Introduccion a MongoDB )

 * ¿Que es MongoDB? ¿Para que me puede servir?
 * Base de Datos No Relaciones ( NoSQL ) 
    * ) Conexion a Base de Datos Remota
        * ) [MongoDB Compass](https://www.mongodb.com/try/download/compass) Visor de base de datos MongoDB
        * ) La base de datos se encontrara bajo el dominio <br><h1><a href="https://mongo.utn.jhoacar.me">mongo.utn.jhoacar.me</a></h1>
        * ) Las credenciales seran el nombre de la rama que se haya creado al igual que la contraseña, ejemplo: <br> `usuario : jhoan_carrero` <br> `contraseña: jhoan_carrero`   
        * ) La base de datos sera el mismo nombre de la rama, ejemplo: `jhoan_carrero` <br> `MONGO_URI=mongodb://jhoan_carrero:jhoan_carrero@mongo.utn.jhoacar.me:27017/jhoan_carrero` <br>
 * Colecciones
 * Documentos
 * CRUD (Create, Read, Update, Delete)

## Clase 8 (Repaso y Conexion NodeJS con Mongo)

* Express y MongoDB
    * ) `npm install mongoose`
    * ) Procesamiento de Variables de Entorno
    * ) Guardar la informacion de una peticion
    * ) Guardar la sesion en la base de datos
    * ) Hashear las contraseñas

## Clase 9 (Practica de MongoDB)

* Usemos la API con Mongo

## Clase 10 (Introduccion a Typescript)

 * ¿Que es Typescript? ¿Para que me puede servir?
   * ) Transpilador de Javascript
   * ) Tipado Estatico
 * Clases, Atributos y Objetos
 * Constructor y Herencia de Clases
 * Sintaxis

## Clase 11 (NodeJS y Typescript)

   * Creando una API con Typescript

## Clase 12 (Introduccion a Angular)

 * ¿Que es Angular? ¿Para que me puede servir?
   * ) Framework de Frontend
   * ) Tipado Estatico
 * Angular CLI `npm install -g @angular/cli`
 * `ng new my-app`
 * Generacion de Componentes
 * Variables Tipadas
 * Eventos

## Clase 13 (Servicios en Angular) 

 * Generacion de Servicios
 * Comunicacion entre componentes y servicios
 * Comunicacion entre componentes

## Clase 14 (Conexiones en Angular)
 
 * Conexion entre Angular y NodeJS
 * Procesamiento de JWT
 * Generacion de modulos para verificacion de usuarios

## Clase 15 (Practica de Angular)

 * Creemos una interfaz con conexion a una API por JWT

## Clase 16 (Introduccion a ReactJS)

 * ¿Que es ReactJS? ¿Para que me puede servir?
   * ) Framework de Frontend
   * ) Adaptabilidad por JSX
 * Componentes y JSX
 * Ejemplos: `npx create-react-app my-app`



