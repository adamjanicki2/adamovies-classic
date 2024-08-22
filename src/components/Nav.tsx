import { useEffect, useState } from "react";
import { Turn as Hamburger } from "hamburger-react";
import "src/components/nav.css";
import { UnstyledLink } from "src/components/Link";
import { useLocation } from "react-router-dom";
import logo from "src/images/logo.png";
import { classNames } from "@adamjanicki/ui/utils/util";
import { UnstyledButton } from "@adamjanicki/ui";

type NavlinkProps = {
  to: string;
  children: React.ReactNode;
  selected?: boolean;
};

const links = [
  { name: "Home", path: "/" },
  { name: "Movies", path: "/movies" },
  { name: "Shows", path: "/tvshows" },
] as const;

const Nav = () => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  useEffect(() => {
    closeMenu();
  }, [pathname]);

  const Navlink = ({ selected, ...props }: NavlinkProps) => (
    <li className="navlink-li">
      <UnstyledLink
        className={classNames(
          "navlink",
          selected ? "navlink-selected" : undefined
        )}
        onClick={closeMenu}
        {...props}
      />
    </li>
  );

  return (
    <nav className="flex items-center w-100 nav">
      <div className="flex items-center justify-between bar-container">
        <UnstyledLink className="flex items-center nav-title pr1" to="/">
          <img
            src={logo}
            alt="logo"
            height="45px"
            className="ba b--white"
            style={{ marginRight: "16px", borderRadius: 6 }}
          />
          ADAMOVIES
        </UnstyledLink>
        <div className="mobile">
          <Hamburger
            toggled={open}
            onToggle={() => setOpen(!open)}
            direction="left"
            size={24}
            duration={0.3}
          />
        </div>
      </div>
      <ul
        className="flex items-center desktop link-container ma0"
        style={{ display: open ? "flex" : undefined, flexGrow: 1 }}
      >
        {links.map(({ name, path }, i) => (
          <Navlink key={i} selected={pathname === path} to={path}>
            {name}
          </Navlink>
        ))}
        <div className="log-container">
          <UnstyledButton
            className="button-log black"
            onClick={() => window.alert("Set this up!")}
          >
            Sign In
          </UnstyledButton>
        </div>
      </ul>
    </nav>
  );
};

export default Nav;
