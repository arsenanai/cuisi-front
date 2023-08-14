<template>
    <RouterLink 
        class="flex-1 md:flex-none flex flex-col md:flex-row items-center justify-center md:justify-start
        text-center md:text-left py-2 md:py-0 md:pt-3 lg:pt-4 md:px-3 lg:px-4"
        :to="link">
        <i class="w-4 md:mr-2" :class="icon"></i>
        <span class="text-sm md:text-base">{{ title }}</span>
    </RouterLink>
</template>

<script>
import { RouterLink } from 'vue-router';
export default {
    components: [RouterLink],
    name: 'SideBarItem',
    props: {
        link: {
            required: true,
            type: String,
        },
        title: {
            required: true,
            type: String,
        },
        icon: {
            type: String,
        }
    }
}
</script>