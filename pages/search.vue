<script setup lang="ts">
const search = ref('')

const results = searchContent(search)
</script>

<template>
    <div>
        <input v-model="search">

        <pre>{{ results }}</pre>
    </div>
</template>