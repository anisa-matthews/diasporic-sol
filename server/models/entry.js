var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var EntrySchema = new Schema({
  title: String,
  subtitle: String,
  description: String,
  author: String,
  date: { type: Date, default: Date.now },
  category: String,
  image: {data: Buffer, type: String}
  // imageType: String
});

var Entry = mongoose.model("Entry", EntrySchema);
module.exports = Entry;