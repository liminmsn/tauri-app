<template>
  <div class="w-full h-full flex pt-1">
    <Card class="card_0 p-2">
      <Card class="mb-2 w-60 h-40" size="small">
        <p>{{ label }}</p>
      </Card>
      <Button type="primary" @click="open()">GO</Button>
    </Card>
    <Card class="card_1 flex-1 ml-1">123</Card>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Button } from "ant-design-vue";
import { NetBase } from "@/api/net/NetBase";
import Card from "ant-design-vue/es/card/Card";
const label = ref('');
const net = new NetBase("/init_hubs.php").post(`q=小草&remote_ip=&time_int=${Date.now()}`);
function open() {
  net.send(async (res) => {
    label.value = await res.text()
  })
}
</script>

<style scoped>
.card_0  {
  border-top-right-radius: 0;
  border-top-left-radius: 0;
  border-bottom-right-radius: 0;
}
.card_1  {
  border-top-right-radius: 0;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
</style>