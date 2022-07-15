<template>
    <div class="monut-nav">
        <v-app-bar flat>
            <v-app-bar-nav-icon variant="text" @click.stop="isMenuOpen = !isMenuOpen" />
        </v-app-bar>
        
        <v-navigation-drawer
            v-model="isMenuOpen"
            >
            <v-list
                nav
                dense
            >
                <v-list-item-group v-model="group">
                <v-list-item>
                    <v-list-item-title>Foo</v-list-item-title>
                </v-list-item>

                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
export default {
data: () => ({
    isMenuOpen: false,
    group: null,
}),

watch: {
    group () {
    this.isMenuOpen = false
    },
},
}
</script>