import gql from 'graphql-tag';

const Res =  gql`
query {
  pokemons(first:10) {
    name
    image
  }
}
`

export default Res