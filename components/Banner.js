import React, { Component } from 'react'
import Typewriter from 'typewriter-effect';
import Image from 'next/image'


export default class Banner extends Component {


  
    render() {
        return (
      <header className="header">
      <div className="header__logo-box">
      <div className="header__logo-box-start">
       
        </div>

      <div className="header__logo-box-mid">
      <i className="fas fa-phone"></i>
          <h1>+91-8887756502</h1>
        </div>

      <div className="header__logo-box-last">
          <h1>TRENDING TRIPS</h1>
          <h1>WORKCATIONS</h1>
          <h1>BLOGS</h1>
        </div>
      </div>

      <div className="header__text-box">
        <h1 >
         Indias Coolest Travel Community
        </h1>
        <p> 
          <Typewriter
        options={{
    strings: [' Spreading Happiness', ' Connecting People'," Creating Memories"," Creating Stories"," Fulfilling Adventure"],
    autoStart: true,
    loop: true,
  }}
  onInit={(typewriter) => {
    typewriter.typeString()
      .callFunction(() => {
        console.log('String typed out!');
      })
      .pauseFor(1000)
      .deleteAll()
      .callFunction(() => {
        console.log('All strings were deleted');
      })
      .start();
  }}
/>
</p>

        <div className="header__text-box-inputContainer">
          <input placeholder="Where do you wanna go?"/>
          <div className="header__text-box-inputContainer-imgConatiner">
          <i className="fas fa-search"></i>
          </div>
          </div>
          <div>

{/* card */}
 <div className="header__text-box-card_container">
            <div className="header__text-box-card_container--inner">
             {this.props.data.map((item,index) =>{return(
                    <div key={index} className="header__text-box-card_container--inner-card">
                        <Image src={item.url} alt="item" width={500} height={500}/>
                        <h1>5000+</h1>
                        <h1>{item.title}</h1>
                    </div>
                )})}
                </div>
               
            </div>
        </div>
      </div>
    </header>
        )
    }
}
