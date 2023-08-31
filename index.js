import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 * -logo
 * -nav items
 * Body
 * -search
 * -restaurantContainer
 * -restaurantCard
 * Footer
 * -copyright
 * -links
 * -address
 * -contact
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://seeklogo.com/images/B/burger-food-logo-5B8B17C290-seeklogo.com.png"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCards = () => {
  return (
    <div className="card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/oupd4meraf2luhhkwvt1"
        alt="res-logo"
      />
      <h3>Meghna food</h3>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <RestaurantCards />
    </div>
  );
};

const AppLayout = () => {
  return (
    <div class="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
