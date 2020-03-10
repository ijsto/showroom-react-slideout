import React, { useState } from 'react';
import SlideOut from '@ijsto/react-slideout';
import Button from '../common/Button';

const SlideOutDemo = () => {
  const [slideOutIsOpen, setSlideOutIsOpen] = useState(false);

  const openSlideOut = () => {
    setSlideOutIsOpen(true);
  };

  const closeSlideOut = () => {
    setSlideOutIsOpen(false);
  };

  return (
    <div>
      <Button type="button" onClick={openSlideOut}>
        Open Modal
      </Button>
      <SlideOut isOpen={slideOutIsOpen} onClose={closeSlideOut}>
        <h2>My Slide Out</h2>

        <div>This is the content inside React Slide Out component.</div>
        <button type="button" onClick={closeSlideOut}>
          Close slide-out
        </button>
      </SlideOut>
    </div>
  );
};

export default SlideOutDemo;
