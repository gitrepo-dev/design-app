
  /**
   * get productCustomizeProps
   * @param {''}
   * @returns {null}
   */

   export const getProductCustomizePropsService = async (): Promise<object> => {
    try {
        const res = await fetch('/api/end/point');
        return await res.json()
    } catch (e) {
        throw e
    }
};