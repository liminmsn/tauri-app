import { message } from "ant-design-vue";

export function CopyLabel(label: string) {
    window.navigator.clipboard.writeText(label);
    message.success(`已复制:${label}`);
}

export async function SabeTextFile(text: string) {
   
}