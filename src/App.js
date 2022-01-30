import React from 'react';
import Header from './components/Header';
import SideBar from './components/SideBar';
import AdList from './components/AdList';
import Search from './components/Search';
import {discover, categories} from './data/data';

function App() {
  window.onclick = function(event) {
    if (!event.target.matches('.dropdown_btn') && !event.target.matches('.over_li')) {
      var dropdowns = document.getElementsByClassName("overlay");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i]; 
        openDropdown.style.display = "none";
      }
    }
  }
  function discoverShow() {
    const show = discover.map((x,i) => {
      return (
        <AdList key={i} title={x.name} />
      );
    });
    return show;
  }

  return ( 
    <div>
      <Header />
      <div className='ad_bord'>
        <img src='./active_ad.png' />
      </div>
     <div className='container flex'>
       <div className='phone_hed'>
         <SideBar items={discover} title="Discover" /> 
       </div>
       <div></div>
     </div>
     {discoverShow()}
    </div>
  );
}

export default App;

