import React from 'react';
import { Link } from "react-router-dom";

function Pagination(props) {
    const {pageNumber, priceFilter, categoryFilter} = props;
    return (
        <div className="container pagination">
            <nav aria-label="Page navigation example">
            {priceFilter === "0" && categoryFilter ==="0" ? 
            pageNumber === '1' ?
            <ul className="pagination">
                <Link to="/page/1">
                    <li className="page-item disabled"><a className="page-link" href="#"><i className="fas fa-arrow-left"></i></a></li>
                </Link>
                <Link to="/page/2">
                    <li className="page-item"><a className="page-link" href="#"><i class="fas fa-arrow-right"></i></a></li>
                </Link>
            </ul>
        : 
            <ul className="pagination">
                <Link to="/page/1">
                    <li className="page-item"><a className="page-link" href="#"><i className="fas fa-arrow-left"></i></a></li>
                </Link>
                <Link to="/page/2">
                    <li className="page-item disabled"><a className="page-link" href="#"><i class="fas fa-arrow-right"></i></a></li>
                </Link>
            </ul> : ""
                
                }               
            </nav>
        </div>
    );
}

export default Pagination;