import { Request, Response, Router } from 'express'
import {
  checkImage,
  createThumb,
  imageIsAvaliable,
  resolvePath,
} from '../../util'

const image = Router()

image.get('/', async (req: Request, res: Response) => {
  try {
    if (!req.query.filename) {
      return res.send('No image to process')
    }

    if (!(await imageIsAvaliable(req.query.filename as unknown as string))) {
      return res.send('Image not available')
    }

    const filePath = resolvePath(req.query)

    const image = await checkImage(filePath)

    if (image) {
      return res.status(200).sendFile(filePath)
    } else {
      const thumb = await createThumb(req.query)
      if (!thumb) {
        return res.send('Thumb could not be created')
      }
      return res.status(200).sendFile(thumb)
    }
  } catch (error) {
    console.log(error)
  }
})

export default image
