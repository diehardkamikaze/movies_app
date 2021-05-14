/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { MouseEventHandler } from 'react';
import '../../../styles/controls.css';

export interface Props {
  searchHandler: MouseEventHandler<HTMLInputElement> | undefined,
  sortHandler: MouseEventHandler<HTMLButtonElement> | undefined,
}

const Controls = React.forwardRef<HTMLInputElement, Props>((props, ref) => (
  <div className="controls">
    <p>
      <label htmlFor="search">Title: </label>
      <input ref={ref} type="text" id="search" placeholder="past movie tite here" required />
      <input onClick={props.searchHandler} type="button" className="control-button" value="Search" />
    </p>
    <button onClick={props.sortHandler} type="button" className="control-button">Sort by date</button>
  </div>
));

export default Controls;
