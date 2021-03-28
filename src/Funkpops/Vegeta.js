import {data} from "../data";
import {v4 as uuidv1} from "uuid";
import {Component} from "react";
import Box from "../Components/Box";
import {Link} from "react-router-dom";
class Vegeta extends Component {
    state = {
        data: data,
        name: '',
        category: '',
        value: '',
        id: uuidv1(),
        img: '',
        search: '',

    }


    getFilterData = () => {
        return this.state.data.filter(item =>
            item.name.includes("Vegeta")
        )}




    render(){
        return(
            <div className="App2">
                <Link to="/">Go back</Link>
                <Box getFilterData={this.getFilterData}/>

            </div>
        )
    }}

export default Vegeta;