import { Router } from 'express'
import { isLoggedIn } from '../middleware/middleware.js'
import * as gameCtrl from '../controllers/games.js'
const router = Router()

router.get('/', gameCtrl.index)

router.get('/:id', gameCtrl.show)

router.post('/', gameCtrl.create)

router.post('/', isLoggedIn, gameCtrl.create)

router.get('/:id/edit', isLoggedIn, gameCtrl.edit)

router.patch('/:id/flip-playable', isLoggedIn, gameCtrl.flipPlayable)

router.put('/:id', isLoggedIn, gameCtrl.update)

router.delete('/:id', isLoggedIn, gameCtrl.delete)


export {
  router
}