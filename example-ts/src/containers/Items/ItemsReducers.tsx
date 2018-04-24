import * as c from "../../utils/contrans";
const initState = {
    data: [
        {
            "title": "pumpkin",
            "price": 15,
            "imgSrc": "https://api.emitter.pl/assets/pumpkin.jpg",
            "category": "food",
            "id": "5ade4f00866e000b98eb20f1"
        },
        {
            "title": "potatoes",
            "price": 5,
            "imgSrc": "https://api.emitter.pl/assets/potatoes.jpg",
            "category": "food",
            "id": "5ade4f00866e000b98eb20f0"
        }]
};
export function itemsReducer(state = initState, action: any): any {
    switch (action.type) {
        case c.ADD_ITEM:
            //debugger;
            return { ...state, data: [...state.data, action.payload] };
        //break;
        case c.DEL_ITEM:
            //debugger;
            return { ...state, data: state.data.filter(f => f.id != action.payload) };
        //break;

        default:
            return state;
        //break;
    }
}