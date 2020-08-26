import React from 'react'

interface Props {
  text: string
  count: number
}

export function TextMultiplier({ text, count }: Props) {
  const texts = new Array(count).fill(text)

  return (
    <>
      {texts.map((str, i) => (
        <div key={i}>{str}</div>
      ))}
    </>
  )
}
