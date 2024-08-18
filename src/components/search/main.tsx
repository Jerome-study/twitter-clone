import { useState } from "react"
import { TextField } from '@mui/material';
import { useSearch } from "../../hooks/useSearch";
import { BodyContainer } from "./BodyContainer";
import { TrendingSection } from "./TrendingSection";
import { NoResultSection } from "./NoResult";
import { UserCardSection } from "./UserCardSection";
import { UserCardSkeletonMultiple } from "../mui/skeleton/UserCardSkeletonMultiple";
import { styles } from "./styles";

export const MainSearchComponent = () => {
    const [searchValue, setSearchValue] = useState('');
    const { searchResult, loading } = useSearch(searchValue);
    const handleChangeValue = (e: any) => {
        setSearchValue(e.target.value)
    }

    return (
        <>
            <TextField
                variant="outlined"
                size="small"
                placeholder="Search SocialTweet User"
                value={searchValue}
                onChange={handleChangeValue}
                sx={styles.TextFieldStyle}
            />

            <BodyContainer>
                {(searchResult.length === 0 && !searchValue) &&
                    <TrendingSection />
                }

                {(searchResult.length === 0 && searchValue && !loading) &&
                    <NoResultSection />
                }

                {(searchResult.length > 0 && !loading) &&
                    <UserCardSection searchResult={searchResult} />
                }

                {(loading && searchValue) &&
                    <UserCardSkeletonMultiple />
                }

            </BodyContainer>

        </>
    )

}