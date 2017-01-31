// Image List component

import React from 'react';
import ImageDetail from './image_detail';


//create component
const ImageList = (props) => {
  //filter out albums
  const validImages = props.images.filter(image => !image.is_album);

  const RenderedImages = validImages.map((image) => {
    return <ImageDetail key={image.title} image={image} />
  });

  return (
    <ul className="media-list list-group">
      {RenderedImages}
    </ul>
  );
};

//export component

export default ImageList;
