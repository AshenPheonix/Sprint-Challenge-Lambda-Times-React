import React from 'react';
import {TBar, TopContainer, SubCont, 
        TopSpan, TopSpanLeft,TopSpanCenter} from '../styled/TopBar'

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const TopBar = () => {
  return (
    <TBar>
      <TopContainer>
        <SubCont
          fsize='11px'
        >
          <TopSpanLeft>TOPICS</TopSpanLeft><TopSpanLeft>SEARCH</TopSpanLeft>
        </SubCont>
        <SubCont
          dir='center'
          size='3'

        >
          <TopSpanCenter>GENERAL</TopSpanCenter><TopSpanCenter>BROWNBAG</TopSpanCenter><TopSpanCenter>RANDOM</TopSpanCenter><TopSpanCenter>MUSIC</TopSpanCenter><TopSpanCenter>ANNOUNCEMENTS</TopSpanCenter>
        </SubCont>
        <SubCont
          dir='space-between'
          fsize='11px'
          weight='bold'
        >
          <TopSpan>LOG IN</TopSpan>
        </SubCont>
      </TopContainer>
    </TBar>
  )
}

export default TopBar;