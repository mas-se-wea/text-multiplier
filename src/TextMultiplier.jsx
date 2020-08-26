import React from 'react'

export function TextMultiplier({ text, count }) {
  return new Array(count).fill(<div>{text}</div>)
}
