import Link from "next/link";
import classNames from "classnames";
import styles from "./Navbar.module.css"; // Adjust the path as necessary
const NavItem = ({ title, link, isActive }) => {
  return (
    <Link
      href={link}
      className={classNames({
        [styles.isLinkActive]: isActive,
      })}
    >
      <b>{title}</b>
    </Link>
  );
};
export default NavItem;
