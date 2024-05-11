import { createUseStyles } from 'react-jss';
import colors from '../../styles/colors';
import {
  BUTTON_PRIMARY,
  BUTTON_TRANSPARENT,
  CARD_SHADOW,
  INPUT_TEXT,
} from '../../styles/atoms';

const useStyles = createUseStyles({
  root: {
    padding: '16px',
    margin: 'auto',
    marginTop: '128px',
    marginBottom: '40px',
    width: 'fit-content',
    minWidth: '300px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',
    backgroundColor: colors['text-gray-100'],
    '&.card-shadow': CARD_SHADOW,
    '& .title': {
      color: colors.primary,
    },
    '& .form': {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      gap: '8px',
      '& .form-item': {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '20px',
        '& label': {
          width: '100%',
          fontWeight: 500,
          color: colors['text-gray-700'],
          marginBottom: '5px',
        },
        '& .input-text': INPUT_TEXT,
        '& .button-primary': {
          ...BUTTON_PRIMARY,
          width: '100%',
        },
        '& .button-disabled': {
          ...BUTTON_TRANSPARENT,
          width: '100%',
          backgroundColor: colors['text-gray-300'],
          cursor: 'not-allowed',
        },
      },
    },
  },
});

export default useStyles;
