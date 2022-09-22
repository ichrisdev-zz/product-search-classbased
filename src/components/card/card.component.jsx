
const Card = (props) => {
    const { title, image, description, price, category } = props.product;
    return (
        <div className="card">
            <h2>{title}</h2>
            <img src={image} alt="" className="card-image" />
            <p>{description}</p>
            <h5>{category}</h5>
            <h3>${price}</h3>
        </div>
    )
}

export default Card;