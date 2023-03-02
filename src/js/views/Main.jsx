import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Main = () => {
    const navigate = useNavigate();

    return (
        <div>
           <h1>I am the Main page</h1>
           <ul>
                <li>
                    <Link to="/product/2">Go To Product #2 with Link</Link>
                </li>
                <li>
                    <button onClick={() => navigate("/product/3")}>
                        Go to Product #3 with useNavigate
                    </button>
                </li>
           </ul>         
        </div>
    )
}


export default Main;

