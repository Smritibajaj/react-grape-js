import React from 'react';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import htmlContent from '../poc.html';

const Card = () => {
    return (
        <div>
          <div dangerouslySetInnerHTML={ {__html: htmlContent} } />
            <Button>Hello JS</Button>
            {[
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
  'light',
  'dark',
].map((variant, idx) => (
  <Alert key={idx} variant={variant}>
    This is a {variant} alert—check it out!
  </Alert>
))} 
        </div>
    )
}

export default Card;