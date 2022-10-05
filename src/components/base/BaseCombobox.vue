<template>
    <div class="combobox ">
        <input v-model="itemSelected" class="input" tabindex="5"/>
        <div class="icon-down-container">
            <div @click="isShowListCombobox = ! isShowListCombobox" class=" icon-down icon-24"></div>
        </div>
        <div  class="combobox__list-item" v-show="isShowListCombobox">
            <div  v-for="item in items" :key="item" class="combobox__item page-size-item btn-page-check"  @click="itemFilterOnClick(item)">{{item}}</div>
        </div>
    </div>
</template>

<script>

export default {
    name: "ComboboxComponent",
    props: ["filterCombobox"],
    data() {
        return {
            isShowListCombobox : false,
            items: ["Tất cả", "Gia đình", "Tập thể", "Cá nhân", "Cá nhân và tập thể"],
            itemSelected : "Tất cả",
        }
    },
    methods: {
        itemFilterOnClick(item){
            this.itemFilter = [],
            this.itemSelected = item;
            this.isShowListCombobox = false;
        }
    },
    created() {
        // this.items = this.filterCombobox;
    },

}
</script>

<style>
.itemOnFocus {
    background-color: #E5F3FF;
}
.combobox{
    border: 1px solid #e0e0e0;
    position: relative;
}
.combobox input{
    outline: none;
    border: none;
}
.icon-down-container{
    width: 34px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.btn-down{
    height: 100%;
    width: 34px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.combobox__list-item{
    width: 100%;
    padding: 8px;
    background-color: #ffffff;
    box-shadow: 0 4px 16px rgb(0 0 0 / 24%);
    position: absolute;
    top: 38px;
    display: flex;
    flex-direction: column;
    border-radius: 3.5px;
    z-index: 1;
}
.combobox__item{
    line-height: 36px;
    border-radius: 4px;
    padding: 0 8px;
    /* margin: 0 0 0 8px; */
    cursor: pointer;
}
.combobox__item:hover{
    background: #e8f5f7;
}
.item-selected{
    background: #e8f5f7;
}
</style>