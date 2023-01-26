import React from "react";
import { Outlet } from "react-router-dom";
import './css_/Homepage.css';
import NavB from "./NavB";



export default function Homepage() {
    return (
        <>
            <body>
                <div className="navb">
                    <NavB />
                </div>
                <div className="main-content">
                    <div className="head">
                        <h1>ETHVOTE</h1>
                        <p>An online system for voting with the security of blockchain</p>
                    </div>

                </div>
                <div className="main-box">
                    <div className="box">
                        <div className="sub-box">
                          <img src='./logo2.png' alt="BigCo Inc. logo" />
                        </div>
                        <p>A blockchain is a distributed database or ledger that is shared among the nodes of a computer network. As a database, a blockchain stores information electronically in digital format. Blockchains are best known for their crucial role in cryptocurrency systems, such as Bitcoin, for maintaining a secure and decentralized record of transactions.</p>
                    </div>
                </div>

            </body>
        </>

    )

}

