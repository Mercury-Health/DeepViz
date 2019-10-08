import React, { Component } from 'react';
import './App.css';
import MenuContents from './modules/ArchitectureMenu';
import ArchitectureOptions from './resources/ArchitectureOptions';
import { Dropdown, Icon, Menu, Segment, Grid, Button } from 'semantic-ui-react'
class App extends Component {
  componentDidMount() {
    let canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    canvas.style.width = '100%';
    canvas.style.height = '100%';

    

    for(let x =0; x < canvas.width; x++) {
      for(let y = 0; y < canvas.height; y++) {
        ctx.fillStyle = "rgba("+100+","+100+","+100+","+(255/255)+")";
        ctx.fillRect( x, y, 1, 1 );
      }
    }
  }

  draw = () => {
    let canvas = document.getElementById("myCanvas");
    var self = this;
    var widthArray = [];
    while(widthArray.length < canvas.width){
      var r = Math.floor(Math.random()*canvas.width);
      if(widthArray.indexOf(r) === -1) widthArray.push(r);
    }

    var heightArray = [];
    while(heightArray.length < canvas.width){
      var r = Math.floor(Math.random()*canvas.width);
      if(heightArray.indexOf(r) === -1) heightArray.push(r);
    }

    for(let x =0; x < canvas.width; x++) {
      for(let y = 0; y < canvas.height; y++) {
        setTimeout(function() {
          self.drawPixel(widthArray[x],heightArray[y]);
        }, 10);
        
      }
    }
  }

  drawPixel = (x, y) => {
    let canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "rgba("+x+","+y+","+0+","+(255/255)+")";
    ctx.fillRect( x, y, 1, 1 );
  }

  render() {
    return (
      <div>
        <Segment>
          <Grid columns={3} centered>
          <Grid.Row stretched>
            <Grid.Column>
            <Menu vertical>
              <Menu.Item
                    name='Deep Learning Visualization'
                    active={true}
                    onClick={this.handleItemClick}
                  />
              <Dropdown item text='Choose an Architecture'>
                    <Dropdown.Menu>
                      <Dropdown.Header>Architecture</Dropdown.Header>
                      <Dropdown.Item>Architecture 1</Dropdown.Item>
                      <Dropdown.Item>Architecture 2</Dropdown.Item>
                      <Dropdown.Item>Architecture 3</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
              </Menu>
            </Grid.Column>
            <Grid.Column>
              <Grid columns={3} verticalAlign='middle'>
              <Grid.Column>

              </Grid.Column>
              <Grid.Column>
              <Button onClick={this.draw} content='Start Program' icon='play' labelPosition='left' />
              </Grid.Column>
              </Grid>
            
            </Grid.Column>
            <Grid.Column>

            </Grid.Column>
            </Grid.Row>
          </Grid>
        
        
        </Segment>
    
    <Grid columns={3} divided padded>
    <Grid.Row stretched>
      <Grid.Column>
        <Segment>1<Button floated='right'>Cube</Button></Segment>
        <Segment>2<Button floated='right'>Cube</Button></Segment>
        <Segment>3<Button floated='right'>Cube</Button></Segment>
        <Segment>4<Button floated='right'>Cube</Button></Segment>
        <Segment>5<Button floated='right'>Cube</Button></Segment>
        <Segment>6<Button floated='right'>Cube</Button></Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment color='red'></Segment>
        <Segment color='orange'>2</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>
          <canvas id="myCanvas" width="200" height="100"></canvas>
        </Segment>
      </Grid.Column>
    </Grid.Row>
  </Grid>
  </div>
    );
  }
}

export default App;
