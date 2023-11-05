import React, { useState } from 'react';
import { useHistory, useLocation } from "react-router-dom";
import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import Icon from "awesome-react-icons";
const Sidebar=() => {
    const location = useLocation();
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    return (
      <>
      <div
        onClick={() => setIsSidebarOpen(false)}
        className={`fixed inset-0 z-20 block transition-opacity bg-black opacity-50 lg:hidden ${
          isSidebarOpen ? "block" : "hidden"
        }`}
      />
      <div>
        <button
          className="btn-menu"
          onClick={() => setIsSidebarOpen(true)}
          type="button"
        >
          <Icon name="burger" className="w-6 h-6" />
        </button>
      </div>
        <Navigation
            // you can use your own router's api to get pathname
           
            
            items={[
              {
                title: '이벤트',
                itemId: '/event',
                // you can use your own custom Icon component as well
                // icon is optional
                elemBefore: () => <Icon name="inbox" />
              },
              {
                title: '마이 페이지',
                itemId: '/mypage',
                elemBefore: () => <Icon name="user" />
                // subNav: [
                //   {
                //     title: 'Projects',
                //     itemId: '/management/projects',
                //   },
                //   {
                //     title: 'Members',
                //     itemId: '/management/members',
                //   },
                // ],
              },
              {
                title: 'Another Item',
                itemId: '/another',
                subNav: [
                  {
                    title: 'Teams',
                    itemId: '/management/teams',
                  },
                ],
              },
            ]}
          />
      </>
    );
};
export default Sidebar;