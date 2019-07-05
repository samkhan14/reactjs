import React from 'react';
// import ReactDOM from 'react-dom';
import './Avatar.css';
import 'tachyons';
import Avatarlist from './Avatarlist'; 

const Avatar = (props) => {
    const avatarlistarray = [
        {
            id:1,
            name:"Sumaim Ahmed",
            designation:"Backend Developer"
        },

        {
            id:2,
            name:'Danial Khan',
            designation:'FrontEnd Developer'
        },

        {
            id:3,
            name:'M.Haceeb',
            designation:'BDO'
        },

        {
            id:4,
            name:'Hassan khan',
            designation:'Content Writer'
        }
    ]

    

    })

    return (
        <div>
            <h1>Wellcome To Avatar World</h1>
             arrayavatarcard = avatarlistarray.map( (avatarcard, i) => {
         <Avatarlist id={avatarlistarray[i].name}
                            name={avatarlistarray[i].name}
                            designation={avatarlistarray[i].designation} />

            
            {/* <arrayavatarcard />  */}

            {/* <Avatarlist id={avatarlistarray[0].name}
                            name={avatarlistarray[0].name}
                            designation={avatarlistarray[0].designation} />

            <Avatarlist id={avatarlistarray[1].name}
                            name={avatarlistarray[1].name}
                            designation={avatarlistarray[1].designation} />                
                            
            <Avatarlist id={avatarlistarray[2].name}
                            name={avatarlistarray[2].name}
                            designation={avatarlistarray[2].designation} />
           
           <Avatarlist id={avatarlistarray[3].name}
                            name={avatarlistarray[3].name}
                            designation={avatarlistarray[3].designation} /> */}

            <button>Subscribe</button>
        </div>
    )
}

export default Avatar;