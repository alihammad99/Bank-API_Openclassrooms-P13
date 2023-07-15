import { useEffect, useState } from "react";
import { getUser, updateUser } from "../../api";
import generateRandomTransactions from "../../utils/transactions";

const Username = () => {
  const [userData, setUserData] = useState(null); // Initialize with null instead of {}

  const fetchData = async () => {
    try {
      const data = await getUser();
      setUserData(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleFirstNameChange = (e) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      firstName: e.target.value,
    }));
  };

  const handleLastNameChange = (e) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      lastName: e.target.value,
    }));
  };

  if (userData === null) return <h4>Loading ...</h4>; // Render loading state when userData is null

  return (
    <div style={styles.container}>
      <h4>Welcome back</h4>
      <div style={{ display: "flex", flexDirection: "row", gap: 8 }}>
        <input
          style={styles.input}
          type="text"
          placeholder="First Name"
          value={userData.firstName || ""}
          onChange={handleFirstNameChange}
        />
        <input
          style={styles.input}
          type="text"
          placeholder="Last Name"
          value={userData.lastName || ""}
          onChange={handleLastNameChange}
        />
      </div>
      <div style={styles.button.container}>
        <button
          style={styles.button.save}
          onClick={() => updateUser(userData.firstName, userData.lastName)}
        >
          Save
        </button>
        <button style={styles.button.cancel} onClick={fetchData}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Username;

const styles = {
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
    border: "2px solid #aeaeae",
    borderRadius: 2,
    outline: "none",
  },
  button: {
    container: { display: "flex", flexDirection: "row", gap: 8 },
    save: {
      backgroundColor: "#fff",
      border: "2px solid #5f2dd3",
      borderRadius: 0,
      color: "#5f2dd3",
      width: 124,
      outline: "none",
    },
    cancel: {
      backgroundColor: "#fff",
      border: "2px solid #5f2dd3",
      borderRadius: 0,
      color: "#5f2dd3",
      width: 124,
      outline: "none",
    },
  },
};
