import React from "react";
import { Outlet } from "react-router-dom";
import './Homepage.css';
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
                        <h1>BLOCKVOTE</h1>
                        <p>An online system for voting with the security of blockchain</p>
                    </div>

                </div>
                <div className="main-box">
                    <div className="box">
                        <div className="sub-box">
                          <img src='./logo2.png' alt="BigCo Inc. logo" />
                        </div>

                    </div>
                </div>

            </body>
        </>

    )

}

