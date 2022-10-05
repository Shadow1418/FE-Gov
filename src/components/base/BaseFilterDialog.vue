<template >
    <div class="dialog-filter-container">
        <div class="dialog-filter__header">
            <div class="dialog-filter__header__title">Lọc danh hiệu</div>
            <button @click="btnCloseFilterOnClick" class="btn-close icon-24 "></button>
        </div>
        <div class="dialog-filter__body">
            <div class="dialog-filter__body__item">
                <span class="label">Đối tượng khen thưởng</span>
                <BaseCombobox :filterCombobox="rewardObject" />
            </div>
            <div class="dialog-filter__body__item">
                <span class="label">Cấp khen thưởng</span>
                <BaseCombobox :filterCombobox="rewardLevel"/>
            </div>
            <div class="dialog-filter__body__item">
                <span class="label" :filterCombobox="typeOfMovement">Loại phong trào</span>
                <BaseCombobox/>
            </div>
            <div class="dialog-filter__body__item">
                <span class="label" :filterCombobox="usingStatus">Trạng thái</span>
                <BaseCombobox/>
            </div>
        </div>
        <div class="dialog-filter__footer">
            <button class="btn btn-cancel"  @click="btnCloseFilterOnClick" style="margin-right:10px ;">Hủy</button>
            <button class="btn" @click="confirmFilterOnClick">Áp dụng</button>
        </div>
    </div>
</template>
<script>
import BaseCombobox from './BaseCombobox.vue';
export default {
    data() {
        return {
            rewardObject: ["Tất cả", "Gia đình", "Tập thể", "Cá nhân", "Cá nhân và tập thể"],
            rewardLevel:["Cấp Nhà nước", "Cấp Tỉnh/tương đương", "Cấp Huyện/tương đương", "Cấp Xã/tương đương"],
            typeOfMovement: ["Tất cả", "thường xuyên", "Theo đợt"],
            usingStatus: ["Tất cả", "Sử dụng", "Ngưng sử dụng"],
            conditionsFilter: [],
        }
    },
    methods: {
        btnCloseFilterOnClick() {
            this.$emit("closeFilterOnClick", false);
        },
        confirmFilterOnClick(){

        }
    },
    components: { BaseCombobox }
}
</script>
<style >
.dialog-filter-container {
    position: absolute;
    width: 360px;
    height: auto;
    border-radius: 4px;
    background-color: #ffffff;
    box-shadow: 0 1px 2px 2px rgb(0 0 0 / 10%);
    top: 50px;
    left: 0px;
    z-index: 1;
}

.dialog-filter-container::before {
    content: "";
    display: block;
    height: 10px;
    width: 10px;
    position: absolute;
    background-color: #ffffff;
    top: -5px;
    right: 12px;
    transform: rotate(45deg);
    ;
}

.dialog-filter__header {
    width: 100%;
    padding: 12px 22px 8px 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.dialog-filter__header__title {
    font-size: 18px;
    font-weight: 700;
}

.dialog-filter__body {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 12px 24px 10px;
}
.dialog-filter__body__item{
    height: 64.6px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 14px;
}

span {
    padding: 8px 8px 0 0;
    color: #666;
}

.dialog-filter__footer {
    height: 60px;
    padding: 12px 24px;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
    border-top: 1px solid #ddd;
    background-color: #fbfbfe;
    display: flex;
    justify-content: flex-end;
}

.btn-cancel {
    border: 1px solid #e0e1ef;
    color: #121212;
    background: #fff;
    padding: 9px 16px;
}

.label{
    color: #707070;
    font-size: 14px;
    font-weight: 500;
    /* margin-bottom: 10px; */
}   
span{
}
</style>