import * as React from "react";
import ReactHtmlParser from 'react-html-parser';
import {template,templateSettings} from 'lodash';

export class EditPreview extends React.Component<any> {

    componentDidMount() {
        templateSettings.interpolate = /{([\s\S]+?)}/g;
    }

    render() {
        const {viewInfo, viewTemplate} = this.props;
        const htmlTemplate =template(viewTemplate);
        return (
            <div className="preview-container">
                {viewInfo && ReactHtmlParser(htmlTemplate(viewInfo.content))}
            </div>);

    }
}