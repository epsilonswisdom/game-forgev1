import mongoose from 'mongoose'

const Schema = mongoose.Schema

const commentSchema = new Schema({
  content:String,
  commenter: {type: Schema.Types.ObjectId, ref: "Profile"}
})

const profileSchema = new Schema({
  name: String,
  avatar: String,
  games : ["GAME"],
  comments: [commentSchema]
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}
