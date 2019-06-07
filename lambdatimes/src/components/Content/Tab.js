import React from 'react';
import PT from 'prop-types'

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
    let CN='tab'
    if(props.tab===props.selectedTab)
      CN+=' active-tab'

  return (
    <div
      className={CN}
      onClick={() => {
        /* Replace this dummy click handler function with your selectTabHandler function from props 
         you'll need to pass the `tab` in as an argument to this handler. */
         props.selectTabHandler(props.tab)
      }}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.

Tab.propTypes={
  tab:PT.string,
  selectedTab:PT.string,
  selectTabHandler:PT.func
}

export default Tab;
