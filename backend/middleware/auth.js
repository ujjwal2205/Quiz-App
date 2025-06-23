import jwt from "jsonwebtoken";

const authenticate = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.json({ success: false, message: "Please login as admin to view leaderboard" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.json({ success: false, message: "Invalid token" });
  }
};

const isAdmin = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.json({ success: false, message: "Please login as admin to access leaderboard." });
  }
  next();
};

export { authenticate, isAdmin };
