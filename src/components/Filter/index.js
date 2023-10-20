import React, { useState } from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Stack } from '@mui/material';
import Bulk from '../Bulk';
import { useDispatch } from 'react-redux';
import { uploadXlsxFile } from '../../store/bulk/actions';

const Filter = ({ onFilter, onClear }) => {
  const [selectedField, setSelectedField] = useState('firstName');
  const [filterValue, setFilterValue] = useState('');

  const dispatch = useDispatch();

  const handleFieldChange = (e) => {
    setSelectedField(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilterValue(e.target.value);
  };

  const handleFilterClick = () => {
    onFilter(selectedField, filterValue);
  };

  const handleClearClick = () => {
    onClear();
  };


  const handleFileSelect = (file) => {
    dispatch(uploadXlsxFile(file));
  };


  return (
    <Stack
      sx={{ marginTop: '20px', marginBottom: '20px' }}
      className="stack"
      direction="row"
      spacing={1}
      justifyContent="space-between"
    >
      <Stack direction="row" spacing={1}>
        <Select size="small" value={selectedField} onChange={handleFieldChange}>
          <MenuItem value="firstName">First Name</MenuItem>
          <MenuItem value="lastName">Last Name</MenuItem>
          <MenuItem value="gender">Gender</MenuItem>
        </Select>
        <TextField
          size="small"
          type="text"
          label={`Enter ${selectedField}`}
          value={filterValue}
          onChange={handleFilterChange}
        />
        <Button variant="contained" color="primary" onClick={handleFilterClick}>
          Filter
        </Button>
        <Button variant="contained" color="primary" onClick={handleClearClick}>
          Clear
        </Button>
      </Stack>
      <Bulk onFileSelect={handleFileSelect}/>
    </Stack>

  );
};

export default Filter;
