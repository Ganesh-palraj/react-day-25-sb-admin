import React, { useState } from "react";
import "./Side.css";

const Side = () => {
  const [barOpen , setBarOpen ] = useState('false')

  return (
    <div className="side" style={{width:barOpen ? '200px' : '0px'}}>
      <div className="button" onClick={()=>setBarOpen(!barOpen)}>
        toggle
      </div>
      <div className="data">
      Side Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
      doloremque tempora, laudantium harum itaque laboriosam corrupti doloribus
      temporibus est quia sint vero quisquam optio, et vel voluptas autem natus
      hic! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ipsam
      molestiae provident excepturi voluptate magni doloribus dolores. Nobis
      magnam nisi harum exercitationem dolores doloribus maxime quas, quae
      iusto, nesciunt recusandae. Beatae non laboriosam ipsum voluptate cum?
      Dolorem ut eos at minus magni nisi suscipit soluta ipsam dolorum modi
      quas, natus sapiente culpa odio quos incidunt optio blanditiis quibusdam
      amet? Necessitatibus? Esse voluptas repellat quae, eligendi quas animi
      architecto dignissimos eaque earum placeat inventore. Exercitationem culpa
      repellat nostrum aut fugiat iste hic facilis necessitatibus vel adipisci,
      harum, error fuga ad iure. Soluta iure fugiat ut, eos saepe odio tempora,
      repellendus odit sapiente inventore earum architecto veniam pariatur
      aliquid illo explicabo aut dignissimos laborum. Placeat, excepturi odio
      veritatis saepe fugiat quod iste! Temporibus autem earum enim magnam
      ipsum. Cum sapiente vel ullam, quia mollitia tempore cupiditate modi hic
      aut accusantium dolorem excepturi quis omnis temporibus quisquam ea nulla
      laboriosam reprehenderit quam repellat.
      </div>
      
    </div>

  );
};

export default Side;
