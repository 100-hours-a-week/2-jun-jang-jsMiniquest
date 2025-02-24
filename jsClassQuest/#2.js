

class Person{
    constructor(name,age){
      this.name=name;
      this.age=age;
      this.greet = function() {
        console.log('Hello, my name is ' + this.name + 'and I am '+this.age+' years old');
      };
    }
    
  }
  
  const person= new Person("Jane Doe",25);
  person.greet();
  
  