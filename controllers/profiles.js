import { Profile } from "../models/profile.js"
import { Game } from "../models/game.js"

function index(req , res) {
  Profile.find({})
  .then(profiles => {
    res.render("profiles/index", {
      profiles,
      title: "profile"

    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}

function show(req, res) {
  Profile.findById(req.params.id)
  .populate('profiles')
  .then(profile => {
    const isSelf = profile._id.equals(req.user.profile._id)
    Game.find({_id:{$nin: profile.watchlist}})
    .then(profile =>{
      res.redirect('profiles/show', {
        title : `${profile.name}'s profile`,
        profile,
        isSelf,
      })
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}

function create(req , res) {
  req.body.owner = req.user.profile._id
  Profile.create(req.body)
  .then(profile => {
    res.redirect('/profiles')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/profiles')
  })
}

export {
  index,
  show,
  create,

}