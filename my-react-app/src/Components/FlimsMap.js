import React from "react";
import { FLims } from "../Shared/ListOfFlims";
import { useState } from 'react';

export default function FlimsMap() {
    const [flims, setFlims] = useState([])
    return (
        <div className='container'>
            {FLims.map((flims) => (
                <div className='column' key='1'>
                    <div className='card'>
                        <img src={flims.img} alt="cr" />
                        <h3>{flims.title}</h3>
                        <p className='title'>{flims.year}</p>
                        <p><button onClick={()=>{setFlims(flims)}}>
                        <a href='#popup1' id='openPopUp'> Detail </a> 
                        </button></p>
                    </div>


                </div>

            ))}

            <div id='popup1' className='overlay'>
                <div className='popup'>
                    <img src={flims.img} />
                    <h2>{flims.title}</h2>
                    <a className='close' href='#'>&times;</a>
                    <div className='content'>
                        {flims.nation}                                    
                    </div>
                </div>
            </div>
        </div>
            
    )
}