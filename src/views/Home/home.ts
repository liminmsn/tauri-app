import { search, Source } from "@/api/Search";
import { ref } from "vue";

export const home = {
    label: ref(''),
    labelHistory: ref<string[]>(['西游记', '道德经']),
    dataArr: ref<Source[]>([]),
    loding: ref(false),
    search_(query?: string) {
        if (query) {
            home.label.value = query;
        }
        if(!home.label.value) return;
        home.dataArr.value = [];
        home.loding.value = true;
        search(home.label.value).then(val => {
            home.dataArr.value = val?.sources || [];
            home.loding.value = false;

            home.delLabelHistory(home.label.value);
            home.labelHistory.value.unshift(home.label.value);
        })
    },
    delLabelHistory(labal: string) {
        if (home.labelHistory.value.includes(labal)) {
            const idx = home.labelHistory.value.indexOf(labal);
            home.labelHistory.value.splice(idx, idx + 1);
        }
    }
}