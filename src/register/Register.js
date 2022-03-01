import React, {Component} from "react";
import axios from "axios";
import {ip,port} from "../setIP/setting";
import { useHistory } from 'react-router-dom';

class Register extends Component{
    constructor(props) {
        super(props);
        this.state = {
            idkey:"",
            firstname:"",
            lastname:"",
            phonenumber:""
        
        }
        this.handleChang = this.handleChang.bind(this);
        this.handleClicked = this.handleClicked.bind(this);
    }
    handleChang = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }
    handleClicked(){
        let url = `https://localhost:3000/data`;
        let data = {
            idkey:this.state.idkey,
            firstname:this.state.firstname,
            lastname:this.state.lastname,
            phonenumber:this.state.phonenumber,
            email:JSON.parse(localStorage.getItem('user')).email,
        }
        axios.post(url,data)
        this.setState({
            idkey:"",
            firstname:"",
            lastname:"",
            phonenumber:""
            
            

        });
        this.props.history.push('/Showdata');
    }

    render() {
        return(
            <div>
                <div className="App">
                <h2 className="my-4">Register<br/></h2>
                    <hr/>
                </div>
                <form className="container">
                    <div className="form-group">
                        <label className="text-white" >First Name</label>
                        <input type="text" className="form-control" id="firstname" onChange={this.handleChang} value={this.state.firstname}/>
                    </div>
                    <div className="form-group">
                        <label className="text-white"  >Last Name</label>
                        <input type="text" className="form-control" id="lastname" onChange={this.handleChang} value={this.state.lastname}/>
                    </div>
                    <div className="form-group">
                        <label className="text-white"  htmlFor="Phone Number">Phone Number</label>
                        <input type="tel" className="form-control" size="10" id="phonenumber" pattern="[0-9]{2}-[0-9]{4}-[0-9]{4}" placeholder="XX-XXXX-XXXX" onChange={this.handleChang} value={this.state.phonenumber}/>
                    </div>
                    <div className="form-group">
                        <label className="text-white"  htmlFor="id">Id</label>
                        <input type="text" className="form-control" size="10" id="idkey" onChange={this.handleChang} value={this.state.idkey}/>
                    </div>
                    
                    <button type="button" className="btn btn-primary" onClick={this.handleClicked}>Submit</button>
                </form>
            </div>
        );
    }
}
export default function WithRouter(props) {
    const history = useHistory();
    return (<Register {...props} history={history}/>);
  }
