import React from 'react';
import {Homediv,Homeinformation,Hometitle,Homeinfo,Homedesk,Homespan,Homebtn} from './style.js';

const Home =()=> {
    return (
      <Homediv>
            <div className="container">
                <Homeinformation>
                    <Hometitle className="margin-bottom">Mohamed Omara</Hometitle>
                    <Homeinfo>Front-End Developer</Homeinfo>
                    <Homedesk>
                        Iam a professional <Homespan>UX Designer</Homespan> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
                    </Homedesk>
                    <Homebtn>Let's Begin</Homebtn>
                </Homeinformation>
            </div>
        </Homediv>
    );
}
export default Home;
