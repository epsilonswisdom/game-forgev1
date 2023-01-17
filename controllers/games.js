import { Game } from "../models/game.js";

function index(req , res) {
  Game.find({})
  .then(games => {
    res.render("games/index", {
      games,
      title : "games"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })

}

function create(req, res) {
  req.body.owner = req.user.profile._id
  req.body.playable = !!req.body.playable
  Game.create(req.body)
  .then(game => {
    res.redirect('/games')
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}

export {
  index,
  create, 
}