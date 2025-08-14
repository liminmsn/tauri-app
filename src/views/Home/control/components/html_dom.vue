<template>
    <div class="html_dom h-full p-2">
        <iframe :srcdoc="prop.data" frameborder="0" class="w-full h-full"></iframe>
    </div>
</template>

<script setup lang="ts">
// import { WebDom } from '@/utility/WebDom';
const prop = defineProps<{ data: string }>();
</script>