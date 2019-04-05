module.exports= `
#comentario en el sistema graphiql
    type Curso {
        id: ID!
        titulo: String!
        descripcion: String!
        profesor: Profesor
        #descripcion del curso
        rating:  Float @deprecated(reason: "Campo en desuso")
        comentarios: [Comentario]
    }
    type Comentario {
        id: ID!
        nombre: String!
        cuerpo: String!
    }
    input NuevoCurso{
        titulo: String!
        descripcion: String
    }
    input CursoEditable{
        titulo: String!
        descripcion: String
    }
`;