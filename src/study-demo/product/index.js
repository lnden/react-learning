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
        const { filterText,inStockOnly } = this.props

        const rows = [];
        let lastCategory = null;

        this.props.products.forEach(product => {
            if(product.name.indexOf(filterText) === -1){
                return
            }

            if(inStockOnly && !product.stocked){
                return
            }

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
    /**
     *
     *  此处可以进行优化处理，onChange={()=>this.props.handleCheckChange(inStockOnly)}
     *  绑定事件的方式每次点击都重新创建一下实例，浪费性能可以把绑定事件放在constructor里面初始化绑定
     *  <input type="checkbox" checked={inStockOnly} onChange={()=>this.props.handleCheckChange(inStockOnly)}/>
     */
    constructor() {
        super()
        this.handleCheckChange = this.handleCheckChange.bind(this)
    }

    handleCheckChange(event) {
        this.props.handleCheckChange(event.target.checked)
    }
    // 优化结束

    render() {
        const { filterText,inStockOnly } = this.props
        return (
            <form>
                <input type="text" placeholder="Search..."  value={filterText} onChange={this.props.handleChange}/>
                <p>
                    <input type="checkbox" checked={inStockOnly} onChange={this.handleCheckChange}/>
                    {/*根据上面优化内容切换*/}
                    {/*<input type="checkbox" checked={inStockOnly} onChange={()=>this.props.handleCheckChange(inStockOnly)}/>*/}

                    {' '}
                    Only show products in stock
                </p>
            </form>
        )
    }
}

class FilterableProductTable extends Component {
    constructor() {
        super()
        this.state = {
            filterText: '',
            inStockOnly: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleCheckChange = this.handleCheckChange.bind(this)
    }

    handleChange(event){
        this.setState({
            filterText: event.target.value
        })
    }

    handleCheckChange(value){
        this.setState({
            // inStockOnly: !value
            // 根据上面优化内容切换
            inStockOnly: value
        })
    }

    render() {
        return (
            <section>
                <SearchBar {...this.state} handleChange={this.handleChange} handleCheckChange={this.handleCheckChange} />
                <ProductTable products={this.props.products}  {...this.state} />
            </section>
        )
    }
}


export default FilterableProductTable