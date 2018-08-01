export const domain = {
    local: "http://localhost:8080"
};
export const viewApiRoute = {
    getAllViews: "/views",
    removeView: "/views",
    addNewView: "/views",
    updateViewName: (viewId) => `/views/${viewId}`
};