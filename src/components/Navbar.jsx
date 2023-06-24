import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./Header";
const Navbar = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOTP] = useState("");
  const [verificationToken, setVerificationToken] = useState("");
  const [isMobileNumberEntered, setIsMobileNumberEntered] = useState(false);
  const [token, setToken] = useState("");
  const navigate = useNavigate();
  const handleSendOTP = async (reset) => {
    if (!mobileNumber) {
      toast.error("Please enter your mobile number", {
        position: "top-right",
      });
      return;
    }
    setIsMobileNumberEntered(true);
    try {
      const response = await fetch(
        "https://storebh.bhaaraterp.com/api/login/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            mobile_number: mobileNumber,
          }),
        }
      );
      const data = await response.json();
      if (response.ok) {
        setVerificationToken(data.verification_token);
        toast.success("OTP sent to your number!!", {
          position: "top-right",
        });
        reset({ values: "" });
      } else {
        throw new Error("Something went wrong");
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handleVerifyOTP = async () => {
    try {
        let response =  await fetch("https://storebh.bhaaraterp.com/api/verify-login-otp/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          mobile_otp: otp,
          mobile_number: mobileNumber,
          type: "web",
          registration_token: "",
        }),
      });
      // OTP verification successful, redirect to the profile page
    

      const data = await response.json();

      if (response.ok) {
        const authToken = data.token; // Assuming the token is returned as "token" in the response data
        setToken(authToken);
        toast.success("Verified OTP !!", {
          position: "top-right",
        });
        window.location.href = "/profile?token=" + authToken;
    } }catch (error) {
      // Handle error or show appropriate message to the user
      toast.error("Something went Wrong!!", {
        position: "top-right",
      });
    }
  };
  const handleChangeMobileNumber = (event) => {
    setMobileNumber(event.target.value);
    setIsMobileNumberEntered(event.target.value !== ""); // Update isMobileNumberEntered based on input value
  };

  return (
    <div>
      <header>
        <ToastContainer />

        {/* <!-- Navbar --> */}
        <Header />
        {/* <!-- Background image --> */}
        <div
          id="intro-example"
          class="p-5 text-center bg-image"
          style={{
            backgroundImage:
              "url('https://mdbcdn.b-cdn.net/img/new/slides/041.webp')",
            height: "700px",
          }}
        >
          <div class="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
            <div class="d-flex justify-content-center align-items-center h-100">
              <div class="text-white">
                <h1 class="mb-3">AARA GROUPS</h1>
                <h5 class="mb-4">SOFTWARE DEVELOPER (REACT JS) Assignments</h5>

                <a
                  className="btn btn-outline-light btn-lg m-2"
                  data-mdb-toggle="modal"
                  href="#exampleModalToggle1"
                  role="button"
                >
                  LOGIN
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Background image --> */}
        {/* login Modal */}
        <div
          class="modal fade"
          id="exampleModalToggle1"
          aria-hidden="true"
          aria-labelledby="exampleModalToggleLabel1"
          tabindex="-1"
        >
          <div class="modal-dialog modal-xl">
            <div class="modal-content">
              <div class="modal-header">
                <button
                  type="button"
                  class="btn-close"
                  data-mdb-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <div class="card-body p-md-5">
                  <div class="row justify-content-center ">
                    <div className="col-lg-6">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                        className="img-fluid"
                        alt="Sample image"
                      />
                    </div>
                    <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p class="">
                        <div className="d-flex flex-column">
                          <a class="navbar-brand" href="">
                            <img
                              src="https://cdn.shopify.com/app-store/listing_images/6210de1e7ae7b181f52606200e23b209/icon/CKrs_q70lu8CEAE=.png"
                              height="66"
                              alt="MDB Logo"
                              loading="lazy"
                            />
                            <div className="">
                              <h5
                                className="mb-1"
                                style={{ color: "orange", fontWeight: "bold" }}
                              >
                                BHAARAT STORE
                              </h5>

                              <small className="" style={{ color: "blue" }}>
                                Your new shopping destination
                              </small>
                            </div>
                          </a>
                        </div>
                      </p>
                      <p class="text-center h4 fw-bold mb-1 mx-1 mx-md-3 mt-3">
                        Welcome
                      </p>
                      <p class="text-center mb-5 mx-1 mx-md-4 mt-4">
                        Enter your mobile number to start shopping
                      </p>
                      <form class="mx-1 mx-md-4">
                        <div class="d-flex flex-row align-items-center mb-4">
                          <div class="flex-fill mb-0">
                            <label class="form-label fw-bold">
                              Mobile Number
                            </label>
                            <input
                              class="form-control"
                              type="tel"
                              value={mobileNumber}
                              onChange={handleChangeMobileNumber}
                              fullWidth
                            />
                          </div>
                        </div>

                        <div class="mb-3 mb-lg-4">
                          <button
                            type="button"
                            class="btn btn-lg  btn-block"
                            style={{
                              backgroundColor: "maroon",
                              color: "white",
                            }}
                            onClick={handleSendOTP}
                            data-mdb-target="#exampleModalToggle22"
                            data-mdb-toggle="modal"
                            data-mdb-dismiss="modal"
                            disabled={!isMobileNumberEntered}
                          >
                            Send OTP
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* second Modal */}
        <div
          class="modal fade"
          id="exampleModalToggle22"
          aria-hidden="true"
          aria-labelledby="exampleModalToggleLabel22"
          tabindex="-1"
        >
          <div class="modal-dialog modal-xl">
            <div class="modal-content">
              <div class="modal-header">
                <button
                  type="button"
                  class="btn-close"
                  data-mdb-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <div class="card-body p-md-5">
                  <div class="row justify-content-center ">
                    <div className="col-lg-6">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                        className="img-fluid"
                        alt="Sample image"
                      />
                    </div>
                    <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p class="">
                        <div className="d-flex flex-column">
                          <a class="navbar-brand" href="">
                            <img
                              src="https://cdn.shopify.com/app-store/listing_images/6210de1e7ae7b181f52606200e23b209/icon/CKrs_q70lu8CEAE=.png"
                              height="66"
                              alt="MDB Logo"
                              loading="lazy"
                            />
                            <div className="">
                              <h5
                                className="mb-1"
                                style={{ color: "orange", fontWeight: "bold" }}
                              >
                                BHAARAT STORE
                              </h5>

                              <small className="" style={{ color: "blue" }}>
                                Your new shopping destination
                              </small>
                            </div>
                          </a>
                        </div>
                      </p>
                      <p class="text-center h4 fw-bold mb-1 mx-1 mx-md-3 mt-3">
                        Email Verification
                      </p>
                      <p class="text-center mb-3 mx-1 mx-md-4 mt-4">
                        We have send a code to your mobile number {mobileNumber}
                      </p>
                      <form class="mx-1 mx-md-4">
                        <div class="d-flex flex-row align-items-center mb-4">
                          <div class="flex-fill mb-0">
                            <input
                              class="form-control"
                              type="tel"
                              value={otp}
                              onChange={(e) => setOTP(e.target.value)}
                              fullWidth
                            />
                          </div>
                        </div>

                        <div class="mb-3 mb-lg-4">
                          <button
                            type="button"
                            class="btn btn-lg mb-2 btn-block"
                            style={{
                              backgroundColor: "maroon",
                              color: "white",
                            }}
                            onClick={handleVerifyOTP}
                          >
                            Verify OTP
                          </button>
                          <p class="text-center mb-3 mx-1 mx-md-4 mt-4">
                            Didn't receive code?
                            <a
                              href=""
                              data-mdb-target="#exampleModalToggle1"
                              data-mdb-toggle="modal"
                            >
                              {" "}
                              Resend
                            </a>
                          </p>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
          
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
