import React from 'react';
import axios from "axios";
import { useState } from "react";


  
function Landing (){
    const [bookData,setbookData]=useState([])
    const GetBooks = () => {
        
        

        axios.get("http://localhost:9010/book/").then((response) => {
            setbookData(response.data)
        })
    }

    return (
        <div>
        <button onClick={GetBooks}>SEE ALL BOOKS</button>
            {bookData.map((item) => {
            return (
                <div key={item.Id}>
                <ul><li>{item.Name} | {item.Author} | {item.Publication}</li></ul>
                </div>
            )
        }
        )}
         </div>
    )
   
}
  
export default Landing;