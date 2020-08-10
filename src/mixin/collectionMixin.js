import {Collection, ItemGroup, Item} from 'postman-collection'

export default {
    methods: {
        isItemGroup(obj) {
            return ItemGroup.isItemGroup(obj);
        },
        isItem(obj) {
            return Item.isItem(obj);
        }
    }
}
