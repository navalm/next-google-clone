import { useRouter } from 'next/router'
import Head from 'next/head'
import SearchHeader from 'components/SearchHeader'
import SearchResults from 'components/SearchResults'
import { API_KEY, CONTEXT_KEY } from 'keys'
import response from 'response'

const Search = (props) => {
  const { results } = props
  const router = useRouter()

  return (
    <div className={'flex flex-col h-screen'}>
      <Head>
        <title>{router.query.term} - Next Google Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <SearchHeader initialTerm={router.query.term} />
      {/* SearchResults */}
      <SearchResults results={results} />
    </div>
  )
}

export default Search

export async function getServerSideProps(context) {
  // 100 free searches/day
  const useDummyData = true
  const startIndex = context.query.start || "0"
  const data = useDummyData? response: await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
  ).then(resp => resp.json())
  // after the server has rendered
  // pass the results to client
  return {
    props: {
      results: data,
    }
  }
}