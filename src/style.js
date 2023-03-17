import { makeStyles } from "@mui/styles";

const useStyle = makeStyles(() => ({
  flexContainer: {
    boxSizing: "border-box",
    height: "100vh",
    width: "100vw",
    backgroundColor: "#FFFFFF",
    position: "relative",
  },
  signinProfile: {
    display: "flex",
    height: "150px",
    width: "150px",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    position: "absolute",
    top: "180px",
    left: "860px",
  },
  heading: {
    height: "65px",
    width: "233px",
    position: "absolute",
    top: "350px",
    left: "815px",
    textAlign: "left",
    color: "#0B3558",
    letterSpacing: "0px",
    opacity: "1",
    fontFamily: "Open Sans, sans-serif",
    fontSize: "50px",
  },
  paragraph: {
    height: "54px",
    width: "336px",
    position: "absolute",
    top: "420px",
    left: "762px",
    textAlign: "center",
  },
  submitButton: {
    height: "50px",
    width: "500px",
    backgroundColor: "#003FB9",
    position: "absolute",
    top: "655px",
    left: "677px",
    textAlign: "center",
    opacity: "1",
    boxShadow: "0px 3px 6px #00000029",
    borderRadius: "4px",
  },
}));

export default useStyle;