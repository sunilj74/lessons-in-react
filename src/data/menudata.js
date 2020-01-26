//@flow
import type { 
    MenuType 
} from '../types/datatypes';

export const MENUDATA: Array<MenuType> = [
    {
        name: 'hoc',
        path: '/hoc',
        text: 'High Order Component',
        description: 'A higher-order component (HOC) is an advanced technique in React for reusing component logic. HOCs are not part of the React API, per se. They are a pattern that emerges from React’s compositional nature'
    },
    {
        name: 'renderprops',
        path: '/renderprops',
        text: 'Render Props',
        description: 'The term “render prop” refers to a technique for sharing code between React components using a prop whose value is a function. A component with a render prop takes a function that returns a React element and calls it instead of implementing its own render logic.'
    }
];


