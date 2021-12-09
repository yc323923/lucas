import React from 'react'
import UploadComponent from "../UploadComponent"
import { Input, AutoComplete , Card, Col, Row } from 'antd';

import "../../styles/home.css";
const { Meta } = Card;
class Home extends React.Component{
  // let history = useHistory();

  constructor(props) {
      super(props)
      // this.skip = this.skip.bind(this);
  }
  
  // skip(){
  //     // history("/")
  //     this.props.history.push("/");
  // }

  render(){
     return(
      <div className="homeContainer">
          <header>
              <img src="https://img.alicdn.com/tfs/TB1R5fsgyDsXe8jSZR0XXXK6FXa-281-80.jpg" alt="" />
              <div className="searchContainer">
              <Input.Search  size="large" placeholder="input here" enterButton />
              </div>
              <div className="userContainer">
                <span>sign in</span>
                <span>register</span>
              </div>
          </header>
          <div className="tagContainer">
            <span>Electornic</span>
            <span>Garden</span>
            <span>xxx</span>
            <span>xxx</span>
          </div>
          {/* 内容区域 */}
          <div className="contentContainer">
           <div className="site-card-wrapper">
             <Row gutter={16}>
               {
                 [1,2,3,5,4,6,7,1,1,1,1,1,11,1,1,1,1,1,1,1,1,1,1,1,1,1,1,11].map((v,k)=>{
                     return <Col index={k} span={4}>
                      <Card
                          hoverable
                          style={{ width: 200, marginBottom:"10px" }}
                          cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                          <Meta title="Europe Street beat" description="www.instagram.com" />
                        </Card>
                      </Col>
                 })
               }
          
             </Row>
           </div>
          </div>
        
      </div>)
  }
    
  
}

export default Home

