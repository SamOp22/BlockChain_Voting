import axios from "axios";
import React, { useEffect, useState } from "react";
import Voterpage from "./Voterpage";
import Metamask_mess from "./Metamask_mess";
import "./css_/Candidate.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card,Button , Row, Col, Container } from "react-bootstrap";

export default function Candidates(props) {
    
    const [cand, setcand] = useState([])
    let data = []
    let results = [];
    let data2 = [];
    const renderCard = (card, index) => {
        return (
            <Card className="Card" style={{ width: '14.3rem',  height: '19rem' }} key ={index}>
                <Card.Img  id='CardImage' variant="top" src="../profile.png"/>
                <Card.Body>
                    <Card.Title>{card.name}</Card.Title>
                    <Card.Text>
                       {card.description}
                    </Card.Text>

                </Card.Body>
                {/* <Button id="CardButton" variant="primary">VOTE</Button> */}
            </Card>
        )
    }
    const readcandidate = async () => {
       
        let Total_candidate = await window.contract.methods.contestantsCount().call();
        console.log(Total_candidate);
        // data = await window.contract.methods.contestants("1").call();
        // console.log(data)

        for (let i = 1; i <= Total_candidate; i++) {
            data = await window.contract.methods.contestants(i).call();
            results.push(data);
        }

        setcand(results)

    }
    console.log(cand)
   
    window.onload = function() {
        
      };
 
    // useEffect((onload)=>{
    //     
    // })  
    useEffect((onload) => {
        // readcandidate();
        
      },[]);

    return (

        <>
            <div>
                <Voterpage />
                <Metamask_mess />
            </div>
         
            <div className="allCards">
            <button onClick={() => readcandidate()} id='abc' className='SLi'>View Candidates</button>
            <div className="Cards">
                {cand.map(renderCard)}
            </div>
            </div>
        </>

    )


}



