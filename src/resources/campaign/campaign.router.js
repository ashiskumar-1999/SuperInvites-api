import { Router } from 'express'
import controllers from './campaign.controller'

const router = Router()

// api/campaign
router.route('/')
    .get(controllers.getOne)
    .get(controllers.getMany)
    .post(controllers.createOne)

// api/campaign/:id
router.route('/:id')
    .get(controllers.getOne)
    .put(controllers.updateOne)
    .delete(controllers.removeOne)

export default router