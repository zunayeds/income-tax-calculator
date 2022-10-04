import { Box } from '@mui/material';
import { DataGrid, GridColDef, GridColumnVisibilityModel } from '@mui/x-data-grid';
import React from 'react';
import { Constants } from '../../data/constants';
import './TaxBreakdown.css';

type TaxBreakdownProps = {
  totalIncomeAmout: number,
  taxFreeAmount: number,
  t: any
}

export const TaxBreakdown = (props: TaxBreakdownProps) => {
  const [showFullBreakdown, setShowFullBreakdown] = React.useState(() => true);

  function columns(): GridColDef[] {
    const columnsDefinitions: GridColDef[] = [
      {
        field: 'id',
      },
      {
        field: 'totalIncome',
        headerName: props.t('taxBreakdown.totalIncomeHeader'),
        width: 250
      },
      {
        field: 'taxRate',
        headerName: props.t('taxBreakdown.taxRateHeader'),
        width: 100
      },
      {
        field: 'taxAmount',
        headerName: props.t('taxBreakdown.taxAmountHeader'),
        type: 'number',
        width: 120
      }
      // {
      //   field: 'fullName',
      //   headerName: 'Full name',
      //   description: 'This column has a value getter and is not sortable.',
      //   sortable: false,
      //   width: 160,
      //   valueGetter: (params: GridValueGetterParams) =>
      //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
      // },
    ];
    if (showFullBreakdown) {
      columnsDefinitions.push({
        field: 'remaining',
        headerName: props.t('taxBreakdown.remainingHeader'),
        type: 'number',
        width: 120
      });
    }
    columnsDefinitions.forEach(
      colDef => {
        colDef.sortable = false;
        colDef.headerClassName = 'colHeader';
      }
    );
    return columnsDefinitions;
  }

  const columnVisibility: GridColumnVisibilityModel = {
    'id': false
  };

  function data(): any[] {
    const breakDownData: any[] = [];
    let index = 0;
    let totalTaxAmount = 0;
    let totalIncome = Math.max(props.totalIncomeAmout - props.taxFreeAmount, 0);
    breakDownData.push({
      id: index++,
      totalIncome: props.t('taxBreakdown.totalIncomeUpto', { number: props.taxFreeAmount }),
      taxRate: props.t('taxBreakdown.taxRate', { number: 0 }),
      taxAmount: props.t('taxBreakdown.taxAmount', { number: 0 }),
      remaining: props.t('taxBreakdown.remaining', { number: totalIncome }),
    });
    for (let i = index; i < Constants.breakdownFixedRange.length && (showFullBreakdown || totalIncome > 0); i++) {
      const breakdown = Constants.breakdownFixedRange[i];
      const nextIncome = Math.min(totalIncome, breakdown.amount);
      totalIncome = Math.max(totalIncome - nextIncome, 0);
      const taxAmount = (nextIncome * breakdown.rate) / 100;
      totalTaxAmount += taxAmount;
      const nextIncomeAmount = showFullBreakdown || nextIncome >= breakdown.amount ? props.t('taxBreakdown.nextIncome', { number: breakdown.amount }): props.t('taxBreakdown.remainingIncomeAmount', { number: nextIncome });
      breakDownData.push({
        id: index++,
        totalIncome: nextIncomeAmount,
        taxRate: props.t('taxBreakdown.taxRate', { number: breakdown.rate }),
        taxAmount: props.t('taxBreakdown.taxAmount', { number: taxAmount }),
        remaining: props.t('taxBreakdown.remaining', { number: totalIncome }),
      });
    }
    const hasRemainingAmount = totalIncome > 0;
    if (showFullBreakdown || hasRemainingAmount) {
      const remainingAmount = hasRemainingAmount ? props.t('taxBreakdown.remainingIncomeAmount', { number: totalIncome }) : props.t('taxBreakdown.remainingElse');
      const remainingAmountTax = hasRemainingAmount ? (totalIncome * Constants.maximumTaxRate) / 100 : 0;
      totalTaxAmount += remainingAmountTax;
      breakDownData.push({
        id: index++,
        totalIncome: remainingAmount,
        taxRate: props.t('taxBreakdown.taxRate', { number: Constants.maximumTaxRate }),
        taxAmount: props.t('taxBreakdown.taxAmount', { number: remainingAmountTax }),
        remaining: props.t('taxBreakdown.remaining', { number: totalIncome }),
      });
    }
    breakDownData.push({
      id: index++,
      totalIncome: props.t('taxBreakdown.grossTax'),
      taxRate: '',
      taxAmount: props.t('taxBreakdown.taxAmount', { number: totalTaxAmount })
    });
    return breakDownData;
  }

  return (
    <Box sx={{ width: '100%' }}>
      <DataGrid
        rows={data()}
        getRowClassName={row => row.id === data().length - 1 ? 'footer' : ''}
        columns={columns()}
        columnVisibilityModel={columnVisibility}
        autoHeight={true}
        disableColumnFilter={true}
        disableColumnSelector={true}
        disableColumnMenu={true}
        disableDensitySelector={true}
        disableSelectionOnClick={true}
        showColumnRightBorder={false}
        hideFooterPagination={true}
        hideFooter={true}
      />
    </Box>
  )
}