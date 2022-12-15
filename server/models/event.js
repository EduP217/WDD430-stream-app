const mongoose = require('mongoose');

const Schema = mongoose.Schema({
   id: { type: String, required: true },
   title: { type: String },
   description: { type: String },
   type: { type: String },
   category: { type: String },
   createdAt: { type: String },
   scheduledAt: { type: String },
   stream: { type: mongoose.Schema.Types.ObjectId , ref: 'Stream' }
});

module.exports = mongoose.model('Event', Schema);
