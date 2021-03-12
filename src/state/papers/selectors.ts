import type { RootState } from '../store';
import { PaperProps, PaperTypes } from './types';

export const getPapersByType = (state: RootState, type: PaperTypes) => {
  return state.papers.filter((paper) => paper.type === type);
};

export const getTakenNames = (state: RootState) => {
  return state.papers.map((paper) => paper.name);
};

export const getCheapestToiletPaper = (state: RootState): PaperProps => {
  const theCheapest = state.papers.reduce((prevPaper, currentPaper) => {
    return (currentPaper.layerPrice < prevPaper.layerPrice) ? currentPaper : prevPaper;
  }, state.papers[0]);
  return theCheapest;
};
