import { CSSProperties } from "react";
export const styles: { [key: string]: CSSProperties } = {
  container: { position: "relative" },
  photo: { objectFit: "cover", objectPosition: "50% 27%" },
  box: {
    position: "absolute",
    top: "22%",
    right: "10%",
    backgroundColor: "#fff",
    padding: 24,
    width: 300,
  },
};
