import React, { useEffect, useState } from "react";
import Voterpage from "./Voterpage";
import Metamask_mess from "./Metamask_mess";
import Candidates from "./Candidates";
import "./css_/Votingpage.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Row, Col, Container } from "react-bootstrap";


export const Votingpage = () => {

    const [cand, setcand] = useState([])
    const [curr_state, setstate] = useState(0)
    let data = []
    let results = [];
    let data2 = [];
    const renderCard = (card, index) => {
        return (
            <Card className="Card" style={{ width: '14.3rem', height: '20rem' }} key={index}>
                <Card.Img id='CardImage' variant="top" src="../profile.png" />
                <Card.Body>
                    <Card.Title>{card.name}</Card.Title>
                    <Card.Text>
                        {card.description}
                    </Card.Text>

                </Card.Body>
                <Button id="CardButton" onClick={() => { vote(card.id); }} variant="primary">VOTE</Button>
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
        if (curr_state == 0) {

            const dasta = document.getElementsByClassName("allCards")[0];
            dasta.style.display = "none"
            const noR = document.getElementById("NoVote").innerHTML = "VOTING HAS NOT BEGUN YET"
            // document.getElementsByClassName("C_details").style.display = "none";
            console.log("done")
        }
        if (curr_state == 2) {

            const dasta = document.getElementsByClassName("allCards")[0];
            dasta.style.display = "none"
            const noR = document.getElementById("NoVote").innerHTML = "VOTING HAS BEEN COMPLETED"
            // document.getElementsByClassName("C_details").style.display = "none";
            console.log("done")
        }
        else{
            const noR=  document.getElementById("NoVote");
            noR.style.display = "none"
        }

    }

    // window.onload = function () {

    // };

    // useEffect((onload)=>{
    //     
    // })  
    useEffect((onload) => {
        // readcandidate();

    }, []);

    useEffect((onload) => {
        hasvoted();

    }, []);

    useEffect((onload) => {
        readstate();

    }, []);


    const vote = async (C_id) => {
        console.log(C_id)
        const account = JSON.parse(localStorage.getItem("Account"))
        console.log(account)
        await window.contract.methods.vote(C_id).send({ from: account })
        const dasta =  document.getElementsByClassName("allCards")[0];
        dasta.style.display = "none"
        const TM = document.getElementById("ThanksM").innerHTML = "THANKS FOR VOTING.../n"
    }

    const hasvoted = async () =>{
        const account = JSON.parse(localStorage.getItem("Account"))
        console.log(account)
        const voter = await window.contract.methods.voters(account).call();
        console.log(voter)
        if(voter.hasVoted == true){
            const dasta =  document.getElementsByClassName("allCards")[0];
            dasta.style.display = "none"
            const TM = document.getElementById("ThanksM").innerHTML = "THANKS FOR VOTING...<br>KINDLY WAIT FOR THE RESULTS"
        }
        else{
            const TM = document.getElementById("ThanksM");
            TM.style.display = "none"
        }
    }    
    
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
            <div >
                <p id="ThanksM"></p>
            </div>
            <div>
                <p id="NoVote"></p>
            </div>
        </>
    )
}
