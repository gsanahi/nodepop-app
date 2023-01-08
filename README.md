# TP Nodepop-APP

Proyecto desarrollado en javascript que simula un servicio de venta de artículos de segunda mano.
Permite crear y obtener artículos de una base de datos Mongo.

## Herramientas utilizadas

- Express
- Mongoose
- Faker (Para generar los artículos iniciales)

## Ejecución y configuración

### Instalar dependencias

Para instalar las dependencias ejecutar `npm install`

### Inicializar base de datos

Para inicializar la base de datos ejecutar el comando `npm run init-db`.

> Cuidado: Esto borrara la base de datos existente si existe.

### Iniciar el proyecto

Para iniciar el proyecto ejecutar el comando `npm start`, el mismo va a ejecutar en `http://localhost:3000/`

## APIs

### Ads

- `POST` `/api/ads`: Permite crear un nuevo Anuncio validando sus parametros. Recibe un JSON de la siguiente forma:

```json
    {
    "name": "Nombre del producto",
    "price": 100.0,
    "sale": true,
    "tags": ["work"],
    "photo": "foto.jpg"
    }
```

- `GET` `/api/ads/list`: Permite obtener el listado de productos y se le pueden pasar los siguientes parametros:
  - `price`: Permite filtrar por precio. Ejemplos: `100`, `50-`, `-20`, `20-50`
  - `name`: Permite filtrar por nombres que empiezan con su valor (case insensitive). Ejemplo: `comp` encuentra `Computer`
  - `tag`: Permite filtrar por tag
  - `sale`: Permite filtrar si es venta o no. `true`/`false`
  - `start`: Permite saltar elementos para el paginado. Defecto: 0.
  - `limit`: Permite definir el tamaño de la página. Defecto: 5
  - `sort`: Permite ordenar por cualquier campo.

- `GET` `/api/ads/:id`: Permite obtener un producto por id

### Tags

- `GET` `/api/tags`: Permite listar los tags disponibles