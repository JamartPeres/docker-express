#Se establece la imagen en la que se basará mi imagen
FROM node:latest
#Se establece el directorio para que se ejecuten todos los comandos
WORKDIR /usr/src/app
#Se copian todos los archivos del directorio actual
COPY . .
#Para instalar las dependencias necesarias
RUN npm install
#Como extra se documenta dónde escuchará el contenedor
EXPOSE 3000
#Se define el comando que se debe ejecutar cuando el contenedor inicie
CMD ["node", "./bin/www"]
