import React from "react";

function Header(props) {

  return (
    <header>
        <div class="navbar navbar-light bg-light box-shadow">
            <div class="container d-flex justify-content-between">
            <a href="#" class="navbar-brand d-flex align-items-center">
            <i class="fas fa-shopping-cart"></i>
                <strong></strong>
            </a>
            <h3 className="nav-item">USER NAME<i class="fas fa-wallet"></i>USER POINTS</h3>
            </div>
        </div>
    </header>
  );
}
export default Header;
