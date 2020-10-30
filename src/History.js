import React from "react";
import { AppContext } from "./contexts/AppContext";

function History(props) {
    const {userResponse } =  React.useContext(AppContext);
    const history = userResponse.redeemHistory;
    var historyConditional = false;
    try {
    historyConditional = Boolean(history.length >= 1)
    }
    catch(err){
        historyConditional = false;
    }
    
  return (
    <div className="container">
        {historyConditional ?
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">ProductId</th>
                            <th scope="col">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                    {history.map((each, i) => {
                        return (
                                <tr key={i}>
                                    <th scope="row">{i+1}</th>
                                    <td>{each.productId}</td>
                                    <td>{each.createDate}</td>
                                </tr>
                                )
                    })}
                    </tbody>
                </table>
        
            : <h1>No hay compras en el historial</h1> }
        </div>
  )
}
export default History;
