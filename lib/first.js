export const stopAnimation = () => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 2000);
    });
};
