import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import store, { IRootState } from '../../core/store/Store'
import { useEffect } from 'react'
import GroupCard from '../../shared/group/GroupCard'
import { one } from '../../core/store/GroupSlice'

function GroupPage() {
  let { groupId } = useParams()
  const selectGroup = useSelector((state: IRootState) => state.groups)
  const auth = useSelector((state: IRootState) => state.auth)

  useEffect(() => {
    if (
      groupId &&
      selectGroup.status !== 'pending' &&
      !selectGroup.item &&
      auth.status === 'succeeded'
    ) {
      store.dispatch(one({ id: groupId }))
    }
  }, [selectGroup, auth])

  if (!selectGroup.item) {
    return <div>loading</div>
  }

  return (
    <div>
      <Link to="/home" className="self-end mt-2">
        <button
          className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none"
          type="button"
        >
          Home
        </button>
      </Link>
      <GroupCard group={selectGroup.item}></GroupCard>
    </div>
  )
}

export default GroupPage
