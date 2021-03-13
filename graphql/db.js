export const persons = [
  { id: "12", name: "HYUNSU", age: 20, gender: "male" },
  { id: "1", name: "SUJI", age: 12, gender: "female" },
  { id: "2", name: "JENYPER", age: 20, gender: "female" },
];

export const getById = (id) => {
  const filteredPeople = people.filter((person) => people.id === id);
  return filteredPeople[0];
};
