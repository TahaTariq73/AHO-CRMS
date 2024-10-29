import React, { Fragment } from 'react'
import { Button } from "@/components/ui/button";
import { Routes, Route } from 'react-router-dom';
import Structure from './kpis/allKpis/Structure';
import Calender from './calender/Calender';
import Pipeline from './acquisiton/Pipeline';
import Buyermanagement from './disposition/Buyermanagement';
import Usermanagement from './admin/Usermanagement';

const Panel = () => {
    return (
        <Fragment>
          <Routes>
            <Route path="/dispositions/buyer-management" element={<Buyermanagement />} />
            <Route path="/acquistions/calender" element={<Calender />} />
            <Route path="/acquistions/pipeline" element={<Pipeline />} />
            <Route path="/reports/scoreboard" element={<Structure />} />
            <Route path="/admin/user-management" element={<Usermanagement />} />

            <Route path="/*" element={
              <p> 404 Page Not Found </p>
            } />
          </Routes>
        </Fragment>
    )
}

export default Panel;