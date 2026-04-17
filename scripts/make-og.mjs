import sharp from 'sharp'
import { fileURLToPath } from 'url'
import { join, dirname } from 'path'

const __dir = dirname(fileURLToPath(import.meta.url))
const pub = join(__dir, '../public')

await sharp(join(pub, 'hero.webp'))
  .resize(1200, 630, { fit: 'cover', position: 'top' })
  .jpeg({ quality: 88 })
  .toFile(join(pub, 'og-image.jpg'))

console.log('✓ og-image.jpg created (1200×630)')
