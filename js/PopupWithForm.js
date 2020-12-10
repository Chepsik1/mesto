import {
    Popup
} from "./Popup.js";

export class PopupWithForm extends Popup {
    constructor(selector, handleSubmit ) {
        super(selector);
        this._handleSubmit = handleSubmit;
        this.form = this._selector.querySelector('form');
       

    }

    _getInputValues() {
        this._inputList = this._selector.querySelectorAll('input');
        this._inputValues = {};
        this._inputList.forEach(item => {
        this._inputValues[item.name] = item.value;
        });
    
        return this._inputValues;

    }

    _submitHandler(evt) {
        evt.preventDefault();
        this._handleSubmit(this._getInputValues());
        this.close();
    }

    setEventListeners() {
        this._selector.addEventListener('submit',(evt)=> {
            return this._submitHandler(evt);
        })
       
        super.setEventListeners();
     
    }

    close() {
        super.close();
        this.form.reset();
    }
}














// import Popup from './Popup.js';

// export default class PopupWithForm extends Popup {
//     constructor(popUpSelector, handleSubmit) {
//         super(popUpSelector)
//         this._handleSubmit = handleSubmit
//         this._popUpSelector = popUpSelector
//         this.form = this._popup.querySelector('#form')

//     }

//     _getInputValues() {
//         this._inputList = this._popup.querySelectorAll('.input')
//         this._inputValues = {}
//         this._inputList.forEach( item => {
//             this._inputValues[item.name] = item.value
//         })
//         return this._inputValues
//     }

//     _submitHandler (evt) {
//         evt.preventDefault();
//         this._handleSubmit(this._getInputValues());
//         this.close();
//     }

//     setEventListeners() {
//         this._popup.addEventListener('submit', this._submitHandler.bind(this))
//         super.setEventListeners()

//     }

//     close() {
//         super.close()
//         this.form.reset()
//     }
// }