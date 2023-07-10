import classes from "./Navigation.module.scss";
import { Routes } from "../../../../utils/data/routs";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const listItems = Routes.map((el, index) => (
    <li className={classes.navigationItem} key={index}>
      <NavLink
        className={({ isActive }) => {
          const linkClasses = [classes.navigationItemLink];
          if (isActive) linkClasses.push(classes.active);
          return linkClasses.join(" ");
        }}
        to={el.href}
      >
        {el.label}
      </NavLink>
    </li>
  ));

  return (
    <>
      <nav>
        <ul className={classes.navigationList}>
          {listItems}
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
