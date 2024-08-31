'use client';

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Tabs, Tab, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination } from '@mui/material';
import { RootState, AppDispatch } from '@/store/store';
import { fetchCasinoBets } from '@/store/slices/casinoBetsSlice';
import { fetchSportsBets } from '@/store/slices/sportsBetsSlice';
import { PaymentData } from '@/types';

const TableComponent: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [selectedTab, setSelectedTab] = useState(0);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const casinoBets = useSelector((state: RootState) => state.casinoBets.bets);
  const sportsBets = useSelector((state: RootState) => state.sportsBets.bets);

  useEffect(() => {
    dispatch(fetchCasinoBets());
    dispatch(fetchSportsBets());
  }, [dispatch]);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
    setPage(0);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const renderTable = (rows: PaymentData[]) => (
    <Box sx={{ width: '100%', overflowX: 'auto' }}>
      <TableContainer component={Paper} sx={{ minWidth: 600, background: 'transparent' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: 'white', border: 'none' }}>ID</TableCell>
              <TableCell sx={{ color: 'white', border: 'none' }}>Date Request</TableCell>
              <TableCell sx={{ color: 'white', border: 'none' }}>Deposit Amount</TableCell>
              <TableCell sx={{ color: 'white', border: 'none' }}>Method</TableCell>
              <TableCell sx={{ color: 'white', border: 'none' }}>Status</TableCell>
              <TableCell sx={{ color: 'white', border: 'none' }}>Approved At</TableCell>
              <TableCell sx={{ color: 'white', border: 'none' }}>Cancelled At</TableCell>
              <TableCell sx={{ color: 'white', border: 'none' }}>Fee</TableCell>
              <TableCell sx={{ color: 'white', border: 'none' }}>Payment Ext Id</TableCell>
              <TableCell sx={{ color: 'white', border: 'none' }}>Payment Request</TableCell>
              <TableCell sx={{ color: 'white', border: 'none' }}>Payment Response</TableCell>
              <TableCell sx={{ color: 'white', border: 'none' }}>Payment Type</TableCell>
              <TableCell sx={{ color: 'white', border: 'none' }}>Payment Method ID</TableCell>
              <TableCell sx={{ color: 'white', border: 'none' }}>Player ID</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, i) => (
                <TableRow sx={{
                  backgroundColor: i % 2 === 1 ? 'transparent' : '#2C3E50',
                }} key={row.id}>
                  <TableCell sx={{ color: 'white', border: 'none' }}>{row.id}</TableCell>
                  <TableCell sx={{ color: 'white', border: 'none' }}>{row.dateRequest}</TableCell>
                  <TableCell sx={{ color: 'white', border: 'none' }}>{row.depositAmount}</TableCell>
                  <TableCell sx={{ color: 'white', border: 'none' }}>{row.method}</TableCell>
                  <TableCell sx={{ color: 'white', border: 'none' }}>{row.status}</TableCell>
                  <TableCell sx={{ color: 'white', border: 'none' }}>{row.approvedAt}</TableCell>
                  <TableCell sx={{ color: 'white', border: 'none' }}>{row.cancelledAt}</TableCell>
                  <TableCell sx={{ color: 'white', border: 'none' }}>{row.fee}</TableCell>
                  <TableCell sx={{ color: 'white', border: 'none' }}>{row.paymentExtId}</TableCell>
                  <TableCell sx={{ color: 'white', border: 'none' }}>{row.paymentRequest}</TableCell>
                  <TableCell sx={{ color: 'white', border: 'none' }}>{row.paymentResponse}</TableCell>
                  <TableCell sx={{ color: 'white', border: 'none' }}>{row.paymentType}</TableCell>
                  <TableCell sx={{ color: 'white', border: 'none' }}>{row.paymentMethodId}</TableCell>
                  <TableCell sx={{ color: 'white', border: 'none' }}>{row.playerId}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={rows.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
        sx={{ color: 'white' }}
      />
    </Box>
  );

  return (
    <Container sx={{ marginY: { xs: '20px', md: '40px' } }}>
      <Box sx={{ width: '100%', overflowX: 'auto' }}>
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          textColor="inherit"
          indicatorColor="primary"
          aria-label="data table tabs"
          sx={{
            backgroundColor: '#2C3E50',
            color: 'white',
            borderRadius: '9999px',
            overflow: 'hidden',
            padding: '5px',
            display: 'inline-flex',
            fontWeight: 'bold',
            p: '7px 10px',
            m: '0 5px',
            minWidth: 120,
            '& .MuiTabs-indicator': {
              display: 'none'
            }
          }}
        >
          <Tab sx={{
            borderRadius: '9999px',
            overflow: 'hidden',
            textTransform: 'none',
            '&.Mui-selected': {
              backgroundColor: '#34495E',
            }
          }}
            label="Casino Bets"
          />
          <Tab sx={{
            borderRadius: '9999px',
            overflow: 'hidden',
            textTransform: 'none',
            '&.Mui-selected': {
              backgroundColor: '#34495E',
            }
          }}
            label="Sports Bets"
          />
        </Tabs>
        <Box sx={{ mt: 3 }}>
          {selectedTab === 0 && renderTable(casinoBets)}
          {selectedTab === 1 && renderTable(sportsBets)}
        </Box>
      </Box>
    </Container>
  );
}

export default TableComponent;