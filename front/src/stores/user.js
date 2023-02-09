import { defineStore } from 'pinia'

export const useUserStore = defineStore("user",{
    state: () => ({
        user: null,
    }),
    getters: {
        getUsers(state) {
            return state.users
        }
    },
    actions: {
        async fetchUsers() {
            try {
              const data = await axios.get('../api/server.js')

                this.users = data.data
              }
              catch (error) {
                alert(error)
                console.log(error)
            }
        }
    },
})