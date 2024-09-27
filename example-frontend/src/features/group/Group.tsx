import { useParams } from 'react-router-dom'

function Group() {
  let { groupId } = useParams()
  return <div>{groupId}</div>
}

export default Group
