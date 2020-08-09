const {GraphQLServer} = require('graphql-yoga')

// 1
const typeDefs = `
type Query {
   greeting:String
   message:String
   students:[Student]
   studentById(id:ID!):Student
}

type Student {
   id:ID!
   firstName:String
   lastName:String
   password:String
   college:College
}
type College {
   id:ID!
   name:String
   location:String
   rating:Float
}
type Mutation {
   createStudent(firstName:String,lastName:String,password:String):String
}
`

// 2
const resolvers = {
    Query: {
        greeting: () => "hello from  TutorialsPoint !!!",
        message: () => "Hello TEsting this side",
        students: () => [{
            id: "1",
            firstName: "sagar",
            lastName: "shankhala",
            password: "test",
            college: {id: "College Id", name: "SRM", location: "Raj"}
        },
            {
                id: "2",
                firstName: "test",
                lastName: "rahul",
                password: "dumymmm"
            }
        ],
        studentById: (root, args, context, info) => {
            return {
                id: args.id,
                firstName: "sagar",
                lastName: "shankhala",
                password: "test"
            }
        }
    },
    Mutation: {
        createStudent: (root, args, context, info) => {
            console.log(args);
            return "Record is saved successfully."
        }
    }
};

// 3
const server = new GraphQLServer({
    typeDefs,
    resolvers,
})
server.start(() => console.log(`Server is running on http://localhost:4000`))