import { MobileTweetComposer } from "./MobileTweetComposer"
import { useResponsive } from "../../hooks/useResponsive"
import { TweetComposerForm } from "../form/TweetComposer";

export const TweetComposer = () => {
    const { isMobile } = useResponsive();
    return (
        <>
            {isMobile ?
                <MobileTweetComposer /> :
                <TweetComposerForm />
            }
        </>
    )
}