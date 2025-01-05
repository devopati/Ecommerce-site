"use client";

import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export function NavbarHeader() {
  const navigate = useNavigate();

  const { pathname } = useLocation();
  const user: { user: { email: string; fullName: string }; token: string } =
    JSON.parse(localStorage.getItem("user") || "null"); //get token and user from local storage

  return (
    <div className="h-14">
      <Navbar fluid rounded className="shadow fixed w-full z-50">
        <Navbar.Brand href="/">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            VIK SALES
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          {!user?.token && (
            <Button
              onClick={() =>
                navigate("/register", { state: { fromCheckout: false } })
              }
            >
              Sign Up
            </Button>
          )}
          {user?.token && (
            <Dropdown
              arrowIcon={false}
              inline
              label={
                <Avatar
                  alt="User settings"
                  img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  rounded
                />
              }
            >
              <Dropdown.Header></Dropdown.Header>
              <Dropdown.Item href="/dashboard/all-products">
                Dashboard
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  localStorage.removeItem("user");
                  window.location.reload();
                }}
              >
                Sign out
              </Dropdown.Item>
              <Dropdown.Divider />
            </Dropdown>
          )}
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Link to={"/"}>
            <Navbar.Link active={pathname === "/"}>Home</Navbar.Link>
          </Link>

          <Link to={"/cart"}>
            <Navbar.Link active={pathname === "/cart"}>Cart</Navbar.Link>
          </Link>

          <Link to={"/orders"}>
            <Navbar.Link active={pathname === "/orders"}>Orders</Navbar.Link>
          </Link>

          <Link to={"/about"}>
            <Navbar.Link active={pathname === "/about"}>About us</Navbar.Link>
          </Link>

          <Link to={"/contact"}>
            <Navbar.Link active={pathname === "/contact"}>
              Contact Us
            </Navbar.Link>
          </Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
