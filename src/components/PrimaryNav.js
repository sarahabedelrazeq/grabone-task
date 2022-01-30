import React from 'react';
import DropdownList from './DropdownList';
import LinksBar from './LinksBar';
import {primaryLinks, primaryDropList} from '../data/data';

function PrimaryNav() {
    return (
        <div className='primary_nav'>
            <div className="content"> 
                <div className="logo">
                    <a href="https://new.grabone.co.nz">
                        GrabOne
                    </a>
                </div>
                <DropdownList title={[<i key={"sarah"} className="fas fa-map-marker-alt"></i>, "Auckland"]} items={primaryDropList}/>
                <div className='phone_hed'>
                    <LinksBar items={primaryLinks}/> 
                </div> 
            </div> 
        </div>
    );
}

export default PrimaryNav;