import React from "react";
import { Outlet } from "react-router-dom";
import NavB from "./NavB";
import './Homepage.css';



export default function Homepage() {
    return (
        <>
        <body>
        <div className="navv">
            <NavB/>
            </div>
            <Outlet/>
            </body>

        </>

    )

}
