import presetMini from '@unocss/preset-mini'
import presetWind3 from '@unocss/preset-wind3'
import { defineConfig } from 'unocss'

export default defineConfig({
  presets: [
    presetMini(),
    presetWind3(),
  ],
  rules: [
    ['flex-center', { 'display': 'flex', 'align-items': 'center', 'justify-content': 'center' }],
    ['no-appearance', { '-webkit-appearance': 'none', '-moz-appearance': 'none', 'appearance': 'none' }],
  ],
  shortcuts: {
    'color-bg-primary': 'bg-[#0d1117]',
    'color-bg-primary-hover': 'bg-[#1f2937]',
    'color-bg-secondary': 'bg-[#161b22]',
    'color-bg-buttons': 'bg-[#238636]',
    'color-bg-buttons-hover': 'bg-[#2ea043]',
    'color-bg-buttons-active': 'bg-[#2ea043]',
    'color-bg-danger': 'bg-[#ff4444] hover:bg-[#cc0000]',
    'color-border-primary': 'border-[#30363d]',
    'color-border-accent': 'border-[#58a6ff]',
    'color-text-title': 'text-[#f0f6fc]',
    'color-text-label': 'text-[#8b949e]',
    'color-text-primary': 'text-[#c9d1d9]',
    'color-text-buttons': 'text-[#ffffff]',
  },
})