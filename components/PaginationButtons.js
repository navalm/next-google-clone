import { useRouter } from 'next/router'
import Link from 'next/link'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
const PaginationButtons = (props) => {
  const {  } = props
  const router = useRouter()
  const startIndex = Number(router.query.start) || 0
  return (
    <div className={`
      flex
      items-center
      justify-center
      text-blue-700
      mb-10
    `}>
      {startIndex >= 10 && (
        <Link href={`/search/${router.query.term}?start=${startIndex - 10}`}>
          <div className={`flex flex-grow flex-column items-center cursor-pointer hover:underline`}>
            <ChevronLeftIcon className={'h-4'}/>
            <p>Previous</p>
          </div>
        </Link>
      )}
      <Link href={`/search/${router.query.term}?start=${startIndex + 10}`}>
        <div className={`flex flex-grow flex-column items-center cursor-pointer hover:underline`}>
          <ChevronRightIcon className={'h-4'}/>
          <p>Next</p>
        </div>
      </Link>
    </div>
  )
}

export default PaginationButtons