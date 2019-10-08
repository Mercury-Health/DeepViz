import React from 'react';
import Dropdown from '../modules/Dropdown';
import ArchitectureOptions from '../resources/ArchitectureOptions';
import {
    Button, 
  } from 'semantic-ui-react';

const ArchitectureMenu = () => {
    return (
        <Dropdown placeholder='Architecture' options={ArchitectureOptions}/>

    );
};

export default ArchitectureMenu;