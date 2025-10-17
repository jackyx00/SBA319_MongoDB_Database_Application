import mongoose from 'mongoose';

const db = await mongoose.connect(process.env.ATLAS_URI);

export default db;
