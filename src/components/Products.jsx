import React from 'react';
import Card from './Card';

class Products extends React.Component {
    render() {
        const { list } = this.props;
        console.log(list)
        return (
            <div>
                {list.map(({price, title, thumbnail, id}) => ( 
                    <Card title={title}  price={price} url={thumbnail} key={id} />
                ))}
            </div>
        )
    }
}



export default Products;