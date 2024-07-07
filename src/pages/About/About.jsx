import { useState } from 'react';

//CSS
import styles from './About.module.css'
import { useFetch } from '../../hooks/useFetch';

const About = () => {
  const [lawyer, setLawyer] = useState([]);

  const url = 'https://jsonplaceholder.typicode.com/users'

  const { data: lawyers } = useFetch(url)

  return (
    <div className={styles.about}>
      <div className={styles.about_title}>
        <h1>About Us</h1>
        <p>Lorem ipsum, dolor sit amet consectetur alorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem provident necessitatibus obcaecati incidunt assumenda quos corrupti tempora quam fugiat placeat, earum pariatur laborum! Exercitationem unde fugit ea alias? Totam, molestiae.dipisicing elit. Libero corrupti voluptatibus aliquam sapiente iste l Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorem debitis unde repellat magni nulla. Perferendis veniam neque aut natus commodi molestias nesciunt vel, autem fugiat amet accusamus! Ea, reiciendis? fuga voluptates veritatis, repellat maxime non perspiciatis error, suscipit, blanditiis odit placeat beatae deleniti nemo nisi!</p>
      </div>


      <h2>Asssociates</h2>
      {lawyers && lawyers.slice(0, 5).map((lawyer) => (
        <div key={lawyer.id} className={styles.outer_bevel}>
          <div className={styles.flat_surface}>
            <div className={styles.inner_bevel}>
              <div className={styles.associates_text}>
                <h4>{lawyer.name}</h4>
                <p><b>Email:</b> {lawyer.email}</p>
                <p><b>Address:</b> {lawyer.address.street}, {lawyer.address.city}</p>
                <p> <b>Phone:</b> {lawyer.phone}</p>
              </div>
              <div className={styles.image_container}>
                <img src={`https://picsum.photos/300?=${lawyer.id}`} alt="User Avatar" className={styles.lawyers_image} />
              </div>
            </div>
          </div>
        </div>
      ))}


    </div>

  )
}

export default About 