# Mi Aplicación .NET y React

Esta aplicación consiste en una API backend desarrollada con .NET y un frontend en React.

## Requisitos previos

- [.NET SDK](https://dotnet.microsoft.com/download) (versión 8.0 o superior)
- [Node.js](https://nodejs.org/) (versión 14.0 o superior)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) cuenta y cluster

## Configuración

1. Clona este repositorio en tu máquina local.

2. Configura la conexión a MongoDB:
   - Abre el archivo `api/Services/MongoDBService.cs`.
   - En la línea 13, reemplaza la cadena de conexión con tu propia cadena de conexión de MongoDB Atlas(o una instancia local de MongoDB).

## Iniciar el backend (API)

1. Abre una terminal y navega al directorio de la API:
2. Ejecuta el siguiente comando para iniciar la API: dotnet run
La API estará disponible en `https://localhost:5262` (o el puerto que hayas configurado).
3. Inicia la aplicación React: El frontend estará disponible en `http://localhost:5173` (o el puerto que Vite asigne).



## Iniciar el frontend
1. Abre una nueva terminal y navega al directorio del frontend: cd frontend
2. Instala las dependencias (si aún no lo has hecho): npm install

## Notas adicionales

- Asegúrate de que la API esté en funcionamiento antes de iniciar el frontend.
- Verifica que la cadena de conexión de MongoDB sea correcta y que tu IP esté en la lista blanca de MongoDB Atlas.
- Si encuentras problemas de CORS, verifica la configuración de CORS en el backend.

## Soporte

Si tienes problemas o preguntas, por favor abre un issue en este repositorio.
