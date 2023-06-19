import React, { useState } from 'react';
import { Calendar } from 'primereact/calendar';


export function DateInput(id) {
    const [selectedDate, setSelectedDate] = useState(null);
  
    
  
    return (
     
        <Calendar
          id={id}
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.value)}
          dateFormat="dd/MM/yy"
        />
    );
  }