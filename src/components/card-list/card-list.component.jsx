import { Component } from "react";
import Card from "../card/card.component";
import './card-list.styles.css';

class CardList extends Component {

    render() {
        const { products, loadingState } = this.props;
        return <>
            <h1>Card list component</h1>
            <div className="card-list">

                {loadingState ? <h1>Loading products..</h1> : products.map(product => (
                    <Card key={product.id} product={product} />
                ))}
            </div>;
        </>
    }
}

export default CardList;