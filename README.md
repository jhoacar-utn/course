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

    ./jhoan_carrero
       └── lessons                 Se guardaran acá los apuntes del curso
            ├── clase_1       
            ├── clase_2            Se organizaran por clase
            ├── ...
       └── project                  Se guardara acá el progreso de la aplicación
            ├── backend_node
            ├── frontend_angular    
            └── frontend_react

## Para hacerlo mas rapido podes ejecutar el siguiente comando, solo cambiando el nombre del estudiante jhoan_carrero
`
STUDENT=jhoan_carrero; mkdir -p $STUDENT/lessons/clase_1 $STUDENT/project/backend_node $STUDENT/project/frontend_react $STUDENT/project/frontend_angular 
`

<br>

# Notas

### Esta estructura es probable a cambios futuros, se debe cumplir al 100% ya que depende eso como es la forma de trabajo de cada uno y como cumple las normativas del equipo.

# Clases (contenido para cada clase)

## Clase 1

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
     


