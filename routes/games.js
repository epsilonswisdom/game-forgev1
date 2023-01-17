import { Router } from 'express'
import { isLoggedIn } from '../middleware/middleware.js'
import * as gameCtrl from '../controllers/games.js'
const router = Router()

router.get('/', gameCtrl.index)

router.post('/', gameCtrl.create)

router.post('/', isLoggedIn, gameCtrl.create)


export {
  router
}