import * as React from "react";
import {forEach} from 'lodash';
import {ELEMENT_TYPES, GENERAL_SETTINGS} from "../consts/general-settings";
import {appServices} from "../consts/appServices";
import {appInjector} from "../core/appInjector";
import {UploadImgViewer} from "../common/upload-img-viewer";
import {Intractionable} from "../common/intractionable";

const loadIntractionableComponent = (elementType, elementTypes) => {
    let intractionableComponent = null;
    const selector = `*[class*='-${elementType}']`;
    const innerHTML = appInjector.get(appServices.domManipulationService).getInnerHTML(selector);
    switch (elementType) {
        case elementTypes[ELEMENT_TYPES.container]:
            intractionableComponent = (
                <Intractionable
                    onDrag={(e) => {
                        console.log(e.target);
                    }}
                    onResize={(e) => {
                        console.log(e.target);
                    }}>>
                    {innerHTML || null}
                </Intractionable>
            );
            break;
        case elementTypes[ELEMENT_TYPES.image]:
            intractionableComponent = (
                <UploadImgViewer onUploadImg={(imgSrc) => console.log(imgSrc)}
                                 imageSrc={innerHTML}/>
            );
            break;
        case elementTypes[ELEMENT_TYPES.text]:
            intractionableComponent = (
                <Intractionable
                    onDrag={(e) => {
                        console.log(e.target);
                    }}
                    onResize={(e) => {
                        console.log(e.target);
                    }}>>
                    {innerHTML || null}
                </Intractionable>
            );
            break;
        case elementTypes[ELEMENT_TYPES.list]:
            break;
    }
    appInjector.get(appServices.domManipulationService)
        .findAndRender(selector, intractionableComponent);
};

export const loadIntractionableComponents = () => {
    const settings = appInjector.get(appServices.generalSettingsService).getSettings([GENERAL_SETTINGS.elementTypes]);
    forEach(settings.ELEMENT_TYPES_TO_CODES, (val, key) => {
        loadIntractionableComponent(val, settings.ELEMENT_TYPES_TO_CODES);
    });
};