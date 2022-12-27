import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb, weight, index,hexColor}) => {
  console.log(hexColor)
  const[alert, setAlert]=useState(false);
  const bcg = rgb.join(',');
  //importingFunctionToConvertRGBToHex
  const hex = rgbToHex(...rgb)
  const hexValue = `#${hexColor}`
  //useEffectForCopyToClipboard
  useEffect(()=>{
    const timeOut = setTimeout(()=>{
      setAlert(false)
    },500)
    return ()=>clearTimeout(timeOut)
  },[alert])
  //HTML-Issues
  return (
  <article className={`color ${index>10&&'color-light'}`} style={{backgroundColor:`rgb(${bcg})`}} onClick={()=>{
    setAlert(true);
    navigator.clipboard.writeText(hexValue)
  }}>
  <p className='percent-value'>{weight}%</p>
  <p className='color-value'>{hexValue}</p>
  {alert&&<p className='alert'>copied to clipboard</p>}
  </article>
  )
} 

export default SingleColor
