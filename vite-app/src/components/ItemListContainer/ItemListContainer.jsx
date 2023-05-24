import './ItemListContainer.css'
import products from '../../data/products';
import Item from '../Item/Item';

function ItemListContainer() {
    console.log(products);
    return <div>
        ItemListContainer
        {
            products.map(itemInArray => (
                <Item
                    key={itemInArray.id}
                   {...itemInArray}
                />
            ))
        }
    </div>;
}

export default ItemListContainer;
