const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
var path = require("path");
var history = require('connect-history-api-fallback');
const fs = require('fs')

var mongoose = require('mongoose');

const multer = require('multer');
// const Grid = require('gridfs-stream');
// const GridFsStorage = require('multer-gridfs-storage');

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(cors())
app.use(history());

app.use(express.static(path.join(__dirname,'uploads')));
app.use(express.static(path.join(__dirname, '../../client/dist'))) 

var Entry = require("../models/entry");
const connectString = process.env.MONGO_URL;
mongoose.connect(connectString, {useNewUrlParser:true, useUnifiedTopology: true});
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function(callback){
  console.log("Connection Succeeded");
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) { cb(null, path.join(__dirname,'../../client/static')) },
  filename: function (req, file, cb) {
    let name = file.originalname + '.' + String(file.type).split('/').pop()
    console.log('this is the final name: ' + name)
    cb(null, name)
  }
});
var upload = multer({ storage: storage });

//View entries
app.get('/entries', (req, res) => {
  Entry.find({}, 'title subtitle author category description date imageType', function (error, entries) {
    if (error) { console.error(error); }
    res.send({
      entries: entries
    })
  }).sort({_id:-1})
})

//View a post
app.get('/entries/:id', (req, res) => {
  // console.log("hello " + req.params.id)
  Entry.findById(req.params.id, 'title subtitle author category description date imageType', function (error, entry) {
    if (error) { console.error(error); }
    res.send({ entry: entry })
    // console.log(entry.description);
  })
});

// Add new post
app.post('/entries', (req, res) => {
  var db = req.db;
  var title = req.body.title;
  var subtitle = req.body.subtitle;
  var author = req.body.author;
  var category = req.body.category;
  var description = req.body.description;
  var date = new Date();

  var img = req.body.image;
  console.log('Image received: ' + img);
  try{ 
    fs.writeFileSync(path.join(__dirname,'../../client/static'), img); 
  } catch (error) { console.log(error); }

  var new_entry = new Entry({
    title: title,
    subtitle: subtitle,
    author: author,
    category: category,
    description: description,
    date: date,
    image: {data: toBase64(img), type: img.type}
  });

  new_entry.save(function (error) {
    if (error) {
      console.log(error)
    }
    res.send({
      success: true,
      message: 'Entry saved successfully!'
    })
  })
})

// //add image
// app.post('/upload', upload.single('entry-image'), (req, res) => {
//   if (!req.file) {
//     console.log("No file received");
//     return res.send({
//       success: false
//     });

//   } else {
//     console.log('file received');
//     return res.send({
//       success: true
//     })
//   }
// });

// Delete a post
app.delete('/entries/:id', (req, res) => {
  var db = req.db;
  console.log(req.params.id)
  Entry.deleteOne({
    id: req.params.id
  }, function(err, post){
    if (err)
      res.send(err)
    res.send({
      success: true
    })
  })
})

// //View image
// app.get('/:', (req, res) => {
  
// })

// // Update a post
// app.put('/entry/:id', (req, res) => {
//   var db = req.db;
//   Entry.findById(req.params.id, 'title category description', function (error, entry) {
//     if (error) { console.error(error); }

//     entry.title = req.body.title
//     entry.category = req.body.category
//     entry.description = req.body.description
//     entry.save(function (error) {
//       if (error) {
//         console.log(error)
//       }
//       res.send({
//         success: true
//       })
//     })
//   })
// })

// app.get('/login', (req,res) => {
// 	res.send(
// 		[{
// 			user: "admin",
// 			pass: "iamadmin"
// 		}]

// 	)
// })

app.listen(process.env.PORT || 8081, function () {
  console.log("Express is working on port " + process.env.PORT);
});
