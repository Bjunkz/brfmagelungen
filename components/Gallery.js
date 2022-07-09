import Image from "next/image";
import { useState } from "react";

export default function Gallery(imageGalleryArray) {
  const imageArr = imageGalleryArray.imageGalleryArray;

  const [onImageActive, setOnImageActive] = useState(false);
  const [onHighlightImageIndex, setOnHighLightImageURL] = useState(0);

  const highlightImage = (imageURL) => {
    setOnHighLightImageURL(imageURL);
    setOnImageActive(!onImageActive);
  };

  const onCloseHighlight = () => {
    setOnImageActive(false);
  };

  const images = imageArr.map((image, index) => {
    return (
      <div
        key={index}
        onClick={() => {
          highlightImage(image);
        }}
      >
        <Image
          // layout="responsive"
          src={image}
          width={200}
          height={200}
          quality={1}
        />
      </div>
    );
  });

  return (
    <div className="gallery-container">
      {onImageActive && (
        <div
          className="active-image"
          onClick={() => {
            onCloseHighlight();
          }}
        >
          <ActiveImage imageURL={onHighlightImageIndex} />
        </div>
      )}
      <div className="gallery">{images}</div>
    </div>
  );
}

function ActiveImage(imageURL) {
  return (
    <div>
      <Image src={imageURL.imageURL} width={500} height={500} />
    </div>
  );
}
