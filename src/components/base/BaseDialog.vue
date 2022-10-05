<template >
    <div class="dialog" @keyup.esc="btnCloseOnClick">
        <div class="dialog-content">
            <div class="dialog__header">
                <div class="dialog__header__left">Thêm danh hiệu thi đua </div>
                <div class="dialog__header__right">
                    <div class="btn-container">
                        <div class="header__right__icon-ask icon-24"></div>
                    </div>
                    <div class="btn-container">
                        <button @click="btnCloseOnClick" class="btn-close icon-24 "></button>
                    </div>
                </div>
            </div>
            <div class="dialog__body">
                <div class="label">Tên danh hiệu thi đua <i style="color: red;">*</i></div>
                <input tabindex="1" ref="emulationName" class="input input-emulation-name"
                    placeholder="Nhập tên danh hiệu thi đua" />
                <div v-show="false" style="color: #e61d1d; margin-top: 6px;">Tên danh hiệu thi đua không được để trống.
                </div>
                <div class="dialog__body__list-item">
                    <div class="dialog__body__item__left">
                        <div class="label">Mã danh hiệu <i style="color: red;">*</i></div>
                        <input tabindex="2" class="input input-emulation-code" placeholder="Nhập mã danh hiệu" />
                        <div v-show="false" style="color: #e61d1d; margin-top: 6px;">Mã danh hiệu không được để trống.
                        </div>
                    </div>
                    <div class="dialog__body__item__right">
                        <div class="label">Đối tượng khen thưởng <i style="color: red;">*</i></div>
                        <div class="check-box-container">
                            <div class="check-box-item__left">
                                <BaseCheckBox tabindex="3" />
                                <div class="check-box-item"> Cá nhân</div>
                            </div>
                            <div class="check-box-item__right">
                                <BaseCheckBox tabindex="4" />
                                <div class="check-box-item"> Tập thể</div>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="dialog__body__list-item">
                    <div class="dialog__body__item__left">
                        <div class="label" style="margin-bottom:8px ;">Cấp khen thưởng <i style="color: red;">*</i>
                        </div>
                        <BaseCombobox />
                    </div>
                    <div class="dialog__body__item__right">
                        <div class="label">Loại phong trào áp dụng <i style="color: red;">*</i></div>
                        <div class="check-box-container">
                            <div class="check-box-item__left">
                                <BaseCheckBox tabindex="6" />
                                <div class="check-box-item"> Thường xuyên</div>
                            </div>
                            <div class="check-box-item__right">
                                <BaseCheckBox tabindex="7" />
                                <div class="check-box-item"> Theo đợt</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="dialog__body__note">
                    <div class="label" style="margin-bottom:8px ;"> Ghi chú</div>
                    <!-- <input class="input" type="text" style="height: 100px; width: 100%;" name="" id=""> -->
                    <textarea name="" tabindex="8" placeholder="Nhập ghi chú" style="height: 82px; width: 552px;" id=""
                        cols="30" rows="10"></textarea>
                </div>
                <div class="status" v-show="false">
                    <div class="label">Trạng thái</div>
                    <div class="statatus-check" style="display:flex ;">
                        <div class="radio-check">Sử dụng</div>
                        <div class="radio-check">Ngừng sử dụng</div>
                    </div>
                </div>
            </div>
            <div class="dialog__footer">
                <button @click="btnCloseOnClick" class="btn btn-cancel">Hủy</button>
                <button tabindex="10" class="btn btn-save-add">Lưu và thêm mới</button>
                <button tabindex="9" class="btn btn-save">Lưu</button>
            </div>
        </div>
    </div>
</template>
<script>
import BaseCheckBox from './BaseCheckBox.vue';
import BaseCombobox from './BaseCombobox.vue';
export default {
    components: { BaseCheckBox, BaseCombobox },
    data() {
        return {

        }
    },
    methods: {
        /**
         * Gửi yêu cầu đóng dialog tới Component cha EmulationPage
         * Author: NVDQuang (28/09/2022)
         */
        btnCloseOnClick() {
            this.$emit("closeButtonOnClick", false);
        },
    },
    mounted() {
        this.$refs.emulationName.focus();
    },
}
</script>
<style scoped>
.dialog {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100vh;
    /* background: #000; */
    background-color: rgba(204, 204, 204, 0.66);
    z-index: 2;
}

.dialog-content {
    position: absolute;
    /* height: 528px; */
    height: auto;
    width: 600px;
    background-color: rgb(255, 255, 255);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 4px;
}

.label {
    color: #707070;
    font-size: 14px;
    font-weight: 600;
}

.dialog__header {
    position: relative;
    padding: 24px 0 6px 24px;
    font-weight: 700;
    min-height: 24px;
}

.dialog__header__left {
    font-size: 20px;
}

.dialog__header__right {
    width: 72px;
    position: absolute;
    top: 23px;
    right: 16px;
    display: flex;
}

.btn-container {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* dialog body */
.dialog__body {
    padding: 24px 24px 0;
    display: flex;
    flex-direction: column;
}

.dialog__body__list-item {
    display: flex;
    height: 71px;
    margin: 16px 0;
}

.dialog__body__item__left {
    width: 266px;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-right: 10px;
}

.dialog__body__item__right {
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.input-emulation-name {
    margin-top: 8px;
    width: 100%;
    border: 1px solid #e0e0e0;
}

.input-emulation-code {
    margin-top: 8px;
    width: 100%;
    border: 1px solid #e0e0e0;
}

.check-box-container {
    display: flex;
    height: 100%;
    align-items: center;
}

.check-box-item__left {
    flex: 1;
    display: flex;
    align-items: center;
}

.check-box-item__right {
    flex: 1;
    display: flex;
}

.check-box-item {
    margin-left: 10px;
    margin-right: 18px;
}

textarea {
    border: 1px solid #e0e0e0;
    border-radius: 3.5px;
    padding: 6px 12px;
    resize: none;
    background: 0 0;
}

textarea:focus {
    outline: none;
    border: 1px solid #2979ff;

}

/* footer */
.dialog__footer {
    height: 60px !important;
    display: flex;
    justify-content: flex-end;
    padding: 12px 24px;
    border-top: 1px solid #e0e0e0;
}

.dialog__footer button {
    cursor: pointer;
}

.btn-save-add {
    margin: 0 12px;
    padding: 0 16px;
}
</style>