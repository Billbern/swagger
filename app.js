//require
const express = require('express');
const http = require('http');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.js');


//initializations
const app = express();


//documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


// Starting server http 
const httpServer = http.createServer(app);

//Server http
httpServer.listen(8000, () => {
    console.log('HTTP Server listen on port', 8000);
});