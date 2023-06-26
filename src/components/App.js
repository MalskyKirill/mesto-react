import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import ImagePopup from './ImagePopup';
import { useEffect, useState } from 'react';
import { api } from '../utils/Api';
import { CurrentUserContext } from '../context/CurrentUserContext';
import { CardsContext } from '../context/CardsContext';
import AddPlacePopup from './AddPlacePopup';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);

  const [selectedCard, setSelectedCard] = useState({});

  //стейты пользователя и карточек
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

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

  //получение данных  с сервера
  useEffect(() => {
    Promise.all([api.getUser(), api.getCards()])
      .then(([resUserData, resCardData]) => {
        setCurrentUser(resUserData);
        setCards(resCardData);
      })
      .catch((err) => console.log(err));
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
      )
      .catch((err) => console.log(err));
  };

  //удаление карточки
  const handleCardDelete = ({ _id }) => {
    api
      .deleteCard(_id)
      .then(() => setCards((state) => state.filter((card) => card._id !== _id)))
      .catch((err) => console.log(err));
  };

  //обнавление профайла
  const handleUpdateUser = ({ name, about }) => {
    api
      .edingProfile({ name, about })
      .then((newUserInfo) => {
        setCurrentUser(newUserInfo);
        closeAllPopup();
      })
      .catch((err) => console.log(err));
  };

  //обновление аватара
  const handleUpdateAvatar = ({ avatar }) => {
    api
      .changeAvatar(avatar)
      .then(() => {
        setCurrentUser({ ...currentUser, avatar: avatar });
        closeAllPopup();
      })
      .catch((err) => console.log(err));
  };

  const handleAddPlaceSubmit = ({ title, link }) => {
    api
      .addCard({ title, link })
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopup();
      })
      .catch((err) => console.log(err));
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
          <EditProfilePopup
            isOpened={isEditProfilePopupOpen}
            onClose={closeAllPopup}
            onUpdateUser={handleUpdateUser}
          />
          {/* <!-- попап добавления новой карточки --> */}
          <AddPlacePopup
            isOpened={isAddPlacePopupOpen}
            onClose={closeAllPopup}
            onAddNewCard={handleAddPlaceSubmit}
          />
          {/* <!-- попап смены аватара --> */}
          <EditAvatarPopup
            isOpened={isEditAvatarPopupOpen}
            onClose={closeAllPopup}
            onUpdateAvatar={handleUpdateAvatar}
          />
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
