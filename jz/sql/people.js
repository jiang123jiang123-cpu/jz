

const db = require('./db.js')

const peopleSchema = new db.mongoose.Schema({
  "peoplename": { type: String },
  "sex": { type: String },
  "money": { type: String },
  "year": { type: String },
  "shenfen": { type: String },

})
module.exports = db.mongoose.model("people", peopleSchema)
