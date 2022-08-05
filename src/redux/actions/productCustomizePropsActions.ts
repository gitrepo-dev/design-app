import Types from 'redux/types/productCustomizePropsTypes';

/***
  * loading
  * @param {'string, boolean'}
  * @return {'true/false'}
  * 
***/
export const onProductCustomizePropsLoading = (data: string, status: boolean) => ({
    type: Types.PRODUCTCUSTOMIZEPROPS_LOADING,
    payload: {
        data,
        status
    }
});

/***
 * get the productCustomizeProps
 * @param {''}
 * @return {'data'}
 * 
***/
export const onGetProductCustomizeProps = () => ({
    type: Types.GET_PRODUCTCUSTOMIZEPROPS,
    payload: []
});