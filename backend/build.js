import { build } from 'esbuild'
import { execSync } from 'child_process'
import glob from 'fast-glob'

console.log('🔨 Compilando JavaScript con ESBuild...')
const entryPoints = await glob('./src/**/*.ts')

await build({
  entryPoints,
  outdir: 'dist',
  platform: 'node',
  target: 'node18',
  format: 'esm',
  sourcemap: true,
  outbase: 'src',
  bundle: false
})

console.log('📝 Generando declaraciones de TypeScript...')
execSync('npx tsc', { stdio: 'inherit' })

console.log('✅ Build completado exitosamente!')
