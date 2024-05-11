import colors from './colors';

export const BUTTON_PRIMARY = {
  background: colors.primary,
  border: 0,
  borderRadius: '10px',
  fontWeight: 600,
  color: '#fff !important',
  padding: '8px 20px !important',
  '&:not([disabled]):hover': {
    background: colors['primary-hover'],
  },
};

export const BUTTON_PRIMARY_OUTLINE = {
  background: '#fff',
  border: `2px solid ${colors.primary}`,
  borderRadius: '10px',
  fontWeight: 600,
  color: colors.primary,
  padding: '8px 20px !important',
  '&:hover': {
    color: colors['primary-hover'],
    borderColor: colors['primary-hover'],
  },
};

export const BUTTON_LIGHT = {
  background: colors['text-gray-100'],
  borderRadius: '10px',
  fontWeight: 500,
  color: colors['text-gray-700'],
  padding: '8px 20px !important',
  '&:hover': {
    background: colors['text-gray-200'],
  },
};

export const BUTTON_GRAY = {
  background: colors['text-gray-200'],
  border: 0,
  borderRadius: '10px',
  fontWeight: 600,
  color: `${colors['text-gray-800']} + !important`,
  padding: '8px 20px !important',
  '&:not([disabled]):hover': {
    background: colors['text-gray-300'],
  },
};

export const BUTTON_TRANSPARENT = {
  background: 'transparent',
  color: colors.primary,
  border: 0,
  borderRadius: '10px',
  fontWeight: 600,
  padding: '8px 20px !important',
  '&:not([disabled]):hover': {
    color: colors['primary-hover'],
    borderColor: colors['primary-hover'],
  },
};

export const CARD_SHADOW = {
  borderRadius: '10px',
  'box-shadow': '0px 13px 26px rgb(109,184,241, 0.16)',
};

export const INPUT_TEXT = {
  fontWeight: 500,
  borderRadius: '10px',
  padding: '8px 20px',
  '&:focus': {
    borderColor: colors['text-gray-400'],
  },
};

export const POSTITEM_CARD = {
  padding: '16px 4px',
  borderRadius: '10px',
  backgroundColor: colors['text-gray-300'],
  border: `2px solid ${colors['text-gray-200']}`,
  '&:hover': {
    'box-shadow': '0px 13px 26px rgb(109,184,241, 0.16)',
  },
};
