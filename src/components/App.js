import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import { useState } from 'react';

function App() {
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

  const closeAllPopup = () => {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImagePopupOpen(false);
  };

  return (
    <div className='body'>
      <div className='page'>
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handelCardClick}
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
  );
}

export default App;
