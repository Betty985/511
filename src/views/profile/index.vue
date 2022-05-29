<script setup lang="ts"></script>

<template>
  <div>
    profile
    <el-row>
      <el-button>Default</el-button>
      <el-button type="primary">Primary</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
    </el-row>
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
