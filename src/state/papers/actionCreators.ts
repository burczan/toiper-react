import { AddPaperAction, EditPaperAction, RemovePaperAction } from './actions';
import { PapersActionType, PaperTypes, PaperProps } from './types';

export type AddPaperFormControls = {
  type: PaperTypes;
  name: PaperProps['name'];
  price: PaperProps['price'];
  layers: PaperProps['layers'];
  leafs: PaperProps['leafs'];
  length: PaperProps['length'];
};

export const addPaper = ({
  type,
  name,
  price,
  layers,
  leafs,
  length,
}: AddPaperFormControls): AddPaperAction => {
  const layerPrice = price / (layers * leafs);
  const oneMeterPrice = Math.round((price / length) * 100) / 100;

  return {
    type: PapersActionType.ADD_PAPER,
    payload: {
      id: Math.random().toString(36).substr(3, 9),
      type,
      name,
      price,
      layers,
      leafs,
      length,
      oneMeterPrice,
      layerPrice,
    },
  };
};

export const editPaper = ({
  type,
  name,
  price,
  layers,
  leafs,
  length,
}: AddPaperFormControls): EditPaperAction => {
  const layerPrice = price / (layers * leafs);
  const oneMeterPrice = Math.round((price / length) * 100) / 100;

  return {
    type: PapersActionType.EDIT_PAPER,
    payload: {
      id: Math.random().toString(36).substr(3, 9),
      type,
      name,
      price,
      layers,
      leafs,
      length,
      oneMeterPrice,
      layerPrice,
    },
  };
};

export const removePaper = (id: PaperProps['id']): RemovePaperAction => {
  return {
    type: PapersActionType.REMOVE_PAPER,
    payload: { id },
  };
};
