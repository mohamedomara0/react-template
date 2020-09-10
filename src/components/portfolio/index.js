import React, { Component } from 'react';
import {Porffoliodiv,Porffoliotitle,Porffoliospan,Porffoliolist,Porffolioitem,Boxdiv,Boximg,Boxp,Boxspan} from './style.js';
import axios from 'axios';

class Portfolio extends Component  {
    state={
        portfolio:[]
    }
    componentDidMount(){
        axios.get('js/data.json').then(res=>{this.setState({
            portfolio:res.data.portfolio
        })})

    }
    render(){
        const {portfolio}=this.state;
        const Theportfolio=portfolio.map(item=>{
            return(
                <Boxdiv key={item.id}>
                <Boximg src={item.image} alt=""/>
                <Boxp>
                    <Boxspan>
                        Show Image
                    </Boxspan>
                </Boxp>
            </Boxdiv>
            
            )
        })
        return (
            <Porffoliodiv>
            <Porffoliotitle><Porffoliospan>My</Porffoliospan> Portfolio</Porffoliotitle>
            <Porffoliolist>
                <Porffolioitem className="active">All</Porffolioitem>
                <Porffolioitem>HTML</Porffolioitem>
                <Porffolioitem>Photoshop</Porffolioitem>
                <Porffolioitem>Wordpress</Porffolioitem>
                <Porffolioitem>Mobile</Porffolioitem>
            </Porffoliolist>
            
                <div className="Box">
               {Theportfolio}
                </div>
            
        </Porffoliodiv>
          );
    }
   
}
export default Portfolio;
