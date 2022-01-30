import React from 'react';
import Header from './components/Header';
import SideBar from './components/SideBar';
import AdList from './components/AdList';
import PhoneBar from './components/PhoneBar';
import Search from './components/Search';
import {discover, categories} from './data/data';
import PhoneList from './components/PhoneList';
import AdCarde from './components/AdCard';
import Footer from './components/Footer';

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
      <div>
      <div className='ad_bord'>
        <img src='./images/active_ad.png' />
      </div>
     <div className='container flex'>
       <div className='phone_hed'>
         <SideBar items={discover} title="Discover" /> 
       </div>
       <div className='adds_big'>
       <AdCarde ad = {{id: 1,title: "Hair Regrowth Treatment incl.Scalp Massage ",text: "<p> 90-Minute Boost Hair Regrowth Treatment incl. Relaxing Scalp Massage </p>",vendor: "G.M HairLimited",location: "Auckland Central",price: 280,oferprise: 168,image: "08d263b51d5d81f1675b38f2461a623d585a5a58.jpg",bought: 0}} />
       <AdCarde ad = {{id: 2,title: "Hair Regrowth Treatment incl.Scalp Massage ",text: "<p> 90-Minute Boost Hair Regrowth Treatment incl. Relaxing Scalp Massage </p>",vendor: "G.M HairLimited",location: "Auckland Central",price: 280,oferprise: 168,image: "08d263b51d5d81f1675b38f2461a623d585a5a58.jpg",bought: 0}} />
       </div>
     </div>
     {discoverShow()}

     <div key={1} id="search" className='over_slide'>
       <Search />
      </div>

      <div key={2} id="categories" className='over_slide'>
        <PhoneList key={"111"} title="Browse Categories" items={categories} />
      </div>

      <div key={3} id="cart" className='over_slide'></div>

      <div key={4} id="account" className='over_slide'>
        
        <SideBar items={[{name: "My Purchases", icon: "fas fa-box"},
          {name: "My Cart", icon: "fas fa-shopping-cart"},
          {name: "My Subscriptions", icon: "far fa-comment-alt"},
          {name: "My Profile", icon: "far fa-user"},
          {name: "Gifts", icon: "fas fa-gift"},
          {name: "Login", icon: "fas fa-sign-in-alt"}]} title=""/>
      </div>
     <PhoneBar items={
       [
         {text: "home", icon:"fas fa-home"},
         {text: "search", icon:"fas fa-search"},
         {text: "categories", icon:'fas fa-border-all'},
         {text: "cart", icon:'fas fa-shopping-cart'},
         {text: "account", icon:'far fa-user'}
    ]} />
      </div>
      <Footer />
    </div>
  );
}

export default App;