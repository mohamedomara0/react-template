import React from 'react';
import {Profileskills,Profile1,Profilelist,Profileitem,Profilespan,Profilespanweb,Skillsdiv,Skillsp,Skillsbar,Skillstitle,Skillsperc,Skillsparent,Skillssp1,Skillssp2,Skillssp3,Skillstitleh2,Profiletitleh2,Skillstitleh2span,Profiletitleh2span} from  './style.js';
const Profile =()=> {
    return (
      <Profileskills>
      <div class="container">
          <Profile1>
              <Profiletitleh2><Profiletitleh2span>My </Profiletitleh2span>Profile</Profiletitleh2>
              <Profilelist>
                  <Profileitem>
                      <Profilespan>Name</Profilespan>
                      Mohamed Omara
                  </Profileitem>
                  <Profileitem>
                      <Profilespan>Birthday</Profilespan>
                      1/9/1996
                  </Profileitem>
                  <Profileitem>
                      <Profilespan>Address</Profilespan>
                      cairo
                  </Profileitem>
                  <Profileitem>
                      <Profilespan>Phone</Profilespan>
                      4444 5555 6666
                  </Profileitem>
                  <Profileitem>
                      <Profilespan>Email</Profilespan>
                      mohamed@gmail.com
                  </Profileitem>
                  <Profileitem>
                      <Profilespan>Website</Profilespan>
                      <Profilespanweb class="web">www.google.com</Profilespanweb>
                  </Profileitem>
              </Profilelist>
          </Profile1>
          
          <Skillsdiv>
              <Skillstitleh2>Some <Skillstitleh2span>skills</Skillstitleh2span></Skillstitleh2>
              <Skillsp>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
              </Skillsp>
              <Skillsbar>
                  <Skillstitle>Bootstrap</Skillstitle>
                  <Skillsperc>100%</Skillsperc>
                  <Skillsparent>
                      <Skillssp1></Skillssp1>
                  </Skillsparent>
              </Skillsbar>
              
              <Skillsbar>
                  <Skillstitle>CSS3</Skillstitle>
                  <Skillsperc>90%</Skillsperc>
                  <Skillsparent>
                      <Skillssp2></Skillssp2>
                  </Skillsparent>
              </Skillsbar>
              
              <Skillsbar>
                  <Skillstitle>Photoshop</Skillstitle>
                  <Skillsperc>80%</Skillsperc>
                  <Skillsparent>
                      <Skillssp3></Skillssp3>
                  </Skillsparent>
              </Skillsbar>
          </Skillsdiv>
          
      </div>
  </Profileskills>
    );
}
export default Profile;
