import { FC, useEffect, useState } from "react";
import { Activity } from "./types";
import ExpandableActivity from "./ExpandableActivity";
import { colors } from "./colors";
import Card from "./Card";
import { loremIpsum } from "./loremIpsum";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faBoxes,
  faEarth,
  faGasPump,
  faLeaf,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const randomIntFromInterval = (min: number, max: number) => {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const MockSchema: FC = () => {
  const [rootActivity, setRootActivity] = useState<Activity>();
  const [activities, setActivities] = useState<Activity[]>();
  const [focusedActivity, setFocusedActivity] = useState<Activity>();
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  const fetchActivityTypes = async () => {
    const response = await fetch(
      "https://emissions-test.theontologyway.eu/graphql?query={activityTypes%20{name,id,superType{id,name}}}"
    ).then((r) => r.json());

    let root = undefined;
    const types = response.data.activityTypes;
    setActivities(types);

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

    setRootActivity(root);
  };

  const focusActivity = (id: string) => {
    const activity = activities?.find((a) => a.id === id);
    console.log(activities);
    if (activity) {
      setFocusedActivity(activity);
    }
  };

  useEffect(() => {
    fetchActivityTypes();
  }, []);

  useEffect(() => {
    if (rootActivity) {
      setFocusedActivity(rootActivity);
    }
  }, [rootActivity]);

  useEffect(() => {
    if (focusedActivity) {
      setDescription(loremIpsum[Math.floor(Math.random() * loremIpsum.length)]);
    }
  }, [focusedActivity]);

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#eeeeee",
        padding: 32,
      }}
    >
      <div style={{ fontSize: 24, marginBottom: 24 }}>
        <FontAwesomeIcon
          icon={faArrowLeft}
          style={{ cursor: "pointer" }}
          onClick={() => navigate(-1)}
        />
      </div>
      <div style={{ fontSize: 32, fontWeight: 600, marginBottom: 8 }}>
        Activity
      </div>
      <div
        style={{
          fontSize: 12,
          marginBottom: 24,
          backgroundColor: colors.maroon,
          padding: 8,
          textAlign: "center",
          borderRadius: 40,
          width: 90,
          color: "white",
          fontWeight: 800,
          userSelect: "none",
        }}
      >
        Viewing mode
      </div>
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          width: "100%",
        }}
      >
        <div style={{ width: "30%", marginRight: 16 }}>
          {rootActivity && (
            <ExpandableActivity
              activity={rootActivity}
              depth={0}
              focusedActivityId={focusedActivity?.id}
              onClick={focusActivity}
            />
          )}
        </div>
        <div style={{ width: "40%" }}>
          {focusedActivity ? (
            <Card
              style={{
                padding: 24,
              }}
            >
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
                    fontSize: 24,
                    fontWeight: 600,
                    marginRight: 8,
                  }}
                >
                  {focusedActivity.name}
                </div>
                {!focusedActivity.children && (
                  <div
                    style={{
                      fontSize: 12,
                      backgroundColor: colors.leaf,
                      color: "white",
                      fontWeight: 700,
                      padding: 6,
                      paddingLeft: 12,
                      paddingRight: 12,
                      borderRadius: 24,
                    }}
                  >
                    <FontAwesomeIcon icon={faLeaf} style={{ marginRight: 4 }} />
                    Leaf node
                  </div>
                )}
              </div>
              {!focusedActivity.children && (
                <div style={{ marginBottom: 12, fontWeight: 500 }}>
                  <div style={{ marginBottom: 8 }}>
                    <FontAwesomeIcon
                      icon={faBoxes}
                      style={{ marginRight: 8 }}
                    />
                    {randomIntFromInterval(1, 100)} kg / unit
                  </div>
                  <div style={{ marginBottom: 8 }}>
                    <FontAwesomeIcon
                      icon={faGasPump}
                      style={{ marginRight: 8 }}
                    />
                    {randomIntFromInterval(10, 1000)} m² / something
                  </div>
                  <div style={{ marginBottom: 8 }}>
                    <FontAwesomeIcon
                      icon={faEarth}
                      style={{ marginRight: 8 }}
                    />
                    {randomIntFromInterval(0, 25)} thingies
                  </div>
                </div>
              )}

              <div>{description}</div>
            </Card>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default MockSchema;
