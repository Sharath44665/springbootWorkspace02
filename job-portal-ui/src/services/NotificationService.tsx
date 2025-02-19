import { notifications } from "@mantine/notifications"
import { IconCheck, IconX } from "@tabler/icons-react"

const successNotification = (title: string, message: string) => {
    notifications.show({
        title: title,
        message: message,
        withCloseButton: true,
        icon: <IconCheck style={{ width: "90%", height: "90%" }} />,
        withBorder: true,
        className: '!border-green-500'
    })

}

const errorNotification = (title: string, message: string) => {
    notifications.show({

        title: title,
        message: message,
        withCloseButton: true,
        icon: <IconX style={{ width: "90%", height: "90%" }} />,
        color: 'red',
        withBorder: true,
        className: '!border-red-500'
    })
}


export { successNotification, errorNotification }
