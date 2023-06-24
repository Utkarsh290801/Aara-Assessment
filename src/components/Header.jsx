import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-white">
        <div class="container-fluid">
          <i class="fa-solid fa-bars"></i>
          <a class="navbar-brand me-2" href="">
            <img
              src="https://cdn.shopify.com/app-store/listing_images/6210de1e7ae7b181f52606200e23b209/icon/CKrs_q70lu8CEAE=.png"
              height="56"
              alt="MDB Logo"
              loading="lazy"
              style={{ marginTop: "-1px" }}
            />
          </a>
          <div className="d-flex flex-column">
            <div className="\">
              <h5
                className="mb-1"
                style={{ color: "orange", fontWeight: "bold" }}
              >
                BHAARAT STORE
              </h5>
            </div>
            <div className="">
              <small className="" style={{ color: "blue" }}>
                Your new shopping destination
              </small>
            </div>
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarExample01"
            aria-controls="navbarExample01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fa-solid fa-bars"></i>
          </button>

          <div class="collapse navbar-collapse" id="navbarExample01">
            <form
              class="input-group  mx-auto d-none d-sm-flex"
              style={{ width: "35%" }}
            >
              <input
                autocomplete="off"
                type="search"
                class="form-control rounded"
                placeholder="Search for products, brands and more"
                style={{ minWidth: "165px" }}
              />
            </form>
            <ul class="navbar-nav ms-auto mb-lg-0">
              <li class="nav-item active">
                {/* <a class="nav-link" aria-current="page" href="#">
               Login
                  </a> */}
                <a
                  className="btn btn-outline-warning btn-lg m-2"
                  data-mdb-toggle="modal"
                  href="#exampleModalToggle1"
                  role="button"
                >
                  LOGIN
                </a>
              </li>
              <li class="nav-item mt-3">
                <NavLink class="nav-link" href="#" style={{ color: "orange" }}>
                  <i class="fa-regular fa-heart"></i>
                  &nbsp;Wishlist &nbsp;
                </NavLink>
              </li>
              <li class="nav-item mt-3">
                <NavLink class="nav-link" href="#" style={{ color: "orange" }}>
                  <i class="fa-solid fa-bag-shopping"></i>
                  &nbsp;Bag &nbsp;
                </NavLink>
              </li>
              <li class="nav-item mt-3">
                <NavLink class="nav-link " href="#" style={{ color: "orange" }}>
                  <i class="fa-solid fa-wallet"></i>
                  &nbsp;Wallet &nbsp;
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
