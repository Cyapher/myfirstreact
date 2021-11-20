import { useEffect, useState } from "react";
import helloServices from "../services/helloServices";

//class - stateful func.
//functions - stateless
//react - reactive applications

const Hello = () =>{

    //react hooks - axios tool for request promises
    //"promises" - an asynch process where two functions does not function at the same time; independent
        //- because of different projects
        //*synch - like button, once pressed will automatically add

    //useState
    const[hello, setHello] = useState("down si API, itulog mo na yan")

    //useEffect
   useEffect( () => { //anonymous function
        helloServices.getHello() //promise
        .then(response => { //indicates promises; like try catch
            setHello(response.data)
        })
        .catch(
            err => {
                console.log("Something went wrong!!, pls. help. Spidey wag na padelay!!!")
            }
        )
   } 
   )

    return hello;
}

export default Hello