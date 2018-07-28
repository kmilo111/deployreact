import React, { Component } from 'react';
import './App.css';


class App extends Component {

  constructor() {
    super();

    this.state = {
      isShow:false,
      value:''
    };
  }

  click = (sender) => {
    let tbl = document.getElementById('tbContent');
    //alert(sender.id);
    if (tbl !== null) {
      
     let rows = tbl.getElementsByTagName('tr');
      
    for(let i=0; i < rows.length; i++ ){
       tbl.rows[i].onclick =  function(){
          console.log(this.cells[0].innerText);          
        }
      }
    }

    this.setState({
      value:1
    })
}

getPeriodEvent(){
  let url =  'http://162.243.243.61:9000/mdierp/api/city';
  fetch(url, {
          method:'GET',
          headers: {
              'Authorization': 'Basic YWxlam86MTIz',
              'Content-Type':'application/json'
          }
      })
      .then((resp) => {
        return resp.json();
      })
      .then(data => {
       console.log(data);
     
      })
      .catch(function(error){
         console.log('Error', error);
      });
}

 showTable(){
    setTimeout(() => {
      this.setState({isShow:true})
    }, 2000);
  }

componentDidMount(){
  this.showTable();
  this.click();
  this.getPeriodEvent();
}

  render() {
    const { isShow } = this.state;
    
    return (
      <div className="App">
        
        <table id="tbContent" style={isShow ? {display:'inline-table'} : {display:'none'} }>
          <thead>
            <tr>
              <th>xxx1</th>
              <th>xxx2</th>
              <th>xxx3</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>asdasd</td>
              <td>asdasd</td>
              <td>asdasd</td>
              <td><a href="#" onClick={this.click}>asd</a></td>
            </tr>
            <tr>
              <td>yyyy</td>
              <td>asdasd</td>
              <td>asdasd</td>
              <td><a href="#" onClick={this.click}>asd</a></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
