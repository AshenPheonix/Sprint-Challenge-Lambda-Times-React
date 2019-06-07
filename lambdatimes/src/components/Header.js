import React from 'react';
import {Header as Head, Date, Temp} from '../styled/Header';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const Header = () => {
  return (
    <Head>
      <Date>MARCH 32, 2018</Date>
      <h1>Lambda Times</h1>
      <Temp>98°</Temp>
    </Head>
  )
}

export default Header