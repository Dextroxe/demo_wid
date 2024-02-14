// components/Modal.js
'use client'

import React, { useState } from 'react';

const Modal = ({ children, show, onClose }) => {
  if (!show) {
    return null;
  }

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 1000,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      }}
      onClick={onClose}
    >
      <div
        style={{
          position: 'relative',
          top: '20%',
          width: '80%',
          maxWidth: '600px',
          margin: '0 auto',
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '5px',
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
        <button onClick={onClose} className='text-black'>Close</button>
      </div>
    </div>
  );
};

export default Modal;