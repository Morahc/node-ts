import { promises as fs } from 'fs'
import path from 'path'
import sharp from 'sharp'

interface query {
  filename?: string
  width?: number
  height?: number
}

const fullPath = path.resolve(__dirname, '../../assets/full')
const thumbPath = path.resolve(__dirname, '../../assets/thumb')

export const imageIsAvaliable = async (filename: string): Promise<boolean> => {
  try {
    await fs.access(path.resolve(fullPath, `${filename}.jpg`))
    return true
  } catch (err) {
    return false
  }
}

export const checkImage = async (file: string): Promise<boolean> => {
  try {
    await fs.access(file)
    return true
  } catch (err) {
    console.log(`Image of ${file} doesn't exist`)
    return false
  }
}

export const createThumb = async ({
  filename,
  width,
  height,
}: query): Promise<string | null> => {
  try {
    const thumb = path.resolve(thumbPath, `${filename}-${width}x${height}.jpg`)
    console.log(`Creating thumb with path: ${thumb}`)
    await sharp(path.resolve(fullPath, `${filename}.jpg`))
      .resize(Number(width), Number(height))
      .toFile(thumb)
    return thumb
  } catch (error) {
    return null
  }
}

export const resolvePath = ({ filename, width, height }: query): string => {
  const filePath: string =
    width && height
      ? path.resolve(thumbPath, `${filename}-${width}x${height}.jpg`)
      : path.resolve(fullPath, `${filename}.jpg`)
  return filePath
}
