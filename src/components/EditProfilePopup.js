import PopupWithForm from "./PopupWithForm";

function EditProfilePopup({isOpened, onClose}) {
  return(
        <PopupWithForm
            name={'popup-profile'}
            title={'Редактировать профиль'}
            formId={'profileField'}
            buttonText={'Сохранить'}
            isOpened={isOpened}
            onClose={onClose}
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
  );
}

export default EditProfilePopup
