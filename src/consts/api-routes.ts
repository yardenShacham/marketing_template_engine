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
    getAllInstances: (viewId) => `/view-instance?viewId=${viewId}`,
    removeInstance: "/view-instance",
    createNewInstance: "/view-instance"
};