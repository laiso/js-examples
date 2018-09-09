<template>
    <div class="title">
        <h2>Home</h2>

        <h3>Accounts</h3>
        <ul>
            <li v-for="account in accounts">
                {{account}}
                <v-btn primary @click="getBalance(account)">Get</v-btn>
            </li>
        </ul>

    </div>
</template>

<script>
  import Web3 from 'web3'

  const web3 = new Web3("ws://localhost:9545")

  export default {
    async asyncData({store, params}) {
      const accounts = await web3.eth.getAccounts()

      const address = accounts[0]

      // const balance = await web3.eth.getBalance(address)

      // const balanceResponse = contract.methods.balance(address).call.request({from: accounts[1]})
      //
      // console.log(balanceResponse)

      return {accounts}
    },
    methods: {
      getBalance: async (address) => {
        const result = await web3.eth.getBalance(address)
        alert(result)
      }
    }
  }
</script>
