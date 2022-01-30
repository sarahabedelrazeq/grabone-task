import React from 'react';
import LinksBar from './LinksBar';

function Footer(props) {
    return (
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
    );
}

export default Footer;