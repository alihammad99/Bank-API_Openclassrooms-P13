import React from "react";
import { useEffect, useState } from "react";
import { getUser, updateUser } from "../../api";
import { styles } from "./styles/username";

interface UserData {
  firstName: string;
  lastName: string;
}

const Username = () => {
  const [userData, setUserData] = useState<UserData | null>(null);

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

  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData((prevUserData) => {
      if (!prevUserData) return prevUserData;
      return {
        ...prevUserData,
        firstName: e.target.value,
      };
    });
  };

  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData((prevUserData) => {
      if (!prevUserData) return prevUserData;
      return {
        ...prevUserData,
        lastName: e.target.value,
      };
    });
  };

  if (userData === null) return <h4>Loading ...</h4>;

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
      <div style={styles.buttonBox}>
        <button
          style={styles.saveButton}
          onClick={() => updateUser(userData.firstName, userData.lastName)}
        >
          Save
        </button>
        <button style={styles.cancelButton} onClick={fetchData}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Username;
