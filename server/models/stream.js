const mongoose = require('mongoose');

const schema = mongoose.Schema({
   id: { type: String, required: true },
   name: { type: String },
   shortDescription: { type: String },
   longDescription: { type: String },
   thumbnail: { type: String },
   fullImage: { type: String },
   keywords: { type: String },
   createdAt: { type: String }
});

module.exports = mongoose.model('Stream', schema);
