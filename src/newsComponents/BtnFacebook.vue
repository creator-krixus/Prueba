<template>
    <div class="Facebook">
        <a href="https://www.facebook.com/profile.php?id=100090401385103&mibextid=ZbWKwL">
            <font-awesome-icon icon="fa-brands fa-facebook-f" class="Instagram__icon"/>
        </a>
    </div>
</template>
<script>
export default {
    name: "BtnFacebook"
}
</script>
<style lang="scss">
.Facebook{
    background:  #5258cf;
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