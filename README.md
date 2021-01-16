# To add https to NodeJs server
 To add https protocol to nodejs server



## Initialization
- % npm init
- % npm install express --save
- % npm install
- % npm install jade

## Certification
- % openssl req -new -newkey rsa:2048 -nodes -out mydomain.csr -keyout private.key
- % openssl x509 -req -days 365 -in mydomain.csr -signkey private.key -out mydomain.crt

## Demo
- % node index.js
