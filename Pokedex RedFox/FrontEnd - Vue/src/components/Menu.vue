<template>
    <div id="menu">
        <nav class="navbar " role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a class="navbar-item" href="">
                    <img src="../assets/logoPoke.png" width="95" height="20">
                </a>
                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
                <div id="navbarBasicExample" class="navbar-menu">
                    <div class="navbar-start">
                        <a class="navbar-item">
                            Pokemons
                        </a>

                        <a class="navbar-item">
                            Itens
                        </a>

                        <a class="navbar-item">
                            Treinadores
                        </a>

                        <div class="navbar-item has-dropdown is-hoverable">
                            <a class="navbar-link">
                            Mais
                            </a>

                            <div class="navbar-dropdown">
                            <a class="navbar-item" href="https://www.facebook.com/igor.nascimento.50364?ref=bookmarks">
                                Facebook
                            </a>
                            <a class="navbar-item" href="https://www.linkedin.com/in/igor-nascimento-50230a188/">
                                Linkedin
                            </a>
                            <a class="navbar-item" href="https://github.com/Irgor/">
                                GitHub
                            </a>
                            </div>
                        </div>
                    </div>
                
                </div>
            </div>
        </nav>
    </div>
</template>


<script>
export default {
    name: "Menu"
}
</script>


<style lang="scss">

</style>