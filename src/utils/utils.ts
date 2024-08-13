export const convertDate = (createdAt : Date) => {
    const now : any = new Date();
    const createdTime : any = new Date(createdAt);
    const diffInSeconds = Math.floor((now - createdTime) / 1000);
    let display;
    if (diffInSeconds < 60) {
        display = `${diffInSeconds}s`;
    } else if (diffInSeconds < 3600) {
        const diffInMinutes = Math.floor(diffInSeconds / 60);
        display = `${diffInMinutes}m`;
    } else if (diffInSeconds < 86400) {
        const diffInHours = Math.floor(diffInSeconds / 3600);
        display = `${diffInHours}h`;
    } else { // less than a week
        const diffInDays = Math.floor(diffInSeconds / 86400);
        display = `${diffInDays}d`;
    } 
    return display
};