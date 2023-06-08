function Main({onEditProfile}) {
  const handleEditProfileClick = () => {
    document.querySelector('popup_type_popup-profile').classList.add('popup_opened');
  }

  const handleEditAvatarClick = () => {
    document.querySelector('.popup_type_popup-new-avatar').classList.add('popup_opened');
  }

  const handleAddPlaceClick = () => {
    document.querySelector('.popup_type_popup-new-place').classList.add('popup_opened');
  }

  return (
    <main className='content'>
      <section aria-label='Профиль' className='profile'>
        <img
          className='profile__avatar'
          src={require('../images/image.jpg')}
          alt='аватар'
          onClick={handleEditAvatarClick}
        />
        <div className='profile__info'>
          <div className='profile__wrap'>
            <h1 className='profile__name'>Жак</h1>
            <button className='profile__edit-button' type='button' onClick={onEditProfile}></button>
          </div>
          <p className='profile__job'>Исследователь</p>
        </div>
        <button className='profile__add-button' type='button' onClick={handleAddPlaceClick}></button>
      </section>
      <section className='elements' aria-label='Фоточки'>
        <ul className='cards'></ul>
      </section>
    </main>
  );
}

export default Main;
