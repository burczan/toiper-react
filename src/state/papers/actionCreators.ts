import { AddPaperAction, RemovePaperAction } from './actions';
import { PapersActionType, PaperTypes, PaperProps } from './types';

export type AddPaperFormControls = {
  type: PaperTypes;
  name: PaperProps['name'];
  price: PaperProps['price'];
  layers: PaperProps['layers'];
  leafs: PaperProps['leafs'];
};

let nextPaperId = 0;

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
      id: (++nextPaperId).toString(),
      type,
      name,
      price,
      layers,
      leafs,
      layerPrice,
    },
  };
};

export const removePaper = (id: string): RemovePaperAction => {
  return {
    type: PapersActionType.REMOVE_PAPER,
    payload: { id },
  };
};
