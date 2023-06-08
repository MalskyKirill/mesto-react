function ImagePopup() {
  return (
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
  );
}

export default ImagePopup;
