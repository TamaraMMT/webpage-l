//CSS
import styles from './Home.module.css'


const Home = () => {
  return (
    <div className={styles.container}>
      <section className={styles.section_one}>
        <div className={styles.section_one_background}>
          <div className={styles.section_one_overlay}>
            <div className={styles.section_one_text}>
              <h1>Nesciunt repellendus delectus dolorem tempore beatae.</h1>
              <p>Lorem voluptate alias accusamus obcaecati repudiandae quod. Incidunt tenetur porro quam fugit cupiditate!  nobis et ipsa aliquam pariatur accusantium?ipsum dolor sit amet consectetur adipisicing elit. Reiciendis pariatur harum ex ipsum suscipit recusandae iste omnis, rerum cumque nulla vitae veniam, voluptatum nobis incidunt officia eum nesciunt? Repudiandae, asperiores.lorem</p>
            </div>
            <div className={styles.section_one_button_contact}>
              <span>
                Contact us now
              </span>
            </div>
          </div>
        </div>
      </section >
      <section className={styles.section_one_grid}>
        <ul>
          <li>
            <img src={'https://cdn-icons-png.flaticon.com/512/10228/10228308.png'} alt="Handshake Icon" />
            <h4>Compromise</h4>
          </li>
          <li>

            <img src={'https://cdn-icons-png.flaticon.com/512/9375/9375453.png'} alt="Quality Icon" />
            <h4>Quality</h4>

          </li>
          <li>
            <img src={'https://cdn-icons-png.flaticon.com/512/9375/9375453.png'} alt="Quality Icon" />
            <h4>Professionalism</h4>
          </li>
          <li>
            <img src={'https://cdn-icons-png.flaticon.com/512/9375/9375453.png'} alt="Quality Icon" />
            <h4>Excellence</h4>

          </li>
        </ul>
      </section >
      <div className={styles.areas_practice}>
        <h2>Our Practice Areas</h2>
        <ul>
          <li>Corporate law</li>
          <li>Litigation and dispute resolution</li>
          <li>Administrative law</li>
          <li>Tax and Customs Law</li>
          <li>Financial banking law and capital markets</li>
          <li>Real estate law</li>
          <li>Intellectual property law</li>
          <li>Distribution and representation agency agreements</li>
          <li>Employment and labor law</li>
          <li>International trade law</li>
          <li>Environmental law</li>
          <li>Family law</li>
        </ul>
      </div>
      <div className={styles.clients}>
        <h2> Our Valued Clients </h2>
        <ul>
          <li><img src={'https://img.freepik.com/free-vector/letter-u-icon-logo-design-vector_474888-3700.jpg?t=st=1720129000~exp=1720132600~hmac=2bb79d878a276474998166fb73f756207ff5b3f6a6250e06453fa7ce8eddf659&w=826'} alt="" /></li>
          <li><img src={'https://img.freepik.com/free-vector/vector-peacock-silhouette-design_779267-1808.jpg?t=st=1720128735~exp=1720132335~hmac=e8282b70b532130c870858427e2994fa6a22abde49098ae2fd31e47f34968274&w=826'} alt="" /></li>
          <li><img src={'https://img.freepik.com/free-vector/initials-letter-d-logo-design_474888-4206.jpg?t=st=1720128944~exp=1720132544~hmac=dab1f8b822a0f0dfd1ce631797801b8e486236fd868fa4c1b7f434065d60c929&w=826'} alt="" /></li>
          <li><img src={'https://img.freepik.com/free-vector/bicycle-shop-logo-design-vector_53876-40626.jpg?t=st=1720127702~exp=1720131302~hmac=f238117ac81c1481c8f77b8cd1fbbed106032cf46fd412bc700a1d11c95db903&w=826'} alt="" /></li>
        </ul>
      </div>


    </div >
  )
}

export default Home