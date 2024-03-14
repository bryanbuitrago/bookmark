'use client';
import { useState } from 'react';
import FeaturesPanels from './FeaturesPanels';
import FeaturesTabs from './FeaturesTabs';

const FeaturesTabsPanels = () => {
  const [activeTab, setActiveTab] = useState('tab-1');
  const [activePanel, setActivePanel] = useState('panel-1');

  const handleClickOnTab = (tabID, panelID) => {
    setActiveTab(tabID);
    setActivePanel(panelID);
  };

  return (
    <>
      <FeaturesTabs activeTab={activeTab} handleClickOnTab={handleClickOnTab} />
      <FeaturesPanels activePanel={activePanel} />
    </>
  );
};

export default FeaturesTabsPanels;
