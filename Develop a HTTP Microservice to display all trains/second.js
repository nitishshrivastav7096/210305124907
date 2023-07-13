const express = require("express");
const axios = require("axios");

const app = express();
const port = 30000; 

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

const registerCompany = async () => {
  try {
    const response = await axios.post("http://localhost:8000/train/register", {
      companyName: "Train Central",
      ownerName: "Rahul",
      rollNo: "1",
      ownerEmail: "rahul@abc.edu",
      accessCode: "FKDLjg",
    });

    const { clientID, clientSecret } = response.data;
    console.log("Company registered successfully!");
    console.log("Client ID:", clientID);
    console.log("Client Secret:", clientSecret);
  } catch (error) {
    console.error("Company registration failed:", error.message);
  }
};


registerCompany();

//obtaining code:
const getAuthToken = async () => {
  try {
    const response = await axios.post("http://localhost:8000/train/auth", {
      companyName: "Train Central",
      clientID: "<YOUR_CLIENT_ID>",
      ownerName: "Rahul",
      ownerEmail: "rahul@abc.edu",
      rollNo: "1",
      clientSecret: "<YOUR_CLIENT_SECRET>",
    });

    const { access_token } = response.data;
    console.log("Authorization Token obtained successfully!");
    console.log("Access Token:", access_token);
  } catch (error) {
    console.error("Failed to obtain Authorization Token:", error.message);
  }
};

// Call the getAuthToken function
getAuthToken();

//get train details:

const getTrainDetails = async () => {
  try {
    const authToken = "<YOUR_AUTH_TOKEN>"; // Replace with the obtained authorization token

    const response = await axios.get("http://localhost:8000/train/trains", {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });

    const trainDetails = response.data;
    console.log("Train details fetched successfully!");
    console.log("Train details:", trainDetails);
  } catch (error) {
    console.error("Failed to retrieve train details:", error.message);
  }
};
