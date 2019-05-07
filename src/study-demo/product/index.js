import React,{ Component } from 'react'


class ProductRow extends Component {
    render() {
        const product = this.props.product;
        const name = product.stocked ?
            product.name :
            <span style={{color:'red'}}>
                {product.name}
            </span>
        return (
            <tr>
                <td>{name}</td>
                <td>{product.price}</td>
            </tr>
        )
    }
}

class ProductCategoryRow extends Component {
    render() {
        const category = this.props.category;
        return (
            <tr>
                <th colSpan="2">
                    {category}
                </th>
            </tr>
        )
    }
}

class ProductTable extends Component {
    render() {
        const rows = [];
        let lastCategory = null;
        this.props.products.forEach(product => {
            if(product.category !== lastCategory) {
                rows.push(
                    <ProductCategoryRow
                        category={product.category}
                        key={product.category}
                    />
                )
            }
            rows.push(
                <ProductRow
                    product={product}
                    key={product.name}
                />
            )
            lastCategory = product.category
        })

        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        )
    }
}

class SearchBar extends Component {
    render() {
        return (
            <form>
                <input type="text" placeholder="Search..." />
                <p>
                    <input type="checkbox"/>
                    {' '}
                    Only show products in stock
                </p>
            </form>
        )
    }
}

class FilterableProductTable extends Component {
    render() {
        return (
            <section>
                <SearchBar />
                <ProductTable products={this.props.products}/>
            </section>
        )
    }
}


export default FilterableProductTable