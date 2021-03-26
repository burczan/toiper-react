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
      {/* <Button color="is-primary" onClick={() => console.log('edit paper placeholder')}>
        <Icon name="edit" />
      </Button> */}
      <Button color="is-danger" onClick={() => dispatch(removePaper(paper.id))}>
        <Icon name="trash" />
      </Button>
    </>
  );
};
