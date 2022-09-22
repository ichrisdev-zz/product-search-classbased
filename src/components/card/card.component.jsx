import { Component } from "react";

class Card extends Component {

    render() {
        const { title, image, description, price, category } = this.props.product;
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
}

export default Card;