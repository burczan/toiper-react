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
        color="info"
      />
      <div className="container" style={{ maxWidth: `${window.innerWidth / 2}px` }}>
        <AddPaperForm />
        <PapersTable />
      </div>
    </>
  );
};
