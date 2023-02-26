import {
  faChevronDown,
  faChevronRight,
  faLeaf,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, FC } from "react";
import { colors } from "./colors";
import { Activity } from "./types";

const ExpandableActivity: FC<{
  activity: Activity;
  depth: number;
  focusedActivityId?: string;
  onClick?: (id: string) => void;
}> = ({ activity, depth, onClick, focusedActivityId }) => {
  const [expanded, setExpanded] = useState(depth === 0);
  const [hover, setHover] = useState(false);

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
            if (c.children) {
              return (
                <ExpandableActivity
                  key={c.id}
                  activity={c}
                  depth={depth + 1}
                  focusedActivityId={focusedActivityId}
                  onClick={onClick}
                />
              );
            }
            return <></>;
          })}
        {expanded &&
          activity.children &&
          activity.children.map((c) => {
            if (!c.children) {
              return (
                <ExpandableActivity
                  key={c.id}
                  activity={c}
                  depth={depth + 1}
                  focusedActivityId={focusedActivityId}
                  onClick={onClick}
                />
              );
            }
            return <></>;
          })}
      </>
    </div>
  );
};

export default ExpandableActivity;
