import { Example } from '../components/Tabs/Tabs'
import {Tabs, Tab} from 'react-vaadin-components';

export function HeaderView () {
    const style = {
        
    }
    return (
        <div style={style}>
            <p style={{marginTop: 0}}>Academy Management Platform</p>
            <Tabs>
                <Tab>Details</Tab>
                <Tab>About</Tab>
                <Tab>Search</Tab>
            </Tabs>
        </div>
    );
}