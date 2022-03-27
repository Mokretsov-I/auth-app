import React, { MouseEvent, MouseEventHandler } from "react";

import "./Modal.css";

interface ModalProps {
  isShow: boolean;
  close: MouseEventHandler<HTMLDivElement>;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ children, isShow, close }) => {
  if (!isShow) return null;
  return (
    <div className="app-modal" onClick={close}>
      <div
        className="app-modal__contant"
        onClick={(event: MouseEvent<HTMLDivElement>) => {
          event.stopPropagation();
        }}
      >
        {children}
      </div>
    </div>
  );
};
