import React from 'react';
import { Link } from "react-router-dom";

const Cards = (props) => {
    console.log(props)
    return (
        <div>
            <main className="bd-content p-5" role="main">
                <h2>Custom components</h2>
                <p>Brand new components and templates to help folks quickly get started template builder and demonstrate best practices for adding onto the website.</p>
                <div className="row">
                    {props.data.map(base => 
                    <div className="col-sm-6 col-md-4 col-xl-3 mb-3" key={base.id}>
                        <Link to={{pathname:"/card" ,search:`${base.path}`}} key={base.id}>
                        <img className="img-thumbnail mb-3" src={base.image} alt={`screenshot`} width="960" height="600" />
                        <h5 className="mb-1">{base.name}</h5>
                        </Link>
                    </div>
                    )}
                </div>
            </main>
        </div>
    )
}

export default Cards;
