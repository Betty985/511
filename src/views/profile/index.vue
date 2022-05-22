<script setup lang="ts"></script>

<template>
  <div>
    profile
    <div>
      <el-pagination
        :page-sizes="[100, 200, 300, 400]"
        layout="sizes, prev, pager, next"
        :total="1000"
      />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
