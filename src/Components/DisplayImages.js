const DisplayImages = ({ Images }) => {
  return (
    <div>
      {Images.map((pic, index) => {
        return (
          <img key={index} alt={pic.alt_description} src={pic.urls.small} />
        );
      })}
    </div>
  );
};
export default DisplayImages;
