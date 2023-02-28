import {
  faFile,
  faFrog,
  faGear,
  faHome,
  faList,
  faPeopleGroup,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, useEffect, useState } from "react";
import { matchRoutes, NavLink, useLocation } from "react-router-dom";
import logo from "./Frame.png";

const Menu: FC = () => {
  const items = ["Home", "Schemas", "Teams", "Settings"];

  const getIcon = (label: string) => {
    switch (label) {
      case "Home":
        return faHome;
      case "Schemas":
        return faFile;
      case "Teams":
        return faUserGroup;
      case "Settings":
        return faGear;
      default:
        return faFrog;
    }
  };
  const location = useLocation();

  const [activeItem, setActiveItem] = useState("");

  useEffect(() => {
    setActiveItem(location.pathname.slice(1, location.pathname.length));
  }, [location]);

  return (
    <div
      style={{
        height: "100%",
        width: "250px",
        display: "flex",
        flexDirection: "column",
        paddingTop: 32,
      }}
    >
      
      {items.map((i, index) => {
        return (
          <NavLink
            key={index}
            to={i.toLowerCase()}
            className={({ isActive, isPending }) =>
              isActive ? "active" : isPending ? "pending" : ""
            }
            style={{
              textDecoration: "none",
              // backgroundColor:
              //   i.toLowerCase() === activeItem ? "#f1f1f1" : "white",
              color: "inherit",
              fontSize: 16,
              fontWeight: 600,
              opacity: 0.86,
              paddingTop: 16,
              paddingBottom: 16,
              cursor: "pointer",
              borderTop: index === 0 ? "1px solid #e7e7e7" : undefined,
              borderBottom: "1px solid #e7e7e7",
              paddingLeft: 32,
              alignItems: "center",
            }}
          >
            <FontAwesomeIcon
              icon={getIcon(i)}
              style={{ marginRight: 8, width: 20 }}
            />
            {i}
          </NavLink>
        );
      })}
    </div>
  );
};
export default Menu;
