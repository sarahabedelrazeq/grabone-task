import React from 'react';
import DropdownListOfList from './DropdownListOfList';
import LinksBar from './LinksBar';
import Search from './Search';
import {categories} from '../data/data';

function SecondaryNav() {
    return (
    <div className='secondary_nav phone_hed'>
        <div className='content'> 
            <LinksBar items={[
            <DropdownListOfList key={111} title="Browse Categories" items={categories} />,
            {value: "What's New",url:"#" },{value: "Trending",url:"#" },{value: "For You",url:"#" }]}/>
            <Search />
        </div> 
    </div>
    );
}

export default SecondaryNav;

/*

*/