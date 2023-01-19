import mongoose from 'mongoose'

const Schema = mongoose.Schema

const gameReviewSchema = new Schema({
  content: String,
  rating: {type: Number, min:1, max: 5, default: 1},
  recommend: String,
  creator: {type: Schema.Types.ObjectId, ref: "Profile"}
}, {
  timestamps: true
})


const gameSchema = new Schema({
  title: String,
  platform: String,
  publisher: String,
  yearrelease: {type: Number, min:1970} ,
  owner: { type: Schema.Types.ObjectId, ref: "Profile" },
  reviews: [gameReviewSchema],
  }, { 
  timestamps: true
 // To be added later when you build the other models
  //imageurl: [{ObjectId, ref:'Profile'}],
  //reviews: [{ObjectId, ref:GameReview}],

})

const Game = mongoose.model('Game', gameSchema)

export {
    Game
}