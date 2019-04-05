const schema = require("./schema")
const resolver = require('./resolvers.js')
require('./db/setup')

const { ApolloServer, gql } = require('apollo-server');

const server = new ApolloServer({ schema, resolver,
    formatError: (error) =>{
        return {
            location: error.locations,
            name: error.name,
            mensaje: error.message
        }
    }
 });
const PORT = 8080;
server.listen(PORT, () => {
    console.log('Servidor corriendo OK en el puerto 8080')
})
//se corre con node index.js


