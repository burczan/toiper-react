import React from 'react';
import { useDispatch } from 'react-redux';
import { Icon } from '../../../common/components/Icon';
import { Button } from '../../../common/components/Button';
import { editPaper, removePaper } from '../../../state/papers/actionCreators';
import { PaperProps } from '../../../state/papers/types';

type ActionsProps = {
  paper: PaperProps;
};

export const Actions = ({ paper }: ActionsProps) => {
  const dispatch = useDispatch();

  return (
    <>
      <Button color="primary" onClick={() => console.log('edit paper placeholder')}>
        <span className="icon">
          <Icon name="edit" />
        </span>
      </Button>
      <Button color="danger" onClick={() => dispatch(removePaper(paper.id))}>
        <span className="icon">
          <Icon name="delete" />
        </span>
      </Button>
    </>
  );
};
