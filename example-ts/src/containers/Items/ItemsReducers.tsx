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
        }],
    config: [
        { key: 'title' },
        { key: 'price', type: 'number' },
        { key: 'category' },
        { key: 'imgSrc', title: 'IMAGE', type: 'image' }
    ]
};
export function itemsReducer(state = initState, action: any): any {
    switch (action.type) {
        case c.ADD_ITEM:
            //debugger;
            return { ...state, data: [...state.data, action.payload] };

        case c.DEL_ITEM:
            //debugger;
            return { ...state, data: state.data.filter(f => f.id != action.payload) };

        case c.FETCH_ITEM_SUCCESS:
            //debugger;
            return { ...state, data: action.payload };

        default:
            return state;
        //break;
    }
}