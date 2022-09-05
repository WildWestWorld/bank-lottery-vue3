
import Cookies from 'js-cookie';

const state = () => ({
    remainLotteryNum: Cookies.get('remainLotteryNum') || 3
});
//当state里面的值变化的时候
const getters = {

};
//用于异步操作
const actions = {

};
//用于同步
const mutations = {
    changeRemainLotteryNumState: (state, newNum) => {
        
        state.remainLotteryNum = newNum
        Cookies.set('remainLotteryNum', newNum)
    }


}

export default {
    namespace: true,
    state,
    getters,
    actions,
    mutations,

}

