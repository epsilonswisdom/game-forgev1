import { Router } from 'express'
import { isLoggedIn } from '../middleware/middleware.js'

import * as profileCtrl from '../controllers/profiles.js'

const router = Router()

router.get('/', profileCtrl.index)

export {
  router
}