import { useRef } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Avatar from './Avatar'
import SearchHeaderOptions from './SearchHeaderOptions'
import { XIcon, MicrophoneIcon, SearchIcon } from '@heroicons/react/solid'
const SearchHeader = (props) => {
  const { initialTerm } = props;
  const router = useRouter()
  const searchInputRef = useRef(null)

  const search = (e) => {
    e.preventDefault()

    const term = searchInputRef.current.value
    if (!term)
      return
    router.push(`/search/${term}`)
  }
  return (
    <header
      className={'sticky top-0 bg-white'}
    >
      <div className={'flex w-full p-3 items-center'}>
        <Image
          src={'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg'}
          alt={'google 2015 logo'}
          height={40}
          width={120}
          onClick={() => router.push('/')}
          className={'cursor-pointer'}
        />
        <form className={'flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center'}>
          <input 
            ref={searchInputRef}
            placeholder={initialTerm}
            type="text"
            className={'flex-grow w-full focus:outline-none'}
          />
          <XIcon
            onClick={() => searchInputRef.current.value = ""}
            className={'h-5 sm:mr-3 text-gray-500 cursor-pointer transition-duration-100 transform hover:scale-125'}
          />
          <MicrophoneIcon
            className={'h-4 mr-3 hidden sm:inline-flex text-blue-300 border-l-2 pl-4 border-gray-300'}
          />
          <SearchIcon
            className={'h-5 hidden sm:inline-flex text-gray-500'}
          />
          <button hidden type="submit" onClick={search}>Search</button>
        </form>
        <Avatar url={'/logo.png'} className={'ml-auto'}/>
      </div>
      {/* SearchHeaderOptions */}
      <SearchHeaderOptions/>
    </header>
  )
}

export default SearchHeader