import { NetBase } from "./net/NetBase";


export function search(query: string) {
    const net = new NetBase();
    return new Promise<SearchResultData | null>((resolve, reject) => {
        net.post(`q=${query}&remote_ip=&time_int=${Date.now()}`);
        net.send("/init_hubs.php", res => res.json().then((data: SearchResult) => {
            net.post(`id=${data.id}&set=${data.count}`);
            net.send("/ajax_fetch_hubs.php", res_ => res_.json().then((data: SearchResultData) => {
                resolve(data)
            }))
        }));
    });
}


type SearchResult = {
    status: string;
    count_total: number;
    sources: any[];
    id: string;
    count: number;
}

export type SearchResultData = {
    status: string;
    status_extra: string;
    log: string;
    count: number;
    sources: Source[];
}

export interface Source {
    view_type: string;
    view_type_sidebar_priority: number;
    view_host: string;
    view_host_link: string;
    details: Details;
    info: string;
}

interface Details {
    status: string;
    data: Datum2[];
    log: string;
    duration: string;
}

interface Datum2 {
    link?: string;
    title: string;
    des?: string;
    validate_status?: number;
    v_des?: string;
    rate_summary?: number;
    host?: string;
    cat?: string;
    subcat?: string;
    author?: string;
    listen_count?: number;
    img_link?: string;
    priority?: number;
    data?: Datum[];
}

interface Datum {
    link: string;
    title: string;
    des: string;
    v_des: string;
    rate_summary: number;
    host: string;
}