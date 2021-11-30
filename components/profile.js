import Image from 'next/image';
import styles from './profile.module.css';

const Profile = () => (
  <section className={styles.container}>
    <div/>
    <p>
      Hola, mi nombre es <b>Juan Pablo Ramírez</b>, soy ingeniero de software y quiero compartir mis ideas y aprendizaje con el mundo.
    </p>
  </section>
);

export default Profile;
