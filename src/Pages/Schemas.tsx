import { FC } from "react";

import Card from "../Components/Card";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faShareNodes,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Schemas: FC = () => {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#eeeeee",
        padding: 32,
      }}
    >
      <div style={{ fontSize: 32, fontWeight: 600, marginBottom: 24 }}>
        Schemas
      </div>
      <button className="button-1" style={{ marginBottom: 16 }}>
        <FontAwesomeIcon icon={faPlus} style={{ marginRight: 4 }} />
        <span>Create schema</span>
      </button>

      <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
        <Card
          style={{
            height: 300,
            cursor: "pointer",
            marginRight: 24,
            boxSizing: "border-box",
            padding: 24,
          }}
        >
          <NavLink
            to="activity"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div style={{ fontSize: 24, fontWeight: 600, marginBottom: 16 }}>
              Activity
            </div>

            <div style={{ fontWeight: 600, opacity: 0.6, marginBottom: 8 }}>
              Created 23/02/2023
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                fontWeight: 600,
                opacity: 0.6,
                marginBottom: 8,
              }}
            >
              <FontAwesomeIcon icon={faShareNodes} style={{ marginRight: 8 }} />
              <div>19 nodes</div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                fontWeight: 600,
                opacity: 0.6,
              }}
            >
              <FontAwesomeIcon
                icon={faPeopleGroup}
                style={{ marginRight: 8 }}
              />
              <div>3 contributors</div>
            </div>
          </NavLink>
        </Card>
      </div>
    </div>
  );
};

export default Schemas;
