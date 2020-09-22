import { gql } from 'apollo-server'
import mutation from './mutation'
import query from './query'
import model from './model'

const graphql = gql`
${model}
${mutation}
${query}
`

export default graphql