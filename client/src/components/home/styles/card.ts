import { CSSProperties } from "react";
export const styles: { [key: string]: CSSProperties } = {
  container: {
    width: "30%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
    gap: 2,
  },
  photoBox: {
    backgroundColor: "#fff",
    padding: 16,
    borderWidth: 10,
    borderRadius: "50%",
    borderColor: "#5cd18f",
    borderStyle: "solid",
    width: 100,
    height: 100,
  },
};
