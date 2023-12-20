import React from 'react';
import AreaChart from './area-charts';
import BarChart from './bar-chart';
import TableExample from "./Table";
import DataTable from "./table-API";
import './component.css';

const MainContent = () => {
  return(
    <>
    <div className='mx-4 '>
      <h1 className=' mt-4'>Dashboard</h1>
      <h6>Dashboard</h6>
      <div className="mt-4 row">
          <div className="col-xl-3 col-md-6">
            <div className="card bg-primary text-white mb-4">
                <div className="card-body">Primary Card</div>
                <div className="card-footer d-flex align-items-center justify-content-between">
                    <a className="small text-white stretched-link" href="#">View Details</a>
                    <div className="small text-white"><i className="bi bi-chevron-right"></i></div>
                </div>
            </div>
          </div>
        <div className="col-xl-3 col-md-6">
          <div className="card bg-warning text-white mb-4">
              <div className="card-body">Warning Card</div>
              <div className="card-footer d-flex align-items-center justify-content-between">
                  <a className="small text-white stretched-link" href="#">View Details</a>
                  <div className="small text-white"><i className="bi bi-chevron-right"></i></div>
              </div>
          </div>
        </div>
      <div className="col-xl-3 col-md-6">
        <div className="card bg-success text-white mb-4">
            <div className="card-body">Success Card</div>
            <div className="card-footer d-flex align-items-center justify-content-between">
                <a className="small text-white stretched-link" href="#">View Details</a>
                <div className="small text-white"><i className="bi bi-chevron-right"></i></div>
            </div>
        </div>
      </div>
      <div className="col-xl-3 col-md-6">
        <div className="card bg-danger text-white mb-4">
            <div className="card-body">Danger Card</div>
            <div className="card-footer d-flex align-items-center justify-content-between">
                <a className="small text-white stretched-link" href="#">View Details</a>
                <div className="small text-white"><i className="bi bi-chevron-right"></i></div>
            </div>
        </div>
      </div>
      </div>
      <div className="row" id="chart">
        <div className="col-xl-6">
          <div className="card mb-4">
            <div className="card-header">
              <span><i className="bi bi-graph-up-arrow"></i></span>
              <span>Area Chart Example</span>
            </div>
            <div className="card-body chart">
              <AreaChart/>
            </div>
  
          </div>
        </div>
        <div className="col-xl-6">
          <div className="card mb-4">
            <div className="card-header">
              <span><i className="bi bi-bar-chart-fill"></i></span>
              <span>Bar Chart Example</span>
            </div>
            <div className="card-body chart">
              <BarChart/>
            </div>
          </div>
        </div>
        <div className='row'>
              <div className='col-lg-12 col-md-12 col-12'>
                <div className='card'>
                  <div className='card-header'>
                  <span><i class="bi bi-table"></i></span>
                  <span>DataTable Example</span>
                  </div>
                  <div className='card-body'>
                    <div className='table-responsive'>
                    <TableExample />
                    </div>
                  </div>
                </div>
              </div>
             
         </div>
         <div className='row'>
              <div className='col-lg-12 col-md-12 col-12'>
                <div className='card'>
                  <div className='card-header'>
                  <span><i class="bi bi-table"></i></span>
                  <span>DataTable-API</span>
                  </div>
                  <div className='card-body'>
                    <div className='table-responsive'>
                    <DataTable />
                    </div>
                  </div>
                </div>
              </div>
             
         </div>
      </div>


    </div>
    </>
  ); 
};

export default MainContent;