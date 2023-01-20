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

function edit(req, res) {
  Profile.findById(req.params.id)
  .then(profile => {
    res.render('profiles/edit', {
      profile,
      title: "edit"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/profiles')
  })
}

function update(req, res) {
  Profile.findById(req.params.id)
  .then(profile => {
    if (profile.owner.equals(req.user.profile._id)) {
      profile.updateOne(req.body)
      .then(()=> {
        res.redirect(`/profiles/${profile._id}`)
      })
    } else {
      throw new Error('🚫 Not authorized 🚫')
    }
  })
  .catch(err => {
    console.log(err)
    res.redirect('/profiles')
  })
}

function deleteProfile(req, res) {
  Profile.findById(req.params.id)
  .then(profile => {
    if (profile.owner.equals(req.user.profile._id)) {
      profile.delete()
      .then(() => {
        res.redirect('/profiles')
      })
    } else {
      throw new Error ('🚫 Not authorized 🚫')
    }
  })
  .catch(err => {
    console.log(err)
    res.redirect('/profiles')
  })
}

function addComment(req, res) {
  Profile.findById(req.params.id)
  .then(profile => {
    req.body.commenter = req.userr.profile._id
    profile.comments.push(req.body)
    profile.save()
    .then(()=> {
      res.redirect(`/profiles/${profile._id}`)
    })
    .catch(err => {
      console.log(err)
      res.redirect('/profiles')
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/profiles')
  })
}

function showComment(req, res) {
  Profile.findById(req.params.id)
  .populate([
    {path: "owner"},
    {path: "comments.commenter"}
  ])
  .then(profile => {
    res.render('profiles/show', {
      title: "show",
      profile
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/profiles')
  })
}

function updateComment(req, res) {
  Profile.findById(req.params.tacoId)
  .then(profile => {
    const comment = profile.comments.id(req.params.commentId)
    if (comment.commenter.equals(req.user.profile._id)) {
      comment.set(req.body)
      profile.save()
      .then(() => {
        res.redirect(`/profiles/${profile._id}`)
      })
      .catch(err => {
        console.log(err)
        res.redirect('/profiles')
      })
    } else {
      throw new Error('🚫 Not authorized 🚫')
    }
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
  edit,
  update,
  deleteProfile as delete,
  addComment,
  showComment,
  updateComment,
}