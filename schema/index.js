const { makeExecutableSchema, addMockFunctionsToSchema } = require('graphql-tools')
const resolvers = require('../resolvers')
const Profesor = require('./Profesor')
const Curso = require('./Curso')

const rootQuery = `
  union ResultadoBusqueda = Profesor | Curso

  type Query {
    cursos: [Curso]
    profesores: [Profesor]
    curso(id: Int): Curso
    profesor(id: Int): Profesor
    buscar(query: String!): [ResultadoBusqueda]
  }

  type Mutation {
    profesorAdd(profesor: NuevoProfesor): Profesor
    profesorEdit(profesorId: Int!, profesor: ProfesorEditable): Profesor
    profesorDelete(profesorId: Int!): Profesor
    cursoAdd(curso: NuevoCurso):Curso
    cursoEdit(cursoId: Int!, curso: CursoEditable): Curso
    cursoDelete(cursoId: Int!):Curso
  }
  type Subscription{
      nuevoComentario(cursoId: Int!): Comentario
  }
`;

//los type query(endpoints) definimos las rutas disponibles 
const schema = makeExecutableSchema({
  typeDefs: [rootQuery, Profesor, Curso],
  resolvers
});

// para generar data falsa (para pruebas)
// addMockFunctionsToSchema({ //recibe dos valores: 1. a que schema le generamos data falsa
//     schema,                                   // 2. mocks: parecido los resolvers, donde le diremos como se resulve cada entidad
//     mocks:{
//         Curso: () =>{
//             return{
//                 id: casual.uuid ,
//                 titulo: casual.title ,
//                 descripcion: casual.description
//             }
//         },
//         Profesor: () =>{
//             return{
//                 nombre: casual.name,
//                 genero: casual.random_element(['MASCULINO','FEMENINO']),
//                 id: casual.uuid,
//                 nacionalidad: casual.country
//             }
//         }
//     },
//     preserveResolvers: true//si es true no toma los valores de los mocks si no de los resolvers
// })
module.exports = schema