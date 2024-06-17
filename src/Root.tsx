import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { useCookies } from "react-cookie";
import { Outlet, Link, useLocation } from "react-router-dom";
import nyamuk from "./assets/images/nyamuk.svg";

function Header() {
  const [cookies, setCookie] = useCookies(["username"]);
  const location = useLocation();

  function keluar() {
    setCookie("username", "");
  }

  return (
    <header className="fixed inset-x-0 top-0">
      <Navbar fluid rounded>
        <NavbarBrand as={Link} to="/" className="gap-1">
          <img src={nyamuk} className="size-8" alt="nyamuk dbd" />
          <span className="self-center whitespace-nowrap text-xl font-semibold">
            Diagnosa DBD
          </span>
        </NavbarBrand>
        <NavbarToggle />
        <NavbarCollapse>
          {cookies.username ? (
            <NavbarLink onClick={keluar} as={Link} to="/">
              Keluar
            </NavbarLink>
          ) : (
            <>
              <NavbarLink
                as={Link}
                to="/masuk"
                active={location.pathname === "/masuk"}
              >
                Masuk
              </NavbarLink>
              <NavbarLink
                as={Link}
                to="/daftar"
                active={location.pathname === "/daftar"}
              >
                Daftar
              </NavbarLink>
            </>
          )}
        </NavbarCollapse>
      </Navbar>
    </header>
  );
}

function Root() {
  return (
    <main className="w-full">
      <Header />
      <Outlet />
    </main>
  );
}

export default Root;
