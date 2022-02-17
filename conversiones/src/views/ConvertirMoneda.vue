<template>
    <div>
        <h1>Convertir Moneda</h1>
        <moneda-conversion/>
    </div>
</template>

<script>
import MonedaConversion from '../components/Moneda.vue'

export default {
    name: 'ConvertirMondeda',
    components: { MonedaConversion }
}
</script>