import { CSSProperties } from "react";
export const styles: { [key: string]: CSSProperties } = {
  container: {
    backgroundColor: "#fff",
    border: "4px solid #e9e9f4",
    overflow: "hidden",
    position: "relative",
    cursor: "pointer",
  },
  topBox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  text: {
    color: "#000",
    minWidth: 100,
    textAlign: "left",
  },
};
