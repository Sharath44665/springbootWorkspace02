import { Button, Indicator } from '@mantine/core';
import { IconAsset, IconBell, IconSettings } from '@tabler/icons-react';
import NavLinks from './NavLinks';
import { Link, useLocation} from 'react-router';
import DarkMode from './DarkMode';
import ProfileMenu from './ProfileMenu';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getProfile } from '../../services/ProfileService';
import { setProfile } from '../../Slices/ProfileSlice';
import NotificationMenu from './NotificationMenu';
const Header = () => {
    const dispatch = useDispatch();
    const user = useSelector((state: any) => state.user)
    const location = useLocation()

    useEffect(() => {
        const fetchProfile = async () => {
            if (!user || user === null) return;

            try {
                const data = await getProfile(user.profileId);
                dispatch(setProfile(data));
            } catch (error) {
                console.error('Error fetching profile:', error);
            }
        };

        fetchProfile();
    }, [user, dispatch]);

    // useEffect(() => {
    //     // if (!user) return; // added by me
    //     if (user === null ){  
    //     }
    //     else{
    //         getProfile(user.profileId).then((data: any) => { 
    //             dispatch(setProfile(data)); 

    //         }).catch((error) => {
    //             console.log(error)
    //         }); 
    //     }

    // }, [])

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
                    {
                        user ? <ProfileMenu /> : <Link to="/login">
                            <Button variant='subtle'>Login</Button>
                        </Link>
                    }
                    <div className='bg-stone-700 p-1 rounded-full'>

                        <IconSettings stroke={2} />
                    </div>
                    {
                        user?<NotificationMenu/> :<></>
                    }
                </div>

            </div>

        </>
    ) : (<></>)
}

export default Header;