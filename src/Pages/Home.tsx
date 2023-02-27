import { FC, useEffect } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import Card from "../Components/Card";
import { Activity } from "../types";
import activities from "../MOCK_DATA_2.json";
import dayjs from "dayjs";
import { colors } from "../colors";
import increaseBrightness from "../utils";
import jens from "../linkedin.jpeg";
import Notification from "../Components/Notification";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faArrowTrendUp,
  faArrowTrendDown,
} from "@fortawesome/free-solid-svg-icons";

const setRandomFootprintOnLeaves = (activity: Activity) => {
  if (!activity.children) {
    activity.footprint = Math.floor(Math.random() * 100);
  } else {
    activity.children.forEach((a) => {
      setRandomFootprintOnLeaves(a);
    });
  }
};

const data = [
  {
    name: "Mar 22",
    footprint: 1200,
  },
  {
    name: "Apr 22",
    footprint: 1700,
  },
  {
    name: "May 22",
    footprint: -800,
  },
  {
    name: "Jun 22",
    footprint: -300,
  },
  {
    name: "Jul 22",
    footprint: -4000,
  },
  {
    name: "Aug 22",
    footprint: -3000,
  },
  {
    name: "Sept 22",
    footprint: -1000,
  },
  {
    name: "Oct 22",
    footprint: 1500,
  },
  {
    name: "Dec 22",
    footprint: -2000,
  },
  {
    name: "Jan 23",
    footprint: -2200,
  },
];

const Home: FC = () => {
  const recentActivities: Activity[] = activities;

  recentActivities.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));

  const fetchActivityTypes = async () => {
    const response = await fetch(
      "https://emissions-test.theontologyway.eu/graphql?query={activityTypes%20{name,id,superType{id,name}}}"
    ).then((r) => r.json());

    // console.log(response.data.activityTypes)
    // console.error(response.errors)
    let root = undefined;
    const types = response.data.activityTypes;
    types.forEach((t: Activity) => {
      if (t.superType) {
        types.forEach((_t: Activity) => {
          if (_t.id === t.superType?.id) {
            if (!_t.children) {
              _t.children = [];
            }
            _t.children?.push(t);
          }
        });
      } else {
        //roten
        root = t;
      }
    });

    if (!root) {
      console.log("No root!!!");
      return;
    }

    setRandomFootprintOnLeaves(root);

    console.log({ root });
  };

  useEffect(() => {
    fetchActivityTypes();
  }, []);

  const gradientOffset = () => {
    const dataMax = Math.max(...data.map((i) => i.footprint));
    const dataMin = Math.min(...data.map((i) => i.footprint));

    if (dataMax <= 0) {
      return 0;
    }
    if (dataMin >= 0) {
      return 1;
    }

    return dataMax / (dataMax - dataMin);
  };

  const off = gradientOffset();

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#eeeeee",
        padding: 32,
      }}
    >
      <div style={{ width: 1100 }}>
        <div
          style={{
            display: "flex",
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            flexWrap: "wrap",
            marginBottom: 24,
          }}
        >
          <Card style={{ padding: 16, paddingLeft: 24, width: "32%" }}>
            <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 24 }}>
              {"Ontology score ®"}
            </div>
            <div style={{ fontSize: 38, fontWeight: 700, marginBottom: 8 }}>
              {12}
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                color: colors.success,
              }}
            >
              <FontAwesomeIcon
                style={{ fontSize: 24, marginRight: 8 }}
                icon={faArrowTrendUp}
              />
              <div style={{ fontWeight: 700, marginRight: 8 }}>33%</div>
              <div style={{ color: "black", opacity: 0.3 }}>
                Since last month
              </div>
            </div>
          </Card>
          <Card style={{ padding: 16, paddingLeft: 24, width: "32%" }}>
            <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 24 }}>
              {"Average activity footprint"}
            </div>
            <div style={{ fontSize: 38, fontWeight: 700, marginBottom: 8 }}>
              {182}
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                color: colors.success,
              }}
            >
              <FontAwesomeIcon
                style={{ fontSize: 24, marginRight: 8 }}
                icon={faArrowTrendDown}
              />
              <div style={{ fontWeight: 700, marginRight: 8 }}>-17%</div>
              <div style={{ color: "black", opacity: 0.3 }}>
                Since last month
              </div>
            </div>
          </Card>

          <Card style={{ padding: 16, paddingLeft: 24, width: "32%" }}>
            <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 24 }}>
              {"Some other number "}
            </div>
            <div style={{ fontSize: 38, fontWeight: 700, marginBottom: 8 }}>
              {0.045}
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                color: colors.success,
              }}
            >
              <FontAwesomeIcon
                style={{ fontSize: 24, marginRight: 8 }}
                icon={faArrowTrendUp}
              />
              <div style={{ fontWeight: 700, marginRight: 8 }}>9%</div>
              <div style={{ color: "black", opacity: 0.3 }}>
                Since last month
              </div>
            </div>
          </Card>
        </div>

        <Card
          style={{
            width: "100%",
            padding: 24,
            marginBottom: 24,
          }}
        >
          <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 16 }}>
            Monthly net footprint
          </div>
          <AreaChart
            width={1000}
            height={250}
            data={data}
            margin={{
              top: 10,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <defs>
              <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
                <stop offset={off} stopColor={colors.error} stopOpacity={1} />
                <stop offset={off} stopColor={colors.success} stopOpacity={1} />
              </linearGradient>
            </defs>
            <Area
              type="monotone"
              dataKey="footprint"
              stroke="#000"
              fill="url(#splitColor)"
            />
          </AreaChart>
        </Card>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Card
            style={{
              width: "49%",
              padding: 24,
              marginBottom: 24,
            }}
          >
            <>
              <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 16 }}>
                {"Recent activities"}
              </div>

              <table style={{ width: "100%" }} cellSpacing="0" cellPadding="0">
                <tr style={{ textAlign: "left", fontStyle: "normal" }}>
                  <th>Date</th>
                  <th>Activity</th>
                  <th>Department</th>
                  <th>Footprint</th>
                </tr>
                {recentActivities
                  .map((a) => {
                    const date = dayjs(Number(a.createdAt)).format(
                      "DD/MM/YYYY"
                    );

                    return (
                      <tr
                        style={{
                          height: 40,
                          backgroundColor:
                            a.footprint && a.footprint < 40
                              ? increaseBrightness(colors.success, 90)
                              : a.footprint && a.footprint > 90
                              ? increaseBrightness(colors.error, 90)
                              : "transparent",
                          color:
                            a.footprint && a.footprint < 40
                              ? colors.success
                              : a.footprint && a.footprint > 90
                              ? colors.error
                              : "black",
                        }}
                      >
                        <td>{date}</td>
                        <td>{a.name}</td>
                        <td>{a.department}</td>
                        <td
                          style={{
                            fontWeight:
                              a.footprint &&
                              (a.footprint < 40 || a.footprint > 90)
                                ? 700
                                : 500,
                          }}
                        >
                          {a.footprint}
                        </td>
                      </tr>
                    );
                  })
                  .slice(0, 10)}
              </table>
            </>
          </Card>

          <Card
            style={{
              width: "49%",
              marginBottom: 24,
            }}
          >
            <div
              style={{
                fontSize: 18,
                fontWeight: 700,
                padding: 24,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#f1f1f1",
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
              }}
            >
              <FontAwesomeIcon
                style={{ fontSize: 18, marginRight: 8 }}
                icon={faBell}
              />
              <div>Notifications</div>
            </div>

            <Notification>
              <div
                style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  paddingLeft: 10,
                }}
              >
                <img
                  src={
                    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                  }
                  width={50}
                  height={50}
                  alt=""
                  style={{
                    borderRadius: 25,
                    marginRight: 8,
                    objectFit: "cover",
                  }}
                />
                <div style={{ marginRight: 4 }}>Anton Cannon added report</div>
                <div style={{ fontWeight: 700 }}>January 2023</div>
                <div
                  style={{
                    position: "absolute",
                    fontSize: 12,
                    top: 0,
                    right: 0,
                    opacity: 0.5,
                  }}
                >
                  Just now
                </div>
              </div>
            </Notification>
            <Notification>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  paddingLeft: 10,
                  position: "relative",
                }}
              >
                <img
                  src={
                    "https://images.unsplash.com/photo-1609188076864-c35269136b09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  }
                  width={50}
                  height={50}
                  alt=""
                  style={{
                    borderRadius: 25,
                    marginRight: 8,
                    objectFit: "cover",
                  }}
                />
                <div style={{ marginRight: 4 }}>
                  Sofia Osborne liked your comment
                </div>
                <div
                  style={{
                    position: "absolute",
                    fontSize: 12,
                    top: 0,
                    right: 0,
                    opacity: 0.5,
                  }}
                >
                  15 min ago
                </div>
              </div>
            </Notification>
            <Notification>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  paddingLeft: 10,
                  position: "relative",
                }}
              >
                <img
                  src={
                    "https://media.licdn.com/dms/image/C4E0BAQE9nsRrnWaZsA/company-logo_200_200/0/1629118669766?e=2147483647&v=beta&t=6LNHw8peowEfXfIcIWZxgBKvk7dode8o4fk0p4U_Bxk"
                  }
                  width={50}
                  height={50}
                  alt=""
                  style={{
                    borderRadius: 25,
                    marginRight: 8,
                    objectFit: "contain",
                  }}
                />
                <div style={{ marginRight: 4 }}>
                  Version 1.11.1 is released!
                </div>
                <div
                  style={{
                    position: "absolute",
                    fontSize: 12,
                    top: 0,
                    right: 0,
                    opacity: 0.5,
                  }}
                >
                  1 hour ago
                </div>
              </div>
            </Notification>
            <Notification>
              <div
                style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  paddingLeft: 10,
                }}
              >
                <img
                  src={jens}
                  width={50}
                  height={50}
                  alt=""
                  style={{ borderRadius: 25, marginRight: 8 }}
                />
                <div style={{ marginRight: 4 }}>Jens Bleckert joined</div>
                <span style={{ fontWeight: 700 }}>Malmö office</span>
                <div
                  style={{
                    position: "absolute",
                    fontSize: 12,
                    top: 0,
                    right: 0,
                    opacity: 0.5,
                  }}
                >
                  Yesterday
                </div>
              </div>
            </Notification>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Home;
