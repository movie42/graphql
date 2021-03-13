import { persons, getById } from "./db";

const resolvers = {
  Query: {
    people: () => persons,
    person: () => getById(),
  },
};

export default resolvers;
