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