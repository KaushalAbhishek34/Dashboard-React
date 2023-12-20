import React from 'react';
import { Offcanvas } from 'react-bootstrap';
import './component.css';



const OffCanvasMenu = ({ show, handleClose }) => {
  return (
    <Offcanvas show={show} onHide={handleClose}  style={{ width: '240px', marginTop: '55px',text:"white" }} scroll={true} backdrop={false} className="bg-body-tertiary bg-dark canvas" data-bs-theme="dark" >
        <div className='offcanvas-header'>
           <ul className=' navbar-nav'>
                 <li>
                 <div className='heading'>
                   CORE
                 </div>
                 </li>
                 <li>
                  <a className="nav-link px-2" href='#' role='button'>
                    <span><i className="bi bi-speedometer2"></i></span>
                    <span className='px-2'>Dashboard</span>
                  </a>
                  <hr ></hr>
                 </li>
                 <li>
                   <div className='heading'>
                     INTERFACE
                   </div>
                 </li>
                 <li>
                    <a className='nav-link px-2 d-flex justify-content-between' href='#' role="button"><span><span><i class="bi bi-layout-sidebar-inset"></i></span><span >Layout</span></span> <span>
                    <i class="bi bi-chevron-right"></i></span></a>
                </li>
                <li>
                <a className='nav-link px-2 d-flex justify-content-between' href='#' role="button"><span><span><i class="bi bi-book"></i></span><span >Pages</span></span> <span>
                    <i class="bi bi-chevron-right"></i></span></a>
                </li>
                <hr ></hr>
                <li>
                    <div className='heading'>
                        ADDONS
                    </div>
                </li>
                <li>
                 <a className="nav-link px-2" href='#' role='button'>
                    <span><i class="bi bi-graph-up-arrow"></i></span>
                    <span className='px-2'>Charts</span>
                 </a>
                </li>
                <li>
                  <a className="nav-link px-2" href='#' role='button'>
                    <span><i class="bi bi-table"></i></span>
                    <span className='px-2'>Tables</span>
                  </a>
                </li>    
            </ul>

        </div>
        

    </Offcanvas>
  );
};

export default OffCanvasMenu;