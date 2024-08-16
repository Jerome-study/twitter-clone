import { ReactNode } from "react";
import { Grid, Box } from "@mui/material";
import { MainContent}  from "./MainContent";
import { RightSidebar } from "./RightSide";
import { TopAndLeftSidebar } from "./TopAndLeftSide";
import { BottomNavbar } from "../Navbar/BottomNav";
import { TweetProvider } from "../../context/tweetProvider";
import { styles } from "./styles";
import { useResponsive } from "../../hooks/useResponsive";
export const AuthLayout = ({ children }: { children: ReactNode }) => {
    const{ isMobile } = useResponsive();
    return (
        <TweetProvider>
            <Box sx={styles.bodyStyle}>
                <Box sx={styles.containerStyle}>
                    <Grid container gap={isMobile ? 0 : 2} justifyContent={isMobile? "" : "center"} >
                        <Grid item lg={3} xs={12}>
                            <TopAndLeftSidebar />
                        </Grid>
                        <Grid item lg={5} xs={12}>
                            <MainContent>
                                {children}
                            </MainContent>
                        </Grid>
                        {!isMobile ?
                            <Grid item lg={3} xs={12}>
                                <RightSidebar />
                            </Grid>
                            :
                            <BottomNavbar  />
                        }
                    </Grid>
                </Box>
            </Box>
        </TweetProvider>
    )

}
