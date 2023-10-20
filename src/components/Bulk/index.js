import React, { useRef } from 'react';
import Button from '@mui/material/Button';

const Bulk = ({ onFileSelect }) => {
  const fileInputRef = useRef(null);

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      onFileSelect(file);
    }
  };

  return (
    <>
      <input
        type="file"
        accept=".xlsx"
        style={{ display: 'none' }}
        ref={fileInputRef}
        onChange={handleFileSelect}
      />
      <Button sx={{marginLeft: '10px'}} variant="contained" color="primary" onClick={() => fileInputRef.current.click()}>Bulk Data</Button>
    </>
  );
};

export default Bulk;
