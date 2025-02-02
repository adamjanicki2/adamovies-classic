import "src/components/nav.css";
import { UnstyledLink } from "src/components/Link";
import { useLocation } from "react-router-dom";
import logo from "src/images/logo.png";
import { classNames } from "@adamjanicki/ui/functions";

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

  const Navlink = ({ selected, ...props }: NavlinkProps) => (
    <li className="navlink-li">
      <UnstyledLink
        className={classNames(
          "navlink",
          selected ? "navlink-selected" : undefined
        )}
        {...props}
      />
    </li>
  );

  return (
    <nav className="flex items-center w-100 nav flex-wrap">
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
      <ul
        className="flex flex-wrap items-center link-container ma0"
        style={{ flexGrow: 1 }}
      >
        {links.map(({ name, path }, i) => (
          <Navlink key={i} selected={pathname === path} to={path}>
            {name}
          </Navlink>
        ))}
        <li className="log-container">
          <UnstyledLink
            to="https://adamovies.com/login"
            className="button-log black"
          >
            Sign In
          </UnstyledLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
