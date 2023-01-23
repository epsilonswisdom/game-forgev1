import { Router } from 'express'
import { isLoggedIn } from '../middleware/middleware.js'
import * as gameCtrl from '../controllers/games.js'
const router = Router()

router.get('/', isLoggedIn, gameCtrl.index)

router.get('/:id', isLoggedIn, gameCtrl.show)

router.get('/:id/edit', isLoggedIn, gameCtrl.edit)

router.post('/', isLoggedIn, gameCtrl.create)

router.post('/', isLoggedIn, gameCtrl.create)

router.patch('/:id/flip-playable', isLoggedIn, gameCtrl.flipPlayable)

router.put('/:id', isLoggedIn, gameCtrl.update)

router.delete('/:id', isLoggedIn, gameCtrl.delete)


export {
  router
}