# React-Redux

### 為什麼Redux

我在自製React i18n(多語言支援)的時候，想有一個Global variable儲存用家的language preference，稱它為lang，但又不想一層層的通過props傳下去，同時又要pass setter讓children可以改它的值，因為有時parent不需要lang，但children又需要lang，這樣的話parent 有lang這個props是無意義且混淆視聽，又要浪費功夫手動pass props。後來我在某檔直接儲存lang這個值，然後弄一個decorator function 去把lang這個值塞給有需要的component

```js
//注意這是失敗品

//i18n.js
let lang = 'en'

//decorator function 接受一個component，回傳一個整容後的component
export const withLang = WrapComponent => (
    ()=><WrapComponent lang={lang} />
)

//foo.js
import {Component} = 'react'
import {withLang} = './i18n.js'

@withLang
const Foo = ({lang}) => (<p>{lang}</p>)
//等同於
//  const Foo = withLang(({lang}) => (<p>{lang}</p>))
                         
export default Foo
```



後來我便發現即便lang的值改變了，也觸發不了那些component(例如Foo)重新渲染。經過一輪Google，我發現Redux就是我所需要的



### 什麼是Redux

Redux 是一種容器，由actions, reducer 和 store組成，整件事有點functional。注意Redux是獨立的哦，其他framework也可以使用，只是跟React一起用非常OP。

(話說當我見到這三個字時，讓我想起離散數學的group(組合)，每個group都由一個group action 定義，當發動這個group action的時候，就會將這個group的state reduce to a new state)



#### 什麼是action

action是一個描述動作的object，但最好用一個function 裝住。而這個action可以怎樣發動，後面再講

```js
const setLang = newLang => ({
    type:'SetLang',
    newLang
})
```



#### 什麼是reducer

如果你知道Array.prototype.reduce，reducer在做相同的事。Reducer是一個function，它接受store的current state和一個作用於store的action(其實是上面action的返回值)，然後根據action返回一個新的state給store。如果那個所謂的action不知所謂，那就什麼都不要做。

```js
const reducer = (oldState, action) => {
    switch(action.type){
        case 'SetLang':
            return {...oldState, action.newLang}
        default:
            return oldState
    }
}
```

由於預設的initial state是`空`，我們可以用default parameter的方法設自訂initial state

```js
const initialState = {lang: 'en'}	//預設英文
const reducer = (oldState = initialState, action) => {
    switch(action.type){
        case 'SetLang':
            return {...oldState, action.newLang}
        default:
            return oldState
    }
}
```



#### 什麼是store

顧名思義，拿來儲存資料用的，是由上reducer定義出來的。如果要它的資料，可以用`getState()`，用`subscribe`可以訂閱更變，每次轉state都會有所動作。如果你要改變它的值，就要在store上發動action`store.dispatch(action)`。

```js
//store.js
import { createStore } from 'redux'

//...上面的code

const store = createStore(reducer)

store.subscribe(()=>{console.log(store.getState())})
const valueInStore = store.getState()	//{lang:'en'}

store.dispatch(setLang('zh'))	//setLang 是上面定義過的action
const newValueInStore = store.getState()	//{lang:'zh'}

store.dispatch({type:'SetLang',newLang:'js'})	//action說白了不過是object，所以直丟個object給dispatc是沒有問題的 /_>\
const lastestValueInStore = store.getState()	//{lang:'js'}

export {store,setLang}
```

### React 與 Redux

如何在react component 裡面拿store的state和發動action呢? 我們首先需要Provider 和connect

Provider是提供redux服務和store

```js
import {Provider} from 'react-redux'
import {store} from './store' //假設剛才的都在store.js
export default (props)=>(
    <Provider store={store}>
    	{/*裡面的都可以用redux 我們剛定義的容器*/}
    </Provider>
)
```

connect是將store入面的資料和action連接到component 的props

```js
import {connect} from 'react-redux'
import {Component} from 'react'
import {setLang} from './store'

class Picker extends Component {
  onChange = ({ target: { value } }) => {
    this.props.setLang(value)
  }

  render() {
    const { lang } = this.props
    const langList = ['en', 'zh', 'js']
    return (
      <div>
        {lang}
        <select onChange={this.onChange}>
          {langList.map(lang =>
            <option value={lang}>
              {lang}
            </option>)
          }
        </select>
      </div>
    )
  }
}

//左面在store中拿出lang，右面在props新增一項是lang
const mapStateToProps = ({ lang }) => ({ lang })

//dispatch是store的dispatch function，props多一項是setLang，會發動setLang action的function
const mapDispatchToProps = (dispatch, ownProps) => ({
    setLang: (...args) => dispatch(setLang(...args))
})

export default connect(mapStateToProps, mapDispatchToProps)(Picker)
```

