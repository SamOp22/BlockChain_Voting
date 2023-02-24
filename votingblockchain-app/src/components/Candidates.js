import axios from "axios";
import React, { useEffect, useState } from "react";
import Voterpage from "./Voterpage";
import Metamask_mess from "./Metamask_mess";

export default function Candidates() {

    return (
        <>
            <div>
                <Voterpage />
                <Metamask_mess />
            </div>
            <div className="candidates">
              <h1 id="candidate">cadidate </h1>
               
            </div>
        </>

    )


}



