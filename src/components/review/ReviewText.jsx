/* eslint-disable react/prop-types */
import { Button } from '@mui/material';
import { useState } from 'react';

export const ReviewText = ({ text, id }) => {
  const [expanded, setExpanded] = useState(false);
  const maxLength = 50;

  if (text.length <= maxLength) {
    return <p>{id}. {text}</p>; // Show id even for short texts
  }

  return (
    <>
      <p>
        {id}. {expanded ? text : text.slice(0, maxLength) + '...'}
        <br />
        <Button
          onClick={() => setExpanded(!expanded)}
          style={{
            width: '100%',
            backgroundColor: 'white',
            borderRadius: '50px',
            padding: '10px 20px',
            marginTop: '20px',
          }}
        >
          {expanded ? 'Скрыть' : 'Показать больше'}
        </Button>
      </p>
    </>
  );
};
