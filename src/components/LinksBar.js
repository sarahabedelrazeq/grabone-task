import React, { useState } from 'react';
import ReactDOM from 'react-dom'

function LinksBar(props) {
    const itemsMap = props.items.map( (x,i) => {
            return (
                (x.icon || x.value)?
                <li key={i}>
                    <a href={x.url}> 
                        <i className={x.icon}></i> {x.value}
                    </a>
                </li> 
                :x
            );
        
    })

    return (
        <div className='links_bar'>
            <ul>
                {itemsMap}
            </ul>
        </div>
    );
}

export default LinksBar;