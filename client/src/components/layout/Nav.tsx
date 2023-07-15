import Logo from "../../assets/img/argentBankLogo.png";
import FeatherIcon from "feather-icons-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getUser } from "../../api";

const NavBar = () => {
  const token =
    localStorage.getItem("token") || sessionStorage.getItem("token");
  const navigate = useNavigate();

  const [userData, setUserData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUser();
        setUserData(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
    console.log("Sign out");
    navigate("/login");
  };

  return (
    <div style={styles.container}>
      <div style={styles.innerBox}>
        {/* Left Side */}
        <Link to={"/"}>
          <img src={Logo} width="200" />
        </Link>

        {/* Right Side */}
        {token && userData ? (
          <div style={styles.rightBox}>
            <Link to={"/profile"} style={styles.username}>
              <FeatherIcon size="20" icon="user" />
              <p>{userData.firstName}</p>
            </Link>
            <button style={styles.signout} onClick={handleSignOut}>
              <FeatherIcon size="20" icon="log-out" />
              <p>Sign Out</p>
            </button>
          </div>
        ) : (
          <Link style={styles.signin} to={"/login"}>
            <FeatherIcon size="20" icon="user" />
            <h3>Sign In</h3>
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;

const styles = {
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
