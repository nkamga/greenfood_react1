import React from 'react'
import {data} from "../data.jsx";

export default function Button({menuItems,filterItems,setProduit}) {
    return (
        <div className='d-flex justify-content-center mb-3'>

            <button onClick={ () =>setProduit(data)} className='text-white p-1 px-2 mx-5 btn fw-bold' style={{backgroundColor: 'rgb(74, 214, 144)'}}>
                Tous
            </button>

            {
                menuItems.map(val=>(
                    <span onClick={ () =>filterItems(val)} key={val} className=' text-white mx-1 btn fw-bold' style={{backgroundColor: 'rgb(74, 214, 144)'}}>
                        {val}
                    </span>

                ))
            }

        </div>
    )
}
