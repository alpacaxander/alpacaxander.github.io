import { Product } from '../../core/api/ProjectAPITypes'

function ProductCard(props: { product: Product }) {
  return <div>{props.product.id}</div>
}

export default ProductCard
