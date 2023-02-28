import React from 'react'
import Voterpage from './Voterpage'
import './css_/Voterpage.css'
import NavB from './NavB'
import Metamask_mess from './Metamask_mess'


export const Instructions = () => {

  window.onscroll = function () { window.scrollTo(0, 0); };
  return (
    <>
      <div>
        <Voterpage />
        <Metamask_mess/>
      </div>
      <div className='instructions'>
        <ul>
          <li>1.
          Polls open at 7 o'clock a.m. and close at 7 o'clock p.m.</li>
          <li>2.Sample ballots will be posted in the polling room for your information.</li>
          <li>3.ou are required to occupy the booth alone, unless assistance is required by a person of the voter's choice.</li>
          <li>4.You are entitled to five minutes for voting.</li>
          <li>5.The election board possesses full authority to maintain order.</li>
        </ul>

      </div>
    </>
  )
}
