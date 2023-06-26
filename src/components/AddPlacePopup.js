import PopupWithForm from './PopupWithForm';

function AddPlacePopup({ isOpened, onClose }) {
  return (
    <PopupWithForm
      name={'popup-new-place'}
      title={'Новое место'}
      formId={'newPlaceField'}
      buttonText={'Создать'}
      isOpened={isOpened}
      onClose={onClose}
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
  );
}

export default AddPlacePopup;
