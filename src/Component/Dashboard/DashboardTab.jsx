import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import DashboardCard from "./DashCard";
import {typographyCategory} from "../../Constants/typography";
import { blue, cyan } from "@mui/material/colors";

const DashboardTab = ({children, tabs = [{label: "", key: 0}], activeTab, updateActiveTab}) => {
    const stylesMap = {
        default: {
            fontSize: "17px",
            fontFamily: typographyCategory.base.primary,
            cursor: "pointer",
            padding: "px 20px",
            mt: '20px',
            minWidth: "fit-content",
        },

        active: {
            fontWeight: 500,
            color: '#000',
            fontFamily: typographyCategory.base.primary,
            padding: "px 20px",
            borderBottom: '1px solid #C5322A'
        },

        inactive: {
            fontWeight: 500,
            color: "#000",
            padding: "px 20px",
            fontFamily: typographyCategory.base.primary,
            borderRadius: "30px",
        },
    };

    return (
        <Box>
            <DashboardCard>
                <Stack
                    direction="row"
                    alignItems="center"
                    gap={2}
                    sx={{
                      overflowX: "auto",
                    }}
                >
                    {tabs?.map((tab, index) => {
                        return (
                            <Box
                                key={index}
                                onClick={() => updateActiveTab(tab.key)}
                                sx={[stylesMap.default, activeTab === tab.key ? stylesMap.active : stylesMap.inactive]}
                            >
                                {tab?.label}
                            </Box>
                        );
                    })}
                </Stack>
            </DashboardCard>
            {children || null}
        </Box>
    );
};

export default DashboardTab;
