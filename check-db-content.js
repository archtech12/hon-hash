const mongoose = require('mongoose');
const { loadEnvConfig } = require('@next/env');
loadEnvConfig(process.cwd());

async function checkDB() {
    try {
        if (!process.env.MONGODB_URI) {
            console.log('No MONGODB_URI found');
            return;
        }
        await mongoose.connect(process.env.MONGODB_URI);
        const Project = mongoose.model('Project', new mongoose.Schema({
            title: String,
            description: String
        }));

        const motorcycles = await Project.find({ title: /Motorcycle/i });
        console.log('Found motorcycles in DB:', JSON.stringify(motorcycles, null, 2));

        await mongoose.connection.close();
    } catch (err) {
        console.error(err);
    }
}

checkDB();
