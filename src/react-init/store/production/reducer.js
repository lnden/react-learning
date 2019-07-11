import * as pro from './action-type';
import Immutable from 'immutable';

let defaultState = {
    /**
     * 商品数据
     * @type {Array}
     * example: [{
     *    product_id: 1, 商品ID 
     *    product_name: "PaiBot（2G/32G)", 商品名称
     *    product_price: 2999, 商品价格
     *    commission: 200, 佣金
     *    selectStatus: false, 是否选择
     *    selectNum: 0, 选择数量
     * }]
     */
    dataList: [],
    type:'GETPRODUCTION'
}

export const proData = (state = defaultState, action) => {
    let imuDataList;
    let imuItem;
    switch(action.type){
        // 获取产品列表
        case pro.GETPRODUCTION:
            // action = { dataList: [],type:'GETPRODUCTION'}
            return {...state, ...action}

        case pro.TOGGLESELECT:
            // action = {type: "TOGGLESELECT", index: 0}

            // 避免引用类型数据，使用immutable进行数据转换 
            imuDataList = Immutable.List(state.dataList);

            // 获取传递过来下标的这个条数据
            imuItem = Immutable.Map(state.dataList[action.index]);

            // 设置这条数据的'selectStatus'的值，赋值并且取反
            imuItem = imuItem.set('selectStatus', !imuItem.get('selectStatus'));
   
            // 然后在重新设置list里面对应下标值
            imuDataList = imuDataList.set(action.index, imuItem);
            // redux必须返回一个新的state
            return {...state, ...{dataList: imuDataList.toJS()}};

        case pro.EDITPRODUCTION:
            // action {type: "EDITPRODUCTION", index: 0, selectNum: 1}

            // 避免引用类型数据，使用immutable进行数据转换 
            imuDataList = Immutable.List(state.dataList);

            // 过程如上选择商品，同样是设置当前选中数据的'selectNum'的数量
            imuItem = Immutable.Map(state.dataList[action.index]);
            imuItem = imuItem.set('selectNum', action.selectNum);
            imuDataList = imuDataList.set(action.index, imuItem);
            // redux必须返回一个新的state
            return {...state, ...{dataList: imuDataList.toJS()}};

        // 清空数据
        case pro.CLEARSELECTED:
            // action {type: "CLEARSELECTED"}
            
            // 避免引用类型数据，使用immutable进行数据转换 
            imuDataList = Immutable.fromJS(state.dataList);

            // 循环产品列表选择商品设置为false，选择数量设置0
            for (let i = 0; i < state.dataList.length; i++) {
                imuDataList = imuDataList.update(i, item => {
                    item = item.set('selectStatus', false);
                    item = item.set('selectNum', 0);
                    return item
                })
            }
            return {...state, ...{dataList: imuDataList.toJS()}};
        default: 
            return state;
    }
}