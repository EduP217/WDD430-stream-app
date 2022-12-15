var express = require('express');
var router = express.Router();
const sequenceGenerator = require("./sequenceGenerator");
const Stream = require("../models/stream");

router.get("/", (req, res, next) => {
  Stream.find()
    .then((streams) => {
      res.status(200).json({
        message: "Streams fetched successfully!",
        streams
      });
    })
    .catch((err) => res.status(500).json({
      message: "An error occurred",
      error: err
    }));
});

router.post("/", (req, res, next) => {
  const maxStreamId = sequenceGenerator.nextId("streams");

  const stream = new Stream({
    id: maxStreamId,
    name: req.body.name,
    shortDescription: req.body.shortDescription,
    longDescription: req.body.longDescription,
    thumbnail: req.body.thumbnail,
    fullImage: req.body.fullImage,
    keywords: req.body.keywords,
    createdAt: req.body.createdAt
  });

  stream
    .save()
    .then(async (createdStream) => {
      res.status(201).json({
        message: "Contact added successfully",
        stream: createdStream,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: "An error occurred",
        error: error,
      });
    });
});

router.put("/:id", (req, res, next) => {
  Stream.findOne({ id: req.params.id })
    .then((stream) => {
      stream.name = req.body.name;
      stream.shortDescription = req.body.shortDescription;
      stream.longDescription = req.body.longDescription;
      stream.thumbnail = req.body.thumbnail;
      stream.fullImage = req.body.fullImage;
      stream.keywords = req.body.keywords;

      Stream.updateOne({ id: req.params.id }, stream)
        .then((result) => {
          res.status(204).json({
            message: "Stream updated successfully",
          });
        })
        .catch((error) => {
          res.status(500).json({
            message: "An error occurred",
            error: error,
          });
        });
    })
    .catch((error) => {
      res.status(500).json({
        message: "Stream not found.",
        error: { stream: "Stream not found" },
      });
    });
});

router.delete("/:id", (req, res, next) => {
  Stream.findOne({ id: req.params.id })
    .then((stream) => {
      Stream.deleteOne({ id: req.params.id })
        .then((result) => {
          res.status(204).json({
            message: "Stream deleted successfully",
          });
        })
        .catch((error) => {
          res.status(500).json({
            message: "An error occurred",
            error: error,
          });
        });
    })
    .catch((error) => {
      res.status(500).json({
        message: "Stream not found.",
        error: { stream: "Stream not found" },
      });
    });
});

module.exports = router;
