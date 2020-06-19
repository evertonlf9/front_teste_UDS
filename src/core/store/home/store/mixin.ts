import { mapGetters, mapActions } from 'vuex'
import AccountModule, { MODULE_NAME } from './index'

const AccountMixin = {
  namespaced: AccountModule.namespaced,
  computed: { ...mapGetters(MODULE_NAME, Object.keys(AccountModule.getters)) },
  methods: { ...mapActions(MODULE_NAME, Object.keys(AccountModule.actions)) }
}

export default AccountMixin
