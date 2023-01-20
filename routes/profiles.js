import { Router } from 'express'
import { isLoggedIn } from '../middleware/middleware.js'

import * as profileCtrl from '../controllers/profiles.js'

const router = Router()

router.get('/', profileCtrl.index)

router.get('/:id', profileCtrl.show)

router.get('/:id/edit', isLoggedIn, profileCtrl.edit)

router.get('/:id', profileCtrl.show)

router.put('/:id', isLoggedIn, profileCtrl.update)

router.post('/', profileCtrl.create)

router.post('/:id/comments',isLoggedIn, profileCtrl.addComment)

router.delete('/:id', isLoggedIn, profileCtrl.delete)

export {
  router
}