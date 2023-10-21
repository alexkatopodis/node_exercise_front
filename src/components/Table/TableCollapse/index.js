import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { StyledTableCell, StyledTableRow } from '../style';
import { formatTimestamp, formatDate } from '../utils';

const Row = (props) => {
  const { row } = props;
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledTableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.firstName}
        </TableCell>
        <TableCell align="right">{row.lastName}</TableCell>
        <TableCell align="right">{row.username}</TableCell>
        <TableCell align="right">{formatDate(row.birthdate)}</TableCell>
      </StyledTableRow>
      <StyledTableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Received Messages
              </Typography>
              <Table size="small" aria-label="received-messages">
                <TableHead>
                  <StyledTableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Content</TableCell>
                    <TableCell align="right">Seen</TableCell>
                  </StyledTableRow>
                </TableHead>
                <TableBody>
                  {row.receivedMessages.map((message) => (
                    <StyledTableRow key={message.id}>
                      <TableCell component="th" scope="row">
                        {formatTimestamp(message.timestampSent)}
                      </TableCell>
                      <TableCell>{message.content}</TableCell>
                      <TableCell align="right">{message.seen ? 'Yes' : 'No'}</TableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
              <Typography sx={{ marginTop: '10px' }} variant="h6" gutterBottom component="div">
                Sent Messages
              </Typography>
              <Table size="small" aria-label="sent-messages">
                <TableHead>
                  <StyledTableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Content</TableCell>
                    <TableCell align="right">Seen</TableCell>
                  </StyledTableRow>
                </TableHead>
                <TableBody>
                  {row.sentMessages.map((message) => (
                    <StyledTableRow key={message.id}>
                      <TableCell component="th" scope="row">
                        {formatTimestamp(message.timestampSent)}
                      </TableCell>
                      <TableCell>{message.content}</TableCell>
                      <TableCell align="right">{message.seen ? 'Yes' : 'No'}</TableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </StyledTableRow>
    </>
  );
}

const TableCollapse = (props) => {
  const { data } = props;

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <StyledTableRow>
            <StyledTableCell />
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Surname</StyledTableCell>
            <StyledTableCell align="right">Username</StyledTableCell>
            <StyledTableCell align="right">Birthdate</StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <Row key={row.id} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableCollapse;

