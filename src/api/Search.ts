import { NetBase } from "./net/NetBase";

export function search(query: string) {
    const net = new NetBase("/search.php");
    return new Promise((resolve, reject) => {
        net.post(`q=${query}&remote_ip=&time_int=${Date.now()}`);
        net.send(res => {

        })

    });
}