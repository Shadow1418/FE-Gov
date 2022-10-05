<template >
    <div class="header-container">
        <div class="header__left">
            <div class="header__left__sibar ">
                <div class="icon-24 icon-sibar"></div>
            </div>
            <div class="header__left__logo icon-32"></div>
            <div class="header__left__App">MISA CeGov</div>
        </div>
        <div class="header__right">
            <div class="header-icon-container">
                <div class="header__right__notify icon-24 icon-notify"></div>
            </div>
            <div class="header-icon-container">
                <div class="header__right__icon-ask icon-24"></div>
            </div>
            <div class="account-container">
                <div class="header__acount__avatar icon-32"></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style >
.header-container {
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

/* HEADER LEFT */
.header__left {
    display: flex;
    justify-content: center;
    align-items: center;
}

.header__left__sibar {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 56px;
    width: 56px;
}

.header__left__logo {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 32px;
    width: 32px;
    /* border-radius: 8px; */
    background-image: url("../../assets/Icons/ic_cegoLogo_new.89475e3e.svg");
    margin-right: 12px;
}

.header__left__App{
    font-size: 20px;
    font-family: GoogleSans Bold;
    font-weight: 700;
}


/* HEADER RIGHT */

.header__right{
    display: flex;
    align-items: center;
}


.header-icon-container{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 56px;
    width: 42px;    
    margin-bottom: -2px;
}
.account-container{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 56px;
    width: 48px;
    padding-bottom: 4px;
}
</style>