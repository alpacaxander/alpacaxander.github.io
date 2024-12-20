import Logout from '../login/Logout'
import store, { IRootState } from '../../core/store/Store'
import { all } from '../../core/store/GroupSlice'
import { useSelector } from 'react-redux'
import GroupCard from '../../shared/group/GroupCard'
import { useEffect } from 'react'

function Home() {
  const selectGroups = useSelector((state: IRootState) => state.groups)
  const auth = useSelector((state: IRootState) => state.auth)

  useEffect(() => {
    if (
      selectGroups.status !== 'succeeded' &&
      selectGroups.status !== 'pending' &&
      !selectGroups.items.length &&
      auth.status === 'succeeded'
    ) {
      store.dispatch(all({}))
    }
  }, [selectGroups, auth])

  let groups = selectGroups.items.map((group) => (
    <GroupCard group={group} key={group.id}></GroupCard>
  ))

  return (
    <div className="home">
      <div className="flex flex-col items-center">{groups}</div>
      <Logout></Logout>
    </div>
  )
}

export default Home
