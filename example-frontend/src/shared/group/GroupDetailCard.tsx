import { useEffect } from "react"
import { useSelector } from "react-redux"
import { one } from "../../core/store/GroupSlice"
import store, { IRootState } from "../../core/store/Store"
import GroupCard from "./GroupCard"

function GroupDetailCard({ groupId }: { groupId: string }) {
  const selectGroup = useSelector((state: IRootState) => state.groups)
  const auth = useSelector((state: IRootState) => state.auth)

  useEffect(() => {
    if (
      groupId &&
      groupId !== selectGroup?.item?.id &&
      selectGroup.status !== 'pending' &&
      !selectGroup.item &&
      auth.status === 'succeeded'
    ) {
      store.dispatch(one({ id: groupId }))
    }
  }, [selectGroup, auth])

  if (!selectGroup.item) {
    return (
        <div>
            loading
        </div>
    )
  }


  return (
    <div>
      <GroupCard group={selectGroup.item}></GroupCard>
    </div>
  )
}

export default GroupDetailCard
