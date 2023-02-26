import {
  faChevronDown,
  faChevronRight,
  faLeaf,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, FC, useEffect } from "react";
import { act } from "react-dom/test-utils";
import { colors } from "./colors";
import { Activity } from "./types";

const compare = (a: Activity, b: Activity) => {
  if (a.children && b.children) {
    return 0;
  }
  if (!a.children) {
    return 1;
  }
  if (!b.children) {
    return -1;
  }
  return 0;
};

const ExpandableActivity: FC<{
  activity: Activity;
  depth: number;
  focusedActivityId?: string;
  onClick?: (id: string) => void;
}> = ({ activity, depth, onClick, focusedActivityId }) => {
  const [expanded, setExpanded] = useState(depth === 0);
  const [hover, setHover] = useState(false);

  if (activity.children) {
    activity.children.sort(compare);
  }

  const handleClick = () => {
    setExpanded(!expanded);

    if (onClick) {
      onClick(activity.id);
    }
  };

  return (
    <div
      style={{
        paddingLeft: depth === 0 ? 0 : 16,
        userSelect: "none",
        cursor: "pointer",
      }}
    >
      <>
        <div
          style={{
            display: "flex",

            flexDirection: "row",
            alignItems: "center",
            fontWeight: activity.children ? 700 : 500,
            padding: 12,
            backgroundColor:
              focusedActivityId === activity.id
                ? "#d1d1d1"
                : hover
                ? "#e1e1e1"
                : "transparent",
          }}
          onClick={handleClick}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          {activity.children ? (
            <FontAwesomeIcon
              style={{ marginRight: 8 }}
              icon={!expanded ? faChevronRight : faChevronDown}
            />
          ) : (
            <FontAwesomeIcon
              style={{ marginRight: 8, color: colors.leaf }}
              icon={faLeaf}
            />
          )}
          <div>{activity.name}</div>
        </div>

        {expanded &&
          activity.children &&
          activity.children.map((c) => {
            return (
              <ExpandableActivity
                key={c.id}
                activity={c}
                depth={depth + 1}
                focusedActivityId={focusedActivityId}
                onClick={onClick}
              />
            );
          })}
      </>
    </div>
  );
};

export default ExpandableActivity;
