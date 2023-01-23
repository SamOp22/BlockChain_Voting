import React from "react";
import { Outlet } from "react-router-dom";
import NavB from "./NavB";
import './Homepage.css';



export default function Homepage() {
    return (
        <>
            <NavB/>
            <Outlet/>

        </>

    )

}
