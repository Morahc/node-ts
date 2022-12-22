import { Request, Response, Router } from 'express'
import image from './api/image'

const router = Router()

router.get('/', (req: Request, res: Response) => {
  res.send('Api index route')
})

router.use('/image', image)

export default router
