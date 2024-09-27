import { Link } from 'react-router-dom'

function GroupCard({ group }: { group: any }) {
  return (
    <div className="relative flex flex-col my-6 p-6 text-left bg-white shadow-sm border border-slate-200 rounded-lg w-96">
      <p className="mb-2 text-slate-800 text-xl font-semibold">
        {group.attributes.commonName}
      </p>
      <p className="text-slate-600 leading-normal font-light">
        {group.attributes.description}
      </p>
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
