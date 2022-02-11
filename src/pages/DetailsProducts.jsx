import React from 'react';
// import Card from '../components/Card';
import PropTypes from 'prop-types';

class DetailsProducts extends React.Component {
    state = {
      data: [],
    }

    async componentDidMount() {
      const { match: { params: { id } } } = this.props;
      const results = await fetch(`https://api.mercadolibre.com/items/${id}`);
      const data = await results.json();
      this.setState({ data });
    }

    render() {
      // const { match: { params: { id } } } = this.props;
      const { data } = this.state;
      const { attributes } = data;
      console.log(data);
      return (
        <section data-testid="product-detail-name">
          <div>
            <h2>{ data.title }</h2>
            <h3>{ data.price }</h3>
            <img src={ data.thumbnail } alt={ data.title } />
          </div>
          <div>
            <h2>Especificações</h2>
            { attributes && attributes.map(({ name, value_name: valueName }) => (
              <li key={ name }>
                { name }
                :
                { valueName }
              </li>)) }
          </div>
        </section>
      );
    }
}

// Resolver problema da PropType
DetailsProducts.propTypes = {
  match: PropTypes.string.isRequired,
};

export default DetailsProducts;
