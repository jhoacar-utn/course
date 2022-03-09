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

<br>

# Notas

### El estudiante recibira instrucciones de que informacion sera guardada en esa carpeta a raiz que el profesor lo decida evaluar, cabe destacar que se espera que se cumplan todos estos requerimientos y se tenga una organizacion clara sobre el proyecto

