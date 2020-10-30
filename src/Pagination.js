import React from 'react';
import { Link } from "react-router-dom";
import { AppContext } from "./contexts/AppContext";

function Pagination(props) {
    const {priceFilter, categoryFilter} =  React.useContext(AppContext);
    const {pageNumber} = props;
    return (
        <div className="container pagination">
            <nav aria-label="Page navigation example">
            {priceFilter === "0" && categoryFilter ==="0" ? 
            pageNumber === '1' ?
            <ul className="pagination">
                <Link to="/page/1">
                    <li className="page-item disabled"><p className="page-link"><i className="fas fa-arrow-left"></i></p></li>
                </Link>
                <Link to="/page/2">
                    <li className="page-item"><p className="page-link" ><i className="fas fa-arrow-right"></i></p></li>
                </Link>
            </ul>
        : 
            <ul className="pagination">
                <Link to="/page/1">
                    <li className="page-item"><p className="page-link" ><i className="fas fa-arrow-left"></i></p></li>
                </Link>
                <Link to="/page/2">
                    <li className="page-item disabled"><p className="page-link" ><i className="fas fa-arrow-right"></i></p></li>
                </Link>
            </ul> : ""
                
                }               
            </nav>
        </div>
    );
}

export default Pagination;