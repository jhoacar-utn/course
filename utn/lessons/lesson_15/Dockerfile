# specify the node base image with your desired version node:<version>
FROM node:16

# Creamos la carpeta /app antes para que se copien los archivos
RUN mkdir /app
# La syntaxis de RUN es para ejecutar un comando en el contenedor

# Copiar archivos desde mi host hacia el contenedor
COPY . /app
# replace this with your application's default port
EXPOSE 5000