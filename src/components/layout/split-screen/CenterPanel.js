import React from "react";
import styled from "styled-components";

import List from "../lists/List";
import { totals } from "../../../resources";
import TotalListItem from "../lists/totals/TotalListItem";
import { Button, Card, CardContent } from "@mui/material";
import SalesChart from "../../chart/SalesChart";
import SelectPeriod from "../../select/SelectPeriod";
import InvoiceTable from "../../table/InvoiceTable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const CentralConteriner = styled.div`
  height: 100%;
  background-color: #f9f9fb;
  padding: 40px;
  .totals {
    ul {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      justify-content: space-around;
    }
  }
  .card {
    border-radius: 10px;
    border: 2px solid #f3f3f5;
    box-shadow: 4px 4px 20px #eee;
    padding: 10px;
    margin-bottom: 20px;
    .card-content {
      padding: 10px;
      display: flex;
      flex-direction: column;
      .card-content_header {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
    .card-actions {
      display: flex;
      justify-content: center;
    }
    .btn {
      width: 100%;
    }
  }
  .plus-icon {
    margin-right: 10px;
  }
`;

function CenterPanel({ name }) {
  return (
    <CentralConteriner>
      <div className="totals">
        <List
          items={totals}
          resourceName="totalItem"
          itemComponent={TotalListItem}
        />
      </div>
      <div className="data-visualization">
        <Card className="card data-visualization-card">
          <CardContent className="card-content">
            <div className="card-content_header">
              <h3>Sales Analytic</h3>
              <SelectPeriod />
            </div>
            <div className="card-content_body">
              <SalesChart />
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="invoices">
        <Card className="card invoices-card">
          <CardContent className="card-content">
            <div className="card-content_header">
              <h3>Invoices</h3>
              <Button variant="outlined">
                <FontAwesomeIcon className="plus-icon" icon={faPlus} />
                New Invoice
              </Button>
            </div>
            <div className="card-content_body">
              <InvoiceTable />
            </div>
          </CardContent>
        </Card>
      </div>
    </CentralConteriner>
  );
}

export default CenterPanel;
