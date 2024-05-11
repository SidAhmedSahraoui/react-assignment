import { createUseStyles } from 'react-jss';
import {
  POSTITEM_CARD,
  INPUT_TEXT,
  BUTTON_PRIMARY_OUTLINE,
} from '../../styles/atoms';

const useStyles = createUseStyles({
  card: {
    ...POSTITEM_CARD,
    width: '80%',
    margin: 'auto',
    '& .edit-mode': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      gap: '10px',
      '& .input-text': INPUT_TEXT,
      '& .button-save': BUTTON_PRIMARY_OUTLINE,
    },
    ' & .show-mode': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      gap: '10px',
      '& .icons': {
        display: 'flex',
        gap: '10px',
        cursor: 'pointer',
      },
    },
  },
});

export default useStyles;
