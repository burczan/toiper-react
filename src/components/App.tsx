import React from 'react';
import { useSelector } from 'react-redux';
import { getCheapestToiletPaper } from '../state/papers/selectors';
import { Hero } from '../common/components/Hero';
import { AddPaperForm } from './AddPaperForm';
import { PapersTable } from './PapersTable';

export const App = () => {
  const cheapest = useSelector(getCheapestToiletPaper);

  return (
    <>
      <Hero
        title="TOIPER"
        subtitle="Compare price of toilet paper rolls depending on amount of layers and leafs"
        color="primary"
      />
      <div className="container">
        <div className="section container" style={{ maxWidth: `${window.innerWidth / 2}px` }}>
          <AddPaperForm />
        </div>
        {cheapest && (
          <div className="container">
            <div className="notification is-info has-text-centered" style={{ maxWidth: '300px', margin: '0 auto' }}>
              Paper
              {' '}
              <u>{cheapest && cheapest.name}</u>
              {' '}
              seems to be the best
            </div>
          </div>
        )}
        <div className="section">
          <PapersTable />
        </div>
      </div>
    </>
  );
};
