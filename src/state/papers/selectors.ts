import type { RootState } from '../store';
import { PaperProps, PaperTypes } from './types';

export const getToiletPapers = (state: RootState): PaperProps[] => {
  return state.papers.filter((paper) => paper.type === PaperTypes.toilet);
};

export const getTowelPapers = (state: RootState): PaperProps[] => {
  return state.papers.filter((paper) => paper.type === PaperTypes.towel);
};

export const getCheapestToiletPaper = (state: RootState): PaperProps => {
  const theCheapest = state.papers.reduce((prevPaper, currentPaper) => {
    return (currentPaper.layerPrice < prevPaper.layerPrice) ? currentPaper : prevPaper;
  }, state.papers[0]);
  return theCheapest;
};
