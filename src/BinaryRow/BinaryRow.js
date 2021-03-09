import React from 'react';

function Digit({ element }) {
  if (element === 0) {
    return (
      <span data-testid="digit" className="zero">
        0
      </span>
    );
  } else {
    return (
      <span data-testid="digit" className="one">
        1
      </span>
    );
  }
}

export default function BinaryRow({ number }) {
  const stringElements = Number(number).toString(2).padStart(8, '0');
  const elements = [];
  for (let i = 0; i < stringElements.length; i++) {
    elements.push(Number.parseInt(stringElements[i]));
  }

  return (
    <>
      <div data-testid="row">
        {elements.map((element, index) => (
          <Digit element={element} key={index} />
        ))}
      </div>
    </>
  );
}
