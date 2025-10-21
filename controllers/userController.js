import User from "../models/userSchema.js";
import originalUsers from "../seed/users.js";

// GET all users
async function getUsers(req, res) {
  try {
    const users = await User.find();
    res.json(users);
  } catch (e) {
    console.log(e.message);
    res.json({ error: e.message });
  }
}

// POST create user
async function createUser(req, res) {
  try {
    const user = new User(req.body);
    await user.save();
    res.json(user);
  } catch (e) {
    console.log(e.message);
    res.json({ error: e.message });
  }
}

// PUT update user contents by unique mongodb property _id
async function updateUser(req, res) {
  try {
    const updated = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (e) {
    console.log(e.message);
    res.json({ error: e.message });
  }
}

// DELETE delete a specified user by u_id
async function deleteUser(req, res) {
  try {
    const result = await User.deleteOne({ u_id: req.params.userId });
    res.json(result);
  } catch (e) {
    console.log(e.message);
    res.json({ error: e.message });
  }
}

// seed database using mongoose
async function resetUserData(req, res) {
  try {
    const resultDelete = await User.deleteMany();
    const resultInsert = await User.insertMany(originalUsers);
    console.log({ ...resultDelete, ...resultInsert });
    res.json("successful");
  } catch (e) {
    console.log(e.message);
    res.json({ error: e.message });
  }
}

// renaming the functions in the export
export default {
  list: getUsers,
  create: createUser,
  update: updateUser,
  delete: deleteUser,
  seed: resetUserData,
};
