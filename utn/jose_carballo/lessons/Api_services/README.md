# WebServer Api


# WebService CRUD

### Este es un *BackEnd* que te permite realizar todas las funsionalidades de un *CRUD* 
El mismo cuenta con algunos endpoins donde podrar realizar las operaciones necesarias para el registro modificaciones de cLientes
##
#### POST http://localhost:5000/clients   Crear un CLiente
#### GET  http://localhost:5000/clients  Muestra todos los CLientes registrados
#### GET  http://localhost:5000/clients/:id Obtener CLiente por ID
#### PUT  http://localhost:5000/clients/:id Actualizar el Cliente
#### DELETE  http://localhost:5000/clients/:id Eliminar el cliente


* Recuerden que deben ejecutar ```npm install``` para reconstruir los modulos de Node.

#### NOTA:
##
 Debes configuras tu archivo `.env `con las variables de entornos donde se incluiran el usuario y contraseña del clouster o tu base de datos local ademas del path de coneccion y la llave secreta que se necesita para generar los token de authenticacion, para mas informacion verifica el archivo `.example.env` donde encontraras ejemplo de las variables que necesitas