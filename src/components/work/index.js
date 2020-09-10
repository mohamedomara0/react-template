import React,{Component} from 'react';
import {Workdiv,Worktitle,Workspan,Partfirst,Workicon,Parttitle,Workhr,Partdesk} from './style.js';
import axios from 'axios';
class Work extends Component {
  state={
    works:[]
  }
  componentDidMount(){
    axios.get('js/data.json').then(res=>{this.setState({
      works:res.data.works
    })})
  }
  render(){
    const {works}=this.state;
    const theworks=works.map(work=>{
      return(
        <Partfirst first={work.id} key={work.id}>
        <Workicon className={work.icon_name}></Workicon>
        <Parttitle>{work.title}</Parttitle>
        <Workhr/>
        <Partdesk>
         {work.body}
        </Partdesk>
    </Partfirst>
      )
    })
    return (
      <Workdiv>
      <div className="container">
        <Worktitle><Workspan>My </Workspan> Work</Worktitle>
          {theworks}
          
      </div>
  </Workdiv>
    );
  }
    
}
export default Work;
