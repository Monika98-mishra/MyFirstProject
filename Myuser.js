import React from 'react';

const user = ["User 1" , "User 1", "User 3", "User 4", "User 5", "User 6"];

 const MyUser = () =>{

    return <div id="container">
                <h1 align="center"> User List from single dimensional array </h1>
                    {
                        user.map(xuser=>{
                            return <p> {xuser} </p>
                        })
                    }
           </div>
}

export  default MyUser;

//user map and display data in p tag
// once done send me script in chat as private