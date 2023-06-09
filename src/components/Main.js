import { useEffect, useState } from 'react';
import { api } from '../utils/ApiService';
import Card from './Card';

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setcards] = useState([]);

  useEffect(() => {
    api.getUser().then(({ name, about, avatar }) => {
      setUserName(name);
      setUserDescription(about);
      setUserAvatar(avatar);
    });
  }, [userName, userDescription, userAvatar]);

  useEffect(() => {
    api.getCards().then((resCardData) => {
      setcards(resCardData);
    });
  }, [cards]);

  const cardItem = cards.map(({ link, name, likes }, i) => (
    <Card link={link} name={name} likes={likes} key={i} onCardClick={onCardClick}/>
  ));

  return (
    <main className='content'>
      <section aria-label='Профиль' className='profile'>
        <img
          className='profile__avatar'
          src={userAvatar}
          alt='аватар'
          onClick={onEditAvatar}
        />
        <div className='profile__info'>
          <div className='profile__wrap'>
            <h1 className='profile__name'>{userName}</h1>
            <button
              className='profile__edit-button'
              type='button'
              onClick={onEditProfile}
            ></button>
          </div>
          <p className='profile__job'>{userDescription}</p>
        </div>
        <button
          className='profile__add-button'
          type='button'
          onClick={onAddPlace}
        ></button>
      </section>
      <section className='elements' aria-label='Фоточки'>
        <ul className='cards'>
          {cardItem}
        </ul>
      </section>
    </main>
  );
}

export default Main;
