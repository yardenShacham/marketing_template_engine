export const domain = {
    local: "http://localhost:8080"
};
export const viewApiRoute = {
    getAllViews: "/views",
    removeView: "/views",
    createNewView: "/views",
    updateViewName: (viewId) => `/views/${viewId}`,
    appendHtmlTemplate: "/views/viewTemplate"
};

export const viewInstanceApiRoute = {
    getAllInstances: (viewId) => `/view-instances?viewId=${viewId}`,
    removeInstance: "/view-instances",
    createNewInstance: "/view-instances",
    updateInstanceName: "/view-instances"
};