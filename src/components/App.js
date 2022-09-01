import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {

    
    render() {
        const relativelist = ["aryan","seema","raja","rohan","shyam","rohan"]

        const relatives = relativelist.map((relative , index)=>{
            return(
            <li key={index}> {index} {relative}</li>)
            
        })

        return(
            <div id="main">
                <ul>
                    {relatives}
                </ul>
            </div>
        )
    }
}


export default App;
