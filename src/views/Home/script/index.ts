import { reactive, ref } from "vue";

export const current = ref<string[]>(['text']);


/**搜索历史记录的保存 */
export const SearchHistory = reactive({
    history: ['https://www.acfun.cn/bangumilist', 'https://www.acfun.cn/bangumilist', 'https://www.acfun.cn/bangumilist', 'www.baidu.com'] as string[],
    /**添加到本地历史 */
    add(url: string) {
        if (!SearchHistory.history.includes(url)) {
            SearchHistory.history.unshift(url);
        }
        localStorage.setItem('search_history', JSON.stringify(SearchHistory.history))
    },
    /**本地获取 */
    getHistory() {
        const arr = localStorage.getItem('search_history');
        if (arr) {
            SearchHistory.history = JSON.parse(arr);
        }
        return SearchHistory.history;
    }
});