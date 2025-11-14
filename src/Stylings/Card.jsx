import Styles from "./Card.module.css"
const Card = ({img,name,designation}) => {
  return (
    <section className='card'>
      <img src={img} alt={name} className={Styles.image} />
      <h1 className={Styles.name}>{name}</h1>
      <h2 className={Styles.designation}>{designation}</h2>
      <button>Know More</button>
    </section>
  )
}

export default Card