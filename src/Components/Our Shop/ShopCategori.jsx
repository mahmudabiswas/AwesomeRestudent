import React, { useEffect, useState } from "react";
import ShopMenu from "./ShopMenu";
import SectionTitle from "../Shared/SectionTitle";
import ShopTabs from "./ShopTabs";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import UseMenu from "../Hooks/useMenu";

const ShopCategori = () => {
  const [popular] = UseMenu();
  const [tabIndex, setTabIndex] = useState(0);

  const pizza = popular.filter((item) => item.category === "pizza");
  const populars = popular.filter((item) => item.category === "popular");
  const salad = popular.filter((item) => item.category === "salad");
  const soup = popular.filter((item) => item.category === "soup");
  const drinks = popular.filter((item) => item.category === "drinks");
  return (
    <div>
      <div>
        <SectionTitle subHeading={"Don't miss"} heading={"TODAY'S OFFER"} />

        <div>
          <Tabs
            selectedIndex={tabIndex}
            onSelect={(index) => setTabIndex(index)}
          >
            <TabList>
              <Tab>pizza </Tab>

              <Tab>populars</Tab>
              <Tab>salad</Tab>
              <Tab>soup</Tab>
              <Tab>drinks</Tab>
            </TabList>
            <TabPanel>
              <ShopTabs items={pizza} />
            </TabPanel>

            <TabPanel>
              <ShopTabs items={populars} />
            </TabPanel>
            <TabPanel>
              {" "}
              <ShopTabs items={salad} />
            </TabPanel>
            <TabPanel>
              {" "}
              <ShopTabs items={soup} />
            </TabPanel>
            <TabPanel>
              <ShopTabs items={drinks} />
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ShopCategori;
