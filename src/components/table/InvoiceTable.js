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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

const InvoiceTableWrapper = styled.div`
  table {
    box-shadow: none;
    thead {
      background: #f9f9fb;
      border-bottom: 2px solid #eeeeee;
      th {
        color: #97abbe;
        text-transform: uppercase;
        font-size: 13px;
      }
    }
    tbody {
      .invoice {
        border-collapse: unset !important;
        background: #fff;
        transition: background ease 500ms;
        border-bottom: 0.5px solid #e0e0e0;
        border-collapse: unset !important;
        td {
          font-size: 13px;
        }
        &:last-child td,
        &:last-child th {
          border: 0;
        }
        &:hover {
          background: #f9f9fb;
        }
        .invoice_number {
          font-weight: 800;
        }
        .invoice_date {
          color: #97abbe;
        }
        .invoice_client,
        .invoice_amount {
          font-weight: 600;
        }
        .status-badge {
          padding: 5px 15px;
          width: fit-content;
          border-radius: 5px;
          .bullet {
            margin-right: 5px;
          }
          &.pending {
            background: #fff5eb;
            color: #fd9c3f;
          }
          &.completed {
            background: #effbf5;
            color: #2eb16e;
          }
        }
      }
    }
  }
`;

function InvoiceTable(props) {
  return (
    <InvoiceTableWrapper>
      <Table sx={{ minWidth: 650 }} aria-label="invoice table">
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
            <TableRow className="invoice" key={row.number}>
              <TableCell className="invoice_number">{row.number}</TableCell>
              <TableCell className="invoice_date">{row.date}</TableCell>
              <TableCell className="invoice_client">{row.clientName}</TableCell>
              <TableCell className="invoice_amount">{row.amount}</TableCell>
              <TableCell className="invoice-status">
                <div
                  className={`status-badge ${
                    row.status === "Pending" ? "pending" : "completed"
                  }`}
                >
                  <FontAwesomeIcon icon={faCircle} className="bullet fa-xs" />{" "}
                  {row.status}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </InvoiceTableWrapper>
  );
}

export default InvoiceTable;
