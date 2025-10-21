import db from '../db/db.js'
import originalUsers from '../seed/users.js'

// seed database mongodb
async function resetUserData(req, res) {
    try {
        const collection = await db.collection("users")
        const resultDelete = await collection.deleteMany({})
        const resultInsert = await collection.insertMany(originalUsers)
        console.log({ ...resultDelete, ...resultInsert })
        res.redirect('/users')
    } catch(e) {
        console.log(e.message)
        res.json({ error: e.message })
    }
}

// renaming the functions in the export
export default {
    seed: resetUserData,
}