import { Indicator, Menu, Notification } from "@mantine/core";
import { IconBell, IconCheck } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getNotifications, readNotifications } from "../../services/NotiService";
import { useNavigate } from "react-router";

const NotificationMenu = () => {
    const navigate = useNavigate()
    const user = useSelector((state: any) => state.user)
    const [opened, setOpened] = useState(false)
    const [notifications, setNotifications] = useState<any>([]);
    useEffect(() => {
        getNotifications(user.id).then((res) => {
            console.log(res)
            setNotifications(res)
        }).catch((err) => console.log(err))
    }, [user])

    const unread = ( index:any)=>{
        let notis = [...notifications]
        notis = notis.filter((noti:any, i:any)=> i!= index);
        setNotifications(notis)
        readNotifications(notifications[index].id).then((res)=>console.log(res)).catch((err)=>console.log(err));
    }
    return (<>
        <Menu shadow="md" width={400}>
            <Menu.Target>

                <div className='bg-stone-700 p-1 rounded-full'>
                    <Indicator disabled={notifications.length<=0} color="indigo" size={7} offset={6} processing>
                        <IconBell stroke={2} />
                    </Indicator>
                </div>

            </Menu.Target>

            <Menu.Dropdown onChange={() => setOpened(true)}>
                <div className="flex flex-col gap-1 ">
                    {
                        notifications.map((noti: any, idx: any) => <Notification onClick={()=>{navigate(noti.route); unread(idx); setOpened(false);}} onClose={()=>unread(idx)} key={idx} className="cursor-pointer" icon={<IconCheck size={20} />} color="teal" title={noti.action} mt="md">
                            {noti.message}
                        </Notification>)
                    }
                    {
                        notifications.length == 0 && <div className="text-center" >No notifications</div>
                    }


                </div>
            </Menu.Dropdown>
        </Menu>
    </>)
}

export default NotificationMenu;