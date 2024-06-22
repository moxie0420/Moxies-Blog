<script setup lang="ts">
const links = [
    {
        label: "Home",
        to: "/"
    },
    {
        label: "About",
        to: "/about"
    },
    {
        label: "projects",
        to: "/projects"
    },
    {
        label: "blog",
        to: "/blog"
    }
]
</script>

<template>
    <UHorizontalNavigation :links="links" class="border-b border-gray-200 dark: border-gray-800" />
</template>