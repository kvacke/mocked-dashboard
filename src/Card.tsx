import { FC, ReactNode } from "react";

type CardProps = {
  onClick?: () => void;
  children?: ReactNode;
  style?: React.CSSProperties;
};

const Card: FC<CardProps> = ({ onClick, children, style }) => {
  return (
    <div
      style={{
        borderRadius: 8,
        boxSizing: "border-box",
        backgroundColor: "white",
        boxShadow: "0px 0px 8px #ccc",
        minWidth: 260,
        ...style,
      }}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;
