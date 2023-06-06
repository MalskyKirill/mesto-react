import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div classNameName='body'>
      <div className='page'>
        <header className='header'>
          <div className='header__logo'></div>
        </header>
        <main className='content'>
          <section aria-label='Профиль' className='profile'>
            <img
              className='profile__avatar'
              src="<%=require('./images/image.jpg')%>"
              alt='аватар'
            />
            <div className='profile__info'>
              <div className='profile__wrap'>
                <h1 className='profile__name'></h1>
                <button className='profile__edit-button' type='button'></button>
              </div>
              <p className='profile__job'></p>
            </div>
            <button className='profile__add-button' type='button'></button>
          </section>
          <section className='elements' aria-label='Фоточки'>
            <ul className='cards'></ul>
          </section>
        </main>
        <footer className='footer'>
          <p className='footer__text'>&copy; 2020 Mesto Russia</p>
        </footer>
      </div>
      {/* <!-- попап редактирования профайла --> */}
      <div className='popup' id='popupProfile'>
        <div className='popup__container'>
          <h2 className='popup__title'>Редактировать профиль</h2>
          <button
            className='popup__close'
            type='button'
            id='closePopupProfile'
          ></button>
          <form
            className='popup__form'
            id='profileField'
            name='popupForm'
            novalidate
          >
            <label className='popup__field-wrap'>
              <input
                id='name'
                type='text'
                className='popup__field popup__field_next_name'
                placeholder='Имя'
                name='name'
                minlength='2'
                maxlength='40'
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
                minlength='2'
                maxlength='200'
                required
              />
              <span className='popup__field-error popup__field-error-job'>
                ошибка профайла
              </span>
            </label>
            <button className='popup__save' type='submit' form='profileField'>
              Сохранить
            </button>
          </form>
        </div>
      </div>
      {/* <!-- попап добавления новой карточки --> */}
      <div className='popup' id='popupNewPlace'>
        <div className='popup__container'>
          <h2 className='popup__title'>Новое место</h2>
          <button
            className='popup__close'
            type='button'
            id='closePopupNewPlase'
          ></button>
          <form
            className='popup__form'
            id='newPlaceField'
            name='popupForm'
            novalidate
          >
            <label className='popup__field-wrap'>
              <input
                id='title'
                type='text'
                className='popup__field popup__field_next_title'
                placeholder='Название'
                name='title'
                minlength='2'
                maxlength='30'
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
            <button className='popup__save' type='submit' form='newPlaceField'>
              Создать
            </button>
          </form>
        </div>
      </div>
      {/* <!-- попап смены аватара --> */}
      <div className='popup' id='popupNewAvatar'>
        <div className='popup__container'>
          <h2 className='popup__title'>Обновить аватар</h2>
          <button
            className='popup__close'
            type='button'
            id='closePopupNewAvatar'
          ></button>
          <form
            className='popup__form'
            id='newAvatarField'
            name='popupForm'
            novalidate
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
            <button className='popup__save' type='submit' form='newAvatarField'>
              Сохранить
            </button>
          </form>
        </div>
      </div>
      {/* <!-- попап подтверждения удаления карточка --> */}
      <div className='popup' id='popupConfurmDelite'>
        <div className='popup__container'>
          <h2 className='popup__title'>Вы уверены?</h2>
          <button
            className='popup__close'
            type='button'
            id='closeConfurmDelite'
          ></button>
          <form
            className='popup__form popup__form_confurm-delite'
            id='ConfurmDeliteField'
            name='popupForm'
            novalidate
          >
            <button className='popup__save' type='submit' form='ConfurmDeliteField'>
              Да
            </button>
          </form>
        </div>
      </div>
      {/* <!-- попап увеличенной картики --> */}
      <div className='popup popup_big-photo' id='popupBigPhoto'>
        <div className='popup__container-big-photo'>
          <button
            className='popup__close popup__close-big-photo'
            type='button'
          ></button>
          <img src='https://' alt='случайная фотка' className='popup__photo' />
          <p className='popup__photo-name'></p>
        </div>
      </div>
      {/* <!-- шаблон карточки --> */}
      <template className='card_template'>
        <li className='card'>
          <img src='https://' alt='Случайная фотка' className='card__photo' />
          <button className='card__trash'></button>
          <div className='card__wrap'>
            <h2 className='card__name'></h2>
            <div className='card__like-wrap'>
              <button className='card__like' type='button'></button>
              <span className='card__like-count'>0</span>
            </div>
          </div>
        </li>
      </template>
    </div>
  );
}

export default App;
