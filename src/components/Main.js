import { useEffect, useState, useContext } from 'react';
import { api } from '../utils/Api';
import Card from './Card';
import {CurrentUserContext} from '../context/CurrentUserContext'


function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setcards] = useState([]);

  //подписка на CurrentUserContext
  const {avatar, name, about} = useContext(CurrentUserContext)

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
