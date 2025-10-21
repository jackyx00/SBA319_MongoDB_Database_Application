import mongoose from 'mongoose';

const db = async () => {
    try {
        await mongoose.connect(process.env.ATLAS_URI);
        console.log(`Connected`);
    } catch (e) {
        console.error(`Error connection due to ${e.message}`);
    }
}

export default db;
