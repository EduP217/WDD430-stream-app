var Sequence = require('../models/sequence');

var maxStreamId;
var maxEventId;
var streamSequenceId = null;
var eventSequenceId = null;

function SequenceGenerator() {

  Sequence.find()
    .exec(function(err, sequences) {
      if (err) {
        return res.status(500).json({
          title: 'An error occurred',
          error: err
        });
      }

      console.log(`sequences: ${sequences}`);

      sequences.map((seq) => {
        switch(seq.type) {
          case 'streams':
            streamSequenceId = seq._id;
            maxStreamId = seq.value;
            break;
          case 'events':
            eventSequenceId = seq._id;
            maxEventId = seq.value;
            break;
        }
      });
    });
}

SequenceGenerator.prototype.nextId = function(collectionType) {

  var sequenceId;
  var updateObject = {};
  var nextId;

  switch (collectionType) {
    case 'streams':
      maxStreamId++;
      updateObject = {value: maxStreamId};
      nextId = maxStreamId;
      sequenceId = streamSequenceId;
      break;
    case 'events':
      maxEventId++;
      updateObject = {value: maxEventId};
      nextId = maxEventId;
      sequenceId = eventSequenceId;
      break;
    default:
      return -1;
  }

  Sequence.update({_id: sequenceId}, {$set: updateObject},
    function(err) {
      if (err) {
        console.log("nextId error = " + err);
        return null
      }
    });

  console.log(nextId);
  return nextId;
}

module.exports = new SequenceGenerator();
