function Group({ group }: { group: any }) {
  return (
    <div>
      <p>{group.attributes.commonName}</p>
      <p>{group.attributes.description}</p>
    </div>
  )
}

export default Group
