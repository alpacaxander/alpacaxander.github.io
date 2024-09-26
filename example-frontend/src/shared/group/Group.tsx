function Group({ group }: { group: any }) {
  return (
    <div>
      <p className="text-3xl font-bold underline">
        {group.attributes.commonName}
      </p>
      <p>{group.attributes.description}</p>
    </div>
  )
}

export default Group
