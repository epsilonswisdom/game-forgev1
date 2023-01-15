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

export {
  index, 
}