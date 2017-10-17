//Destruct means - Create new variables by get value from an Object or Array.
//first lets create an object to use as an example.

let Person = {
    firstName: "Timoteo",
    lastName: "Shockness",
    Age: 28,
    Address: {
    city: "Vancouver",
    country: "Canada"
   }
   }
   
   //Now that we have an object, I wanna create 2 variables just with firstName and lastName.
   //This is the syntax
   
   let { firstName, lastName } = Person;
   //First, {} <- this, between firstName and lastName is not a object or creating a object. This is telling that a Object is going to be desctructed.
   //the variable firstName and lastName in {} must match the variables in the object.
   // the result is, Now I have 2 variables:
   
   console.log(firstName); // Timoteo
   console.log(lastName); // Shockness
   
   //we pulled out the variables from the object and put in new variables.
   
   //Now, I want to create a variable with city and country. How can I destruct that? My Address is an object inside of Person object.
   //the syntax is the same, just pass the Address object.
   
   let { city, country } = Person.Address; //Accessing the Address Object and getting the values.
   //Now I have 2 new variables in my program.
   
   console.log(city); //Vancouver
   console.log(country); //Canada
   
   //So, if we look close
   let {firstName, lastName } = Person; 
   //is same as
   let firstName = Person.firstName;
   let lastName = Person.lastName;
   //but, we did 2 lines in one line. :) good?
   
   //Lets see this in a function. 
   //Remember, when we destruct an object, we are creating new variables from the values.
   
   const personInfo = ( { firstName, lastName, age } ) => {
       console.log(`Hello, my name is ${firstName} ${lastName}, and I am ${age} years old.`);
   }
   
   //In my function personInfo, we are destructuring an Object, right? and this object should have as properties firstName, lastName and Age.
   //So, this means, the function personInfo receive as argument a Person object.
   //Knowing that I can call this function passing my Person object
   
   personInfo(Person); // Hello, my name is Timoteo Shockness, and I am 28 years old.
   
   //If I dont wanna destruct a object, I can just use like this:
   
   const personInfo = ( personObj ) => {
       console.log(`Hello, my name is ${personObj.firstName} ${personObj.lastName}, and I am ${personObj.age} years old.`);
   }
   
   //has the same result
   
   personInfo(Person); // Hello, my name is Timoteo Shockness, and I am 28 years old.
   
   //One Advantage of using Object destructuring is the possibility of use default values for the new variables.
   //For example, lets create 2 new Person Object. and change a little
   
   let Tim = {
    firstName: "Timoteo",
    middleName: "Farias",
    lastName: "Shockness",
    Age: 28,
    Address: {
    city: "Vancouver",
    country: "Canada"
   }
   }
   
   let Kate = {
    firstName: "Kate",
    lastName: "Lee",
    Age: 23,
    Address: {
    city: "Vancouver",
    country: "Canada"
   }
   }
   
   //now we have 2 people, Tim and Kate. However, Tim has middleName and Kate doesn't have.
   
   //My function ask firstName, middleName, and lastName
   const fullName = ( { firstName, middleName ,lastName } ) => {
       console.log(`Hello, my fullname is ${firstName} ${middleName} ${lastName}.`);
   }
   
   //if I pass Kate object to this function, I will have this result.
   
   fullName(Kate); //Hello, my fullname is Kate undefined Lee.
   //because Kate doesn't have fullname, the middleName variable is set as undefined.
   //Tim object won't have this problem because it has the middleName.
   
   //how can we solve that? R- using the default value.
   
   //lets change our function fullName.
   
   const fullName = ( { firstName, middleName = '' ,lastName } ) => {
       console.log(`Hello, my fullname is ${firstName} ${middleName} ${lastName}.`);
   }
   
   //You can see that middleName is receiving a '' (empty string), this means:
   //if middleName is undefined set its value to ''.
   
   //now if we call the functions fullName passing Kate object...
   fullName(Kate); //Hello, my fullname is Kate Lee.
   fullName(Tim) //Hello, my fullname is Timoteo Farias Shockness.
   
   
   //Time to practice!!!!
   //Create 2 new Objects representing Puppies.
   //One for Dog and another for Cat
   //Dog has - Name, Age, Owner
   //Cat has - Name, Age, (this cat doest have owner :( )
   
   //After that, destruct the dog object in 3 new variables.
   
   
   
   //Now, create a function puppyInfo() which prints all the information from the puppy.
   //Use default value if necessary.
