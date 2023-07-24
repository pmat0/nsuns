import React from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
} from "@fortawesome/fontawesome-svg-core/import.macro";

export const Header = (props) => {
  return (
    <header className={classes.header}>
      <h1 className={classes.header__heading}>
        <FontAwesomeIcon
          icon={solid("dumbbell")}
          className={classes.header__icon}
        />
        nSuns Progresja liniowa
      </h1>
      <nav className={classes.header__nav}>
        <ul className={classes["header__links-container"]}>
          <li className={classes["header__link-container"]}>
            <Link className={classes["header__link-item"]} to="/nsuns">
              4-dniowy
            </Link>
          </li>
          <li className={classes["header__link-container"]}>
            <Link className={classes["header__link-item"]} to="/nsuns/5d">
              5-dniowy
            </Link>
          </li>
          <li className={classes["header__link-container"]}>
            <Link className={classes["header__link-item"]} to="/nsuns/6d">
              6-dniowy
            </Link>
          </li>
          <li className={classes["header__link-container"]}>
            <a onClick={() => {props.openModal(true)}}className={classes["header__link-item"] + " " + classes["header__link-item--icon"]} href="#">
              <FontAwesomeIcon icon={solid("circle-info")} />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};