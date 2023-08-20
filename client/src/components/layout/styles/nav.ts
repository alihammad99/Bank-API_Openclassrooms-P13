import { CSSProperties } from "react";
export const styles: { [key: string]: CSSProperties } = {
  container: {
    width: "100%",
    backgroundColor: "#ffffff",
  },
  innerBox: {
    maxWidth: 1350,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "0 auto",
  },
  rightBox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 24,
  },
  username: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  signout: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    background: "#fff",
    color: "#000",
    padding: 2,
  },
  signin: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
};
