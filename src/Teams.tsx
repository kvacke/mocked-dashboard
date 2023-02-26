import { FC, useEffect, useState, useCallback } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Sector,
  Cell,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

import Card from "./Card";
import ExpandableActivity from "./ExpandableActivity";
import { Activity } from "./types";
import activities from "./MOCK_DATA_2.json";
import dayjs from "dayjs";
import { colors } from "./colors";
import increaseBrightness from "./utils";
import jens from "./linkedin.jpeg";
import Notification from "./Notification";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faArrowTrendUp,
  faPlus,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";

const mockMembers1 = [
  {
    name: "Alice Fanning",
    title: "Compliance officer",
    imgUrl:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  },
  {
    name: "Chad Burnett",
    title: "Emissions detailer",
    imgUrl:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  },
  {
    name: "Jacques Salazar",
    title: "Climate action coordinator",
    imgUrl:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  },
  {
    name: "Sofia Osborne",
    title: "Researcher",
    imgUrl:
      "https://images.unsplash.com/photo-1609188076864-c35269136b09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  },
];

const mockMembers2 = [
  {
    name: "Elias Valenzuela",
    title: "Site manager",
    imgUrl:
      "https://images.unsplash.com/photo-1621905252472-943afaa20e20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
  },
  {
    name: "Anton Cannon",
    title: "Numbers guy",
    imgUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  },
  {
    name: "Chloe Haney",
    title: "Senior sustainabilitator",
    imgUrl:
      "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  },
];

const Teams: FC = () => {
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
        Teams
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          width: "100%",
        }}
      >
        <Card style={{ width: 400, marginRight: 24 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 16,
            }}
          >
            <div style={{ fontSize: 18, fontWeight: 600 }}>
              Melbourne CBD office
            </div>

            <button className="button-1">
              <FontAwesomeIcon icon={faUserPlus} style={{ marginRight: 4 }} />
              <span>New member</span>
            </button>
          </div>

          {mockMembers1.map((m) => {
            return (
              <Notification style={{}}>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <img
                    src={m.imgUrl}
                    style={{
                      width: 60,
                      height: 60,
                      borderRadius: 30,
                      marginRight: 16,
                      objectFit: "cover",
                    }}
                    alt=""
                  />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                  >
                    <div style={{ fontWeight: 700, fontSize: 18 }}>
                      {m.name}
                    </div>
                    <div
                      style={{ fontWeight: 600, fontSize: 14, opacity: 0.5 }}
                    >
                      {m.title}
                    </div>
                  </div>
                </div>
              </Notification>
            );
          })}
        </Card>
        <Card style={{ width: 400 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 16,
            }}
          >
            <div style={{ fontSize: 18, fontWeight: 600 }}>
              Waggaburra on-site
            </div>

            <button className="button-1">
              <FontAwesomeIcon icon={faUserPlus} style={{ marginRight: 4 }} />
              <span>New member</span>
            </button>
          </div>

          {mockMembers2.map((m) => {
            return (
              <Notification style={{}}>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <img
                    src={m.imgUrl}
                    style={{
                      width: 60,
                      height: 60,
                      borderRadius: 30,
                      marginRight: 16,
                      objectFit: "cover",
                    }}
                    alt=""
                  />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                  >
                    <div style={{ fontWeight: 700, fontSize: 18 }}>
                      {m.name}
                    </div>
                    <div
                      style={{ fontWeight: 600, fontSize: 14, opacity: 0.5 }}
                    >
                      {m.title}
                    </div>
                  </div>
                </div>
              </Notification>
            );
          })}
        </Card>
      </div>
    </div>
  );
};

export default Teams;
