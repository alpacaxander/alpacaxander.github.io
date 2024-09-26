import Logout from '../login/Logout'
import store, { IRootState } from '../../core/store/Store'
import { fetchGroups } from '../../core/store/GroupSlice'
import { useSelector } from 'react-redux'
import Group from '../../shared/group/Group'
import { useEffect } from 'react'

function Home() {
  const selectGroups = useSelector((state: IRootState) => state.groups)
  const auth = useSelector((state: IRootState) => state.auth)

  useEffect(() => {
    if (selectGroups.status === 'idle' && auth.status === 'succeeded') {
      store.dispatch(fetchGroups())
    }
  }, [selectGroups, auth])

  let groups = selectGroups.items.map((group) => (
    <Group group={group} key={group.id}></Group>
  ))

  return (
    <div className="home">
      {groups}
      <Logout></Logout>
    </div>
  )
}

export default Home
