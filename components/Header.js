import { ViewGridIcon } from '@heroicons/react/solid'
import Avatar from 'components/Avatar'
const Header = () => {
  return (
    <header className={'flex w-full p-4 justify-between text-sm text-gray-500'}>
      <div className={'flex space-x-4 items-center'}>
        <p className={'link'}>About</p>
        <p className={'link'}>Store</p>
      </div>
      <div className={'flex space-x-4 items-center'}>
        <p className={'link'}>Gmail</p>
        <p className={'link'}>Images</p>
        <ViewGridIcon className={'h-8 p-2 rounded-full cursor-pointer hover:bg-gray-100'} />
        <Avatar url="/logo.png"/>
      </div>
    </header>
  )
}

export default Header