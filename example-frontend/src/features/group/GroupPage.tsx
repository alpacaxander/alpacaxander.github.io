import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
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
      <GroupCard group={selectGroup.item}></GroupCard>
    </div>
  )
}

export default GroupPage
