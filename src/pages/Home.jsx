import RandomRepos from '../components/randomrepos/RandomRepos'
import Search from '../components/search/Search'
import UserDetails from '../components/user/User'
import { useSelector } from 'react-redux'
import UserRepos from '../components/userrepos/UserRepos'
// import { GraphQLClient, gql } from 'graphql-request'

function Home() {
  const { user, repos } = useSelector((state) => state.github)

  //   const [data, setData] = useState(null)

  //   const client = new GraphQLClient('https://api.github.com/graphql')

  //   const query = gql`
  //     {
  //       repositoryOwner(login: "newtfrank") {
  //         login
  //         avatarUrl
  //         ... on User {
  //           gists {
  //             totalCount
  //           }
  //           followers {
  //             totalCount
  //           }
  //           bio
  //           websiteUrl
  //           url
  //         }
  //         repositories(first: 2) {
  //           totalCount
  //           ... on RepositoryConnection {
  //             edges {
  //               node {
  //                 name
  //                 url
  //                 issues(first: 5) {
  //                   totalCount
  //                   ... on IssueConnection {
  //                     edges {
  //                       node {
  //                         id
  //                         title
  //                         state
  //                         body
  //                       }
  //                     }
  //                   }
  //                 }
  //                 languages(first: 5) {
  //                   totalCount
  //                   ... on LanguageConnection {
  //                     edges {
  //                       node {
  //                         name
  //                       }
  //                     }
  //                   }
  //                 }
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }
  //   `

  //   const variables = {
  //     name: user,
  //   }

  //   const fetchUserDetails = async () => {
  //     const headers = {
  //       authorization: `Bearer ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`,
  //     }
  //     try {
  //       const data = await client.request(query, variables, headers)
  //       setData(data)
  //       setUser(data)
  //     } catch (error) {
  //       console.log(error)
  //       return
  //     }
  //   }

  return (
    <div className='home'>
      <div className='home__wrapper'>
        <RandomRepos />
        <Search />
        {user && <UserDetails user={user} />}
        {repos && repos.length ? <UserRepos repos={repos} /> : null}
      </div>
    </div>
  )
}

export default Home
