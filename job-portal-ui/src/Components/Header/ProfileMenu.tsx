import { Menu, Avatar } from '@mantine/core';
import {
    IconMessageCircle,
    IconUserCircle,
    IconFileText,
    IconLogout2,
} from '@tabler/icons-react';
import { Link } from 'react-router';

const ProfileMenu = () => {
    return (
        <Menu shadow="md" width={200}>
            <Menu.Target>

                <div className='flex items-center cursor-pointer'>
                    <Avatar src="avatar.png" alt="it's me" />
                    <div>Sharath</div>
                </div>

            </Menu.Target>

            <Menu.Dropdown>

                <Link to='/profile'>
                    <Menu.Item leftSection={<IconUserCircle size={14} />}>
                        Profile
                    </Menu.Item>
                </Link>

                <Menu.Item leftSection={<IconMessageCircle size={14} />}>
                    Messages
                </Menu.Item>
                <Menu.Item leftSection={<IconFileText size={14} />}>
                    Resume
                </Menu.Item>


                <Menu.Divider />


                <Menu.Item
                    color="red"
                    leftSection={<IconLogout2 size={14} />}
                >
                    Log out
                </Menu.Item>
            </Menu.Dropdown>
        </Menu>
    );
}

export default ProfileMenu;