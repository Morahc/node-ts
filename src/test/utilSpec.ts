import { createThumb, imageIsAvaliable } from '../util'

describe('createThumb Functionality', (): void => {
  it('should return new thumb path (valid arguments)', async (): Promise<void> => {
    const thumb = await createThumb({
      filename: 'fjord',
      width: 100,
      height: 100,
    })
    expect(thumb).toBeTruthy()
  })
  it('should return null (Invalid arguments)', async (): Promise<void> => {
    const thumb = await createThumb({
      filename: 'fjord',
      width: -100,
      height: -100,
    })
    expect(thumb).toBeNull()
  })
})

describe('imageIsAvaliable Functionality', (): void => {
  it('should return true (file exists)', async (): Promise<void> => {
    const image = await imageIsAvaliable('fjord')
    expect(image).toBeTruthy()
  })
  it('should return false (file does not exist))', async (): Promise<void> => {
    const image = await imageIsAvaliable('foo')
    expect(image).toBeFalse()
  })
})
