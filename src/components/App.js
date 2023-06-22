import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import { useEffect, useState } from 'react';
import { api } from '../utils/Api';
import { CurrentUserContext } from '../context/CurrentUserContext';
import { CardsContext } from '../context/CardsContext';

function App() {
  //открытия попапов
  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  const handelCardClick = ({ name, link }) => {
    setSelectedCard({ name, link });
    setIsImagePopupOpen(true);
  };

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);

  const [selectedCard, setSelectedCard] = useState({});

  //стейты пользователя и карточек
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

  //получение данных  с сервера
  useEffect(() => {
    Promise.all([api.getUser(), api.getCards()]).then(
      ([resUserData, resCardData]) => {
        setCurrentUser(resUserData);
        setCards(resCardData);
      }
    );
  }, []);

  //закрытие всех попапов
  const closeAllPopup = () => {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImagePopupOpen(false);
  };

  //лайк карточки
  const handleCardLike = ({ likes, _id }) => {
    const isLiked = likes.some((like) => like._id === currentUser._id);
    api
      .changeLikeCardStatus(_id, isLiked)
      .then((newCard) =>
        setCards((state) => state.map((c) => (c._id === _id ? newCard : c)))
      );
  };

  //удаление карточки
  const handleCardDelete = ({ _id }) => {
    api
      .deleteCard(_id)
      .then(() =>
        setCards((state) => state.filter((card) => card._id !== _id))
      );
  };

  return (
    <CardsContext.Provider value={cards}>
      <CurrentUserContext.Provider value={currentUser}>
        <div className='body'>
          <div className='page'>
            <Header />
            <Main
              onEditProfile={handleEditProfileClick}
              onAddPlace={handleAddPlaceClick}
              onEditAvatar={handleEditAvatarClick}
              onCardClick={handelCardClick}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
            />
            <Footer />
          </div>
          {/* <!-- попап редактирования профайла --> */}
          <PopupWithForm
            name={'popup-profile'}
            title={'Редактировать профиль'}
            formId={'profileField'}
            buttonText={'Сохранить'}
            isOpened={isEditProfilePopupOpen}
            onClose={closeAllPopup}
          >
            <label className='popup__field-wrap'>
              <input
                id='name'
                type='text'
                className='popup__field popup__field_next_name'
                placeholder='Имя'
                name='name'
                minLength='2'
                maxLength='40'
                required
              />
              <span className='popup__field-error popup__field-error-name'></span>
            </label>
            <label className='popup__field-wrap'>
              <input
                id='job'
                type='text'
                className='popup__field popup__field_next_job'
                placeholder='Вид деятельности'
                name='about'
                minLength='2'
                maxLength='200'
                required
              />
              <span className='popup__field-error popup__field-error-job'>
                ошибка профайла
              </span>
            </label>
          </PopupWithForm>
          {/* <!-- попап добавления новой карточки --> */}
          <PopupWithForm
            name={'popup-new-place'}
            title={'Новое место'}
            formId={'newPlaceField'}
            buttonText={'Создать'}
            isOpened={isAddPlacePopupOpen}
            onClose={closeAllPopup}
          >
            <label className='popup__field-wrap'>
              <input
                id='title'
                type='text'
                className='popup__field popup__field_next_title'
                placeholder='Название'
                name='title'
                minLength='2'
                maxLength='30'
                required
              />
              <span className='popup__field-error popup__field-error-title'>
                ошибка имени карточки
              </span>
            </label>
            <label className='popup__field-wrap'>
              <input
                id='link'
                type='url'
                className='popup__field popup__field_next_link'
                placeholder='Ссылка на картинку'
                name='link'
                required
              />
              <span className='popup__field-error popup__field-error-link'>
                ошибка юрл адреса
              </span>
            </label>
          </PopupWithForm>
          {/* <!-- попап смены аватара --> */}
          <PopupWithForm
            name={'popup-new-avatar'}
            title={'Обновить аватар'}
            formId={'newAvatarField'}
            buttonText={'Сохранить'}
            isOpened={isEditAvatarPopupOpen}
            onClose={closeAllPopup}
          >
            <label className='popup__field-wrap'>
              <input
                id='linkAvatar'
                type='url'
                className='popup__field popup__field_next_link'
                placeholder='Ссылка на картинку'
                name='link'
                required
              />
              <span className='popup__field-error popup__field-error-linkAvatar'>
                ошибка юрл адреса
              </span>
            </label>
          </PopupWithForm>
          {/* <!-- попап подтверждения удаления карточка --> */}
          <PopupWithForm
            name={'popup-confurm-delite'}
            title={'Вы уверены?'}
            formId={'ConfurmDeliteField'}
            buttonText={'Да'}
          />
          {/* <!-- попап увеличенной картики --> */}
          <ImagePopup
            card={selectedCard}
            isOpened={isImagePopupOpen}
            onClose={closeAllPopup}
          />
        </div>
      </CurrentUserContext.Provider>
    </CardsContext.Provider>
  );
}

export default App;
