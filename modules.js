// Common JS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const sayHi = require('./funciones');
let names = require('./name');
let data = require('./alternativa');

require('./mind-grenade');

// sayHi('Luis');
// sayHi(names.daniel);
// sayHi(names.luisa);

// sayHi(data.items);
// sayHi(data.singlePerson.name);