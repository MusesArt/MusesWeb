export default {

    data() {
        return {
            cartIds: [],
            totalPrice: 0,
        }
    },

    setId(ids) {
        this.data.cartIds = ids
    },

    setPrice(price) {
        this.data.totalPrice = price
    }
}