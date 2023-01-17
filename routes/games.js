import { Router } from 'express'
import * as gameCtrl from '../controllers/games.js'
const router = Router()

router.get('/', gameCtrl.index)

router.post('/', gameCtrl.create)


export {
  router
}