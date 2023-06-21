function Card({ link, name, likes, onCardClick, isOwn, isLiked }) {
  function handleClick() {
    return onCardClick({ link, name });
  }

  const cardLikeButtonClassName = `card__like ${
    isLiked && 'card__like_active'
  }`;

  return (
    <li className='card'>
      <img
        src={link}
        alt={name}
        className='card__photo'
        onClick={handleClick}
      />
      {isOwn && <button className='card__trash' />}
      <div className='card__wrap'>
        <h2 className='card__name'>{name}</h2>
        <div className='card__like-wrap'>
          <button className={cardLikeButtonClassName} type='button'></button>
          <span className='card__like-count'>{likes.length}</span>
        </div>
      </div>
    </li>
  );
}

export default Card;
