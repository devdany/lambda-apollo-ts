import { gql } from 'apollo-server'
import mutation from './mutation'
import query from './query'

export default gql`
  ${mutation}
  ${query}
`