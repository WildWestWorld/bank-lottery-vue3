//存储初值
const state = () => ({
    test: '测试'
});
//存储被函数处理后的值
const getters = {

};
//vuex为了解决mutations只有同步的问题,提出了actions(异步),专门用来解决mutations只有同步无异步的问题.
//用于改变数据(异步)
const actions = {


};

//用于改变数据(同步) mutations只有同步
const mutations = {

};

export default {
    namespace: true,
    state,
    getters,
    actions,
    mutations,
}


