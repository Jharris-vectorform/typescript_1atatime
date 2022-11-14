import { useContext } from "react";
import { Store } from "../Store";
import { NotificationType } from "../utils/interface";

const useGetNotificationCount = (type: NotificationType): number => {
    const {
        header: {
            data: {
                notifications,
            }
        },
    } = useContext(Store);
    return notifications?.filter(item => item.notificationTypeId === type?.typeId).length;
}

export default useGetNotificationCount;
