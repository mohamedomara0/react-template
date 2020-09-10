import React from 'react';
import { Creativediv,Creativeinfo,Creativetitle,Creativetitlespan,Creativedir,Creativedesk,Creativeanchor} from  './style.js';
const About =()=> {
    return (
      <Creativediv>
            <div class="container">
                <Creativeinfo>
                    <Creativetitle><Creativetitlespan>This is</Creativetitlespan> Me</Creativetitle>
                    <Creativedir>Creative Director</Creativedir>
                    <Creativedesk>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <Creativeanchor href="#">explicabo</Creativeanchor> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </Creativedesk>
                    <Creativedesk>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </Creativedesk>
                </Creativeinfo>
            </div>
        </Creativediv>
    );
}
export default About;
