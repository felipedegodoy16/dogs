import React from 'react';
import styles from './UserPhotoPost.module.css';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import { PHOTO_POST } from '../../api';

const UserPhotoPost = () => {
  const nome = useForm();
  const peso = useForm('number');
  const idade = useForm('number');
  const [img, setImg] = React.useState({});
  const {data, loading, error, request} = useFetch();

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('img', img.raw);
    formData.append('nome', nome.value);
    formData.append('peso', peso.value);
    formData.append('idade', idade.value);

    const token = window.localStorage.getItem('token');
    const {url, options} = PHOTO_POST(formData, token);
    request(url, options);
  }

  function handleImgChange({target}) {
    setImg({
      raw: target.files[0],
    });
  }

  return <section className={`${styles.photoPost} animeLeft`}>
    <form onClick={handleSubmit}>
      <Input label="Nome" type="text" name="nome" />
      <Input label="Peso" type="text" name="peso" />
      <Input label="Idade" type="text" name="idade" />
      <input type="file" name='img' id='img' onChange={handleImgChange} />
      <Button>Enviar</Button>
    </form>
  </section>;
};

export default UserPhotoPost;
