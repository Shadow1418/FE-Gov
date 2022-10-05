<template>
    <div>
        <div class="check-box icon-check-box" @keyup.enter="checkBoxOnClick" @click="checkBoxOnClick"
            :class="{'check-box--active'  : isCheckBox }"></div>
    </div>
</template>
<script>
export default {
    props: ["isCheckBoxAll"],
    data() {
        return {
            isCheckBox: false,
        }
    },
    watch:{
        isCheckBoxAll(){
            this.isCheckBox = this.isCheckBoxAll ;
        },
    },
    methods: {
        checkBoxOnClick() {
            this.isCheckBox = !this.isCheckBox;
        }
    },

}
</script>
<style>
.check-box {
    margin: auto;
    height: 16px;
    width: 16px;
    background-repeat: no-repeat;
    background-size: contain;
}

.row-selected {
    background-color: #CCE8FF;
}
</style>