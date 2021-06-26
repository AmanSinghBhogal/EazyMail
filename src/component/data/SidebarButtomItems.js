import InboxIcon from '@material-ui/icons/Inbox';
import StarIcon from '@material-ui/icons/Star';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import SendIcon from '@material-ui/icons/Send';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export const SidebarButtonItems = [
    {
        icon:<InboxIcon />,
        text: 'Inbox'
    },
    {
        icon:<StarIcon />,
        text: 'Starred'
    },
    {
        icon:<WatchLaterIcon />,
        text: 'Snoozed'
    },
    {
        icon:<SendIcon/>,
        text: 'Sent'
    },
    {
        icon:<InsertDriveFileIcon/>,
        text: 'Draft'
    },
    {
        icon: <ExpandMoreIcon />,
        text: 'More'
    },
]