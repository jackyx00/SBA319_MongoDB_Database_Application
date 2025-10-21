import User from "../models/userSchema.js";
import originalUsers from '../seed/users.js';

// seed database using mongoose
async function resetUserData(req, res) {
    try {
        const resultDelete = await User.deleteMany();
        const resultInsert = await User.insertMany(originalUsers);
        console.log({ ...resultDelete, ...resultInsert });
        res.json("successful");
    } catch(e) {
        console.log(e.message);
        res.json({ error: e.message });
    }
}

async function getUsers(req, res) {
    try {
        const users = await User.find();
        res.json(users);
    } catch(e) {
        console.log(e.message);
        res.json({ error: e.message });
    }
}

// renaming the functions in the export
export default {
    list: getUsers,
    seed: resetUserData,
}