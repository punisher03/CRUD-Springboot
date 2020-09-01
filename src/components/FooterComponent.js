import React, {Component} from 'react';
import EmployeeServices from '../services/EmployeeServices';

class FooterComponent extends Component {
  constructor(props){
    super(props)

    this.state={
      employees:[]
    }

  }
  componentDidMount(){
    EmployeeServices.getEmployees().then((res) =>{
        this.setState({employees:res.data});
    });
  }
  render(){
    return(
      <div>
          <header>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div></div>
            </nav>
          </header>


      </div>
    )
  }
}

export default ListEmployeeComponents
