import React, { useState } from 'react';
import { FilterMatchMode } from 'primereact/api';
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from 'primereact/inputtext';

import 'primereact/resources/themes/lara-light-indigo/theme.css';   // theme
import 'primereact/resources/primereact.css';                       // core css




export function MyTable({ data }) {
    const [filters, setFilters] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS }})
    const [globalFilterValue, setGlobalFilterValue] = useState('');
 


    const onGlobalFilterChange = (e) => {
        const value = e.target.value;
        let _filters = { ...filters };

        _filters['global'].value = value;

        setFilters(_filters);
        setGlobalFilterValue(value);
    };

    
    
    const renderHeader = () => {
        return (
            <div className="flex justify-content-end">
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Keyword Search" />
                </span>
            </div>
        );
    };
const header = renderHeader();
  return (
   
      <DataTable
        value={data}
        paginator
        rows={3}
        rowsPerPageOptions={[1, 2, 3, 25, 50, 100]}
        tableStyle={{ minWidth: "50rem" }}
        header={header}
        filters={filters}
      >
        <Column field="firstName" header="Code" sortable></Column>
        <Column field="lastName" header="Name" sortable></Column>
        <Column field="startDatee" header="Category" sortable></Column>
        <Column field="department" header="Quantity" sortable></Column>
        <Column field="dateOfBirth" header="Date Of Birth" sortable></Column>
        <Column field="street" header="Street" sortable></Column>
        <Column field="city" header="City" sortable></Column>
        <Column field="state" header="State" sortable></Column>
        <Column field="zipCode" header="Zip Code" sortable></Column>
      </DataTable>
  );
}
