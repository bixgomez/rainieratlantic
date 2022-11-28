import Head from 'next/head'
import {createTheLayout} from '../functions/rainieratlantic-layout.js';

function RainierAtlantic() {
  return (
    <>
      <div id="rainieratlantic" className="container"></div>
      {createTheLayout()}
    </>
  )
}

export default RainierAtlantic