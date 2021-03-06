import React, { Component } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';


class App extends Component {
  getRandomColor = ()=> {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  state = {
    color: "#29C4FB",
    nextColor: "hotpink",
    temp: "#6D52DE",
    speed: 3,
    logoColor: "#61DAFB",
    lastSpeed: 0.17,
    rainboo: false,
    save: {},
  }

// lavender = #2664D6
  mod = newColor => {
    const { color, nextColor, temp, speed, logoColor } = this.state;
    console.log(`
      changing ${color} to ${newColor}
      next color is ${nextColor}
      temp is ${temp}
      speed is ${speed}
      logo is ${logoColor}
    `);
    // random color function needed
    this.setState({
      color: nextColor,
      nextColor: color,
    })
  }

  // Save
  saveSettings = ()=>{
    this.setState({
      save: this.state
    })
  }

  revertSave =()=>{
    console.log("reverting to save");
    console.log(`reverting to this save color: ${this.state.save.color}`);
    this.setState(this.state.save)
    // this only works for a one time reload
    // if(!this.state.save.color){
    //   this.saveSettings();
    // }
  }

  changeSpeed = (newSpeed)=>{
    const { speed } = this.state
    console.log(`
      changing ${speed} to ${newSpeed}
    `)
    this.setState({
      speed: newSpeed
    })
  }

  newTextColor = ()=> {
    console.log("changing text color")
    this.setState({
      color: this.getRandomColor(),
    })
  }

  newLogoColor = ()=> {
    console.log("changing logo color")
    this.setState({
      logoColor: this.getRandomColor(),
    })
  }
  freeze = ()=>{
    console.log("freezing speed");
    let temp = this.state.speed;
    this.setState({
      speed:this.state.lastSpeed,
      lastSpeed: temp,
    })
  }
  newBackgroundColor = ()=> {
    console.log("changing background color")
    this.setState({
      temp: this.getRandomColor(),
    })
  }
  
  rainbow = ()=> {
    console.log("rainbowing");
    // flashing logo colors at set interval
    this.setState({
      speed: .25,
      rainboo: true,
    })
      setInterval(()=>{
        if(this.state.rainboo == true){
          this.setState({
            logoColor: this.getRandomColor(),
          })
        }
      }, 500);
    


    for(let i=0; i < 15; i++){

    }
    this.setState({
      logoColor: this.getRandomColor(),
    })
  }

  steady = ()=>{
    console.log("stopping rainbow");
    this.setState({
      speed: 4,
      rainboo: false,
    })
  }

  moderator = ()=>{
    // chooses whether to rainbow or steady
    if(this.state.rainboo == true){
      this.steady();
    }else{
      this.rainbow();
    }
  }
  render() {
    const { color, nextColor, temp, speed, logoColor, save } = this.state;
    const velocity = speed+.25;
    const dyno = {
      "color": color,
      "background": temp,
    }


    const myAnime = {
      "animation": `App-logo-spin infinite ${speed}s linear`,
      "height": "40vmin",
    }
//#61DAFB default color for logo
    const MyLogo = ()=>{
      return (
        <svg style={myAnime} height= "40vmin" pointerEvents="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 841.9 595.3">
          <g fill={logoColor}>
            <path d="M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zM421.2 430c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24 4.7 8 9.5 15.8 14.4 23.4zM420.7 163c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6 0-15.7 22.9-35.6 58.3-50.6 8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zM310 490c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6zM320.8 78.4z"/>
            <circle cx="420.9" cy="296.5" r="45.7"/>
            <path d="M520.5 78.1z"/>
          </g>
        </svg>
      )
      
    }
    // .App-logo {
    //   animation: App-logo-spin infinite 20s linear;
    //   height: 40vmin;
    //   pointer-events: none;
    // }

    const myButton = {
      "padding": ".4rem"
    }

    const myInfo = {
      "background":"black",
      "color":"white",
      "padding": "1rem",
      "opacity": ".6"
    }

    

    const DynamicStuff = boolie => {
      let msg = ""
      if(save.color){
        msg = "Load Saved Settings"
      }else{
        msg = "no saves on file"
      }
      return(
        <h2 onClick={this.revertSave} style={myInfo}>{msg}</h2>
      )
    }
    if(this.state.rainboo==true){
      return (
        <div className="App" >
          < Header/>
          <header className="App-header" style={dyno}>
            <div >
              <h3 style={dyno} onClick={()=>this.saveSettings()} >Save?</h3>
              <DynamicStuff />
            </div>
            <div style={myButton} onClick = {()=>this.newTextColor()}>
              Change Font Color
            </div>
            <div style={myButton} onClick = {()=>this.newLogoColor()}>
              Change Logo Color
            </div>
            <div style={myButton} onClick = {()=>this.newBackgroundColor()}>
              Get Random Background Color
            </div>
            <div onClick={this.moderator}>
            < MyLogo />
          < MyLogo />

            </div>
            <div onClick={()=>this.changeSpeed(speed-.25)}>
              Speed Up? 
            </div>
            <div onClick={()=>this.changeSpeed((velocity))}>
              Slow down? 
            </div>
          </header>
          < Footer />
        </div>
      );
    }
    return (
      <div className="App" >
        < Header/>
        <header className="App-header" style={dyno}>
          <div >
            <h3 style={dyno} onClick={()=>this.saveSettings()} >Save?</h3>
            <DynamicStuff />
          </div>
          
          {/* <p style={dyno} onClick={()=>this.mod(nextColor)} >
            Flip to {nextColor}
          </p> */}
          <div style={myButton} onClick = {()=>this.newTextColor()}>
            Change Font Color
          </div>
          <div style={myButton} onClick = {()=>this.newLogoColor()}>
            Change Logo Color
          </div>
          <div style={myButton} onClick = {()=>this.newBackgroundColor()}>
            Get Random Background Color
          </div>
          <div style={myInfo}>
            <ul>
              <li>Background: {temp}</li>
              <li>Font: {color}</li>
              <li>Speed: {speed}</li>
            </ul>
          </div>
          <div onClick={this.moderator}>
          < MyLogo />
          </div>
          <div onClick={()=>this.changeSpeed(speed-.25)}>
            Speed Up? 
          </div>
          <div onClick={()=>this.changeSpeed((velocity))}>
            Slow down? 
          </div>
        </header>
        < Footer />
      </div>
    );
  }
}

export default App;
