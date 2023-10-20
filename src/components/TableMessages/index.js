import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Menu, MenuItem } from '@mui/material';
import { tableCellClasses } from '@mui/material/TableCell';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { styled } from '@mui/material/styles';
import { formatTimestamp } from './utils';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#1976d2",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const MessageTable = ({ messages }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event, message) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }}>
        <TableHead>
          <TableRow>
            <StyledTableCell>Content</StyledTableCell>
            <StyledTableCell>Timestamp</StyledTableCell>
            <StyledTableCell>Seen</StyledTableCell>
            <StyledTableCell>Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {messages.length === 0 ? (
            <StyledTableRow>
              <StyledTableCell style={{ textAlign: 'center' }} colSpan={4}>No data</StyledTableCell>
            </StyledTableRow>
        ) : (
          messages.map((message) => (
            <StyledTableRow key={message.id}>
              <StyledTableCell>{message.content}</StyledTableCell>
              <StyledTableCell>{formatTimestamp(message.timestampSent)}</StyledTableCell>
              <StyledTableCell>{message.seen ? 'Yes' : 'No'}</StyledTableCell>
              <StyledTableCell>
                <IconButton
                  aria-label="more"
                  aria-controls="message-actions-menu"
                  aria-haspopup="true"
                  onClick={(e) => handleMenuClick(e, message)}
                >
                  <MoreVertIcon />
                </IconButton>
                <Menu
                  id="message-actions-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={() => setAnchorEl(null)}
                >
                  <MenuItem>Edit</MenuItem>
                  <MenuItem>Delete</MenuItem>
                </Menu>
              </StyledTableCell>
            </StyledTableRow>
          ))
        )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MessageTable;
