import { useEffect, useState } from 'react';
import { api } from '../utils/Api';
import Card from './Card';

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setcards] = useState([]);

  //получение данных  с сервера и изменение стейта пользовательских данных и карточки
  useEffect(() => {
    Promise.all([api.getCards(), api.getUser()])
      .then(([resCardData, resUserData]) => {
        setUserName(resUserData.name);
        setUserDescription(resUserData.about);
        setUserAvatar(resUserData.avatar);
        setcards(resCardData);
      })
      .catch((err) => console.log(err));
  }, []);


  const cardList = cards.map(({ link, name, likes, _id }) => (
    <Card
      link={link}
      name={name}
      likes={likes}
      key={_id}
      onCardClick={onCardClick}
    />
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
        <ul className='cards'>{cardList}</ul>
      </section>
    </main>
  );
}

export default Main;
