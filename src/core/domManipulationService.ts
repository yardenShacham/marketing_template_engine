import {render} from 'react-dom';

export class DomManipulationService {


    getInnerHTML(selector) {
        const node = document.querySelector(selector);
        return node ? node.innerHTML : null;
    }

    findAndRender(selector, jsx) {
        const nodes = document.querySelectorAll(selector);
        if (nodes && nodes.length > 0) {
            for (let i = 0; i < nodes.length; i++) {
                render(jsx, nodes[i]);
            }
        }
    }
}