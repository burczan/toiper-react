import React from 'react';
import { Hero } from '../common/components/Hero';
import { AddPaperForm } from './AddPaperForm';
import { PapersTable } from './PapersTable';

export const App: React.FC = () => {
  return (
    <>
      <Hero
        title="TOIPER"
        subtitle="Compare price of toilet paper rolls depending on amount of layers and leafs"
        color="primary"
      />
      <div className="container" style={{ maxWidth: `${window.innerWidth / 2}px` }}>
        <div className="section">
          <AddPaperForm />
        </div>
        <div className="section">
          <PapersTable />
        </div>
      </div>
    </>
  );
};
