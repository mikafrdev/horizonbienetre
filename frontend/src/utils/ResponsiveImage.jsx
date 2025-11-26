const ResponsiveImage = ({

  imageSizes = [
      { size: 600, media: "(max-width: 600px)" },
      { size: 800, media: "(min-width: 601px) and (max-width: 800px)" },
   ],
  imageData,
  imageFormats = ['webp', 'jpeg', 'png'],
  alt = '',
  onLoad = () => {},
  onError = () => {},
  onLoadStart = () => {},
}) => {
  return (
    <picture>
      {imageSizes.map(({ size, media }) =>
        imageFormats.map((format) => (
          <source
            key={`${size}-${format}`}
            srcSet={`${imageData.img}-${size}.${format}`}
            media={media}
            type={`image/${format}`}
          />
        ))
      )}

      <img
        srcSet={`${imageData.img}-800.webp`}
        alt={alt || imageData.title}
        loading="lazy"
        sizes="(max-width: 600px) 100vw, (max-width: 800px) 80vw, (max-width: 1024px) 70vw, 50vw"
        onLoad={onLoad}
        onError={onError}
        onLoadStart={onLoadStart}
      />
    </picture>
  );
};

export default ResponsiveImage;
