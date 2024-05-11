import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import useStyles from './style';
import colors from '../../styles/colors';

const Card: React.FC<{
  content: string;
  onDelete: () => void;
  onEdit: () => void;
}> = ({ content, onDelete, onEdit }) => {
  const classes = useStyles();
  const [contentEdit, setContentEdit] = useState(content);
  const [edit, setEdit] = useState(false);
  return (
    <>
      <div className={classes.card}>
        {edit ? (
          <div className="edit-mode">
            <input
              className="input-text"
              type="text"
              value={contentEdit}
              onChange={(e) => setContentEdit(e.target.value)}
            />
            <button className="button-save" onClick={onEdit} type="button">
              Save
            </button>
          </div>
        ) : (
          <div className="show-mode">
            <p>{content}</p>
            <div className="icons">
              <FontAwesomeIcon
                icon={faPen}
                onClick={() => setEdit(true)}
                color={colors['primary-hover']}
              />
              <FontAwesomeIcon
                icon={faTrash}
                onClick={onDelete}
                color={colors.danger}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Card;
