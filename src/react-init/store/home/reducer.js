import * as home from './action-type';

let defaultState = {
    orderSum: '', //金额
    name: '', //姓名
    phoneNo: '', //手机号
    imgpath: '', //图片地址
}
// 首页表单数据
export const formData = (state = defaultState , action = {}) => {
    switch(action.type){

        // 保存表单数据：金额(orderSum)、姓名(name)、手机号(phoneNo)
        case home.SAVEFORMDATA:
            return {...state, ...{[action.datatype]: action.value}};

        // 保存图片地址,上传完成回显 
        case home.SAVEIMG:
            return {...state, ...{imgpath: action.path}};

        // 清空以上保存的资源
        case home.CLEARDATA:
            return {...state, ...defaultState};
            
        default:
            return state;
    }
}

