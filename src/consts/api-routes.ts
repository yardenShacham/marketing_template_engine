export const domain = {
    local: "http://localhost:8080"
};
export const viewApiRoute = {
    getAllViews: "/views",
    getViewStyles: (viewId) => `/views/${viewId}/styles`,
    removeView: "/views",
    createNewView: "/views",
    updateViewName: (viewId) => `/views/${viewId}`,
    appendHtmlTemplate: (viewId) => `/views/${viewId}/viewTemplate`,
    appendStyles: (viewId) => `/views/${viewId}/viewStyles`,
    appendJs: (viewId) => `/views/${viewId}/viewBehavior`,
};

export const viewInstanceApiRoute = {
    getAllInstances: (viewId) => `/view-instances/${viewId}`,
    removeInstance: "/view-instances",
    createNewInstance: "/view-instances",
    updateInstanceName: "/view-instances",
    updateRoute: "/view-instances/route"
};

export const viewInstanceContentApiRoutes = {
    getHtmlContent: (viewId, instanceId) => `/instance-conetnt/${viewId}/${instanceId}/preview`,
    updateContentParams: (viewId, instanceId) => `/instance-conetnt/${viewId}/${instanceId}`
};