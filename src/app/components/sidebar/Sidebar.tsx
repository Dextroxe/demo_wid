'use client';

import React, { useState } from 'react';

const Sidebar = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 10,
        width: '300px',
        height: '100%',
        backgroundColor: '#f5f5f5',
        padding: '20px',
        borderLeft: '1px solid #ddd',
      }}
    //   onClick={handleBackgroundClick}
    >
      <button onClick={onClose} className='text-black'>Close</button>
      {children}
    </div>
  );
};

export default Sidebar;