export class StyleService {

    setStyleListener(styleVarName: string, getValue: any) {
        if (styleVarName && getValue)
            document.documentElement.style.setProperty(styleVarName, getValue());
    }

    setElementStyleListener(element: any, styleVarName: string, getValue: any) {
        if (styleVarName && getValue)
            element.style.setProperty(`--${styleVarName}`, getValue());
    }

    getElementStyle(element: any, styleVarName: string) {
        return element.style.getPropertyValue(styleVarName);
    }

    loadDynamicStyles(styles, id) {
        const styleElement: any = document.createElement('style');
        if (id)
            styleElement.id = id;
        styleElement.rel = 'stylesheet';
        styleElement.innerHTML = styles;
        document.getElementsByTagName('head')[0].appendChild(styleElement);
    }

    removeDynamicStyles(id) {
        document.getElementById(id).remove();
    }
}