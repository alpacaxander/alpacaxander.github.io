import { ResourceObject, ToManyRelationshipObject } from './JsonAPITypes'

export interface Product extends ResourceObject {
  type: 'product'
}

export interface Group extends ResourceObject {
  type: 'group'
  attributes?: {
    commonName: string
    description: string
  }
  relationships?: {
    products: ToManyRelationshipObject<Product>
  }
  links?: {}
}
