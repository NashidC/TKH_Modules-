let car = {
    color: "black",
    make: "Jeep",
    model: 'Wrangler',
    year: "2012",


    getMake: function() {
        return this.make;
    },
    setColor: function(color) {
        this.color = color;
    },

};

let animal = {
    givenName: "Bologna",
    species: "Cat",
    age: "6",
    color: ["black", "white"],

    get name() {
        return `${this.givenName};
    },

    set name(value) {
        [this.givenName, this.species] = value.split(" ");
    },
};


let team = {
    name: "New York Yankees",
    colors: ["White", "Blue"],
    city: "New York",
    totalMembers: "28",

    getName: function() {
        return this.name;
    },
    setRoster: function(players) {
        this.totalMembers = players;
    },
};
