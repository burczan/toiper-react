import React from 'react';
import ReactDOM from 'react-dom';
import { CloseButton } from '../CloseButton';

type ModalProps = {
  isOpen: boolean;
  title: string;
  dismiss: () => void;
  children: React.ReactNode;
  footer?: React.ReactNode;
};

export const Modal = ({
  isOpen,
  title,
  dismiss,
  children,
  footer,
}: ModalProps) => {
  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="modal is-active">
      <div className="modal-background" role="presentation" onClick={dismiss} />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">{title}</p>
          <CloseButton onClick={dismiss} size="is-medium" />
        </header>
        <section className="modal-card-body">
          {children}
        </section>
        <footer className="modal-card-foot">
          {footer}
        </footer>
      </div>
    </div>,
    document.body,
  );
};
