import { useState } from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabPanel from "./TabPanel";
import TimeLine from "../TimeLine/TimeLine";
import SkillCard from "../SkillCard";
import educations from '../../api/educationData';
import workExperiences from '../../api/workExperienceData';

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
                <Tabs value={selectedTab} centered TabIndicatorProps={{
                    style: {
                        backgroundColor: "#FF014F"
                    }
                }} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="PROFESYONEL YETENEKLER" sx={{ minWidth: '33%' }} {...idGenerator(0)} />
                    <Tab label="EĞİTİM" sx={{ minWidth: '33%' }} {...idGenerator(1)} />
                    <Tab label="İŞ DENEYİMİ" sx={{ minWidth: '33%' }} {...idGenerator(2)} />
                </Tabs>
            </div>
            <div className="tabs__panel">
                <TabPanel value={selectedTab} index={0}>
                    <SkillCard />
                </TabPanel>
                <TabPanel value={selectedTab} index={1}>
                    <div className="row">
                        {educations.map((item, index) => (
                            <div className="col-md-6" key={index}>
                                <TimeLine data={item} />
                            </div>
                        ))}
                    </div>
                </TabPanel>
                <TabPanel value={selectedTab} index={2}>
                    <div className="row">
                        {workExperiences.map((item, index) => (
                            <div className="col-md-6" key={index}>
                                <TimeLine data={item} />
                            </div>
                        ))}
                    </div>
                </TabPanel>
            </div>
        </div>
    )
}

export default CustomTabs