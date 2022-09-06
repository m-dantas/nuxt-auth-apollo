import { create } from '@storybook/theming'
import logo from '../assets/storybook/logo.svg'

export default create({
  base: 'light',
  colorPrimary: '#fff',
  colorSecondary: '#245aa4',

  appBg: 'linear-gradient(#00305A, #245AA4)',
  appBorderRadius: '5px',
  appContentBg: '#fff',
  barBg: '#fff',

  fontBase: '',
  fontCode: '',

  textColor: '#A7B9C9',
  textInverseColor: '#222',

  barTextColor: '#A7B9C9',
  barSelectedColor: '#245AA4',

  inputBg: 'transparent',
  inputBorder: 'white',
  inputTextColor: 'black',
  inputBorderRadius: 0,
  textMutedColor: '#A7B9C9',

  brandTitle: 'Alfred',
  brandImage: logo
})