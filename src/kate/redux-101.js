//Why redux? Redux is implemented in React to make the communication between components in different hierarchy.
//For example, Its totally fine pass props to child components. But, If you need to pass some data to a component
//that is not a child, how can you do that? Thats why we need redux.


//Create a redux store. First import createStore function from redux library. PS: need to install redux from npm
import { createStore } from 'redux';

//When you create a state in a component, you need to create the default state in the constructor, right?
class Example extends Component
{
    constructor(props)
    {
        this.state = {
            count: 0
        }
    }
}

//The store does not have a constructor, but, the default state should be set.

//Creating a store.
const store = createStore((state = { count: 0 }) =>{

});

//Pay attention to this (state = { count: 0 } - this is where the default state is passed to the state object
//its the same initialization in the constructor in Components.

//Okay, now we have a count set to 0, how we increment or decrement this number?
//Lets see first inside of a component and contrast to the store.

//if I wanna increment the count in the Example component, I have to create a function that gets my prevState and adds 1

... 
increment()
{
    this.setState( (prevState) => {
        return {
            count: prevState.count + 1
        }
    })
}

//Looks like this right? Now, how can I call this action/function/method. I just need to call this function right...
this.increment() // call this action/function it will increment the counter
//counter goes to 1.

//PS: FUNCTIONS/METHODS are ACTIONS. right?

//Lets see how this work in redux.
//First, my store need to accept the ACTION to increment the counter. This Action will tell my store what to do with the state.
//So, lets add action to our store

const store = createStore((state = { count: 0 }, action) =>{
    //Action is a object which has a property called type. this property type describe the action
    switch(action.type) 
    {
        case 'INCREMENT': //INCREMENT is the description of my action store in the type variable.
            return {
                count: state.count + 1 //Here I am accessing my state and adding 1, and returning the new counter. PS: state === prevState in components. state store the previous value to the state
            };
        default:
            return state; //If did not have any match for the action, the State must be return by default.
    }
    });


    //Okay, To understand the code above we need to understand how we send Actions to the store.
    //For send actions, we need to use the store.dispatch() function. and tell to our store which action should run.
    //creating a dispatch action

    //this function accept a object as argument
    store.dispatch({
        type: 'INCREMENT' //here is where I put the description of my action
    });

    //This object will go to the action variable in the createStore.... createStore((state = { count: 0 }, action)
    //When I send a dispatch, my store will check the type description inside of the switch statement
    switch(action.type) 
    {
        case 'INCREMENT': // action.type has 'INCREMENT' which matchs with this case. So this case will run
            return {
                count: state.count + 1 //Now the count will be set to 1
            }
    }

    //Got it? if I want to increment the count one more time, i Just need to call dispatch again with the INCREMENT

    store.dispatch({
        type: 'INCREMENT' 
    });

    //now My counter is 2.

    //Lets create a new Action called Decrement in the store.

    const store = createStore((state = { count: 0 }, action) =>{
        
        switch(action.type) 
        {
            case 'INCREMENT': 
                return {
                    count: state.count + 1 
                };
            case 'DECREMENT':
                return{
                    count: state.count - 1
                }
            default:
                return state; 
        }
        });

        //Now I have a action type called DECREMENT, So if I called this action, my count will decrement. Lets call
        store.dispatch({
            type: 'DECREMENT' 
        });
        //Now my count went from 2 to 1. :) SO FUN!!!!

        //Its not that much hard right?

        //Exercise for you... Create a case in the switch to reset the count. And create a dispatch action to call the reset.
        //reset will set the count to 0.
        //Do it in the code bellow:


        const store = createStore((state = { count: 0 }, action) =>{
            
            switch(action.type) 
            {
                case 'INCREMENT': 
                    return {
                        count: state.count + 1 
                    };
                case 'DECREMENT':
                    return{
                        count: state.count - 1
                    }

                    //CREATE RESET CASE TO SET COUNT TO 0
                default:
                    return state; 
            }
            });



            store.dispatch(); //CALL THE RESET ACTION