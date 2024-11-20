"use client";

import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { useLocation } from "react-router-dom";

export function NavbarHeader() {
  const { pathname } = useLocation();
  return (
    <div className="h-14">
      <Navbar fluid rounded className="shadow fixed w-full z-50">
        <Navbar.Brand href="/">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            VIK SALES
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
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
            <Dropdown.Header>
              <span className="block text-sm">Victor Makori</span>
              <span className="block truncate text-sm font-medium">
                viki@gmail.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>My Orders</Dropdown.Item>
            <Dropdown.Item>Profile</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="/" active={pathname === "/"}>
            Home
          </Navbar.Link>
          <Navbar.Link href="/cart" active={pathname === "/cart"}>
            Cart
          </Navbar.Link>
          <Navbar.Link href="/orders" active={pathname === "/orders"}>
            Orders
          </Navbar.Link>
          <Navbar.Link href="/about" active={pathname === "/about"}>
            About us
          </Navbar.Link>
          <Navbar.Link href="/contact" active={pathname === "/contact"}>
            Contact Us
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
