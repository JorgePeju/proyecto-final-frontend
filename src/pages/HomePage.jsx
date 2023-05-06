import { useState } from 'react';
import { MapContainerComp } from '../components/MapContainerComp';
import { UserPanel, FilterPanel } from '../components/user/';
import { MarkerProvider } from '../context/MarkerProvider';

export const HomePage = () => {
  
  const [leftPanelVisible, setLeftPanelVisible] = useState(true);
  const [rightPanelVisible, setRightPanelVisible] = useState(true);


  return (

    <MarkerProvider>
      <FilterPanel leftPanelVisible={leftPanelVisible} setLeftPanelVisible={setLeftPanelVisible} />
      <UserPanel rightPanelVisible={rightPanelVisible} setRightPanelVisible={setRightPanelVisible}/>
      <MapContainerComp />
    </MarkerProvider>
    
  );
};

