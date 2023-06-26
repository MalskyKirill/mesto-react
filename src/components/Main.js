import { useContext } from 'react';
import Card from './Card';
import { CurrentUserContext } from '../context/CurrentUserContext';
import { CardsContext } from '../context/CardsContext';

function Main({
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  onCardClick,
  onCardLike,
  onCardDelete,
}) {
  //подписка на CurrentUserContext
  const {
    avatar,
    name,
    about,
    _id: currentUserId,
  } = useContext(CurrentUserContext);
  const cards = useContext(CardsContext);

  const cardList = cards.map(({ link, name, likes, _id, owner }) => {
    const isOwn = owner._id === currentUserId; //проверка на то что каточку создали мы
    const isLiked = likes.some((like) => like._id === currentUserId); // проверка что мы лайкнули карточку

    return (
      <Card
        link={link}
        name={name}
        likes={likes}
        key={_id}
        _id={_id}
        onCardClick={onCardClick}
        isOwn={isOwn}
        isLiked={isLiked}
        onCardLike={onCardLike}
        onCardDelete={onCardDelete}
      />
    );
  });

  return (
    <main className='content'>
      <section aria-label='Профиль' className='profile'>
        <img
          className='profile__avatar'
          src={avatar}
          alt='аватар'
          onClick={onEditAvatar}
        />
        <div className='profile__info'>
          <div className='profile__wrap'>
            <h1 className='profile__name'>{name}</h1>
            <button
              className='profile__edit-button'
              type='button'
              onClick={onEditProfile}
            ></button>
          </div>
          <p className='profile__job'>{about}</p>
        </div>
        <button
          className='profile__add-button'
          type='button'
          onClick={onAddPlace}
        ></button>
      </section>
      <section className='elements' aria-label='Фоточки'>
        <ul className='cards'>{cardList}</ul>
      </section>
    </main>
  );
}

export default Main;
