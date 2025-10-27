const ResponsiveImage = ({
  item,
  imageSizes = [],
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
            srcSet={`${item.img}-${size}.${format}`}
            media={media}
            type={`image/${format}`}
          />
        ))
      )}

      <img
        srcSet={`${item.img}-800.webp`}
        alt={alt || item.title}
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
