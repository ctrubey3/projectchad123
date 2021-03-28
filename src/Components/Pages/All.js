import {data} from "../../data";
import {v4 as uuidv1} from "uuid";
import {Component} from "react";
import Box from "../Box";
import {Link} from "react-router-dom"




class All extends Component {
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
            item.name.toLowerCase().match(this.state.search.toLowerCase())

        )
    }

    render(){
        return(
            <div className="App">
                <Link  className= "App" to={"/Funk1"}>   <Box getFilterData={this.getFilterData}/></Link>

            </div>
        )
    }}

export default All;