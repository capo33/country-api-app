import { Column } from '../../../types/tableType'

export const columns: Column[] = [
  { id: 'flags', label: 'Flag' },
  { id: 'name', label: 'Name' },
  {
    id: 'languages',
    label: 'Language',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  { id: 'region', label: 'Region' },
  {
    id: 'population',
    label: 'Population',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'Favourites',
    label: 'Favourites',
  },
]
