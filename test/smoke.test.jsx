import fs from 'fs'
import path from 'path'

test('source contains page title text', () => {
  const file = path.resolve(__dirname, '../src/page/PageImage.jsx')
  const src = fs.readFileSync(file, 'utf8')
  expect(src).toMatch(/Another CS Template/i)
})
