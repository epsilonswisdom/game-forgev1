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

function show(req, res) {
  Game.findById(req.params.id)
  .populate("owner")
  .then(game => {
    res.render('games/show', {
      game,
      title: "🎮 show"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}

function flipPlayable(req, res) {
  Game.findById(req.params.id)
  .then(game => {
    game.playable = !game.playable
    game.save()
    .then(()=> {
      res.redirect(`/games/${game._id}`)
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}

export {
  index,
  create,
  show,
  flipPlayable,
}