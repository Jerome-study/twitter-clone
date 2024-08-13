import { MobileTweetComposer } from "./MobileTweetComposer"
import { useResponsive } from "../../../hooks/useResponsive"
import { TweetComposerForm } from "./TweetComposer";

export const TweetBox = () => {
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