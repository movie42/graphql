const HyunSU = {
    name: "Hyunsu",
    age: 20,
    gender: "male"
}

const resolvers = {
    Query: {
        person: ()=> HyunSU
    }
}

export default resolvers