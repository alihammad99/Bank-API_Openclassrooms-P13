import { CSSProperties } from "react";
export const styles: { [key: string]: CSSProperties } = {
  container: {
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 40,
    border: "8px solid #e9e9f4",
  },
  subtitle: { color: "#000", fontSize: 18, textAlign: "center" },
  price: {
    color: "#000",
    fontSize: 48,
    textAlign: "center",
    fontWeight: "bold",
    lineHeight: 0,
  },
};
