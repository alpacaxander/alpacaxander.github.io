type JSONValue = string | number | boolean | JSONObject | JSONArray

interface JSONObject {
  [x: string]: JSONValue
}

interface JSONArray extends Array<JSONValue> {}

type AttributesObject = JSONObject
export interface RelationshipsObject {
  [x: string]:
    | ToOneRelationshipObject<ResourceObject>
    | ToManyRelationshipObject<ResourceObject>
}
export type ToOneRelationshipObject<T extends ResourceObject> = {
  links?: LinksObject
  data?: ToOneResourceLinkage<T>
  meta?: MetaObject
  // TODO Extensions
}
export type ToManyRelationshipObject<T extends ResourceObject> = {
  links?: LinksObject
  data?: ToManyResourceLinkage<T>
  meta?: MetaObject
  // TODO Extensions
}
type ResourceIdentifierObject = {
  id: string
  type: string
  meta?: MetaObject
}
type ToOneResourceLinkage<T extends ResourceObject> = null | T
type ToManyResourceLinkage<T extends ResourceObject> = T[]
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

export type ResourceObject = {
  id: string
  type: string
  attributes?: AttributesObject
  relationships?: RelationshipsObject
  links?: LinksObject
  meta?: MetaObject
}
