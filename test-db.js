const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb://localhost:27017/hashmeter';

async function testConnection() {
    try {
        console.log('Connecting to MongoDB...');
        await mongoose.connect(MONGODB_URI);
        console.log('✅ Successfully connected to local MongoDB!');
        process.exit(0);
    } catch (err) {
        console.error('❌ Connection error:', err.message);
        console.log('\nMake sure MongoDB is running locally on port 27017.');
        process.exit(1);
    }
}

testConnection();
