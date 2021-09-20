# Store test
## Instalación

Stack utilizado:
- node 14
- postgresql 13
- sequelize 6.6.5
- passport jwt

Base de datos
- modificar los parametros de conección en el archivo: src/config/config.json
- crear la base de datos a conectar

Intalación de dependencias

```bash
npm install
```
instalar sequelize-cli global
```bash
npm install -g sequelize-cli
```
migracion de base de datos
```bash
sequelize db:migrate
```
ejecutar seed
```bash
sequelize db:seed:all
```

ejecutar api

```bash
npm run dev
```

## Endpoints

### $host/register

data necesaria: 

{

"fullname": string

"email": string

"password": string

}

Respuesta:

mensaje de petición exitosa, 
instancia de usuario, con el token generado



### $host/login
data necesaria: 

{



"email": string

"password": string

}

Respuesta:

mensaje de petición exitosa, instancia de usuario, con el token generado


### $host/store-promotion
data necesaria: 

{



"arrayItems": ["TSHIRT","TSHIRT","HAT","PANTS"]

}

dentro del arreglo de arrayItems, especificamos los items presentes en la compra para generar el descuento correspondiente

Respuesta:

arrayItems: atributo que contiene los items de la peticion


Total: el precio final con los descuentos correspondientes



## Pruebas unitarias

para correr las pruebas es con el comando:
- npm run test

los usuarios generados para el test son estaticos dentro del codigo, en las variables correspondientes, userRegister y user_object

Es importante al momento de querer generar otra prueba, cambiar los contenidos de las variables, debido a que al crearse el usuario va a regresar otro tipo de respuesta y status, que no van a coincidir con las pruebas.



## Docker

Principalmente para docker también es necesario modificar el archivo src/config/config.json
 y que "development" se encuentre con los parametros especificos de "docker", posteriormente ejecutamos:


 
```bash
docker-compose build
```

para que se ejecute:


```bash
docker-compose up
```





