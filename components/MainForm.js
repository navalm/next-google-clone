import { useRef } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { SearchIcon, MicrophoneIcon } from '@heroicons/react/solid'
const MainForm = () => {
  const router = useRouter()
  const searchInputRef = useRef(null)
  const search = e => {
    e.preventDefault()
    const term = searchInputRef.current? searchInputRef.current.value: null
    if (!term) return

    router.push(`/search?term${term}`)
  }
  return (
    <main className={'w-full h-full p-3'}>
      <form className={'w-full flex flex-col flex-grow:1 items-center mt-15'}>
        <Image
          src={'https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg'}
          alt={'google 2015 logo'}
          width={148}
          height={100}
        />
        <Image
          src={'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg'}
          alt={'google 2015 logo'}
          width={296}
          height={183}
        />
        <div className={'w-full flex items-center mt-5 px-2 py-3 max-w-md rounded-full border border-gray-200 hover:shadow-lg focus-within:shadow-lg sm:max-w-xl lg:max-w-2xl'}>
          <SearchIcon className={'h-5 px-2 text-gray-400 cursor-pointer'} />
          <input type="text" className={'focus:outline-none flex-grow'} ref={searchInputRef} />
          <MicrophoneIcon className={'h-5 px-2 text-gray-400 cursor-pointer'} />
        </div>
        <div className={'flex flex-col max-w-3/4 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4'}>
          <button className={'button'} onClick={search}>Google Search</button>
          <button className={'button'} onClick={search}>I'm Feeling Lucky</button>
        </div>
      </form>
    </main>
  )
}

export default MainForm