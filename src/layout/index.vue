<template>
  <div class="layout">
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss">
.layout {
    display: flex;
    height: 100vh;
    
    .el-header {
        background-color: #b3c0d1;
        color: var(--el-text-color-primary);
        margin: 0;
    }

    .el-aside {
        background-color: #d3dce6;
        color: var(--el-text-color-primary);
        margin: 0;
    }

    .el-main {
        background-color: #e9eef3;
    }
}
</style>