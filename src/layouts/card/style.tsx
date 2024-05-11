import { createUseStyles } from 'react-jss';
import {
  POSTITEM_CARD,
  INPUT_TEXT,
  BUTTON_PRIMARY_OUTLINE,
} from '../../styles/atoms';
import colors from '../../styles/colors';

const useStyles = createUseStyles({
  card: {
    ...POSTITEM_CARD,
    width: '100%',
    margin: 'auto',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',

    '& .edit-mode': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      flexWrap: 'wrap',
      gap: '10px',
      '& .input-text': { ...INPUT_TEXT, maxWidth: '60%' },
      '& .button-save': BUTTON_PRIMARY_OUTLINE,
    },
    ' & .show-mode': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      gap: '10px',
      '& p': {
        color: colors['text-gray-700'],
      },
      '& .icons': {
        display: 'flex',
        gap: '10px',
        cursor: 'pointer',
      },
    },
  },
});

export default useStyles;
