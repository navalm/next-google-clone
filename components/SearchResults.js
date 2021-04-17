import PaginationButtons from './PaginationButtons'
const ResultItem = ({data}) => {
  return (
    <div
      key={data.link}
      className={`
        max-w-xl
        mb-8
      `}
    >
      <div className={'group'}>
        <a href={data.link} target={'_blank'} className={'text-sm'}>{data.formattedUrl}</a>
        <a href={data.link} target={'_blank'} className={'truncate text-xl text-blue-800 font-medium group-hover:underline'}>
          <h2>{data.title}</h2>
        </a>
      </div>
      <p className={'line-clamp-2'}>{data.snippet}</p>
    </div>
  )
}

const SearchResults = (props) => {
  const { results } = props
  console.log(results)
  return (
    <div className={` 
      mx-auto
      w-full
      px-3
      sm:pl-[5%]
      md:pl-[14%]
      lg:pl-52
    `}>
      <p className={'text-gray-600 text-md mb-5 mt-3'}>About {results.searchInformation?.formattedTotalResults} results ({results.searchInformation?.formattedSearchTime} seconds)</p>
      {results.items?.map((result) => {
        return <ResultItem key={result.link} data={result} />
      })}
      <PaginationButtons />
    </div>
  )
}

export default SearchResults