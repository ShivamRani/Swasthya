import React from 'react'
import './Content.css';
import Landingpage from './landingpage';

function Content() {
    return ( 
        <div className='content_text row'>

             <div className='col-lg-2'>
             
             </div>

             <div className='col-lg-10 content_div'>
             <h1>Hey, Likitha!</h1>
             <h5>How are you feeling today??</h5>
             <Landingpage />
             </div>
         
             
             
        </div>
     );
}

export default Content;
   