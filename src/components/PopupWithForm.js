function PopupWithForm({ name, title, formId, children, isOpened }) {
  return (
    <div className={`popup popup_type_${name} ${isOpened ? 'popup_opened' : ''}`}>
      <div className='popup__container'>
        <h2 className='popup__title'>{title}</h2>
        <button className='popup__close' type='button'></button>
        <form className='popup__form' name={name} id={formId} noValidate>
          {children}
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
