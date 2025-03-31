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
    ['border-base', { 'border-width': '1px', 'border-style': 'solid' }],
    ['border-b-base', { 'border-bottom-width': '1px', 'border-bottom-style': 'solid' }],
  ],
  shortcuts: {
    'color-bg-primary': 'bg-[#0d1117]',
    'color-bg-primary-hover': 'bg-[#1f2937]',
    'color-bg-secondary': 'bg-[#161b22]',
    'color-bg-buttons': 'bg-[#238636] hover:bg-[#2ea043] active:bg-[#2ea043]',
    'color-bg-danger': 'bg-[#ff4444] hover:bg-[#cc0000]',
    'color-border-primary': 'border-[#30363d] focus:border-[#58a6ff]',
    'color-text-title': 'text-[#f0f6fc]',
    'color-text-label': 'text-[#8b949e]',
    'color-text-primary': 'text-[#c9d1d9]',
    'color-text-buttons': 'text-[#ffffff]',
  },
})