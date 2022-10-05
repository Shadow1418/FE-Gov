<template >
    <div class="content-container">
        <div class="content-page-name">Danh hiệu thi đua</div>
        <div class="toolbar">
            <div class="toolbar__left">
                <div class="toolbar__left__search" ref="toolbarSearch">
                    <div class="toolbar__left__search__icon icon-24"></div>
                    <input class="input-search " type="text" ref="keyWord" @focus="styleItemOnFocus('toolbarSearch')"
                        @blur="styleItemOnBlur('toolbarSearch')" placeholder="Nhập mã hoặc tên danh hiệu..." />
                </div>
                <div class="toolbar__left__filter">
                    <button class="icon-filter icon-24"></button>
                    <div @click="btnFilterOnClick" class="text">Bộ lọc</div>
                </div>
                <BaseFilterDialog @closeFilterOnClick="closeFilterOnClick" v-if="isShowFilterDialog" />
            </div>
            <div class="toolbar__right" style="height: 100% ;">
                <button @click="btnAddOnClick" class="btn btn-add-category icon-add">
                    Thêm danh hiệu
                </button>
                <div v-show="false" style="display:flex ; align-items: center ;">
                    <div>Đã chọn <b> 0{{totalSelected}}</b></div>
                    <div class="unchecked" style="margin-left:20px ; margin-right:19px ;">Bỏ chọn</div>
                    <div class=" btn btn-using">Sử dụng</div>
                    <div class="btn btn-stop-using">Ngừng sử dụng</div>
                    <div class="btn btn-delete">Xóa</div>

                </div>

            </div>
        </div>
        <div class="grid">
            <!-- <BaseTable ref="emulationTitleGrid" :idName="'EmulationTitleID'" :columns="columns"
                :data="emulationData" :selectedRows="selectedEmulationTitles"
                @selection-change="handleSelectionChange" :selection="true" :operation="true" /> -->
            <table border="0">
                <thead>
                    <th style="display:flex ; align-items: center; justify-content: center;" class="check-box-container text-align-left">
                        <BaseCheckBox :class="{'check-box-not-all' : true}" @click="checkBoxAllOnClick" ref="checkBoxAll" :isCheckBoxAll="isCheckBoxAll" />
                    </th>
                    <th class="text-align-left" style="width: 310px; min-width: 310px; max-width: 310px;">Tên danh hiệu
                        thi đua</th>
                    <th class="text-align-left" style="width: 160px; max-width: 160px;min-width: 160px;">Mã danh hiệu
                    </th>
                    <th class="text-align-left" style="width: 180px; max-width: 180px;min-width: 180px; padding: 0 0 0 16px;">Đối tượng khen
                        thưởng</th>
                    <th class="text-align-left" style="width: 200px; max-width: 200px;min-width: 200px;">Cấp khen thưởng
                    </th>
                    <th class="text-align-left" style="width: 200px; max-width: 200px;min-width: 200px;">Loại phong trào
                    </th>
                    <th class="text-align-left" style="width: 180px; max-width: 180px;min-width: 180px;">Trạng thái</th>
                </thead>
                <tbody>
                    <tr v-for="item in emulationData" :key="item.EmulationTitleID" >
                        <td class="check-box-container text-align-left">
                            <BaseCheckBox :isCheckBoxAll="isCheckBoxAll" />
                        </td>
                        <td class="text-align-left">{{item.EmulationTitleName}}</td>
                        <td class="text-align-left">{{item.EmulationTitleCode}}</td>
                        <td class="text-align-left">{{item.ApplyObject}}</td>
                        <td class="text-align-left">{{item.CommendationLevel}}</td>
                        <td class="text-align-left">{{item.MovementType}}</td>
                        <td class="text-align-left status">
                            <div class="status-container">
                                <div class="icon-active"></div>
                                <div class="status-name">{{item.IsActive}}</div>
                            </div>
                        </td>
                        <div class="option-container">
                            <div class="icon-container">
                                <div class="edit icon-24"></div>
                            </div>
                            <div class="icon-container option-more-container">
                                <div class="option-more icon-24"></div>
                                <div class="option-more-list" hidden>
                                    <div class="option-more-item">Sử dụng</div>
                                    <div class="option-more-item">Ngưng sử dụng</div>
                                    <div class="option-more-item">Xóa</div>
                                </div>
                            </div>

                        </div>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="live-chat">
            <div class="icon-live"></div>
            <div class="text-chat-live">Chat với nhân viên tư vấn</div>
        </div>

        <ThePagging />
        <BaseDialog v-if="isShowDialog" @closeButtonOnClick="closeButtonOnClick" />
    </div>
</template>
<script>
import BaseCheckBox from '../components/base/BaseCheckBox.vue';
import BaseFilterDialog from '@/components/base/BaseFilterDialog.vue';
import BaseDialog from '@/components/base/BaseDialog.vue';
import ThePagging from '@/components/layout/ThePagging.vue';
import BaseList from '@/script/base/baseList';
// import BaseTable from '@/components/base/BaseTable.vue';
export default {
    name: "TestPage",
    extends: BaseList,
    components: {
        BaseCheckBox, 
        BaseFilterDialog, BaseDialog, ThePagging, 
        // BaseTable
    },
    data() {
        return {
            isShowFilterDialog: false,
            isShowDialog: false,
            isCheckBoxAll: false,
            chooseArray: [],
            emulationData: [],
            totalSelected: 0,
            selectedEmulationTitles: [],    
            columns: [
                {
                    dataField: "EmulationTitleName",
                    title: "Tên danh hiệu thi đua",
                    caption: "Tên danh hiệu thi đua",
                    width: 310,
                },
                {
                    dataField: "EmulationTitleCode",
                    title: "Mã danh hiệu",
                    caption: "Mã danh hiệu",
                    width: 160,
                },
                {
                    dataField: "ApplyObject",
                    title: "Đối tượng khen thưởng",
                    caption: "Đối tượng khen thưởng",
                    width: 180,
                },
                {
                    dataField: "CommendationLevel",
                    title: "Cấp khen thưởng",
                    caption: "Cấp khen thưởng",
                    width: 200,
                },
                {
                    dataField: "MovementType",
                    title: "Loại phong trào",
                    caption: "Loại phong trào",
                    width: 200,
                },
                {
                    dataField: "Inactive",
                    title: "Trạng thái",
                    caption: "Trạng thái",
                    width: 180,
                },
            ]

        }
    },
    methods: {
        /**
         * Ẩn/hiện dialog
         */
        showDialog(isShow) {
            this.isShowDialog = isShow;
        },
        /**
         * Ẩn/hiện bộ lọc
         */
        showFilter(isShow) {
            this.isShowFilterDialog = isShow;
        },

        styleItemOnFocus(ref) {
            this.$refs[ref].classList.add("focus");
        },
        styleItemOnBlur(ref) {
            this.$refs[ref].classList.remove("focus");
        },
        /**
         * Đóng Dialog
         * @param {bool} val true/false 
         * Author: NVDQuang (28/09/2022)
         */
        closeButtonOnClick(isShowDialog) {
            this.isShowDialog = isShowDialog;
        },

        /**
         * Đóng Bộ lọc
         * @param {bool} val true/false 
         * Author: NVDQuang (28/09/2022)
         */
        closeFilterOnClick(isShowDialog) {
            this.isShowFilterDialog = isShowDialog;
        },

        /**
        * Click vào nút check box tất cả
        * Author : NVDQuang (27/09/2022)
        */
        checkBoxAllOnClick() {
            try {
                this.chooseArray = [];
                // if (!this.isCheckBoxAll) {
                //     for (let index = 0; index < this.teachers.length; index++) {
                //         this.chooseArray.push(this.teachers[index].TeacherID);
                //     }
                // }
                this.isCheckBoxAll = !this.isCheckBoxAll;
            } catch (error) {
                console.log(error);
            }
        },
        /**
        * Click vào nút Thêm danh hiệu
        * Author : NVDQuang (27/09/2022)
        */
        btnAddOnClick() {
            this.isShowDialog = true;
        },

        /**
        * Click vào nút Bộ lọc
        * Author : NVDQuang (27/09/2022)
        */
        btnFilterOnClick() {
            this.isShowFilterDialog = true;
        },

        checkboxAll() {
            if (this.chooseArray.length > 0) {
                this.$refs.checkBoxAll.classList.add("check-box-not-all");
            }
        }

    },
    created() {
        this.emulationData = this.getData();
        console.log(this.emulationData);
    },
}
</script>
<style >
.content-container {
    margin-right: 0;
    flex: 1;
    /* width: 100%; */
    height: calc(100vh - 56px);
    padding: 16px;

    /* padding-top: 16px;
        padding-left: 16px; */
    /* padding-right: 0px; */
    min-width: 500px;
    min-height: 500px;
    box-shadow: inset 0 1.5px 2px 0 rgb(0 0 0 / 10%);
    background-color: #e9ebee84;
}

.content-page-name {
    font-family: GoogleSans Bold;
    font-size: 20px;
    font-weight: 700;
    line-height: 35px;
    margin-bottom: 16px;
}


/* Toolbar */
.toolbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 0 16px;
}

/* left */
.toolbar__left {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
}

.toolbar__left__search {
    display: flex;
    outline: none;
    width: 265px;
    height: 37.6px;
    background-color: #ffffff;
    border: 1px solid #e0e0e0;
    border-radius: 3.5px;
    margin-right: 10px;
}

.toolbar__left__search:hover {
    border-color: #2979ff;
}

.toolbar__left__search__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 0 0 6px;
}

.input-search {
    border: none;
    outline: none;
    flex: 1;
    height: 100%;
    /* padding: 0 8px; */
    padding: 9px 12px;
    background: 0 0;
    min-height: 34px;
}

.toolbar__left__filter {
    height: 36px;
    width: 91px;
    background-color: #ffffff;
    border: 1px solid #e0e0e0;
    border-radius: 3.5px;
    display: flex;
    align-items: center;
}

.toolbar__left__filter:hover {
    background-color: #ebebeb;
    cursor: pointer;
}

.toolbar__left__filter .text {

    font-weight: 400;
}

/* right */
.toolbar__right {
    display: flex;
}

.btn-add-category {
    height: 37.6px;
}

.unchecked {
    color: #2979ff !important;
    cursor: pointer;
}

.btn-using {
    height: 37.6px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* margin: 0 12px; */
    padding: 0 16px !important;
    border: 1px solid #2979ff !important;
    color: #2979ff !important;
    background: #fff !important;
    border-radius: 4px;
}

.btn-using:hover {
    background: #ebebeb !important;
}

.btn-stop-using {
    height: 37.6px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 9px;
    font-weight: 400;
    color: #000 !important;
    border: 1px solid #ccc !important;
    padding: 0 16px !important;
    background-color: #FFFFFF !important;
}

.btn-delete {
    height: 37.6px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 400;
    color: #e61d1d !important;
    border: 1px solid #e61d1d !important;
    padding: 0 16px !important;
    background-color: #FFFFFF !important;
}

/* Table */

.status {
    display: flex;
}

.status-container {
    height: 100%;
    /* position: relative; */
    display: flex;
    align-items: center;
}

.status-name {
    margin-left: 8px;
    line-height: 40px;
}

tr {
    position: relative;
}

.option-container {
    display: flex;
    position: absolute;
    right: 20px;
    top: 3px;
}

.icon-container {
    height: 36px !important;
    width: 36px !important;
    border-radius: 50%;
    border: 1px solid #e0e0e0;
    background-color: #fff;
    margin-left: 4px;
    cursor: pointer;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}

.option-more-container {
    position: relative;
}

.option-more-list {
    background-color: #fff;
    background-clip: padding-box;
    border-radius: 4px;
    box-shadow: 0 3px 16px rgb(0 0 0 / 16%);
    margin: 0;
    padding: 8px 0;
    position: absolute;
    width: 260px;
    top: 34px;
    right: 12px;
    list-style: none;
    box-sizing: border-box;
    max-height: calc(100% - 50px);
}

.live-chat {
    position: fixed;
    bottom: 0;
    right: 16px;
    height: 16px;
    width: 200px;
    background-color: #ff6d00;
    border-radius: 8px 8px 0 0;
    cursor: pointer;
    text-align: center;
    display: flex;
    align-items: center;
}

.icon-live {
    height: 16px;
    width: 32px;
    background-image: url("../assets/Icons/icon-navigation-chevron_right.svg");
    background-position: 11px center;
    background-repeat: no-repeat;
}

.text-chat-live {
    color: #ffffff;
}
</style>