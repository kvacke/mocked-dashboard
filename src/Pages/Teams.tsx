import { FC } from "react";

import Card from "../Components/Card";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faPen, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { colors } from "../colors";

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
      <button className="button-1" style={{ marginBottom: 24 }}>
        <FontAwesomeIcon icon={faPlus} style={{ marginRight: 4 }} />
        <span>Create new team</span>
      </button>
      <>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 16,
          }}
        >
          <div
            style={{
              fontSize: 18,
              fontWeight: 600,

              marginRight: 8,
            }}
          >
            Melbourne CBD office
          </div>
          <FontAwesomeIcon icon={faPen} style={{ cursor: "pointer" }} />
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          {mockMembers1.map((m) => {
            return (
              <Card
                style={{
                  width: 200,
                  height: 300,
                  padding: 16,
                  marginRight: 16,
                  boxSizing: "border-box",
                  position: "relative",
                  marginBottom: 24,
                }}
              >
                <div
                  style={{
                    height: "90%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={m.imgUrl}
                    style={{
                      width: 100,
                      height: 100,
                      borderRadius: 50,
                      objectFit: "cover",
                      marginBottom: 8,
                    }}
                    alt=""
                  />
                  <div style={{ fontWeight: 700, marginBottom: 4 }}>
                    {m.name}
                  </div>
                  <div style={{ opacity: 0.5 }}>{m.title}</div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    height: "10%",
                  }}
                >
                  <div
                    style={{
                      height: 30,
                      paddingRight: 12,
                      paddingLeft: 12,

                      borderRadius: 15,
                      backgroundColor: colors.blue,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      color: "white",
                      fontSize: 15,
                      fontWeight: 600,
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      style={{ marginRight: 8 }}
                    />
                    <div>Message</div>
                  </div>
                  <div
                    style={{
                      height: 30,
                      paddingRight: 12,
                      paddingLeft: 12,

                      borderRadius: 15,
                      backgroundColor: "white",
                      borderWidth: 1,
                      borderColor: colors.blue,
                      color: colors.blue,
                      borderStyle: "solid",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      fontSize: 15,
                      fontWeight: 600,
                    }}
                  >
                    <div>View details</div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </>
      <>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 16,
            marginTop: 32,
          }}
        >
          <div
            style={{
              fontSize: 18,
              fontWeight: 600,

              marginRight: 8,
            }}
          >
            Warrabooga On-site
          </div>
          <FontAwesomeIcon icon={faPen} style={{ cursor: "pointer" }} />
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          {mockMembers2.map((m) => {
            return (
              <Card
                style={{
                  width: 200,
                  height: 300,
                  padding: 16,
                  marginRight: 16,
                  boxSizing: "border-box",
                  position: "relative",
                  marginBottom: 24,
                }}
              >
                <div
                  style={{
                    height: "90%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={m.imgUrl}
                    style={{
                      width: 100,
                      height: 100,
                      borderRadius: 50,
                      objectFit: "cover",
                      marginBottom: 8,
                    }}
                    alt=""
                  />
                  <div style={{ fontWeight: 700, marginBottom: 4 }}>
                    {m.name}
                  </div>
                  <div style={{ opacity: 0.5 }}>{m.title}</div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    height: "10%",
                  }}
                >
                  <div
                    style={{
                      height: 30,
                      paddingRight: 12,
                      paddingLeft: 12,

                      borderRadius: 15,
                      backgroundColor: colors.blue,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      color: "white",
                      fontSize: 15,
                      fontWeight: 600,
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      style={{ marginRight: 8 }}
                    />
                    <div>Message</div>
                  </div>
                  <div
                    style={{
                      height: 30,
                      paddingRight: 12,
                      paddingLeft: 12,

                      borderRadius: 15,
                      backgroundColor: "white",
                      borderWidth: 1,
                      borderColor: colors.blue,
                      color: colors.blue,
                      borderStyle: "solid",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      fontSize: 15,
                      fontWeight: 600,
                    }}
                  >
                    <div>View details</div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </>
    </div>
  );
};

export default Teams;
