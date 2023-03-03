import React, { useEffect, useState } from "react";
import Voterpage from "./Voterpage";
import Metamask_mess from "./Metamask_mess";
import "./css_/Results.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import Adminpage from "./Adminpage";

export const Adminresult = () => {

    const [cand, setcand] = useState([])
    const [curr_state, setstate] = useState(0)

    let data = []
    let results = [];
    let data2 = [];
    const renderCard = (card, index) => {
        return (
            <Card className="Card" style={{ width: '14.3rem', height: '19rem' }} key={index}>
                <Card.Img id='CardImage' variant="top" src="../profile.png" />
                <Card.Body>
                    <Card.Title>{card.name}</Card.Title>
                    <Card.Text>
                        {"VOTES:" + card.voteCount}
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

    const readstate = async (curr_state) => {
        curr_state = await window.contract.methods.state().call();
        setstate(curr_state)
        console.log(curr_state);
        // displaystate();
        if (curr_state != 2) {

            const dasta = document.getElementsByClassName("allCards")[0];
            dasta.style.display = "none"
            const noR = document.getElementById("Noresult").innerHTML = "RESULTS ARE NOT OUT YET"
            // document.getElementsByClassName("C_details").style.display = "none";
            console.log("done")
        }
        else{
            const noR = document.getElementById("Noresult");
            noR.style.display = "none"
        }

    }


    // window.onload = function() {

    //   };

    // useEffect((onload)=>{
    //     
    // })  
    useEffect((onload) => {
        // readcandidate();

    }, []);

    useEffect((onload) => {
        readstate();

    }, []);

    return (
        <>
            <div>
                <Adminpage />
                <Metamask_mess />
            </div>

            <div className="allCards">
                <button onClick={() => readcandidate()} id='abc' className='SLi'>View Results</button>
                <div className="Cards">
                    {cand.map(renderCard)}
                </div>

            </div>
            <div>
                <p id="Noresult"></p>
            </div>
        </>
    )
}
