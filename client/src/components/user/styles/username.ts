import { CSSProperties } from "react";
export const styles: { [key: string]: CSSProperties } = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    padding: 8,
    backgroundColor: "#fff",
    color: "#000",
    border: "2px solid #e9e9f4",
    borderRadius: 2,
    outline: "none",
  },
  buttonBox: { display: "flex", flexDirection: "row", gap: 8 },
  saveButton: {
    backgroundColor: "#fff",
    border: "2px solid #5f2dd3",
    borderRadius: 0,
    color: "#5f2dd3",
    width: 124,
    outline: "none",
  },
  cancelButton: {
    backgroundColor: "#fff",
    border: "2px solid #5f2dd3",
    borderRadius: 0,
    color: "#5f2dd3",
    width: 124,
    outline: "none",
  },
};
