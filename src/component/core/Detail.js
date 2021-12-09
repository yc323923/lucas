import React from 'react'
import {Link } from "react-router-dom"
// import {useHistory} from "react-router-dom"
class Detail extends React.Component{
    // let history = useHistory();

    constructor(props) {
        super(props)
        this.skip = this.skip.bind(this);
    }
    
    skip(){
        // history("/")
        this.props.history.push("/");
    }

    render(){
       return( <div>
            <Link to="/">ContactUs</Link>
            <div onClick={this.skip}>
                跳转首页
            </div>
            详情页面
        </div>)
    }
      
    
}

export default Detail
