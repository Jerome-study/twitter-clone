import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import RepeatIcon from '@mui/icons-material/Repeat';


const likeTweet = () => {
    console.log("like tweet")
}

const openComments = () => {
    console.log("Open comments")
}

const retweetTweet = () => {
    console.log("retweet");
}

export const actionBar = [
    {
        name: "heart",
        icon: <FavoriteBorderIcon sx={{ fontSize: 18, color: "custom.black" }}/>,
        hasCount: true,
        onclick: () => likeTweet()
    },
    {
        name: "comment",
        icon: <ChatBubbleOutlineOutlinedIcon sx={{ fontSize: 18, color: "custom.black"}} />,
        hasCount: true,
        onclick: () => openComments()
    },
    {
        name: "repeat",
        icon: <RepeatIcon sx={{ fontSize: 18, color: "black"}}/>,
        hasCount: true,
        onclick: () => retweetTweet()
    }
]