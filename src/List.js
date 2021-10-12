import React from 'react';
import lists from './data';
import { useState } from 'react';
import domain from './images/domain.jpg'

const list = [{
   img: "https://cdn-icons-png.flaticon.com/128/403/403951.png",
   title: 'The TLD',
  info: "Does the domain extension math the language of the domain name?",
},
{
  img: 'https://img.icons8.com/ios-filled/2x/comb.png',
   title: 'Domain Length',
  info: "Is the Domain short enough to remember",
},
{
  img: "https://cdn-icons-png.flaticon.com/128/2879/2879159.png",
   title: 'Language',
  info: "How complex is the actaull domain name?",
},{
img: "https://img.icons8.com/color/2x/medal.png",
   title: 'International recognition',
  info: "Can the domain name be used on an international scale?",
},{
img: "https://img.icons8.com/color/2x/search--v2.gif",
   title: 'Search engine',
  info: "does the domain follow search engine guidelines?",
},{
img: "https://img.icons8.com/carbon-copy/2x/share-2.png",
   title: 'Adversting Potential',
  info: "Could the domain be used for advertising campaigns",
},
{
  img: "https://cdn-icons-png.flaticon.com/128/879/879757.png",
     title: 'Sales Opportunities',
    info: "can the domain name be used on an international scale?",
  },
  {
    img: "https://img.icons8.com/ios-glyphs/2x/text.png",
       title: 'Typo susceptibility',
      info: "How hig is the risk of mistyping the domain name?",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/128/3176/3176298.png",
         title: 'Bussiness potential',
        info: "can the domain be used as your company address?",
      },
];


function List() {

  return (
    <section className="box">
      
      {list.map((lists)=>{
        const {img,title,info} = lists;
        return <ListItem lists={lists}></ListItem>
      })}
    </section>
  );
}



const ListItem = (props)=>{

  const {img,title,info}= props.lists

  return( 
  
    <div className="box">
    <div className="en" ><img style={{width:'100px', textAlign:'center',marginLeft:'60px;'}} src={img}/></div>
    <div>
      <h4 style={{marginTop:'40px'}}>{title}</h4>
      <p>{info}</p>
      </div>
    
    
  </div>

      
  );
}




export default List;
