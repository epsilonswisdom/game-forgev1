import mongoose from 'mongoose'

const Schema = mongoose.Schema

const gameSchema = new Schema({
  title: String,
  platform: String,
  publisher: String,
  yearrelease: Number,
  }, { 
  timestamps: true
 // To be added later when you build the other models
  //imageurl: [{ObjectId, ref:'Profile'}],
  //reviews: [{ObjectId, ref:GameReview}],

})

const Game = mongoose.model('Game', tacoShema)

export {
    Game
}