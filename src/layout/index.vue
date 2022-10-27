<template>
  <div class="layout">
    <el-container>
      <el-aside :style="'width:' + autoWidth">
        <logoBar :collapsed="collapsed"></logoBar>
        <menuBar :collapsed="collapsed"></menuBar>
      </el-aside>
      <el-container>
        <el-header>
          <el-row>
            <!-- 公共组件，根据参数显示对应的图标组件 -->
            <el-icon style="font-size: 26px" @click="()=>(collapsed = !collapsed)">
              <component :is="collapsed ? Expand : Fold"></component>
            </el-icon>
          </el-row>
        </el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import LogoBar from './components/LogoBar/index.vue';
import MenuBar from './components/MenuBar/index.vue'
import {Expand,Fold} from '@element-plus/icons-vue'
import { computed, ref } from 'vue';
import { isMobile } from '../utils/isMobile';

const collapsed = ref<boolean>(false)
//移动端收纳完全隐藏，电脑端64px,展开为200px
const autoWidth = computed(() => {
  if(collapsed.value && isMobile()) {
    return '0px'
  } else if(collapsed.value){
    return '64px'
  }else {
    return '200px'
  }
})


</script>

<style lang="scss">
.layout {
    display: flex;
    height: 100vh;
    
    .el-header {
        display: flex;
        align-items: center;
        background-color: #b3c0d1;
        color: var(--el-text-color-primary);
        margin: 0;
    }

    .el-aside {
        background-color: $menuBg;
        color: var(--el-text-color-primary);
        margin: 0;
        overflow: hidden;
    }

    .el-main {
        background-color: #e9eef3;
    }
}
</style>