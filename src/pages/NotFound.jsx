import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NotFound.scss';

const NotFound = () => {
   return (
      <div className="NotFound">
         <img
            src="https://i.pinimg.com/originals/86/41/80/86418032b715698a4dfa6684b50c12af.gif"
            alt=""
         />
         <h1>¡Oopss! Not found page, error 404.</h1>
         <Link to="/">
            <h2>Return to Home</h2>
         </Link>
      </div>
   );
};
export default NotFound;