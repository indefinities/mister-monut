<template>
    <div class="monut-nav">
        <v-app-bar flat>
            <v-app-bar-nav-icon @click.stop="isMenuOpen = !isMenuOpen" />
        </v-app-bar>
        
        <v-navigation-drawer
            v-model="isMenuOpen"
            >
            <v-list
                nav
                dense
            >
                <v-list-item-group v-model="group">
                <v-list-item v-for="(item, index) in items">
                    <span class="text-h5">{{ item.title }}</span>
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
    items: [
        {
            title:'Home'
        }, 
        {
            title:'Info'
        },
        {
            title:'Menu'
        },
        {
            title:'Contact Us'
        },
    ]
}),

watch: {
    group () {
    this.isMenuOpen = false
    },
},
}
</script>