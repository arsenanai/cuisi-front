<template>
  <aside id="sidebar"
  class="flex flex-row md:flex-col justify-between md:justify-start order-last md:order-first gap-0">
    <SideBarItem
      link="/"
      icon="fa fa-home"
      :title="$t('Home')"
      />
    <SideBarItem
      link="/stock"
      icon="fa fa-th-large"
      :title="$t('Stock')"
      />
    <SideBarItem
      link="/menu"
      icon="fa fa-calendar"
      :title="$t('Menu')"
      />
    <SideBarItem
      link="/messages"
      icon="fa fa-commenting-o"
      :title="$t('Messages')"
      />
  </aside>
</template>

<script>
import SideBarItem from '@/components/SideBarItem.vue';
export default {
  components: {SideBarItem}
}
</script>
