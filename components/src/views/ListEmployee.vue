<template>
    <div>
        <h1>Listado de empleados</h1>
        <employee/>
    </div>
</template>

<script>
import Employee from '../components/Employee.vue'

export default {
    name: 'ListEmployee',
    components: { Employee }
}
</script>