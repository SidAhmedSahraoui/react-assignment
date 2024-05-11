import { createUseStyles } from 'react-jss';
import colors from '../../styles/colors';
import {
  CARD_SHADOW,
  BUTTON_PRIMARY,
  INPUT_TEXT,
  BUTTON_PRIMARY_OUTLINE,
} from '../../styles/atoms';

const useStyles = createUseStyles({
  page: {
    padding: '16px',
    minWidth: '80%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',
    '& .header': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      '& .button-primary': BUTTON_PRIMARY,
      '& .head': {
        '&> .title': {
          color: colors.primary,
        },
        '& .subtitle': {
          color: colors['text-gray-700'],
          fontWeight: '400',
        },
      },
    },

    '& .card-shadow': {
      ...CARD_SHADOW,
      minWidth: '80%',
      maxWidth: '100%',
      padding: '16px',
      margin: 'auto',
      backgroundColor: colors['text-gray-100'],
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      '& .text-center': {
        margin: '16px 0',
        textAlign: 'center',
        width: '100%',
        color: colors['text-gray-700'],
      },
      '& .search-todo': {
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'nowrap',
        alignItems: 'center',
        width: '100%',
        gap: '4px',
        '& .search-input': { ...INPUT_TEXT, maxWidth: '60%' },
        '& .button-primary': BUTTON_PRIMARY_OUTLINE,
      },
      '& .cards-list': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '10px',
        width: '100%',
        '& .add-todo': {
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'nowrap',
          alignItems: 'center',
          width: '100%',
          gap: '4px',
          '& .search-input': { ...INPUT_TEXT, maxWidth: '60%' },
          '& .button-primary': BUTTON_PRIMARY_OUTLINE,
        },
      },
    },
  },
});

export default useStyles;
