import { useState } from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabPanel from "./TabPanel";

const CustomTabs = () => {
    const [selectedTab, setSelectedTab] = useState(0);

    const idGenerator = (index) => {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    return (
        <div className="tabs">
            <div className="tabs__filter">
                <Tabs value={selectedTab} centered onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Item One" {...idGenerator(0)} />
                    <Tab label="Item Two" {...idGenerator(1)} />
                    <Tab label="Item Three" {...idGenerator(2)} />
                </Tabs>
            </div>
            <div className="tabs__panel">
                <TabPanel value={selectedTab} index={0}>
                    Item One
                </TabPanel>
                <TabPanel value={selectedTab} index={1}>
                    Item Two
                </TabPanel>
                <TabPanel value={selectedTab} index={2}>
                    Item Three
                </TabPanel>
            </div>
        </div>
    )
}

export default CustomTabs