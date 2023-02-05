import axios from "axios";
import React, { useEffect, useState } from "react";
import './css_/Profile.css'


export default function Profile(props) {
    console.log(props.voter)
    const [Vuser , setVuser] = useState("");

    useEffect(()=> {
        const fetchdata = async() =>{
            const data = await axios.get("http://localhost:3000/Voterpage/Profile")
           setVuser(data);
          
        };
        fetchdata();
    },[]);  


    return (
       <>
             
       </> 
    
    )
    
    
}



