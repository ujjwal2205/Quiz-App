import leaderboard from "../models/AdminModel.js";

// 👇 Add new entry to leaderboard
const addToLeaderboard = async (req, res) => {
  const { name, quizName, score } = req.body;
  try {
    const newEntry = new leaderboard({ name, quizName, score });
    await newEntry.save();

    // After adding, fetch updated leaderboard sorted by score
    const data = await leaderboard.find().sort({ score: -1 });

    res.status(201).json({ success: true, leaderboard: data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
};
const viewLeaderboard = async (req, res) => {
  try {
    const data = await leaderboard.find().sort({ score: -1 });

    res.json({ success: true, leaderboard: data,message:"Leaderboard fetched"});
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export { addToLeaderboard,viewLeaderboard };
