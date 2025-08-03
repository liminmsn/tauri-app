import { search, Source } from "@/api/Search";
import { ref } from "vue";

export const home = {
    label: ref(''),
    labelHistory: ref<string[]>([]),
    dataArr: ref<Source[]>([]),
    loding: ref(false),
    search_(query?: string) {
        if (query) {
            home.label.value = query;
        }
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