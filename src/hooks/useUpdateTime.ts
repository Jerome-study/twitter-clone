import { useEffect, useState } from "react"

export const useUpdateTime = (createdAt : Date) => {
    const [timeDisplay, setTimeDisplay] = useState('');
    
    useEffect(() => {
        const updateDisplay = () => {
            const now : any = new Date();
            const createdTime : any = new Date(createdAt);
            const diffInSeconds = Math.floor((now - createdTime) / 1000);

            let display;
            if (diffInSeconds < 60) {
                display = `${diffInSeconds} seconds ago`;
            } else if (diffInSeconds < 3600) {
                const diffInMinutes = Math.floor(diffInSeconds / 60);
                display = `${diffInMinutes} minutes ago`;
            } else if (diffInSeconds < 86400) {
                const diffInHours = Math.floor(diffInSeconds / 3600);
                display = `${diffInHours} hours ago`;
            } else if (diffInSeconds < 604800) { // less than a week
                const diffInDays = Math.floor(diffInSeconds / 86400);
                display = `${diffInDays} days ago`;
            } else {
                display = createdTime.toDateString();
            }

            setTimeDisplay(display);
        };

        updateDisplay();
    }, []);

    return { timeDisplay }
}