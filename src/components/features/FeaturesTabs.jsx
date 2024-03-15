import { TABS_DATA } from './featuresData';

// Color Highlight the active tab bottom border
const highlightTab = (tabID) =>
  activeTab === tabID ? 'border-b-4 border-softRed' : '';

//  get the panelID from the tabID, which is the same as the tabID without the 'tab-' prefix
const getPanelIDFromTabID = (tabID) => `panel-${tabID.split('-')[1]}`;

// List of tabs component
const FeaturesTabs = ({ activeTab, handleClickOnTab }) => {
  const highlightTab = (tabID) =>
    activeTab === tabID ? 'border-b-4 border-softRed' : '';

  return (
    <div className='flex flex-col justify-center max-w-xl mx-auto mb-6 border-b md:flex-row md:space-x-10'>
      {TABS_DATA.map(({ tabID, title }) => {
        // ===<< save panelID to const from getPanelIDFromTabID function >>===
        const panelID = getPanelIDFromTabID(tabID);
        return (
          <Tab
            key={tabID}
            tabID={tabID}
            title={title}
            highlightTab={highlightTab(tabID)}
            onClick={() => handleClickOnTab(tabID, panelID)}
          />
        );
      })}
    </div>
  );
};

// Individual Tab component
const Tab = ({ tabID, highlightTab, title, onClick }) => {
  return (
    <div
      id={tabID}
      className='flex justify-center text-center cursor-pointer text-gray-600 
                   border-b md:border-b-0 hover:text-softRed md:w-1/3 tab'
    >
      <div className={`py-5 ${highlightTab}`} onClick={onClick}>
        {title}
      </div>
    </div>
  );
};
export default FeaturesTabs;
