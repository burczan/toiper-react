import { AddPaperAction, RemovePaperAction } from './actions';
import { PapersActionType, PaperTypes, PaperProps } from './types';

export type AddPaperFormControls = {
  type: PaperTypes;
  name: PaperProps['name'];
  price: PaperProps['price'];
  layers: PaperProps['layers'];
  leafs: PaperProps['leafs'];
};

export const addPaper = ({
  type,
  name,
  price,
  layers,
  leafs,
}: AddPaperFormControls): AddPaperAction => {
  const layerPrice = price / (layers * leafs);

  return {
    type: PapersActionType.ADD_PAPER,
    payload: {
      id: Math.random().toString(36).substr(3, 9),
      type,
      name,
      price,
      layers,
      leafs,
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
