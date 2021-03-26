import React from 'react';
import { useSelector } from 'react-redux';
import { getCheapestToiletPaper } from '../state/papers/selectors';
import { Hero } from '../common/components/Hero';
import { AddPaperForm } from './AddPaperForm';
import { PapersTable } from './PapersTable';
import { Notification } from '../common/components/Notification';

export const App = () => {
  const cheapest = useSelector(getCheapestToiletPaper);

  return (
    <>
      <Hero
        title="TOIPER"
        subtitle="Compare price of toilet paper rolls depending on amount of layers and leafs"
        color="is-primary"
      />
      <div className="container">
        <div className="section container" style={{ maxWidth: `${window.innerWidth / 2}px` }}>
          <AddPaperForm />
        </div>
        <div className="section">
          <PapersTable />
        </div>
        {cheapest && (
          <Notification color="is-info" halfWidth>
            {`Paper ${cheapest.name} seems to be the best.`}
          </Notification>
        )}
      </div>
    </>
  );
};
