<template >
    <div class="menu-container"  :style="{ 'min-width' : widthMenu +'px'}  ">
        <div class="menu-item-container">
            <div class="menu-item">
                <div class="menu-item__icon icon-overview icon-24 "> </div>
                <div v-show="isActiveToggle" class="menu-item__text">Tổng quan</div>
            </div>
        </div>
        <div class="menu-item-container">
            <div class="menu-item">
                <div class="menu-item__icon icon-emulation icon-24"></div>
                <div v-show="isActiveToggle" class="menu-item__text">Thi đua</div>
                <div v-show="isActiveToggle" class="icon-arrow-right icon-24"> </div>
            </div>
        </div>
        <div class="menu-item-container">
            <div class="menu-item">
                <div class="menu-item__icon icon-reward icon-24 "> </div>
                <div v-show="isActiveToggle" class="menu-item__text">Khen thưởng</div>
                <div v-show="isActiveToggle" class="icon-arrow-right icon-24"> </div>
            </div>
        </div>
        <div class="menu-item-container">
            <div class="menu-item">
                <div class="menu-item__icon icon-decision icon-24 "></div>
                <div v-show="isActiveToggle" class="menu-item__text">Quyết định</div>
                <div v-show="isActiveToggle" class="icon-arrow-right icon-24"> </div>
            </div>
        </div>
        <div class="menu-item-container">
            <div class="menu-item">
                <div class="menu-item__icon icon-profile icon-24 "></div>
                <div v-show="isActiveToggle" class="menu-item__text">Hồ sơ</div>
                <div v-show="isActiveToggle" class="icon-arrow-right icon-24"> </div>
            </div>
        </div>
        <div class="menu-item-container">
            <div class="menu-item">
                <div class="menu-item__icon icon-search icon-24"></div>
                <div v-show="isActiveToggle" class="menu-item__text">Tra cứu</div>
                <div v-show="isActiveToggle" class="icon-arrow-right icon-24"> </div>
            </div>
        </div>
        <div class="menu-item-container">
            <div class="menu-item">
                <div class="menu-item__icon icon-report icon-24"></div>
                <div v-show="isActiveToggle" class="menu-item__text">Báo cáo</div>
            </div>
        </div>
        <hr />

        <router-link class="menu-item-container" to="/emulation">
            <div class="menu-item">
                <div class="menu-item__icon icon-category icon-24"></div>
                <div v-show="isActiveToggle" class="menu-item__text">Danh mục</div>
                <div v-show="isActiveToggle" class="icon-arrow-right icon-24"> </div>
            </div>
        </router-link>
        <router-link class="menu-item-container" to="/setting">
            <div class="menu-item">
                <div class="menu-item__icon icon-setting icon-24"></div>
                <div v-show="isActiveToggle" class="menu-item__text">Thiết lập</div>
                <div v-show="isActiveToggle" class="icon-arrow-right icon-24"> </div>
            </div>
        </router-link>
        <hr />

        <div class="menu-item-container">
            <div class="menu-item">
                <div class="menu-item__icon icon-guide icon-24"></div>
                <div v-show="isActiveToggle" class="menu-item__text">Hướng dẫn</div>
                <div v-show="isActiveToggle" class="icon-arrow-right icon-24"> </div>
            </div>
        </div>
        <div class="toggle" @click="btnToggleOnClick" :class="{'style-toggle-active' :!isActiveToggle}">
            <div class="toggle__icon icon-toggle icon-24" :class="{'toogle__icon--active' : isActiveToggle}"></div>
            <div class="toggle__text" v-show="isActiveToggle">Thu gọn</div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            isActiveToggle: true,
            widthMenu: 204,
        }
    },
    methods: {
        btnToggleOnClick() {
            this.isActiveToggle = !this.isActiveToggle;
            if (this.isActiveToggle) {
                this.widthMenu = 204;
            } else {
                this.widthMenu = 56;
            }
        }
    },
}
</script>
<style scoped>
.menu-container {
    position: relative;
    min-width: 204px;
    /* width: 204px; */
    height: calc(100vh - 56px);
    display: flex;
    flex-direction: column;
    box-shadow: inset 0 1.5px 2px 0 rgb(0 0 0 / 10%);
    transition:all .2s;
}

.menu-item-container:first-child {
    margin-top: 8px;
}

.menu-item-container {
    position: relative;
    height: 41.6px;
    width: 100%;
    /* margin: 8px 0px; */
    /* margin-left: 8px; */
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.menu-item-container:hover .menu-item__text {
    color: #ff5722;
}

.menu-item-container:hover .icon-arrow-right {
    background-image: url("../../assets/Icons/ic_arrow_color_right_active.svg");
}

.menu-item {
    position: relative;
    height: 100%;
    width: 92%;
    border-radius: 8px;
    display: flex;
    /* justify-content: center; */
    align-items: center;
    cursor: pointer;
    padding: 8px 8px 8px 12px;
    text-decoration: none;
    color: #000000;
}

.menu-item:hover {
    background: #eff7ff;
    border-radius: 8px;
    cursor: pointer;
}

.menu-item__text {
    margin-left: 16px;
    text-decoration: none;
    font-weight: 500;
}

.toggle {
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 18px;
    margin: 0 8px;
    width: 92%;
    border-radius: 8px;
    height: 40px;
    line-height: 40px;
    background: #edf1f5;
    cursor: pointer;
}

.toggle .toggle__icon {
    margin-left: 16px;
    transform: rotate(180deg);
    transition-duration: .4s;
}

.toogle__icon--active {
    transform: rotate(0deg) !important;
    transition-duration: .4s;
}

.menu-item__icon {
    height: 24px;
    width: 24px;
    margin-top: -1px;
}

hr {
    width: calc(100% - 28px);
    margin: 0px auto;
    border-top: 1px solid #ccc;
    border-left: unset;
    margin-bottom: 8px;
}


.router-link-active {
    text-decoration: none;
    width: 92%;
    border-radius: 8px;
    color: #ff5722;
    background-color: #fbe9e7;
    font-weight: 500;
    transition: 0.2s all;
    margin-left: 8px;
}

.menu-container .menu-item-container.router-link-active .menu-item {
    position: relative;
    height: 100%;
    width: 100%;
    background-color: #fbe9e7;
    border-radius: 8px;
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 8px 8px 8px 12px;
    /* pointer-events: none; */
}

.menu-item-container.router-link-active .menu-item__text {
    color: #ff5722;
    font-weight: 500;
    text-decoration: none;
}


.menu-item-container.router-link-active .icon-arrow-right {
    background-image: url("../../assets/Icons/ic_arrow_color_right_active.svg");
}
a{
    text-decoration: none !important;
}

.style-toggle-active{
    width: 42px;
}
</style>