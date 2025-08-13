<template>
    <div class="html_img grid grid-cols-8">
        <div v-for="item in imgs" class="max-w-20 shadow-md transform-scale-95">
            <Image :src="item" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { WebDom } from '@/utility/WebDom';
import { Image } from 'ant-design-vue';
import { onMounted, ref } from 'vue';
const prop = defineProps<{ data: string }>();
const imgs = ref();
onMounted(() => {
    console.log(new WebDom(prop.data).dom.getElementsByTagName('img'));
    imgs.value = Array.of(...new WebDom(prop.data).dom.getElementsByTagName('img')).map(img => img.src)
})
</script>