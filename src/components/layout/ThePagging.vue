<template >
    <div class="pagging-container">
        <div class="pagging__left">Tổng số: <b> 148 </b> bản ghi</div>
        <div class="pagging__right">
            <span>Số bản ghi/trang</span>
            <div class="pagging__right__combobox-container">
                <div class="page-size">{{pageSize}}</div>
                <div class="icon-down-container" > 
                    <div class="icon-down icon-24"  @click="isShowListChoosePageSize = ! isShowListChoosePageSize"></div>
                </div>
                <div class="list-page-size" v-show="isShowListChoosePageSize">
                    <div class="page-size-item btn-page-check" ref="pageSize10"  @click="choosePageSize('pageSize10')">10</div>
                    <div class="page-size-item btn-page-check"  @click="choosePageSize">20</div>
                    <div class="page-size-item btn-page-check"  @click="choosePageSize">50</div>
                    <div class="page-size-item page-size-item-active btn-page-check"  @click="choosePageSize">100</div>
                </div>
            </div>
            <div style="margin-right: 25px ;"> <b><span>1 - 12 </span> </b> bản ghi</div>
            <div class="btn-container">
                <div class="btn-pre icon-24"></div>
            </div>
            <div class="btn-container">
                <div class="btn-next icon-24"></div>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    components: { },
    data() {
        return {
            isShowListChoosePageSize : false,
            pageSize: 50,
        }
    },
    methods: {
        choosePageSize(pageSize){
            this.$refs[`${pageSize}`].classList.add('page-size-item-active');
            this.$refs[`${pageSize}`].sibling().classList.add('page-size-item-active');
            // this.$refs[`${pageSize}`].classList.add('.page-size-item-active');
            this.isShowListChoosePageSize = false ;
        }
    },
}
</script>
<style scoped>
.pagging-container {
    height: 40px;
    width: 100%;
    padding: 0 16px;
    border-bottom-left-radius: 3.5px;
    border-bottom-right-radius: 3.5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #ffffff;
}
.pagging__right{
    display: flex;
    align-items: center;
}

.pagging__right__combobox-container{
    position: relative;
    height: 35px;
    width: 85px;
    display: flex;
    border-radius: 3.5px;
    border: 1px solid #e0e0e0;
    margin: 4px 16px;
}
.pagging__right__combobox-container:hover{
    border-color: #2979ff;
}

.page-size{
    height: 100%;
    width: 49px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.icon-down-container{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}


.list-page-size{
    width: 100%;
    padding: 8px;
    background-color: #ffffff;
    position: absolute;
    bottom: 24px;
    display: flex;
    flex-direction: column;
    border-radius: 3.5px;
}

.page-size-item{
    width: 100%;
    padding: 0 8px;
    line-height: 36px;
    display: flex;
}
.page-size-item:hover{
    background: #e8f5f7;
    border-radius: 3.5px;
}
.page-size-item-active{  
    background-image: url("../../assets/Icons/page-size-active.PNG");

}
.list-page-size .page-size-item.page-size-item-active{
    background-color: #e8f5f7;
    pointer-events: none;
}
.btn-container{
    height: 36px;
    width: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.btn-container:hover{
    cursor: pointer;
    background-color: #f3f3f3;
    border-radius: 3.5px;
}
</style>