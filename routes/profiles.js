import { Router } from 'express'
import { isLoggedIn } from '../middleware/middleware.js'

import * as profileCtrl from '../controllers/profiles.js'

const router = Router()

router.get('/', profileCtrl.index)

router.get('/:id', profileCtrl.show)

router.get('/:id/edit', isLoggedIn, profileCtrl.edit)

router.post('/', profileCtrl.create)

export {
  router
}