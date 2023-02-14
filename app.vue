<template>
    <div>
        <NuxtLoadingBar />
        <NuxtPage />
    </div>
</template>

<script setup lang="ts">
import { useDark } from "@vueuse/core";
useDark();
</script>
