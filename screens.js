import {Main} from "./components/Main";
import {FullInfo} from "./components/FullInfo";

export const screens = [
    {
        name: 'Main',
        component: Main,
        options: {
            title: 'Main Page',
            headerStyle: {
                // backgroundColor: '#eb5d3d'
            },
        }
    },
    {
        name: 'Fullinfo',
        component: FullInfo,
        options: {
            title: 'My Contacts'
        }
    }
];