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
            detailed information on how you should use something, do something, etc.</li>
          <li>af</li>
          <li>af</li>
          <li>af</li>
          <li>af</li>
        </ul>

      </div>
    </>
  )
}
