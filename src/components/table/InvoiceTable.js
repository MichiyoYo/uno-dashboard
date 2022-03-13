import styled from "styled-components";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import React from "react";
import { dataTableRows } from "../../resources";

const InvoiceTableWrapper = styled.div`
  table {
    box-shadow: none;
    thead {
      background: #f9f9fb;
      th {
        color: #97abbe;
        text-transform: uppercase;
        font-size: 13px;
      }
    }
  }
`;

function InvoiceTable(props) {
  return (
    <InvoiceTableWrapper>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Number</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Client Name</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataTableRows.map((row) => (
            <TableRow
              key={row.number}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.number}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.clientName}</TableCell>
              <TableCell>{row.amount}</TableCell>
              <TableCell>{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </InvoiceTableWrapper>
  );
}

export default InvoiceTable;
