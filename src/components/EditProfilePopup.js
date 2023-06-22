import PopupWithForm from './PopupWithForm';
import { useState, useContext, useEffect } from 'react';
import { CurrentUserContext } from '../context/CurrentUserContext';

function EditProfilePopup({ isOpened, onClose, onUpdateUser }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const currentUser = useContext(CurrentUserContext);

  const handleChange = (evt) => {
    setName(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onUpdateUser({
      name,
      about: description,
    });
  };

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  return (
    <PopupWithForm
      name={'popup-profile'}
      title={'Редактировать профиль'}
      formId={'profileField'}
      buttonText={'Сохранить'}
      isOpened={isOpened}
      onClose={onClose}
      onSubmit={handleSubmit}
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
          value={name || ''}
          onChange={handleChange}
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
          value={description || ''}
          onChange={handleChange}
        />
        <span className='popup__field-error popup__field-error-job'>
          ошибка профайла
        </span>
      </label>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
