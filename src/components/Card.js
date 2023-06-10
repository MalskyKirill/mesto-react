function Card({ link, name, likes, onCardClick }) {
  function handleClick() {
    return onCardClick({ link, name });
  }

  return (
    <li className='card'>
      <img
        src={link}
        alt={name}
        className='card__photo'
        onClick={handleClick}
      />
      <button className='card__trash'></button>
      <div className='card__wrap'>
        <h2 className='card__name'>{name}</h2>
        <div className='card__like-wrap'>
          <button className='card__like' type='button'></button>
          <span className='card__like-count'>{likes.length}</span>
        </div>
      </div>
    </li>
  );
}

export default Card;
