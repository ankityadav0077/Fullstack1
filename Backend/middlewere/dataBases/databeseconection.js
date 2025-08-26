const mongoose=require('mongoose');
databaseUrl=process.env.DATABASE_URL || 'mongodb://localhost:27017/mydatabase';
const condectedDB=mongoose.connect(databaseUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB conection was successful...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

exports.condectedDB=condectedDB;