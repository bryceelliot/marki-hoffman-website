import sharp from 'sharp'
import { readdirSync, unlinkSync } from 'fs'
import { join } from 'path'

const publicDir = new URL('../public', import.meta.url).pathname.replace(/^\/([A-Z]:)/, '$1')

const jpgs = readdirSync(publicDir).filter(f => f.endsWith('.jpg') || f.endsWith('.jpeg'))

for (const file of jpgs) {
  const input = join(publicDir, file)
  const output = join(publicDir, file.replace(/\.(jpg|jpeg)$/, '.webp'))
  await sharp(input)
    .webp({ quality: 82 })
    .toFile(output)
  console.log(`✓ ${file} → ${file.replace(/\.(jpg|jpeg)$/, '.webp')}`)
}
