import React, { Component } from 'react'
import Image from 'next/image'


export default class Explore extends Component {
    render() {
        return (
            <div className="explore__container">
                <h1>
                   {this.props.title}
                </h1>
            <div className="explore__container--inner">
             {this.props.data.map((item,index) =>{return(
                    <div key={index} className="explore__container--inner-card">
                        <Image src={item.url} alt="item" width={500} height={500}/>
                        <h2>{item.title}</h2>
                    </div>
                )})}
                </div>
               
            </div>
        )
    }
}
