# prueba_back_tyba

Primero instalas todas las dependencias:
``npm install``

Ejecutar el comando para compilar a javascript:
``npm run tsc``

y por ultimo correr:
``npm start``

apis realizadas:

Registro
--request POST 'http://localhost:3000/register' \
--header 'Content-Type: application/json' \
--data-raw '{
    "username": "jose",
    "password": "1234567",
    "name": "Maria Jose Grau"
}

Login
--request POST 'http://localhost:3000/login' \
--header 'Content-Type: application/json' \
--data-raw '{
    "username": "maria",
    "password": "1234567"
}

logout
--request POST 'http://localhost:3000/logout' \
--header 'x-access-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiaWF0IjoxNjUzMTUyMzc2LCJleHAiOjE2NTMxNTU5NzZ9.euQqHGn5rYz5HGVngxEBV920Ozcu6Upfd7OKq4ATk9E'

historial de transacciones
--request GET 'http://localhost:3000/history' \
--header 'x-access-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiaWF0IjoxNjUzMTUyMzc2LCJleHAiOjE2NTMxNTU5NzZ9.euQqHGn5rYz5HGVngxEBV920Ozcu6Upfd7OKq4ATk9E'