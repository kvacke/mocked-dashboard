import { FC, ReactNode, useState } from "react";
import increaseBrightness from "../utils";

type NotificationProps = {
  children?: ReactNode;
  style?: React.CSSProperties;
};

const Notification: FC<NotificationProps> = ({ children, style }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        width: "100%",
        backgroundColor: hover ? increaseBrightness("#eeeeee", 10) : "white",
        padding: 16,
        boxSizing: "border-box",
        cursor: "pointer",
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default Notification;
