export const validateUser = (req, res, next) => {
    const { username, email, age, password } = req.body;

    if (!username || !email || !age || !password) {
        return res.status(400).json({ message: "All fields are required." });
    }

    next();
}