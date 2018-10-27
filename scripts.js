/*
var person = {
  firstname: 'default',
  lastname: 'default',
  greet: function () {
    return `Hi, ${this.firstname}`
  }
};

var john = Object.create(person);
john.firstname = 'John';
john.lastname = 'Amzaleg';
console.log(john);
*/

/*======================================*/

const formatDate = ({day, month, year}) => {
  return console.log(`${day}/${month}/${year}`;
};

formatDate({ month: 2, year: 2018});
