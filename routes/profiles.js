import { Router } from 'express'

import { isLoggedIn } from '../middleware/middleware.js'

import * as profileCtrl from '../controllers/profiles.js'

const router = Router()

router.get('/', isLoggedIn, profileCtrl.index)

router.get('/:id', isLoggedIn, profileCtrl.show)

router.get('/:id/edit', isLoggedIn, profileCtrl.edit)

router.get('/:id', isLoggedIn, profileCtrl.show)

router.put('/:id', isLoggedIn, profileCtrl.update)

router.put('/:profileId/comments/:commentId', isLoggedIn, profileCtrl.updateComment)

router.post('/', isLoggedIn, profileCtrl.create)

router.post('/:id/comments',isLoggedIn, profileCtrl.addComment)

router.delete('/:id', isLoggedIn, profileCtrl.delete)

export {
  router
}