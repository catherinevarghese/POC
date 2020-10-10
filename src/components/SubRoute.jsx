/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import { PATH_CONSTANTS } from '../_constants';
import {
  Dashboard,
  CreateTransaction,
  ReportPage,
} from '../pages';

const SubRoute = () => {
  // const routes = [{
  //   path: PATH_CONSTANTS.DASHBOARD,
  //   component: Dashboard,
  // }
  // {
  //   path: PATH_CONSTANTS.PURCHASE_LIST,
  //   component: PurchaseList,
  // },
  // {
  //   path: PATH_CONSTANTS.PURCHASE_CREATE,
  //   component: CreatePurchase,
  // },
  // {
  //   path: PATH_CONSTANTS.PURCHASE_EDIT,
  //   component: EditPurchase,
  // },
  // {
  //   path: PATH_CONSTANTS.EXPENSE_LIST,
  //   component: ExpenseList,
  // },
  // {
  //   path: PATH_CONSTANTS.EXPENSE_CREATE,
  //   component: CreateExpense,
  // },
  // {
  //   path: PATH_CONSTANTS.EXPENSE_EDIT,
  //   component: EditExpense,
  // },
  // {
  //   path: PATH_CONSTANTS.SUPPLIER_LIST,
  //   component: SupplierList,
  // },
  // {
  //   path: PATH_CONSTANTS.SALES_LIST,
  //   component: SalesList,
  // },
  // {
  //   path: PATH_CONSTANTS.SALES_CREATE,
  //   component: CreateSales,
  // },
  // {
  //   path: PATH_CONSTANTS.SALES_EDIT,
  //   component: EditSales,
  // },
  {
    path: PATH_CONSTANTS.REPORT_PAGE,
    component: ReportPage,
  },
  ];

  return (
    <div>
      <Switch>
        {routes.map(({ path, component }, index) => (
          <PrivateRoute path={path} component={component} key={index} />
        ))}

      </Switch>
    </div>
  );
};

export default SubRoute;
