import LoginModel from "../models/login.js";

const SaveLogin = async (req, res) => {
  const { username, password } = req.body;

  try {
    const login = new LoginModel({ username, password });
    await login.save();
    res.status(200).json({ message: "Login saved successfully" });
  } catch (error) {
    console.error("Error saving login:", error);
    res.status(500).json({ error: "Failed to save login" });
  }
};

export default SaveLogin;
