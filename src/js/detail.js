export default {

    data() {
        return {
            description: "",
            images_assess: [],
        }
    },

    set(description) {
        this.data.description = description;
    },

    setComment(comment) {
        this.images_assess = comment;
    }
}