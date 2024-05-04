import React, { Component } from 'react';


class Heading extends Component {
    render(){
        return(
            <div className='mb-4'>
                <h1 className='services__title text-center'> { this.props.title } </h1>
                <p className='services__description text-center'><strong> { this.props.description } </strong></p>
                <div className="row justify-content-center"> 
                    <hr className='heading__hr col-3'/> 
                </div>

            </div>
        );
    }
}

export default Heading;



