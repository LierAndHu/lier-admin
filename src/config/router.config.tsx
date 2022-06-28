export interface MenuConfig {
  label: string
  key: string
  path?: string
  icon?: any
  children?: MenuConfig[]
  element?: any
  onClick?: any
}
