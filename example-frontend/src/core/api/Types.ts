export type LinksObject = {
  href: string
}

export type Link = LinksObject | string | null

export type RelationshipObject = {
  links: LinksObject[]
}
