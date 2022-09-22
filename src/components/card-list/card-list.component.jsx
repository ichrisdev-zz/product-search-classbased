import Card from "../card/card.component";
import './card-list.styles.css';

const CardList = (props) => {
    const { products, loadingState } = props;

    if (loadingState)
        return <h1>Loading...</h1>
    return (
        <>
            <h1>Card list component</h1>
            <div className="card-list">
                {products.map(product => (
                    <Card key={product.id} product={product} />
                ))}
            </div>;
        </>
    )
}

export default CardList;