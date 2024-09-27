type JSONValue = string | number | boolean | JSONObject | JSONArray

interface JSONObject {
  [x: string]: JSONValue
}

interface JSONArray extends Array<JSONValue> {}

type AttributesObject = JSONObject
interface RelationshipsObject {
  [x: string]: RelationshipObject
}
type RelationshipObject = {
  links?: LinksObject
  data?: any // TODO
  meta?: MetaObject
  // TODO Extensions
}
type ResourceIdentifierObject = {
  id: string
  type: string
  meta: MetaObject
}
type ResourceLinkage =
  | null
  | []
  | ResourceIdentifierObject
  | ResourceIdentifierObject[]
type LinkObject = {
  href: string
  rel?: string
  describedby?: string
  title?: string
  type?: string
  hreflang?: string | string[]
  meta?: MetaObject
}
interface LinksObject {
  [x: string]: null | string | LinkObject
}
type MetaObject = JSONObject

type ResourceObject = {
  id: string
  type: string
  attributes?: AttributesObject
  relationships?: RelationshipsObject
  links?: LinksObject
  meta?: MetaObject
}
