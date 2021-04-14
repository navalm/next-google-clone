const Avatar = (props) => {
  const { url } = props;
  return (
    <img
      loading="lazy"
      src={url}
      alt="profile picture"
      className={'h-10 rounded-full cursor-pointer transition duration-150 transform hover:scale-110'}
    />
  )
}

export default Avatar