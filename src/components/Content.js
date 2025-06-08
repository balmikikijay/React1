const Content = (Props) => {
  const { resData } = Props
  //   if (!resData) return null // Don't render if resData is missing

  const { imageId, text, rating, food } = resData || {}
  return (
    <div className="cart">
      <div className="img">
        <img src={imageId} />
      </div>
      <div className="item">
        <ul>
          <li className="name"> {text}</li>
          {/* <li>Food: {food}</li>
          <li>Rating: {rating}</li> */}
        </ul>
      </div>
    </div>
  )
}
export default Content
