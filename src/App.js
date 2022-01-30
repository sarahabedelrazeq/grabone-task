import React from 'react';
import Header from './components/Header';
import SideBar from './components/SideBar';
import AdList from './components/AdList';
import PhoneBar from './components/PhoneBar';
import Search from './components/Search';
import {discover, categories} from './data/data';
import PhoneList from './components/PhoneList';
import LinksBar from './components/LinksBar';
import {primaryLinks, primaryDropList} from './data/data';

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
       <div></div>
     </div>
     {discoverShow()}
     <div key={1} id="search" className='over_slide'>
        <Search />
      </div>
      <div key={2} id="categories" className='over_slide'>
        <PhoneList key={"sarah1"} title="Browse Categories" items={categories} />
      </div>
      <div key={3} id="cart" className='over_slide'>
        
      </div>
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

    <footer>
      <div className='top'>
        <div>
          <span><b>Follow us on</b></span>
          <LinksBar items={[
            {icon: 'fab fa-facebook-f'},
            {icon: 'fab fa-twitter'},
            {icon: 'fab fa-youtube'},
            {icon: 'fab fa-instagram'},
          ]}/> 
          <span><b>Get app exclusive deals</b></span>
          <a className='btn'>Download our App</a>
        </div>

        <div>
          <span>GrabOne</span>
          <a>Contact Us</a>
          <a>About Us</a>
          <a>Terms & Returns</a>
          <a>Blog</a>
          <a>Gift Cards</a>
        </div>

        <div>
          <span>My Account</span>
          <a>My Account</a>
          <a>My Cart</a>
          <a>My Coupons</a>
          <a>FAQ</a>
        </div>

        <div>
          <span>Merchants</span>
          <a>Run a Deal</a>
          <a>Merchant Centre</a>
        </div>

        <div className='phone_hed'>
          <span>Newsletter Signup</span>
          <span>Sign up for our daily emails and we'll send you all the best deals, tailored for you.</span>
          <div class="email-subscription__input-container">
            <i class="far fa-envelope"></i>
            <input name="register_email" type="email" value="" placeholder="Enter email address" class="email-subscription__input" />
            <button className='btn' type="submit" value="Sign Up" >Subscribe</button>
          </div>
          
        </div>
      </div>

      <div className='bottom'> 

      </div>
    </footer>
    </div>
  );
}

export default App;