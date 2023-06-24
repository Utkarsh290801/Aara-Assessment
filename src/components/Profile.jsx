import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Header from "./Header";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
const ProfilePage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get("token");
  const [profileData, setProfileData] = useState({});
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchProfileData();
  }, []);
  const fetchProfileData = async () => {
    try {
      const response = await fetch(
        "https://storebh.bhaaraterp.com/api/my-profile/",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setProfileData(data);
        setFirstName(data.first_name);
        setLastName(data.last_name);
        setEmail(data.email);
        setGender(data.gender);
        setDateOfBirth(data.date_of_birth);
      } else {
        console.error("Failed to fetch profile data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const updateProfileData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://storebh.bhaaraterp.com/api/update-profile/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            first_name: firstName,
            last_name: lastName,
            email: email,
            gender: gender,
            date_of_birth: dateOfBirth,
            // Add other keys for profile_picture, etc.
          }),
        }
      );
      if (response.ok) {
        // Profile updated successfull
        toast.success("Update Profile!!", {
          position: "top-right",
        });
        console.log("Profile updated successfully");
      } else {
        console.error("Failed to update profile");
      }
    } catch (error) {
      console.error("Error:", error);
    }
    setIsLoading(false);
  };
  const Sidebar = () => {
    return (
      <Col
        sm={3}
        className="bg-white text-light text-light vh-100 d-flex flex-column"
      >
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link text-black" href="#">
              <i class="fa-solid fa-share-nodes"></i>&nbsp;Reffer and earn
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-black" href="#">
              <i class="fa-solid fa-bag-shopping"></i> &nbsp;Orders
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-black" href="#">
              <i class="fa-sharp fa-solid fa-receipt"></i> &nbsp;Invoices
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-black" href="#">
              <i class="fa-regular fa-heart"></i> &nbsp;Wishlist
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-black" href="#">
              <i class="fa-sharp fa-solid fa-location-dot"></i>&nbsp; Address
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-black" href="#">
              <i class="fa-sharp fa-solid fa-bell"></i>&nbsp;Notifications
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-black" href="#">
              <i class="fa-solid fa-lock"></i> &nbsp;Logout
            </a>
          </li>
        </ul>
      </Col>
    );
  };

  const ProfileSection = () => {
    return (
      <Col sm={9} className="vh-100 bg-light p-5">
        <h5 className="text-dark">Personal Information</h5>
        <Form>
          <Row>
            <Col sm={12} className="text-center">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-2.webp"
                alt="Profile"
                className="img-fluid rounded-circle border border-dark border-3"
                style={{ width: "70px" }}
              />
            </Col>
          </Row>
          <Row>
            <Col sm={6}>
              <Form.Group>
                <Form.Label className="fw-bold">First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter first name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col sm={6}>
              <Form.Group>
                <Form.Label className="fw-bold">Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col sm={6}>
              <Form.Group>
                <Form.Label className="fw-bold">Email</Form.Label>
                <Form.Control
                  type="mail"
                  placeholder="Enter mail "
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col sm={6}>
              <Form.Group>
                <Form.Label className="fw-bold">Gender</Form.Label>
                <Form.Control
                  as="select"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col sm={6}>
              <Form.Group>
                <Form.Label className="fw-bold">Date of Birth</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="Enter date of birth"
                  value={dateOfBirth}
                  onChange={(e) => setDateOfBirth(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col sm={6}>
              <Form.Group>
                <Form.Label className="fw-bold">Mobile Number</Form.Label>
                <Form.Control type="tel" placeholder="Enter Mobile Number" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col sm={6}>
              <Form.Group>
                <Form.Label className="fw-bold">GST No.*</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </Col>
            <Col sm={6}>
              <Form.Group>
                <Form.Label className="fw-bold">
                  Bank Account Number*
                </Form.Label>
                <Form.Control type="tel" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col sm={6}>
              <Form.Group>
                <Form.Label className="fw-bold">IFSC*</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col sm={6} className="text-center"></Col>
            <Col sm={6} className="">
              <Button
                className="float-end"
                style={{ backgroundColor: "maroon" }}
                onClick={updateProfileData}
              >
                Save Changes
              </Button>
            </Col>
          </Row>
        </Form>
      </Col>
    );
  };

  return (
    <>
      <Header />
      <Container
        fluid
        className="h-100 p-5"
        style={{ backgroundColor: "#dee7de" }}
      >
        <Row className="h-100">
          <Col sm={3} className="">
            <div className="d-flex align-items-center">
              <i class="fa-regular fa-circle-user"></i>
              <p className="mt-2">&nbsp;Account Settings</p>
            </div>
          </Col>
        </Row>
        <Row className="h-100 ">
          <Sidebar />
          <ProfileSection />
        </Row>
        <ToastContainer />
      </Container>
    </>
  );
};

export default ProfilePage;
