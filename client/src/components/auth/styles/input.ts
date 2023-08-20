import { CSSProperties } from "react";
export const inputStyles: { [key: string]: CSSProperties } = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  box: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    border: "2px solid #e9e9f4",
    padding: 4,
    width: 242,
    height: 32,
  },
  username: {
    backgroundColor: "#fff",
    color: "#000",
    border: 0,
    height: "100%",
    width: "100%",
    outline: "none",
  },
  password: {
    backgroundColor: "#fff",
    color: "#000",
    border: 0,
    height: "100%",
    width: "100%",
    outline: "none",
  },
  eye: {
    background: "none",
    borderWidth: 0,
    outline: "none",
    padding: 2,
    margin: 2,
  },
  icon: { color: "#000000", height: 16 },
  checkBox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: 258,
  },
  input: {
    background: "none",
    height: 16,
    width: 16,
    color: "#ffffff",
    border: 0,
  },
};
