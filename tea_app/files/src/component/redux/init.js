export const cart_init_state = {
    cart: []
}

export const info_init_state = {
    info: {
        first_name: "",
        last_name: "",
        phone_number: "",
        county: "",
        township: "",
        road: "",
    }
}

export const action_add_item = "Add_Item"
export const action_delete_item = "Delete_Item"
export const action_clear_cart = "Clear_Cart"
export const action_increase_quantity_by_1 = "Increase_Quantity_By_1"
export const action_decrease_quantity_by_1 = "Decrease_Quantity_By_1"
export const action_set_quantity = "Set_Quantity"

export const action_set_info = "Set_Info"