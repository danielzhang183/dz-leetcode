import type { Preset, RuleContext } from '@unocss/core'
import type { Theme } from '@unocss/preset-uno'
import { parseColor } from '@unocss/preset-mini/utils'
import { theme as unoTheme } from '@unocss/preset-mini'
import { fonts } from '@unocss/preset-mini/rules'
import {
  mergeDeep,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

// @unocss-include
export function unocssPreset(): Preset {
  return {
    name: '@dz-leetcode/ui-kit',
    theme: mergeDeep<Theme>(unoTheme, {
      colors: {
        context: 'rgba(var(--dui-c-context),%alpha)',
      },
      fontFamily: {
        sans: 'Avenir, Helvetica, Arial, sans-serif',
      },
    }),
    rules: [
      [/^d-(.*)$/, ([, body]: string[], { theme }: RuleContext<Theme>) => {
        const color = parseColor(body, theme)
        if (color?.cssColor?.type === 'rgb' && color.cssColor.components) {
          return {
            '--dui-c-context': `${color.cssColor.components.join(',')}`,
          }
        }
      }],
      [/^d-(.*)$/, fonts[1][1] as any],
      ['d-dashed', { 'border-style': 'dashed' }],
      ['d-solid', {
        'background-color': 'rgba(var(--dui-c-context), 1) !important',
        'border-color': 'rgba(var(--dui-c-context), 1)',
        'color': 'white !important',
      }],
      ['d-disabled', {
        'opacity': 0.4,
        'pointer-events': 'none',
        'filter': 'saturate(0)',
      }],
      /**
       * Credit to Nanda Syahrasyad (https://github.com/narendrasss)
       *
       * - https://github.com/narendrasss/NotANumber
       * - https://www.nan.fyi/grid.svg
       * - https://www.nan.fyi/grid-dark.svg
       */
      ['d-panel-grids-light', {
        'background-image': 'url("data:image/svg+xml,%0A%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'20\' height=\'20\' transform=\'scale(3)\'%3E%3Crect x=\'0\' y=\'0\' width=\'100%25\' height=\'100%25\' fill=\'white\'/%3E%3Cpath d=\'M 10,-2.55e-7 V 20 Z M -1.1677362e-8,10 H 20 Z\' stroke-width=\'0.2\' stroke=\'hsla(0, 0%25, 98%25, 1)\' fill=\'none\'/%3E%3C/svg%3E")',
        'background-size': '40px 40px',
      }],
      ['d-panel-grids-dark', {
        'background-image': 'url("data:image/svg+xml,%0A%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'20\' height=\'20\' transform=\'scale(3)\'%3E%3Crect x=\'0\' y=\'0\' width=\'100%25\' height=\'100%25\' fill=\'hsl(0, 0%25, 8.5%25)\'/%3E%3Cpath d=\'M 10,-2.55e-7 V 20 Z M -1.1677362e-8,10 H 20 Z\' stroke-width=\'0.2\' stroke=\'hsl(0, 0%25, 11.0%25)\' fill=\'none\'/%3E%3C/svg%3E");',
        'background-size': '40px 40px',
      }],
    ],
    variants: [
      (input: string) => {
        const prefix = 'd-disabled:'
        if (input.startsWith(prefix)) {
          return {
            matcher: input.slice(prefix.length),
            selector: input => `[disabled] ${input}, ${input}[disabled]`,
          }
        }
      },
      (input: string) => {
        const prefix = 'd-checked:'
        if (input.startsWith(prefix)) {
          return {
            matcher: input.slice(prefix.length),
            selector: input => `[checked] ${input}, ${input}[checked]`,
          }
        }
      },
    ],
    shortcuts: {
      // general
      'd-bg-base': 'bg-white dark:bg-[#151515]',
      'd-bg-active': 'bg-gray:5',
      'd-bg-hover': 'bg-gray:3',
      'd-border-base': 'border-gray/20',
      'd-transition': 'transition-all duration-200',
      'd-focus-base': 'ring-2 ring-context/50',
      'd-active-base': 'ring-3 ring-context/10',
      'd-borderless': '!border-none !shadow-none',

      // link
      'd-link-base': 'underline underline-offset-2 underline-black/20 dark:underline-white/40',
      'd-link-hover': 'decoration-dotted text-context underline-context',

      // card
      'd-card-base': 'border n-border-base rounded n-bg-base shadow-sm',

      // header
      'd-header-upper': 'text-sm uppercase mb-2 leading-1.2em tracking-wide op50',

      // button
      'd-button-base': 'border n-border-base rounded shadow-sm px-1em py-0.25em inline-flex items-center gap-1 op80 !outline-none touch-manipulation',
      'd-button-hover': 'op100 !border-context text-context',
      'd-button-active': 'd-active-base bg-context/5',
      'd-button-icon': '-ml-0.2em mr-0.2em text-1.1em',

      // checkbox
      'd-checkbox': 'inline-flex gap-1 items-center',
      'd-checkbox-box': 'border n-border-base w-1.1em h-1.1em mr-1 text-white flex flex-none items-center rounded-sm overflow-visible',
      'd-checkbox-box-checked': 'bg-context border-context',
      'd-checkbox-icon': 'carbon-checkmark w-1em h-1em m-auto',

      // radio
      'd-radio-box': 'border n-border-base w-1.2em h-1.2em mr-1 text-white flex flex-none rounded-full overflow-visible',
      'd-radio-box-checked': 'border-context',
      'd-radio-inner': 'bg-context rounded-1/2 w-0 h-0 m-auto',
      'd-radio-inner-checked': 'w-0.8em h-0.8em',

      // switch
      'd-switch-base': 'inline-flex items-center select-none',
      'd-switch-slider': 'mr-1 rounded-full border n-border-base relative p-2px',
      'd-switch-slider-checked': 'border-context/20 bg-context/10',
      'd-switch-thumb': 'h-1em w-1em rounded-1/2 border n-border-base ml-0 mr-0.8em',
      'd-switch-thumb-checked': 'bg-context border-context ml-0.8em mr-0',

      // tip
      'd-tip-base': 'bg-context/4 text-context px-1em py-0.4em rounded flex gap-2 items-center dark:bg-context/12',

      // icon
      'd-icon': 'flex-none',

      // code
      'd-code-block': 'dark:bg-[#121212] bg-white',

      // icon-button
      'd-icon-button': 'aspect-1/1 w-1.6em h-1.6em flex items-center justify-center rounded op50 hover:op100 hover:n-bg-active',

      // loading
      'd-loading': 'flex h-full w-full justify-center items-center',
      'd-panel-grids': 'd-panel-grids-light dark:n-panel-grids-dark flex flex-col h-full gap-2 items-center justify-center',
    },
  }
}

export function extendUnocssOptions() {
  return {
    preflight: true,
    presets: [
      presetUno(),
      presetAttributify(),
      presetTypography(),
      presetIcons({
        prefix: ['i-', ''],
        scale: 1.2,
        extraProperties: {
          'display': 'inline-block',
          'vertical-align': 'middle',
        },
        // ...(user?.icons || {})
      }),
      unocssPreset(),
      // ...(user.presets || []),
    ],
    transformers: [
      transformerDirectives(),
      transformerVariantGroup(),
    ],
  }
}
