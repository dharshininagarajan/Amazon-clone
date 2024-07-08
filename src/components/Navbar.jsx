import React from "react";

const Navbar = () => (
  <nav>
    <div>
      <img src="./assets/amazon_logo.png" alt="Amazon Logo" width="100px" />
    </div>
    <div className="desktop-nav">
      <div class="deliver-container">
        <div className="deliver">
          <p className="Deliver-head">Deliver To</p>
        </div>
        <div className="container">
          <div className="add-icon">
            <img
              src="./assets/location_icon.png"
              alt="Location Icon"
              width="20px"
            />
          </div>
          <h1 className="din-ind">Dindigul,India</h1>
        </div>
      </div>
      <div className="nav-search">
        <div className="search">
          <p>All</p>

          <img
            src="./assets/dropdown_icon.png"
            alt="Dropdown Icon"
            width="18px"
          />
        </div>

        <div className="input1">
          <input
            type="text"
            className="input-box"
            placeholder="search amazon.in"
          />
          <div className="box-searc">
            <img
              className="search-img"
              src="./assets/search_icon.png"
              alt="Search Icon"
              width="20px"
            />
          </div>
        </div>
      </div>
      <div className="sign-text">
        <p>Hello, Sign In</p>
        <h1>Account & Lists</h1>
      </div>
      <div className="nav-return">
        <p>Return</p>
        <h1>& Orders</h1>
      </div>
      <div class="nav-cart-border">
        <img
          src="./assets/grocery-store.png"
          alt="grocery store"
          width="30px"
        />
        Cart
      </div>
    </div>
    <div className="mobile-nav">
      <div className="box-searc">
        <img
          className="search-img"
          src="./assets/search_icon.png"
          alt="Search Icon"
          width="20px"
        />
      </div>
      <img src="./assets/grocery-store.png" alt="grocery store" width="30px" />
    </div>
  </nav>
);

export default Navbar;