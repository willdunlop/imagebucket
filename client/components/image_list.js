// Image List component

import React from 'react';
import ImageDetail from './image_detail';

const IMAGES = [
  {title: 'Pen', link: 'https://dummyimage.com/600x400/000/fff'},
  {title: 'Pine Tree', link: 'https://dummyimage.com/600x400/000/fff'},
  {title: 'Mug', link: 'https://dummyimage.com/600x400/000/fff'}
]

//create component
const ImageList = () => {
  const RenderedImages = IMAGES.map(function(image){
    return <ImageDetail />
  })

  return (
    <ul>
      {RenderedImages}
    </ul>
  );
};

//export component

export default ImageList;
