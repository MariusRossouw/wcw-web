<template>
    <div>
        <h3>Address {{count}}</h3>
        <select v-model="address.address_type_id">
            <option v-for="(item, index) in itemdata"  :key="index" :value="item.id"> {{ item.description }} </option>
        </select>
        <input type="text" placeholder="City/Town" v-model="address.city">
        <input type="text" placeholder="Street" v-model="address.street">
        <button @click="removeAddressItem()"> X </button>
    </div>
</template>

<script>
export default {
    props: ['itemdata', 'address', 'count'],
    data() {
        return {
            selected: this.itemdata[0]
        }
    },
    methods: {
        removeAddressItem() {
            this.$emit('removeAddressItem');
        }
    }
}
</script>

<style>

</style>
