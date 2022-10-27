<template>
    <div class="logo">
        <img src="@/assets/vue.svg" alt="">
        <h2 v-show="!collapsed" class="title">vue3-admin</h2>
    </div>
</template>

<script setup lang="ts">
    defineProps({
        collapsed:{
            type:Boolean
        }
    })
</script>

<style lang="scss" scoped>
.logo {
    display: flex;
    align-items: center;
    padding-left: 14px;
    height: 64px;
    overflow: hidden;
    // 不换行
    white-space: nowrap;
    .title {
        font-size: 20px;
        color: white;
        // 让字贴底边
        margin-bottom: 0;
    }
}
</style>