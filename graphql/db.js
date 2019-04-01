export const people = [
    {
        id:1,
        name: "nicolas",
        age: 18,
        gender: "female"
    },
    {
        id:2,
        name: "a",
        age: 18,
        gender: "female"
    },
    {
        id:3,
        name: "b",
        age: 18,
        gender: "female"
    },
    {
        id:4,
        name: "c",
        age: 18,
        gender: "female"
    },
    {
        id:5,
        name: "d",
        age: 18,
        gender: "female"
    },
    {
        id:6,
        name: "e",
        age: 18,
        gender: "female"
    },
    {
        id:7,
        name: "f",
        age: 18,
        gender: "female"
    },
    {
        id:8,
        name: "g",
        age: 18,
        gender: "female"
    }
];


export const getById = id => {
    const filteredPeople = people.filter(person => person.id === id);
    return filteredPeople[0];
}