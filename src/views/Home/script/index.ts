import { message } from "ant-design-vue";
import { reactive, ref } from "vue";

export const current = ref<string[]>(['blueprint']);//左边默认选中栏
export const value = ref<string>(''); //搜索框
export const domData = ref('abcdef');//请求结果值

export function clear() {
    value.value = '';
    domData.value = '';
    message.success('清空');
}

/**搜索历史记录的保存 */
export const SearchHistory = reactive({
    history: [] as string[],
    /**添加到本地历史 */
    add(url: string) {
        if (!this.history.includes(url)) {
            this.history.unshift(url);
        }
        localStorage.setItem('search_history', JSON.stringify(SearchHistory.history));
    },
    /**本地获取 */
    getHistory() {
        const arr = localStorage.getItem('search_history');
        if (arr) {
            this.history = JSON.parse(arr);
        }
        return this.history;
    },
    /**删除历史条目 */
    delete(item: string) {
        const idx = this.history.indexOf(item)
        this.history.splice(idx, 1)
        localStorage.setItem('search_history', JSON.stringify(SearchHistory.history));
    }
});