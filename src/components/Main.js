function Main({onEditProfile, onAddPlace, onEditAvatar}) {

  return (
    <main className='content'>
      <section aria-label='Профиль' className='profile'>
        <img
          className='profile__avatar'
          src={require('../images/image.jpg')}
          alt='аватар'
          onClick={onEditAvatar}
        />
        <div className='profile__info'>
          <div className='profile__wrap'>
            <h1 className='profile__name'>Жак</h1>
            <button className='profile__edit-button' type='button' onClick={onEditProfile}></button>
          </div>
          <p className='profile__job'>Исследователь</p>
        </div>
        <button className='profile__add-button' type='button' onClick={onAddPlace}></button>
      </section>
      <section className='elements' aria-label='Фоточки'>
        <ul className='cards'></ul>
      </section>
    </main>
  );
}

export default Main;
