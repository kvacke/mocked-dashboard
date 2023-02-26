import { FC } from "react";

const Settings: FC = () => {
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
        Settings
      </div>
      <div style={{ fontSize: 24 }}>Oops! For appearances only. 😬</div>
    </div>
  );
};

export default Settings;
