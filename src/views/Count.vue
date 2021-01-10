<template>
  <div class="count pa-6">
    <h1>Count Page</h1>
    <counter />
    <counter-squared/>
    <buttons />
    <colorcode />
  </div>
</template>

<script>
import CounterSquared from '../components/CounterSquared.vue';
export default {
    name: 'Count',
    components: {
        'counter': require('@/components/Counter.vue').default,
        'counter-squared': require('@/components/CounterSquared.vue').default,
        'buttons': require('@/components/Buttons.vue').default,
        'colorcode': require('@/components/ColorCode.vue').default
    }
}
</script>

<style>
    div {
        margin-bottom : 10px;
    }
    .counter {
        font-size: 80px;
    }
    .buttons button {
        font-size: 40px;
        width: 100px;
        margin: 0 10px;
    }
</style>