import { FavoriteOutlined, ModeCommentOutlined, RepeatOutlined, ShareOutlined } from '@mui/icons-material';

export const actionBar = [
    {
        name: "heart",
        icon: <FavoriteOutlined sx={{ fontSize: 18}}/>,
        hasCount: true
    },
    {
        name: "comment",
        icon: <ModeCommentOutlined sx={{ fontSize: 18}} />,
        hasCount: true
    },
    {
        name: "repeat",
        icon: <RepeatOutlined sx={{ fontSize: 18}}/>,
        hasCount: true
    },
    {
        name: "share",
        icon: <ShareOutlined sx={{ fontSize: 18}}/>
    },
]