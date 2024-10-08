import { Link } from 'react-router-dom'
import ProductCard from '../product/ProductCard'
import { useSelector } from 'react-redux'
import store, { IRootState } from '../../core/store/Store'
import { useEffect } from 'react'
import { allByGroup } from '../../core/store/ProductSlice'
import { Group } from '../../core/api/ProjectAPITypes'

function GroupCard({ group }: { group: Group }) {
  const selectProducts = useSelector((state: IRootState) => state.products)
  useEffect(() => {
    if (
      !selectProducts[group.id] ||
      (selectProducts[group.id].status !== 'succeeded' &&
        selectProducts[group.id].status !== 'pending' &&
        !selectProducts[group.id].items.length)
    ) {
      store.dispatch(allByGroup({ groupId: group.id }))
    }
  }, [selectProducts])

  let products = selectProducts[group.id]?.items.map((product) => (
    <ProductCard key={product.id} product={product}></ProductCard>
  ))

  return (
    <div className="relative flex flex-col my-6 p-6 text-left bg-white shadow-sm border border-slate-200 rounded-lg w-96">
      <p className="mb-2 text-slate-800 text-xl font-semibold">
        {group.attributes?.commonName}
      </p>
      <p className="text-slate-600 leading-normal font-light">
        {group.attributes?.description}
      </p>
      {products}
      <Link to={`/groups/${group.id}`} className="self-end mt-2">
        <button
          className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none"
          type="button"
        >
          Details
        </button>
      </Link>
    </div>
  )
}

export default GroupCard
