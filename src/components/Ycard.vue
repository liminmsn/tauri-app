<template>
    <div class="book_card" :style="{ '--color': rdmColor() }">
        <a :href="item.details.data[0].link" target="_blank">
            <div class="book_center">
                <div class="book text-center pb-2 flex flex-col justify-between">
                    <div class="w-full h-14  text-black overflow-hidden p-2 bg-white" style="font-size: 8pt;line-height: 1.2;">
                        {{ item.details.data[0].title }}
                    </div>
                    <span class="text-white font-bold" style="font-size: 5pt;">
                        {{ item.details.data[0].rate_summary }}
                    </span>
                </div>
                <div class="book"></div>
                <div class="book_border"></div>
            </div>
        </a>
    </div>
</template>
<script setup lang="ts">
import { Source } from '@/api/Search';
import { rdmColor } from '@/theme';
const { item } = defineProps<{ item: Source }>();
</script>

<style scoped>
.book_card {
    perspective: 600px;
    position: relative;
    --h: 18;
    /* --color: yellowgreen; */
    --color_1: rgb(241, 241, 241);
    --height: 150px;
}

.book_center {
    cursor: pointer;
    user-select: none;
    position: relative;
    width: 120px;
    height: var(--height);
    transform-style: preserve-3d;
    transform: rotateY(-30deg) rotateX(0deg);
    transition: all 0.5s;

    &:hover {
        transform: rotateY(0deg) rotateX(0deg);
    }
}

.book {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    overflow: hidden;
    position: absolute;
    width: inherit;
    height: inherit;
    background-color: var(--color);
    transition: all 0.5s;

    &:nth-child(2) {
        z-index: -1;
        background-color: var(--color);
        transform: translateZ(calc(var(--h) * -1px));
    }
}

.book_border {
    position: absolute;
    background-color: var(--color_1);
    height: calc(var(--height) - 4px);
    width: calc(var(--h) * 1px);
    transform: rotate3d(0, 1, 0, 90deg) translateX(10px) translateZ(106px) translateY(2px);
}

.book_center:hover .book {
    transform: scale(1.05);
    transform: all 0.2s ease-in;
    box-shadow: 0 0 calc(var(--h) * 1px) rgba(0, 0, 0, 0.2);
}

.book_center:hover .book:nth-child(2) {
    transform: all 0.5s ease-in;
    opacity: 0;
}
</style>