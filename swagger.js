const swaggerJSDoc = require('swagger-jsdoc');
const path = require('path');

const swaggerDefinition = {
    swagger: "2.0",
    info: {
        version: "1.0.0",
        title: "bHive",
        description: "The bHive Cooperative aims to localise spending, ownership and work."
    },
    schemes: ["http"],
    host: "localhost:8000",
    basePath: "",
};

// options for the swagger docs
const options = {
    // import swaggerDefinitions
    swaggerDefinition,
    // path to the API docs
    apis: [path.join(__dirname,'/docs/**/*.yaml')]
};
// initialize swagger-jsdoc
module.exports = swaggerJSDoc(options);