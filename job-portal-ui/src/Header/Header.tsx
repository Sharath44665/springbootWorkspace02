import { Indicator } from '@mantine/core';
import { IconAsset, IconBell, IconSettings } from '@tabler/icons-react';
import NavLinks from './NavLinks';
import { Link, useLocation } from 'react-router';
import DarkMode from './DarkMode';
import ProfileMenu from './ProfileMenu';
const Header = () => {
    const location = useLocation()
    return location.pathname != '/signup' && location.pathname != '/login' ? (
        <>
            <div className="w-full text-white bg-stone-900 h-20 flex px-6  justify-between items-center">
                <div className='flex gap-2 items-center text-blue-500'>
                    <IconAsset className="h-10 w-10" stroke={2} />
                    <div className='text-3xl font-semibold' ><Link to="/">iJobs</Link></div>
                </div>
                <NavLinks />
                <div className='flex gap-2 items-center'>
                    <DarkMode />
                    <div className='bg-stone-700 p-1 rounded-full'>
                        <Indicator color="indigo" size={7} offset={6} processing>
                            <IconBell stroke={2} />
                        </Indicator>
                    </div>

                    <ProfileMenu />
                    <div className='bg-stone-700 p-1 rounded-full'>

                        <IconSettings stroke={2} />
                    </div>

                </div>

            </div>

        </>
    ) : (<></>)
}

export default Header;