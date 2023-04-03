<template>
    <div class="Instagram">
        <a href="https://instagram.com/ayahuasca_med?igshid=ZDdkNTZiNTM=">
            <font-awesome-icon icon="fa-brands fa-instagram" class="Instagram__icon"/>
        </a>
    </div>
</template>
<script>
export default {
    name: "BtnInstagram"
}
</script>
<style lang="scss">
.Instagram{
    background: radial-gradient(circle farthest-corner at 35% 90%, #fec564, transparent 50%), radial-gradient(circle farthest-corner at 0 140%, #fec564, transparent 50%), radial-gradient(ellipse farthest-corner at 0 -25%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 20% -50%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 0, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 60% -20%, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 100%, #d9317a, transparent), linear-gradient(#6559ca, #bc318f 30%, #e33f5f 50%, #f77638 70%, #fec66d 100%);
    z-index: 10;
    width: 50px;
    height: 50px;
    padding: 2% 2% 2% 2.5%;
    border-radius: 50%;
    &__icon{
        color: white;
        width: 48px;
        height: 48px;
    }
}

</style>
